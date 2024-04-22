import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const CharacterItem = ({
  id,
  image,
  name,
}: {
  id: number;
  image: string;
  name: string;
}) => {
  return (
    <Card className="w-full max-w-md" key={id}>
      <a href={`/character/${id}`}>
        <Image
          alt={name}
          className="aspect-[2/1] rounded-t-lg object-cover"
          height="200"
          src={image}
          width="400"
        />
      </a>
      <CardContent className="p-4 space-y-2">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-500 dark:text-gray-400">
            <a href={`/character/${id}`}>View</a>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

CharacterItem.displayName = "CharacterItem";

export default CharacterItem;
