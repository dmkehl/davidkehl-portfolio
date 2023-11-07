import type { Experience } from "@/.contentlayer/generated";
import Link from "next/link";

type Props = {
  experience: Experience;
};

export const Article: React.FC<Props> = ({ experience }) => {
  return (
    <Link href={`/projects/${experience.slug}`}>
      <article className="p-4 md:p-8">
        <div className="flex justify-between gap-2 items-center">
          <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
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
        </div>
        <h2 className="mt-4 z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
          {experience.title}
        </h2>
        <h4 className="z-20 text-md font-light duration-1000 lg:text-lg text-zinc-400 group-hover:text-white font-normal">
          {experience.company} - {experience.location}
        </h4>
        <p className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
          {experience.description}
        </p>
        <div className="mt-4">
          <p className="text-sm text-zinc-400 group-hover:text-zinc-200 my-4">
            <strong>Key Contributions</strong>
          </p>

          <div className="w-full h-px bg-zinc-800" />
          <ul className="list-disc pl-4 my-4">
            {experience.contributions
              ?.slice(0, 3)
              .map((contribution, index) => (
                <li
                  key={index}
                  className="text-sm text-zinc-400 group-hover:text-zinc-200 py-1"
                >
                  <strong>{contribution.title}: </strong>
                  {contribution.description}
                </li>
              ))}
          </ul>
        </div>
      </article>
      <div className="absolute bottom-2 md:bottom-6 right-2 md:right-6">
        <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
          Read more <span aria-hidden="true">&rarr;</span>
        </p>
      </div>
    </Link>
  );
};
