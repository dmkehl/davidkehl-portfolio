import { Card } from "./card";
import Image from "next/image";

interface SkillCardProps {
  skill: string;
  image: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, image }) => {
  console.log(image);
  return (
    <div className="inline-block">
      <Card>
        <div className="flex flex-row gap-2 text-zinc-200 hover:text-zinc-50 py-2 px-4 text-lg h-12 max-content">
          {/* Give me an Image using next/image that will allow me to set the height and auto adjust the width */}
          <Image
            src={image}
            height={12}
            width={12}
            alt="nextjs-logo"
            layout="responsive"
            className="p-1 rounded-md"
          />
          <p className="whitespace-nowrap">{skill}</p>
        </div>
      </Card>
    </div>
  );
};
