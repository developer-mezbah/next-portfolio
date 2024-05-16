"use client";
import { ErrorToast, IsEmail, IsEmpty, SuccessToast } from "@/utils/FormHelper";
import client_api from "@/utils/api_fetch_fun";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const LoginComponent = ({ data }) => {
  const [submit, setSubmit] = useState(false);
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  let emailRef,
    passwordRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      if (!!data === false) {
        await client_api.register({});
      }
    };
    fetchData();
  }, []);

  const formSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);

    let email = emailRef.value;
    let password = passwordRef.value;

    if (IsEmail(email)) {
      ErrorToast("Valid Email Address Required");
      setSubmit(false);
    } else if (IsEmpty(email)) {
      ErrorToast("Email Address Required");
      setSubmit(false);
    } else if (IsEmpty(password)) {
      ErrorToast("Password Required");
      setSubmit(false);
    } else {
    setLoader(true)
      client_api.login({ email, password }).then((res) => {
        if (res?.status === true) {
          SuccessToast("Login Success!");
          router.replace("/dashboard");
          setSubmit(false);
          setLoader(false)
        } else {
          ErrorToast("Login fail");
          setSubmit(false);
          setLoader(false)
        }
      });
    }
  };
  return (
    <div className="dashboard-login-body">
      <section className="das-login-container">
        <div className="login-container">
          <div className="circle circle-one" />
          <div className="form-container">
            <Image
              width={500}
              height={500}
              src="/images/illustration.png"
              alt="illustration"
              className="illustration"
            />
            <h1 className="opacity" style={{ color: "var(--logincolor)" }}>
              LOGIN
            </h1>
            <form onSubmit={formSubmit}>
              <input
                type="email"
                placeholder="email is `admin@mezbah.com`"
                ref={(input) => (emailRef = input)}
                required
              />
              <input
                type="password"
                placeholder="Password is `admin`"
                required
                ref={(input) => (passwordRef = input)}
              />
              {!loader ? (
                <button type="submit" className="opacity">
                  SUBMIT
                </button>
              ) : (
                <button disabled className="opacity">
                  <span className={`text`}>
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline w-4 h-4 me-3 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                    Processing...
                  </span>
                </button>
              )}
            </form>
            {/* <div className="register-forget opacity">
              <a href="">REGISTER</a>
              <a href="">FORGOT PASSWORD</a>
            </div> */}
          </div>
          <div className="circle circle-two" />
        </div>
        <div className="theme-btn-container" />
      </section>
    </div>
  );
};

export default LoginComponent;
