import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PiEyeSlashThin } from "react-icons/pi";
import { AuthContext } from "../../context/Authprovider/Authprovider";

const Signin = () => {
  const { login, googleSignin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };

  const handleGoogleSignin = (event) => {
    event.preventDefault();

    googleSignin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div
      className="bg-cover bg-center font-Barlow relative text-white h-100vh w-100vw mt-[-90px]  flex items-center  justify-center"
      style={{
        backgroundImage: "url('https://i.ibb.co/xGW4dnT/6.jpg')",
      }}
    >
      <div className="w-full max-w-md p-4 mt-24 shadow login-div sm:p-8  dark:bg-gray-900 dark:text-gray-100">
        <h2 className="mb-3 text-4xl font-GildaDisplay font-semibold text-center">
          Sign in
        </h2>

        <div className="my-6 space-y-4">
          <button
            aria-label="Login with Google"
            type="button"
            onClick={handleGoogleSignin}
            className="flex text-xl items-center justify-center w-full p-4 space-x-4 border  focus:ri focus:ri dark:border-gray-400 hover:bg-gold hover:border-gold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Continue with Google</p>
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-400" />
          <p className="px-3 dark:text-gray-400">OR</p>
          <hr className="w-full dark:text-gray-400" />
        </div>
        <form onSubmit={handleLogin} className="space-y-8 text-lg">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block  text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                className="w-full px-3 py-2 border text-black "
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <Link className="text-xs hover:underline dark:text-gray-400">
                  Forgot password?
                </Link>
              </div>
              {/* <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                className="w-full px-3 py-2 border text-black dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                required
              /> */}
              <div className="relative">
                <input
                  id="hs-toggle-password"
                  type="password"
                  className="w-full px-3 py-2 border text-black dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  data-hs-toggle-password='{
        "target": "#hs-toggle-password"
      }'
                  className="absolute top-0 end-0 p-3.5 rounded-e-md dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  <svg
                    className="flex-shrink-0 size-5 text-black dark:text-neutral-600"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      className="hs-password-active:hidden"
                      d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
                    />
                    <path
                      className="hs-password-active:hidden"
                      d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                    />
                    <path
                      className="hs-password-active:hidden"
                      d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                    />
                    <line
                      className="hs-password-active:hidden"
                      x1="2"
                      x2="22"
                      y1="2"
                      y2="22"
                    />
                    <path
                      className="hidden hs-password-active:block"
                      d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                    />
                    <circle
                      className="hidden hs-password-active:block"
                      cx="12"
                      cy="12"
                      r="3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-8 bg-gold border border-gold hover:bg-transparent hover:border hover:border-white py-3 font-semibold  dark:bg-violet-400 dark:text-gray-900"
          >
            Sign in
          </button>
        </form>
        <p className="text-sm text-center pt-4  dark:text-gray-400">
          Dont have account?
          <Link
            to={"/signup"}
            rel="noopener noreferrer"
            className="focus:underline ps-1 hover:underline"
          >
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
