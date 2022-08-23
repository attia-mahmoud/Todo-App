import React, { useContext, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Task } from "../Task";
import { UserContext } from "../App.js";
import { filterRecords, handleDelete, handleClick } from "../../helpers/utils";

const TaskList = ({ records, setRecords, filter }) => {
  const { user } = useContext(UserContext);

  const [tasks, updateTasks] = useState([]);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateTasks(items);
  }

  React.useEffect(() => {
    updateTasks(records);
  }, [records]);

  return (
    <div id="tasks-container">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {filterRecords(tasks, filter)?.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <Task
                        task={task}
                        handleClick={() => handleClick(user, setRecords, task)}
                        handleDelete={() =>
                          handleDelete(user, records, setRecords, task)
                        }
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div id="tasks-footer">
        <p>{`${filterRecords(records, "ACTIVE")?.length} items left`}</p>
        <p onClick={() => handleDelete(user, records, setRecords)}>
          Clear Completed
        </p>
      </div>
    </div>
  );
};
export { TaskList };
