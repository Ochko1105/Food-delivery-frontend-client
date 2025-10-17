"use client";
import { TabsDemo } from "@/_components/Home/Multitask";
import { Button } from "@/_components/ui/button";
import { Input } from "@/_components/ui/input";
import { FaAngleLeft } from "react-icons/fa6";
import React, { useState } from "react";
import { ProfileForm } from "@/_components/Home/Multiform";

const Multi = () => {
  const [newTask, setNewTask] = useState("");
  const [multi, setMulti] = useState("gmail");
  const [password, setPassword] = useState("password");
  function handleoneye() {
    if (password === "password") {
      setPassword("text");
    } else if (password === "text") {
      setPassword("password");
    }
  }

  return (
    <div className="flex w-[1440px] mx-auto gap-40 mt-50">
      <ProfileForm></ProfileForm>
      <div>
        <img src="/multi.png"></img>
      </div>
    </div>
  );
};

export default Multi;
