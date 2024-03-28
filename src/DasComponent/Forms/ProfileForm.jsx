"use client";
import PageTitle from "@/DasComponent/Others/PageTitle";
import SubmitButton from "@/DasComponent/Others/SubmitButton";
import Image from "next/image";
import React, { useState } from "react";
import AddImage from "../Gallery/AddImage";
import moment from "moment";
import { ErrorToast, IsEmpty, SuccessToast } from "@/utils/FormHelper";
import client_api from "@/utils/api_fetch_fun";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const ProfileForm = ({ data }) => {
  const router = useRouter();
  const [img, setImg] = useState(data?.img || "");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const user_name = `${fullName} ${lastName}`;
    const age = e.target.age.value;
    const mobile = e.target.mobile.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (IsEmpty(fullName)) {
      return ErrorToast("First Name Must be fill up!");
    }
    if (IsEmpty(lastName)) {
      return ErrorToast("Last Name Must be fill up!");
    }
    if (IsEmpty(password)) {
      return ErrorToast("Password Must be fill up!");
    }
    if (password !== confirmPassword) {
      return ErrorToast("Password Not Macthing!");
    }
    client_api
      .update(`/api/dashboard/profile?id=${data.id}`, {
        user_name ,
        age,
        mobile,
        email,
        password,
        img,
      })
      .then((data) => {
        if (data.status == "success") {
          SuccessToast("Profile Updated!");
          router.refresh();
        }
      });
  };

  const handleLogout = () => {
    console.log("logout");
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log out !",
    }).then((result) => {
      if (result.isConfirmed) {
        client_api.get("/api/user/logout");
        SuccessToast("Successfull Logout !")
        router.push("/")
      }
    });
  };
  return (
    <div>
      <PageTitle text={"Profile Information"} />
      <div>
        <div className=" mx-[30px] mt-[40px]">
          <div className="grid grid-cols-12 gap-[30px]">
            <div className="col-span-6">
              <div className=" rounded-xl dashboard-form-bg p-[30px] text-textColor">
                <div>
                  <Image
                    width={200}
                    height={200}
                    src={data?.img || "/images/avatar.jpg"}
                    alt="avatar of admin"
                    className="rounded-full w-[80px] h-[80px] object-cover"
                  />
                </div>
                <div className="mt-8 grid gap-2">
                  <p>
                    <strong>
                      Full Name: {data?.user_name || "Mezbah Uddin"}
                    </strong>
                  </p>
                  <p>
                    <strong>Email:</strong> {data?.email || "admin@mezbah.com"}
                  </p>
                  <p>
                    <strong>
                      Mobile Number: {data?.mobile || "+880 1707954201"}
                    </strong>
                  </p>
                  <p>
                    <strong>Age: {data?.age || "22+"}</strong>
                  </p>
                  <p>
                    <strong>
                      Last Profile Update:{" "}
                      {moment(data?.updateAt).format("MMMM Do YYYY") ||
                        " 2/22/2024"}
                    </strong>
                  </p>
                  <br />
                  <div>
                    <button
                      onClick={handleLogout}
                      className="btn bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 delay-75"
                    >
                      Log Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <div className="rounded-xl  dashboard-form-bg p-[30px]">
                <div />
                <div
                  className="react-tabs__tab-panel react-tabs__tab-panel--selected"
                  role="tabpanel"
                  id="panel:r0:3"
                  aria-labelledby="tab:r0:3"
                >
                  <div className="body__option my-6">
                    <h2 className="text-slate-300 text-2xl font-semibold mb-2">
                      Change details
                    </h2>
                    <div />
                    <form onSubmit={handleSubmit} className="intro__form">
                      <div className="p-0">
                        <div className="mt-5 md:grid grid-cols-2 gap-3">
                          <div>
                            <label className="sc-bqyKva ePvcBv text-slate-200 text-sm">
                              First Name:
                            </label>
                            <input
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              placeholder="First Name"
                              type="text"
                              name="firstName"
                            />
                          </div>
                          <div className="mt-3 md:mt-0">
                            <label className="sc-bqyKva ePvcBv text-slate-200 text-sm ">
                              Last Name:
                            </label>
                            <input
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              placeholder="Last Name"
                              type="text"
                              name="lastName"
                            />
                          </div>
                        </div>
                        <div className="mt-3 md:grid grid-cols-2 gap-3">
                          <div>
                            <label className="sc-bqyKva ePvcBv text-slate-200 text-sm">
                              Age:
                            </label>
                            <input
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              placeholder="Age"
                              type="text"
                              name="age"
                              defaultValue={data?.age}
                            />
                          </div>
                          <div className="mt-3 md:mt-0">
                            <label className="sc-bqyKva ePvcBv text-slate-200 text-sm">
                              Mobile Number:
                            </label>
                            <input
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              placeholder="Mobile Number"
                              type="text"
                              name="mobile"
                              defaultValue={data?.mobile}
                            />
                          </div>
                        </div>
                        <div className="mt-3">
                          <div>
                            <label className="sc-bqyKva ePvcBv text-slate-200 text-sm ">
                              Email ID:
                            </label>
                            <input
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              type="email"
                              placeholder="admin@mezbah.com"
                              name="email"
                              defaultValue={data?.email}
                            />
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="mt-5">
                            <AddImage
                              name={"Add Profile Image"}
                              setImageUrl={setImg}
                              imageUrl={img}
                            />
                          </div>
                        </div>
                        <div className="mt-3 md:grid grid-cols-2 gap-3">
                          <div>
                            <label className="sc-bqyKva ePvcBv text-slate-200 text-sm">
                              Password:
                            </label>
                            <input
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              type="password"
                              placeholder="Enter your Password!"
                              name="password"
                            />
                          </div>
                          <div className="mt-3 md:mt-0">
                            <label className="sc-bqyKva ePvcBv text-slate-200 text-sm">
                              Confirm Password:
                            </label>
                            <input
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                              type="password"
                              name="confirmPassword"
                              placeholder="Enter Repeat your Password!"
                            />
                          </div>
                        </div>
                        <div className="mt-10">
                          <SubmitButton
                            text={"Update Profile"}
                            submit={loading}
                            className={"bg-red-500"}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
