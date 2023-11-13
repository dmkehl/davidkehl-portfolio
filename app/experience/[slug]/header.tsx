"use client";
import { ArrowLeft, Eye, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { SkillCard } from "@/app/components/skillcard";

type Props = {
  experience: {
    company: string;
    title: string;
    location?: string;
    description: string;
    published?: boolean;
    contributions?: object[];
    startDate: string;
    endDate?: string;
    skills: string[];
  };
};
export const Header: React.FC<Props> = ({ experience }) => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  const filteredSkills = experience.skills.filter((skill) => {
    try {
      skill = skill.replace(/#/g, "sharp");
      require(`public/brands/${skill.toLowerCase()}.png`);
      return true;
    } catch (err) {
      return false;
    }
  });

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={ref}
      className="relative isolate overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black"
    >
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur lg:backdrop-blur-none duration-200 border-b lg:bg-transparent ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-white/10  border-zinc-200 lg:border-transparent"
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            <Link target="_blank" href="https://www.linkedin.com/in/dmkehl/">
              <Linkedin
                className={`w-6 h-6 duration-200 hover:font-medium ${
                  isIntersecting
                    ? " text-zinc-400 hover:text-zinc-100"
                    : "text-zinc-600 hover:text-zinc-900"
                } `}
              />
            </Link>
            <Link target="_blank" href="https://github.com/dmkehl">
              <Github
                className={`w-6 h-6 duration-200 hover:font-medium ${
                  isIntersecting
                    ? " text-zinc-400 hover:text-zinc-100"
                    : "text-zinc-600 hover:text-zinc-900"
                } `}
              />
            </Link>
          </div>

          <Link
            href="/experience"
            className={`duration-200 hover:font-medium ${
              isIntersecting
                ? " text-zinc-400 hover:text-zinc-100"
                : "text-zinc-600 hover:text-zinc-900"
            } `}
          >
            <ArrowLeft className="w-6 h-6 " />
          </Link>
        </div>
      </div>
      <div className="container mx-auto relative isolate overflow-hidden  py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-300 drop-shadow-orange">
              {experience.startDate ? (
                <time dateTime={new Date(experience.startDate).toISOString()}>
                  {Intl.DateTimeFormat(undefined, {
                    year: "numeric",
                    month: "short",
                  }).format(new Date(experience.startDate))}
                </time>
              ) : (
                <span>SOON</span>
              )}{" "}
              -{" "}
              {experience.endDate ? (
                <time dateTime={new Date(experience.endDate).toISOString()}>
                  {Intl.DateTimeFormat(undefined, {
                    year: "numeric",
                    month: "short",
                  }).format(new Date(experience.endDate))}
                </time>
              ) : (
                <span>Current</span>
              )}
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display pt-2">
              {experience.company}
            </h1>
            <h6 className="text-normal tracking-tight text-zinc-300 sm:text-2xl">
              {experience.title}
            </h6>
            <p className="mt-6 text-normal leading-8 text-zinc-300">
              {experience.description}
            </p>
          </div>
          <div className="text-center w-full">
            {filteredSkills.length > 0 ? (
              <div>
                <h4 className="mt-8 scroll-m-20 text-lg font-semibold tracking-tight text-white mb-4">
                  Tech Used:
                </h4>
                <div className="flex flex-row gap-4 flex-wrap w-3/4 m-auto justify-center">
                  {filteredSkills?.map((skill) => (
                    <SkillCard
                      key={skill}
                      skill={skill}
                      image={`/brands/${skill
                        .replace(/#/g, "sharp")
                        .toLowerCase()}.png`}
                    />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
};
