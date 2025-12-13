import { SiOrigin } from "react-icons/si";
import HashLoader from "react-spinners/HashLoader";

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

      <HashLoader
        color={"#7F2EE9"}
        loading={splashScreen}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default LoadingScreen;
