import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  getCharacterFirstThumbnail,
  getComicsFirstThumbnail,
} from "@/lib/utils";
import Image from "next/image";

export default async function CategoryItem({
  path,
  title,
  variant,
}: {
  path: string;
  title: string;
  variant: string;
}) {
  const categoryImages: {
    characters: string;
    series: string;
    creators: string;
    comics: string;
    events: string;
  } = {
    comics: await getComicsFirstThumbnail(84160),
    series: await getCharacterFirstThumbnail("Wolverine"),
    characters: await getCharacterFirstThumbnail("Wolverine"),
    creators: await getCharacterFirstThumbnail("Wolverine"),
    events: await getCharacterFirstThumbnail("Wolverine"),
  };
  const bgImage: string =
    categoryImages[variant as keyof typeof categoryImages];
  return (
    <Card key="1" className="w-full">
      <Link href={path}>
        <div className="relative h-[285px] overflow-hidden rounded-lg">
          <Image
            alt={title}
            className="object-cover"
            src={bgImage}
            width={400}
            height={400}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="absolute bottom-4 left-4 z-10 text-2xl sm:text-3xl md:text-4xl font-bold text-white bg-black/50 px-4 py-2 rounded-md">
              {title}
            </h2>
          </div>
        </div>
      </Link>
    </Card>
  );
}
