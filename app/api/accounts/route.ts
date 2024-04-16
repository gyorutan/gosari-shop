import { NextRequest, NextResponse } from "next/server";
import { JSDOM } from "jsdom";

export const GET = async (req: NextRequest) => {
  const res = await fetch(
    "https://www.playerauctions.com/lol-account/smurf/?Serverid=8928&Isdelivery=0&PageIndex=1"
  );

  const html = await res.text();

  const dom = new JSDOM(html);

  const document = dom.window.document;

  const accountTitles = document.querySelectorAll(".account-title");

  const accountTitlesText: (string | null)[] = [];

  accountTitles.forEach((accountTitle) => {
    accountTitlesText.push(accountTitle.textContent);
  });

  console.log(accountTitlesText);

  if (accountTitlesText.length === 0) {
    return NextResponse.json({
      success: false,
      message: "생배 매물이 없습니다",
    });
  }

  return NextResponse.json({ success: true, accountTitlesText });
};
