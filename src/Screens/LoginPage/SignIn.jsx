import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { SiOrigin } from "react-icons/si";
import VortexButton from "../../Components/VortexButton";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLogoXbox } from "react-icons/io";
import { FaSteam } from "react-icons/fa";
import HashLoader from "react-spinners/HashLoader";
import AuthenticationSlider from "../../Components/AuthenticationSlider";

export default function SignIn({ heading }) {
  const navigate = useNavigate();
  const [usernameplaceholder, setUsernamePlaceHolder] = useState(true);
  const [passwordPlaceholder, setPasswordPlaceHolder] = useState(true);
  const [emailPlaceholder, setemailPlaceHolder] = useState(true);
  const [confirmPassPlaceholder, setConfirmPassPlaceholder] = useState(true);
  const [splashScreen, setSplashScreen] = useState(false);
  const [loading, setLoading] = useState(false);
  

  const handlerSignUp = (response) => {
    setSplashScreen(response);
    setLoading(true);

    setTimeout(() => {
      setSplashScreen(false);
      setLoading(false);
    }, 9000);
  };

  const handleSignIn = () => {
    navigate("/Store");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-purple-800 ">
      <div
        className={`min-h-screen w-full bg-custom-black-80 gap-y-10 absolute z-10 ${
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
          loading={loading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>

      <nav className="flex justify-center items-center py-7 px-10">
        <div className="text-white flex items-center hover:text-[#c945ce] ease-in-out duration-150 cursor-pointer">
          <SiOrigin className="text-[2rem] sm:text-[3rem] rotate-45" />
          <h3 className="text-[1.4rem] sm:text-[1.7rem] font-medium">rigin</h3>
        </div>
      </nav>
      <div className="flex justify-center items-center mt-7 w-full">

        <div className="hidden lg:block" >
         <AuthenticationSlider/>
        </div>

        <div className="text-white bg-white/10 backdrop-blur-md px-4 mx-3 md:mx-0 md:px-10 py-[1.39rem] rounded-lg lg:rounded-r-lg w-[27rem] h-[33rem] overflow-hidden">
          <h2 className="text-[1.4rem] text-center md:text-left md:text-[1.6rem] font-bold">
            {heading}
          </h2>

          {heading === "Sign in to your Account" ? (
            <p className="text-[0.8rem] py-2 text-center md:text-left">
              If you don’t have an account{" "}
              <Link
                to="/Register"
                className="text-purple-400 hover:text-purple-500 hover:underline"
              >
                Register{" "}
              </Link>
              Now
            </p>
          ) : (
            <p className="text-[0.8rem] py-2 text-center md:text-left">
              Already have an Account{" "}
              <Link
                to="/SignIn"
                className="text-purple-400 hover:text-purple-500 hover:underline"
              >
                Sign In
              </Link>
            </p>
          )}

          {/* conditional rendering of sign in and registration form */}

          {heading !== "Sign in to your Account" ? (
            <div className="py-12 space-y-10 ">
              <input
                type="text"
                name="Username"
                className="border-b text-xs sm:text-sm bg-transparent w-full focus:outline-none"
                placeholder={usernameplaceholder ? "Username" : ""}
                onFocus={() => setUsernamePlaceHolder(false)}
                onBlur={(e) => {
                  if (e.target.value === "") {
                    setUsernamePlaceHolder(true);
                  }
                }}
              />

              <input
                type="email"
                name="email"
                className="border-b text-xs sm:text-sm bg-transparent w-full focus:outline-none"
                placeholder={emailPlaceholder ? "Email Address" : " "}
                onFocus={() => setemailPlaceHolder(false)}
                onBlur={(e) => {
                  if (e.target.value === "") {
                    setemailPlaceHolder(true);
                  }
                }}
              />

              <input
                type="password"
                name="password"
                className="border-b text-xs sm:text-sm bg-transparent w-full focus:outline-none"
                placeholder={passwordPlaceholder ? "Password" : ""}
                onFocus={() => setPasswordPlaceHolder(false)}
                onBlur={(e) => {
                  if (e.target.value === "") {
                    setPasswordPlaceHolder(true);
                  }
                }}
              />

              <input
                type="password"
                name="confirmPassword"
                className="border-b text-xs sm:text-sm bg-transparent w-full focus:outline-none"
                placeholder={confirmPassPlaceholder ? "Confirm Password" : ""}
                onFocus={() => setConfirmPassPlaceholder(false)}
                onBlur={(e) => {
                  if (e.target.value === "") {
                    setConfirmPassPlaceholder(true);
                  }
                }}
              />
              <div className="flex gap-x-3 items-center">
                <input
                  type="checkbox"
                  name="Terms and Servoce"
                  className="w-3 h-3"
                />
                <label htmlFor="rememberMe" className="text-xs">
                  I Accept the{" "}
                  <a
                    href="/"
                    className="text-purple-400 hover:text-purple-500 hover:underline"
                    z
                  >
                    Terms and Conditions{" "}
                  </a>
                  ,
                  <a
                    href="/"
                    className="text-purple-400 hover:text-purple-500 hover:underline"
                  >
                    Cookie Policy{" "}
                  </a>{" "}
                  and{" "}
                  <a
                    href="/"
                    className="text-purple-400 hover:text-purple-500 hover:underline"
                  >
                    Privacy Policy{" "}
                  </a>
                </label>
              </div>

              <VortexButton
                label="Register"
                type="varient"
                width="w-full"
                click={() => handlerSignUp(true)}
              />
            </div>
          ) : (
            // Sign In form

            <div className="py-10 space-y-10">
              <input
                type="text"
                name="Username"
                className="border-b text-xs sm:text-sm bg-transparent w-full focus:outline-none"
                placeholder={usernameplaceholder ? "Username" : ""}
                onFocus={() => setUsernamePlaceHolder(false)}
                onBlur={(e) => {
                  if (e.target.value === "") {
                    setUsernamePlaceHolder(true);
                  }
                }}
              />
              <input
                type="password"
                name="password"
                className="border-b text-xs sm:text-sm bg-transparent w-full focus:outline-none"
                placeholder={passwordPlaceholder ? "Password" : ""}
                onFocus={() => setPasswordPlaceHolder(false)}
                onBlur={(e) => {
                  if (e.target.value === "") {
                    setPasswordPlaceHolder(true);
                  }
                }}
              />

              <div className="flex justify-between text-xs">
                <div className="flex gap-x-2 items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    className="w-3 h-3"
                  />
                  <label htmlFor="rememberMe">Remember Me</label>
                </div>
                <a
                  href="/"
                  className="text-purple-400 hover:text-purple-500 hover:underline"
                >
                  Forgot Password ?
                </a>
              </div>

              <VortexButton
                label="Sign In"
                type="varient"
                width="w-full"
                click={handleSignIn}
              />

              <div className="flex items-center gap-x-5 pt-10">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="text-gray-400">OR</span>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>

              <ul className="flex justify-between sm:justify-evenly text-[1.5rem]">
                <li className="rounded-full p-2 bg-[#e6e6e6] cursor-pointer hover:bg-white">
                  <FaApple className="text-black" />
                </li>
                <li className="rounded-full p-2 bg-[#e6e6e6] cursor-pointer  hover:bg-white">
                  <FaFacebook className="text-blue-500" />
                </li>
                <li className="rounded-full p-2 bg-[#e6e6e6] cursor-pointer  hover:bg-white">
                  {" "}
                  <FcGoogle />
                </li>
                <li className="rounded-full p-2 bg-[#e6e6e6] cursor-pointer  hover:bg-white">
                  <IoLogoXbox className="text-green-500" />
                </li>
                <li className="rounded-full p-2 bg-[#e6e6e6] cursor-pointer  hover:bg-white">
                  <FaSteam className="text-blue-900" />
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
