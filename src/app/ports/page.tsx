"use client";
import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
//fetch Github API

const fetchGithubRepos = async () => {
 const response = await fetch(`https://api.github.com/user/repos`, {
  headers: {
   Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_T}`,
  },
 });
 const data = await response.json();
 return data;
};

interface IPort {
 name: string;
 id: string;
 icon: string;
 github: Igithub;
}

interface Igithub {
 version: string;
 likes: number;
 link: string;
}

const ports: IPort[] = [
 {
  name: "Visual Studio Code",
  id: "vscode",
  icon: "vscode",
  github: {
   version: "1.0.1",
   likes: 100,
   link: "",
  },
 },
 {
  name: "Obsidian",
  id: "obsidian",
  icon: "obsidian",
  github: {
   version: "1.0.1",
   likes: 100,
   link: "",
  },
 },
 {
  name: "Terminal",
  id: "terminal",
  icon: "terminal",
  github: {
   version: "1.0.1",
   likes: 100,
   link: "",
  },
 },
];

export default function Home() {
 useEffect(() => {
  // console.log("mounted");
  console.log(`Bearer:` + process.env.NEXT_PUBLIC_BEARER_T);
  console.log(fetchGithubRepos());
 });

 return (
  <div className="">
   <h1 className="text-light-300 text-bold text-3xl mb-2">Ports</h1>
   <p className="text-light-400 text-[16px] max-w-[75%] font-medium">
    Asdf Loren asdaksnfgasfk asasdiasdjnas dasjdansdk nasdasdmasd asdkasmnal
    s dasndkalsn dl,asdmlasdmkas dkasmdaklsdmaslda msdlasd a sdsas dasd
    asdasdkansda sldaksda
   </p>
   {/* <div className="animate-slideIn "> */}
   <div className="content page-mount">
    <div className="flex relative w-full h-auto">
     <input
      onKeyDown={() => console.log("key down")}
      className="w-full bg-light-700 border-light-400 text-light-300 p-2 rounded-md h-max-12"
      placeholder="Search ports"
      disabled={false}
     />
    </div>
    <div className="pt-4 grid grid-cols-5 gap-4 ">
     {ports.map((port, index) => (
      <Port key={index} port={port} />
     ))}
    </div>
   </div>
  </div>
 );
}

function Port({ port }: { port: IPort }) {
 const router = useRouter();
 return (
  <div className="w-full h-56 bg-light-500">
   <div className="flex flex-col items-center justify-between  h-full">
    <div
     className="flex flex-col gap-4 justify-center h-full w-full items-center"
     onClick={() => router.push(`/ports/${port.id}`)}
    >
     <img
      src={`/icons/${port.icon}.svg`}
      alt={"Err"}
      className="rounded-full bg-red-400 w-12 h-12"
     />
     <span className=""> {port.name}</span>
    </div>
    <div className="px-2 text-sm py-1 flex w-full text-light-300 justify-between border-t border-sky-900">
     <span>
      <FontAwesomeIcon
       className="h-4 group-hover:text-red-400 svg-glow"
       icon={faHeart}
      />{" "}
      {port.github.version}
     </span>
     <span>{port.github.likes}</span>
    </div>
   </div>
  </div>
 );
}
