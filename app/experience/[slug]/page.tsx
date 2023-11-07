export const revalidate = 60;
import { allExperiences } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";
import { Header } from "./header";
import exp from "constants";
import { Mdx } from "@/app/components/mdx";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allExperiences
    .filter((e) => e.published)
    .map((e) => ({
      slug: e.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const experience = allExperiences.find(
    (experience) => experience.slug === slug
  );

  if (!experience) {
    notFound();
  }

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header experience={experience}></Header>
      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <Mdx code={experience.body.code} />
      </article>
    </div>
  );
}
