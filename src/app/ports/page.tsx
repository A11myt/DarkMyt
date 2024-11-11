"use client";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { vscode, obsidian, codeBrackets } from "../../assets/icons/Icons";
//fetch Github API

// const fetchGithubRepos = async () => {
//  const response = await fetch(`https://api.github.com/user/repos`, {
//   headers: {
//    Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_T}`,
//   },
//  });
//  const data = await response.json();
//  return data;
// };

const fetchGithubRepos = async () => {
  const response = await fetch(`https://api.github.com/users/A11myt/repos`);
  const data = await response.json();
  return data;
};

interface IPort {
  name: string;
  id: string;
  icon: IIcon;
  github: Igithub;
}

interface IIcon {
  src: string;
  width: number;
  height: number;
  blurWidth: number;
  blurHeight: number;
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
    icon: vscode,
    github: {
      version: "1.0.1",
      likes: 100,
      link: "",
    },
  },
  {
    name: "Obsidian",
    id: "obsidian",
    icon: obsidian,
    github: {
      version: "1.0.1",
      likes: 100,
      link: "",
    },
  },
  {
    name: "Terminal",
    id: "terminal",
    icon: codeBrackets,
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
    // console.log(`Bearer:` + process.env.NEXT_PUBLIC_BEARER_T);
    console.log(fetchGithubRepos());
  });

  return (
    <div className="">
      <h1 className="text-light-300 text-bold text-3xl mb-2">Ports</h1>
      <p className="text-light-400 text-[16px] max-w-[75%] font-medium">
Our color theme blends a refined gray with a striking orange, designed for an elegant and functional look. Our theme offers broad compatibility and versatility, making it easy to create a unified experience in your daily tool stack.
      </p>
      {/* <div className="animate-slideIn "> */}
      <div className="content page-mount">
        <div className="flex relative w-full pt-4 h-auto">

<input
            onKeyDown={() => console.log("key down")}
            className="w-3/4 bg-light-700 border-light-400 text-light-300 p-2 rounded-md h-max-12"
            placeholder="Search ports"
            disabled={false}
          />

        </div>
        <div className="pt-4 grid grid-cols-4 gap-4 w-3/4 ">
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
    <div className="w-full h-56 border rounded border-darkMyt-50 cursor-pointer">
      <div className="flex flex-col items-center justify-between  h-full">
        <div
          className="flex flex-col gap-4 justify-center h-full w-full items-center"
          onClick={() => router.push(`/ports/${port.id}`)}
        >
<div className="p-2 rounded-full bg-darkMyt-25">
          <img
            src={port.icon.src}
            alt={"Err"}
            className=" w-10 h-10"
          />
 
</div>
         <span className=""> {port.name}</span>
        </div>
        <div className="px-2 text-sm py-1 flex w-full text-light-300 justify-between border-t border-darkMyt-50">
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
