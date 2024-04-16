"use client";

import React from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useAccount } from "@/hooks/useAccount";
import { Card, CardContent, CardHeader } from "./ui/card";
import Link from "next/link";

export const Account = () => {
  const { data, isLoading } = useAccount();
  console.log({ data });

  const handleCopyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 복사되었습니다");
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <p className="text-xl font-bold text-center">불러오는중...</p>;
  }

  return (
    <div className="flex flex-col gap-y-4">
      <p className="text-blue-500 font-bold text-lg text-center">
        구매 신청시 해당 계정의 내용을 복사하여 보내주세요
      </p>
      {data &&
        data.accountTitlesText.map((title: string, index: number) => (
          <Card
            key={index}
            className="flex flex-col shadow-md lg:flex-row justify-center items-center p-4 lg:gap-x-4 gap-y-4"
          >
            <p className="bg-slate-200 lg:text-base text-sm font-semibold py-3 px-4 rounded-xl shadow-sm border border-slate-300">
              {title}
            </p>
            <Button
              onClick={() => handleCopyText(title)}
              variant={"outline"}
              className="lg:w-auto w-full"
            >
              내용 복사하기
            </Button>
            <Button asChild variant={"blue"} className="lg:w-auto w-full">
              <Link href={"https://open.kakao.com/me/gosarishop"}>
                구매신청 (오픈채팅)
              </Link>
            </Button>
          </Card>
        ))}
      {data && data.accountTitlesText.length === 0 && <p>{data.message}</p>}
    </div>
  );
};
