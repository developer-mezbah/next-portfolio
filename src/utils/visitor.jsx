"use client";
import React from "react";
import { useEffect } from "react";

const Visitor = () => {
  useEffect(() => {
    const getData = async () => {
      let res = await fetch("https://api.ipify.org/?format=json").then(
        (response) => response.json()
      );
      await fetch("/api/user/visitor", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ip: res?.ip }),
      });

      // console.log(res);
    };
    getData();
  }, []);

  return <></>;
};

export default Visitor;
