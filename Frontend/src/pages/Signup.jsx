import React, { useState } from "react";
import chat from "../assets/Chat-app.jpeg";
import { Link } from "react-router-dom";
import useSignup from "../ hooks/useSignup";

const Signup = () => {
  const {loading, signups } = useSignup();
  console.log(signups,loading, "ok");

  const [Input, setInput] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });

  console.log(Input, "input");
  const Handlesubmit = async (e) => {
    e.preventDefault();
    console.log("surya");
    await signups(Input);
  };

  const HandleCheckBox = (gender) => {
    console.log(gender);
    setInput({ ...Input, gender });
  };

  return (
    <>
      <div className="h-full  dark:bg-gray-900 m-16 opacity-95">
        {/* <!-- Container --> */}
        <div className="mx-auto">
          <div className="flex justify-center px-6 py-12">
            {/* <!-- Row --> */}
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              {/* <!-- Col --> */}
              <div
                className="w-full h-auto  bg-gray-100 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg gap-2 transition duration-700 ease-in-out"
                style={{
                  backgroundImage: `url('https://img.icons8.com/carbon-copy/400/imessage.png')`,
                }}
              ></div>
              {/* <!-- Col --> */}
              <div className="w-full lg:w-7/12  bg-gray-100 dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white transition duration-700 ease-in-out">
                  Create an Account!
                </h3>
                <form
                  className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded"
                  onSubmit={Handlesubmit}
                >
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700 dark:text-white transition duration-700 ease-in-out"
                        // for="firstName"
                      >
                        Full Name
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline transition duration-700 ease-in-out"
                        id="fullName"
                        type="text"
                        placeholder="full Name"
                        value={Input.fullName}
                        onChange={(e) =>
                          setInput({ ...Input, fullName: e.target.value })
                        }
                      />
                    </div>
                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700 mr-7 dark:text-white"
                        // for="lastName"
                      >
                        Gender
                      </label>
                      <label
                        htmlFor="male"
                        className="transition duration-700 ease-in-out"
                      >
                        Male
                      </label>
                      <input
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                        checked={Input.gender === "male"}
                        onChange={() => HandleCheckBox("male")}
                      />
                      <label htmlFor="female" className="ml-4">
                        Female
                      </label>
                      <input
                        type="radio"
                        name="gender"
                        id="female"
                        value="female"
                        checked={Input.gender === "female"}
                        onChange={() => HandleCheckBox("female")}
                      ></input>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      // for="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline transition duration-700 ease-in-out"
                      id="user"
                      type="user"
                      placeholder="username"
                      value={Input.username}
                      onChange={(e) =>
                        setInput({ ...Input, username: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0 transition duration-700 ease-in-out">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                        // for="password"
                      >
                        Password
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                        value={Input.password}
                        onChange={(e) =>
                          setInput({ ...Input, password: e.target.value })
                        }
                      />
                      <p className="text-xs italic text-red-500">
                        Please choose a password.
                      </p>
                    </div>
                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                        // for="c_password"
                      >
                        Confirm Password
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="c_password"
                        type="password"
                        placeholder="******************"
                        value={Input.confirmpassword}
                        onChange={(e) =>
                          setInput({
                            ...Input,
                            confirmpassword: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ?<span className="loading loading-spinner"></span>:"Register account"}
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                  <div className="text-center">
                    
                  </div>
                  <div className="text-center">
                    <Link
                      className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                      to="/login"
                    >
                      Already have an account? Login!
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
