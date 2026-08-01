import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { SiOrigin } from "react-icons/si";
import { FaFacebook, FaApple, FaSteam } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLogoXbox } from "react-icons/io";
import LoadingScreen from "../Components/ui/LoadingScreen";
import AuthenticationSlider from "../Components/Sliders/AuthenticationSlider";
import { FloatingInput } from "../Components/custom/floatingInput";
import { SocialBtn } from "../Components/custom/socialButton";
import { BackgroundOrbs } from "../Components/ui/BackgroundOrbs";

export default function SignIn({ heading }) {
  const navigate = useNavigate();
  const isSignIn = heading === "Sign in to your Account";

  const [splashScreen, setSplashScreen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [remember, setRemember] = useState(false);
  const [agree, setAgree] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignIn) {
      navigate("/store");
    } else {
      setSplashScreen(true);
      setTimeout(() => setSplashScreen(false), 3000);
    }
  };

  return (
    <>
      <LoadingScreen splashScreen={splashScreen} />

      <div className="min-h-screen flex flex-col items-center justify-center bg-[#080810] relative overflow-hidden font-[Inter,sans-serif] px-4 py-8">
        <BackgroundOrbs />

        {/* Logo */}
        <nav className="relative z-10 flex items-center justify-center ">
          <Link
            to="/"
            className="flex items-center gap-[0.3rem] text-white no-underline transition-colors duration-200 hover:text-[#c026d3]"
          >
            <SiOrigin className="text-[2.2rem] rotate-45 drop-shadow-[0_0_14px_rgba(192,38,211,0.75)]" />
            <span className="text-[1.65rem] font-extrabold tracking-[-0.03em] bg-gradient-to-br from-white to-[#c084fc] bg-clip-text text-transparent">
              rigin
            </span>
          </Link>
        </nav>

        {/* Card */}
        <div
          className={`relative z-10 flex items-stretch rounded-[1.5rem] overflow-hidden shadow-[0_0_0_1px_rgba(139,92,246,0.2),0_32px_80px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.06)] opacity-0 translate-y-[28px] transition-all duration-[0.55s] ease-out ${mounted ? "opacity-100 translate-y-0" : ""} lg:h-[33rem]`}
        >
          {/* Game slider panel */}
          <div className="hidden lg:block w-[26rem] relative overflow-hidden">
            <AuthenticationSlider />
            <div className="absolute inset-0 z-2 bg-gradient-to-r from-transparent to-[rgba(8,8,16,0.5)]" />
            <div className="absolute bottom-6 left-6 z-3 bg-black/60 border border-[rgba(139,92,246,0.35)] backdrop-blur-[10px] rounded-[0.75rem] px-4 py-[0.6rem] text-[#e9d5ff] text-[0.7rem] font-semibold tracking-[0.07em] uppercase">
              🎮 &nbsp;Your gaming universe awaits
            </div>
          </div>

          {/* Form panel */}
          <div
            className={`bg-[rgba(10,8,22,0.85)] backdrop-blur-[28px] -webkit-backdrop-blur-[28px] w-[26rem] max-w-[95vw] px-5 py-8 sm:px-[2.6rem] sm:py-[2.2rem] ${!isSignIn ? "register" : "signin"}`}
          >
            <h1 className="text-[1.65rem] font-extrabold leading-tight mb-[0.35rem] bg-gradient-to-br from-[#893bfe] via-[#b268fb] to-[#9012df] bg-clip-text text-transparent">
              {isSignIn ? "Welcome back" : "Join Origin"}
            </h1>
            <p
              className={`text-[0.78rem] text-[#94a3b8] ${!isSignIn ? "mb-[0.9rem]" : "mb-[1.4rem]"}`}
            >
              {isSignIn ? (
                <>
                  Don&apos;t have an account?{" "}
                  <Link
                    to="/register"
                    className="text-[#a78bfa] no-underline font-semibold transition-colors duration-200 hover:text-[#c084fc] hover:underline"
                  >
                    Create one free
                  </Link>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <Link
                    to="/sign-in"
                    className="text-[#a78bfa] no-underline font-semibold transition-colors duration-200 hover:text-[#c084fc] hover:underline"
                  >
                    Sign in
                  </Link>
                </>
              )}
            </p>

            <form
              onSubmit={handleSubmit}
              className={
                !isSignIn ? "min-h-fit flex flex-col gap-y-2 mt-7" : ""
              }
            >
              {/* Registration-only: username + email */}
              {!isSignIn && (
                <FloatingInput
                  id="reg-username"
                  type="text"
                  label="Username"
                  icon={
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  }
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  isRegister={true}
                />
              )}

              {!isSignIn && (
                <FloatingInput
                  id="reg-email"
                  type="email"
                  label="Email Address"
                  icon={
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  }
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isRegister={true}
                />
              )}

              {/* Sign In: username or email */}
              {isSignIn && (
                <FloatingInput
                  id="signin-username"
                  type="text"
                  label="Username or Email"
                  icon={
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  }
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  isRegister={false}
                />
              )}

              <FloatingInput
                id="password"
                type="password"
                label="Password"
                icon={
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                }
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isRegister={!isSignIn}
              />

              {!isSignIn && (
                <FloatingInput
                  id="confirm-password"
                  type="password"
                  label="Confirm Password"
                  icon={
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  }
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                  isRegister={true}
                />
              )}

              {/* Options row */}
              {isSignIn ? (
                <div className="flex justify-between items-center my-[0.25rem] mb-[1.5rem] text-[0.75rem]">
                  <label className="flex items-center gap-[0.45rem] text-[#94a3b8] cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                      className="accent-[#7c3aed] cursor-pointer"
                    />
                    Remember me
                  </label>
                  <a
                    href="/"
                    className="text-[#a78bfa] no-underline transition-colors duration-200 hover:text-[#c084fc] hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
              ) : (
                <div
                  className={`flex items-start gap-[0.5rem] text-[0.72rem] text-[#64748b] ${!isSignIn ? "my-[0.15rem] mb-[0.8rem]" : "my-[0.25rem] mb-[1.5rem]"} leading-relaxed`}
                >
                  <input
                    type="checkbox"
                    id="agree-terms"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="accent-[#7c3aed] mt-[2px] flex-shrink-0 cursor-pointer"
                  />
                  <label htmlFor="agree-terms" className="cursor-pointer">
                    I accept the{" "}
                    <a
                      href="/"
                      className="text-[#a78bfa] no-underline transition-colors duration-200 hover:text-[#c084fc] hover:underline"
                    >
                      Terms &amp; Conditions
                    </a>
                    ,{" "}
                    <a
                      href="/"
                      className="text-[#a78bfa] no-underline transition-colors duration-200 hover:text-[#c084fc] hover:underline"
                    >
                      Cookie Policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="/"
                      className="text-[#a78bfa] no-underline transition-colors duration-200 hover:text-[#c084fc] hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>
              )}

              <button
                type="submit"
                className={`w-full border-none rounded-[0.75rem] text-[0.9rem] font-bold tracking-[0.05em] cursor-pointer text-white relative overflow-hidden bg-gradient-to-r from-[#6d28d9] via-[#a855f7] to-[#6d28d9] bg-[length:200%_100%] transition-all duration-[0.45s] ease shadow-[0_4px_24px_rgba(139,92,246,0.38)] hover:bg-[position:100%_0] hover:-translate-y-0.5 hover:shadow-[0_10px_36px_rgba(139,92,246,0.55)] active:translate-y-0 before:absolute before:inset-0 before:bg-gradient-to-br before:from-[rgba(255,255,255,0.14)] before:to-transparent before:pointer-events-none ${!isSignIn ? "py-[0.7rem]" : "py-[0.875rem]"}`}
              >
                {isSignIn ? "Sign In" : "Create Account"}
              </button>
            </form>

            {/* Social sign-in section — shown on Sign In only */}
            {isSignIn && (
              <>
                <div className="flex items-center gap-[0.75rem] my-[1.4rem]">
                  <div className="flex-1 h-px bg-white/7" />
                  <span className="text-[0.7rem] text-[#475569] font-semibold tracking-[0.08em]">
                    or continue with
                  </span>
                  <div className="flex-1 h-px bg-white/7" />
                </div>
                <div className="flex gap-[0.5rem] flex-wrap justify-center">
                  <SocialBtn icon={<FcGoogle />} label="Google" />
                  <SocialBtn
                    icon={<FaApple style={{ color: "#fff" }} />}
                    label="Apple"
                  />
                  <SocialBtn
                    icon={<FaFacebook style={{ color: "#1877F2" }} />}
                    label="Facebook"
                  />
                  <SocialBtn
                    icon={<IoLogoXbox style={{ color: "#107C10" }} />}
                    label="Xbox"
                  />
                  <SocialBtn
                    icon={<FaSteam style={{ color: "#c6d4df" }} />}
                    label="Steam"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
