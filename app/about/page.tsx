/* eslint-disable react/no-unescaped-entities */
import { Card } from "../components/card";
import { Navigation } from "../components/nav";

export default function AboutPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            About
          </h2>
          <p className="mt-4 text-zinc-400">Allow me to introduce myself</p>
        </div>
      </div>
      <div className="flex flex-row align-center justify-center">
        <div className="w-2/3 p-10">
          <Card>
            <div className="p-6 flex flex-col gap-2">
              <p className="text-zinc-300">
                Hey there! I'm David Kehl, a Senior Full Stack Software Engineer
                with a passion for creating innovative solutions and pushing the
                boundaries of technology. You can find me diving into coding
                projects, either at work or on my own platform, Beacon, which I
                founded to support veterans and service members facing mental
                health challenges.
              </p>
              <p className="text-zinc-300">
                As a United States Marine Corps veteran, I bring over a decade
                of technical leadership experience, coupled with a deep
                understanding of the power of community and support. When I'm
                not immersed in the world of coding, you'll often find me
                spending quality time with my wife and son, or doting on my
                beloved assortment of pets, including cats, dogs, and even
                guinea pigs.
              </p>
              <p className="text-zinc-300">
                My journey in software engineering has been marked by
                transformative experiences, from serving as an Instructor and
                Mentor at Sabio School of Software Engineering, where I crafted
                comprehensive curricula and fostered a collaborative learning
                environment, to my role as a Senior Software Engineer at Letter
                B LLC, where I spearheaded the delivery of complex solutions and
                integrated cutting-edge technologies.
              </p>
              <p className="text-zinc-300">
                With a keen eye for detail and a knack for troubleshooting,
                teaching, and training, I am driven by a constant quest for
                knowledge and improvement. My time in the Marine Corps has
                instilled in me a deep sense of leadership, mentorship, and an
                unwavering commitment to excellence, traits that continue to
                fuel my drive for innovation in the technology sector.
              </p>
              <p className="text-zinc-300">
                Feel free to connect with me at (304) 566 - 9519 or drop me a
                message at davidmkehl@outlook.com. You can also explore my
                professional journey on LinkedIn at www.linkedin.com/in/dmkehl,
                or check out my portfolio at davidkehl.com. For a glimpse of my
                coding adventures, you can find me on GitHub at
                github.com/dmkehl.
              </p>
              <p className="text-zinc-300">
                Let's collaborate and create something extraordinary together!
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
