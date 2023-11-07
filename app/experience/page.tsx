import React, { useEffect } from "react";
import { Navigation } from "../components/nav";
import { allExperiences } from "@/.contentlayer/generated";
import { Card } from "../components/card";
import { Article } from "./article";
import exp from "constants";

export default function ExperiencePage() {
  const experiences = allExperiences.filter((e) => e.published);
  experiences.sort((a, b) => {
    const dateA = new Date(a.endDate ? a.endDate : new Date() || 0);
    const dateB = new Date(b.endDate ? b.endDate : new Date() || 0);

    if (dateA < dateB) {
      return 1;
    }
    if (dateA > dateB) {
      return -1;
    }
    return 0;
  });
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Experience
          </h2>
          <p className="mt-4 text-zinc-400">
            A fully inclusive list of my work history and skills.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-1">
          <div className="grid grid-cols-1 gap-4">
            {experiences.map((experience) => (
              <Card key={experience.slug}>
                <Article experience={experience} />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
