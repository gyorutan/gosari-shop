import { Account } from "@/components/account";
import React from "react";

const HomePage = () => {
  return (
    <div className="p-10 flex flex-col gap-y-6 justify-center items-center">
      <h1 className="text-4xl font-bold">고사리샵</h1>
      <p className="text-xl font-bold">리그오브레전드 일본서버 생배계정</p>
      <Account />
    </div>
  );
};

export default HomePage;
