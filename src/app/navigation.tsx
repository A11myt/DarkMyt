"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faPalette,
  faTerminal,
  faHeart,
  faHouse,
  faRightFromBracket,
  faSwatchbook,
} from "@fortawesome/free-solid-svg-icons";
import { TransitionLink } from "../components/utils/transitionLink";

type User = {
  name: string;
  image: string;
  job: string;
};

type Link = {
  icon: React.ReactNode;
  title: string;
  href: string;
  newTab?: boolean;
};

type NavSection = {
  title: string;
  links: Link[];
};

export default function Navigation() {
  const isActive = (href: string) => usePathname() === href;
  const user: User = {
    name: "A11myt",
    image: "https://via.placeholder.com/48",
    job: "Full Stack Developer",
  };

  const navSections: NavSection[] = [
    {
      title: "",
      links: [
        {
          icon: <FontAwesomeIcon className="h-4" icon={faHouse} />,
          title: "Home",
          href: "/",
        },
        {
          icon: <FontAwesomeIcon className="h-4" icon={faSwatchbook} />,
          title: "Ports",
          href: "/ports",
        },
        {
          icon: <FontAwesomeIcon className="h-4" icon={faPalette} />,
          title: "Palette",
          href: "/palette",
        },
      ],
    },
    {
      title: "other Projects",
      links: [
        {
          icon: <FontAwesomeIcon className="h-4" icon={faTerminal} />,
          title: "Playground",
          href: "https://nextjs.org",
          newTab: true,
        },
        {
          icon: (
            <FontAwesomeIcon
              className="h-4 group-hover:text-red-400 svg-glow"
              icon={faHeart}
            />
          ),
          title: "Lovely Feedback",
          href: "/feedback",
        },
      ],
    },
    {
      title: "Find me on",
      links: [
        {
          icon: <FontAwesomeIcon className="h-4" icon={faGithubAlt} />,
          title: "GitHub",
          href: " ",
          newTab: true,
        },
        {
          icon: <FontAwesomeIcon className="h-4" icon={faInstagram} />,
          title: "Twitter",
          href: " ",
          newTab: true,
        },
      ],
    },
  ];

  return (
    <div className="h-full p-4 w-96">
      <div className="h-full p-3 rounded-md bg-light-900">
        <Avatar user={user} />
        <div className="flex flex-col mt-4 p-3">
          {navSections.map((section) => (
            <div key={section.title} className="mb-4">
              {section.title != "" && (
                <div className={`h-full pb-2`}>
                  <h3 className="text-light-600 text-xs font-bold">
                    {section.title.toUpperCase()}
                    <hr className="border-light-700 top-0 left-0 w-full" />
                  </h3>
                </div>
              )}
              <div className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <NavLink key={link.title} link={link} isActive={isActive} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Avatar({ user }: { user: User }) {
  return (
    <div className="flex flex-row p-2 gap-x-4  border-b border-light-700">
      {user.image ? (
        <img
          src={user.image}
          className="rounded-full h-12 w-12"
          alt="Profile"
        />
      ) : (
        <div className="rounded-full h-12 w-12 bg-light-800 "></div>
      )}
      <div className="py-1">
        <div className="text-light-100">{user.name}</div>
        <div className="text-light-300 text-xs"> {user.job}</div>
      </div>
    </div>
  );
}

interface NavLinkProps {
  link: {
    title: string;
    href: string;
    icon: React.ReactNode;
    newTab?: boolean;
  };
  isActive: (href: string) => boolean;
}

const NavLink = ({ link, isActive }: NavLinkProps) => {
  return (
    <>
      {!link.newTab ? (
        <TransitionLink
          key={link.title}
          href={link.href}
          className={`group flex items-center gap-2 text-light-600 p-1 hover:text-light-300 transition-all duration-300 ${isActive(link.href) ? "text-light-200" : ""
            }`}
        >
          {link.icon}
          <div className="flex justify-between w-full">
            <span className="">{link.title} </span>
          </div>
        </TransitionLink>
      ) : (
        <a
          className={`group flex items-center gap-2 text-light-600 p-1 hover:text-light-300 transition-all duration-300`}
          href={link.href}
          target={link.newTab ? "_blank" : "_self"}
        >
          {link.icon}
          <div className="flex justify-between w-full">
            <span className="">{link.title} </span>
            {link.newTab && (
              <FontAwesomeIcon
                className="h-4 opacity-0 transition-all text-light-700 duration-300 group-hover:opacity-100"
                icon={faRightFromBracket}
              />
            )}
          </div>{" "}
        </a>
      )}
    </>
  );
};
