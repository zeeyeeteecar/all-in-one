"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios, { Axios, AxiosError } from "axios";
import { toast } from "react-hot-toast";

export default function SigninPage() {
  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const [loginPasscode, setLoginPasscode] = useState({ loginPasscode: "" });

  const handle_Login = async () => {
    console.log("loginPasscode client", loginPasscode);
    try {
      setLoading(true);
      const response = await axios.post("api/login", loginPasscode);

      console.log("Login successfully", response.data);
      //toast.success("Login successfully");
      router.push("/bmo-run");
    } catch (error) {
      const err = error as AxiosError;

      console.log("err.message---", err.message);

      if (err.message.toString().includes("401")) {
        alert("Login failed: -- User Not Exists");
      }

      if (err.message.toString().includes("402")) {
        alert("Login failed: -- Wrong Password");
      }

      //toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (loginPasscode.loginPasscode.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [loginPasscode]);

  return (
    <div
      className="flex items-center justify-center min-h-screen py-2 bg-slate-500 font-extralight 
    bg-[url('https://source.unsplash.com/random/900%C3%97700/?banff')] bg-center bg-no-repeat bg-cover"
    >
      <section className="h-[500px] w-[1000px] bg-white bg-opacity-70 rounded-3xl">
        <div className="container h-full px-20 py-24">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone image"
              />
            </div>

            <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
              <form action={handle_Login}>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="password"
                    className=" placeholder-slate-300 text-blue-600 p-3 w-full h-[50px] rounded-lg font-light"
                    id="loginPasscode"
                    name="loginPasscode"
                    placeholder="Passcode"
                    required
                    onChange={(e) => {
                      setLoginPasscode({
                        ...loginPasscode,
                        loginPasscode: e.target.value,
                      });
                    }}
                  />
                </div>

                <div className="mb-6 flex items-center justify-between"></div>

                <button
                  type="submit"
                  className="inline-block w-full bg-white bg-opacity-50 hover:bg-opacity-100 text-blue-600 border px-7 pb-2.5 pt-3 text-lg font-light uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] h-[50px] rounded-lg "
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
