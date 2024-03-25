"use client";
import { ErrorToast, IsEmail, IsEmpty, SuccessToast } from "@/utils/FormHelper";
import client_api from "@/utils/api_fetch_fun";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const LoginComponent = ({ data }) => {
  const [submit, setSubmit] = useState(false);
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
      client_api.login({ email, password }).then((res) => {
        if (res?.status === true) {
          SuccessToast("Login Success!");
          router.replace("/dashboard");
          setSubmit(false);
        } else {
          ErrorToast("Login fail");
          setSubmit(false);
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
              <button type="submit" className="opacity">
                SUBMIT
              </button>
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
