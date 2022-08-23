import { SignInButton } from "../../components/SignInButton";

const UnauthenticatedScreen = () => {
  return (
    <div id="unauthenticated-screen">
      <lottie-player
        src="https://assets7.lottiefiles.com/packages/lf20_zavtox71.json"
        background="transparent"
        speed="1"
        style={{ width: "350px", height: "350px" }}
        loop
        autoplay
      ></lottie-player>
      <SignInButton />
    </div>
  );
};

export { UnauthenticatedScreen };
