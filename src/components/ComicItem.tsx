import Image from "next/image";

const ComicItem = ({
  id,
  images,
  title,
  format,
  series,
  issueNumber,
  textObjects,
  urls,
}: {
  id: number;
  images?: {
    path: string;
    extension: string;
  };
  title: string;
  format: string;
  series: {
    name: string;
    resourceURI: string;
  };
  issueNumber: string;
  textObjects?: { type: string; language: string; text: string };
  urls: { type: string; url: string };
}) => {
  function sliceSeriesID(url: string) {
    return url.slice(0, url.length).split("/").pop();
  }
  if (urls.type === "reader") {
    return urls.url;
  }
  const seriesID = sliceSeriesID(series.resourceURI);
  return (
    <div key={id} className="flex flex-row">
      <div className="basis-1/2">
        <Image
          className="h-90 object-cover w-full"
          src={images?.path + "." + images?.extension}
          alt={title}
        />
      </div>
      <div className="basis-1/2 p-6">
        <h1 className="text-3xl">{title}</h1>
        <h2>Issue Number: {issueNumber}</h2>
        <p>Format: {format}</p>
        <p>
          Series: <a href={`/series/${seriesID}`}> {series.name}</a>
        </p>
        {textObjects && textObjects.text && (
          <p>Description {textObjects.text}</p>
        )}
        {urls && urls.url && (
          <p>
            <a href={urls.url}>Read more</a>
          </p>
        )}
      </div>
    </div>
  );
};

ComicItem.displayName = "ComicItem";

export default ComicItem;
