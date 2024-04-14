import { getComicById } from "@/lib/utils";
import ComicItem from "@/components/ComicItem";
export default async function Comic({ params }: { params: { id: string } }) {
  const comic = await getComicById(params.id);
  const comicData = comic?.data?.results[0];
  if (!comicData) {
    return null;
  }
  const { id, title, issueNumber, textObjects, format, series } = comicData;
  return (
    <div className="container mx-auto">
      <ComicItem
        key={id}
        id={id}
        images={{
          path: comicData.images[0]?.path,
          extension: comicData.images[0]?.extension,
        }}
        title={title}
        format={format}
        series={{ name: series.name, resourceURI: series.resourceURI }}
        issueNumber={issueNumber}
        textObjects={{
          type: textObjects[0]?.type,
          language: textObjects[0]?.language,
          text: textObjects[0]?.text,
        }}
        urls={{ type: textObjects[0]?.type, url: textObjects[0]?.url }}
      />
    </div>
  );
}
