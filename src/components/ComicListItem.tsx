import { CardContent, Card } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { ComicProps } from "@/lib/types";

const ComicListItem = ({ id, image, title, series, dates }: ComicProps) => {
  const date: string = dates[0].date;
  const seriesName: string = series.name;
  const comicPath: string = `/comics/${id}`;
  return (
    <Card className="w-full max-w-md" key={id}>
      <a href={comicPath}>
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
          <p className="text-gray-500 dark:text-gray-400">{formatDate(date)}</p>
          <p className="text-gray-500 dark:text-gray-400">{seriesName}</p>
          <p className="text-gray-500 dark:text-gray-400">
            <a href={comicPath}>View</a>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

ComicListItem.displayName = "ComicListItem";

export default ComicListItem;
