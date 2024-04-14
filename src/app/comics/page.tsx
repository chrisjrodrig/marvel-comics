import { getAllComics } from "@/lib/utils";
import ComicListItem from "@/components/ComicListItem";

export default async function ComicsListPage() {
  const allComics = await getAllComics();

  return (
    <div>
      <h1>Comics List Page</h1>
      <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
        {allComics?.data.results.map((comic: any) => (
          <ComicListItem
            key={comic.id}
            id={comic.id}
            image={comic.thumbnail.path + "." + comic.thumbnail.extension}
            title={comic.title}
            format={comic.format}
            series={comic.series}
          />
        ))}
      </div>
    </div>
  );
}
