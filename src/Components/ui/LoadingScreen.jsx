import { SiOrigin } from "react-icons/si";
import { SpinnerDotted } from "spinners-react";

function LoadingScreen({ splashScreen }) {
  return (
    <div
      className={`h-[100vh] w-full bg-black/60 backdrop-blur-md fixed top-0 left-0 z-10 gap-y-10 ${
        splashScreen ? "flex flex-col justify-center items-center" : "hidden"
      }`}
    >
      <div className="text-white flex items-center">
        <SiOrigin className="text-[4rem] rotate-45" />
        <h3 className="text-[2.2rem] font-medium">rigin</h3>
      </div>

      <h3 className="text-white text-[1.2rem]">Processing Please wait !</h3>

      <SpinnerDotted
        size={42}
        thickness={180}
        speed={106}
        color="rgba(125, 57, 172, 1)"
      />
    </div>
  );
}

export default LoadingScreen;
