import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { getCharacterFirstThumbnail } from "@/lib/utils";

export default async function CategoryItem({
  path,
  title,
  variant,
}: {
  path: string;
  title: string;
  variant: string;
}) {
  const categoryImages = {
    comics: "path/to/comics/image",
    series: "path/to/series/image",
    characters: await getCharacterFirstThumbnail("Wolverine"),
    creators: "path/to/creators/image",
    events: "path/to/events/image",
  };
  const bgImage = categoryImages[variant as keyof typeof categoryImages];
  return (
    <Card key="1" className="w-full">
      <Link href={path}>
        <div className="relative h-[285px] overflow-hidden rounded-lg">
          <img alt={title} className="object-cover" src={bgImage} />
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
