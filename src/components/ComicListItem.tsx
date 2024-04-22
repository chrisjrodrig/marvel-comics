import { CardContent, Card } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
const ComicListItem = ({
  id,
  image,
  title,
  series,
  dates,
}: {
  id: number;
  image: string;
  title: string;
  format: string;
  series: {
    name: string;
  };
  dates: { type: string; date: string }[];
}) => {
  return (
    <Card className="w-full max-w-md" key={id}>
      <a href={`/comics/${id}`}>
        <Image
          alt={title}
          className="aspect-[2/1] rounded-t-lg object-cover"
          height="200"
          src={image}
          width="400"
        />
      </a>
      <CardContent className="p-4 space-y-2">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-500 dark:text-gray-400">
            {formatDate(dates[0].date)}
          </p>
          <p className="text-gray-500 dark:text-gray-400">{series.name}</p>
          <p className="text-gray-500 dark:text-gray-400">
            <a href={`/comics/${id}`}>View</a>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

ComicListItem.displayName = "ComicListItem";

export default ComicListItem;
