import ComicListItem from "@/components/ComicListItem";
import { getSeriesStories, titleCase, getComicById, config } from "@/lib/utils";
import Image from "next/image";

export default async function SeriesStoriesPage({
  params,
}: {
  params: { id: string };
}) {
  const allSeriesStories = await getSeriesStories(params.id);
  const {
    id,
    title,
    description,
    startYear,
    endYear,
    rating,
    type,
    thumbnail,
    comics,
  }: {
    id: number;
    title: string;
    format: string;
    type: string;
    startYear: string;
    endYear: string;
    thumbnail: { path: string; extension: string };
    description: string;
    resourceURI: string;
    urls: { type: string; url: string };
    rating: string;
    modified: string;
    creators: {
      available: number;
      collectionURI: string;
      items: { name: string; resourceURI: string }[];
    };
    characters: { available: number; collectionURI: string };
    stories: { available: number; collectionURI: string };
    comics: {
      available: number;
      collectionURI: string;
      items: { name: string; resourceURI: string }[];
    };
  } = allSeriesStories?.data.results[0];

  const fetchComicDetails = async () => {
    const { apiKey, timestamp } = config;
    if (!apiKey) {
      throw new Error("API key is not defined");
    }
    const marvelHash = config.generateHash();
    const comicDetailsArray = [];
    for (const comic of comics.items) {
      const url = new URL(comic.resourceURI);
      url.searchParams.append("ts", timestamp.toString());
      url.searchParams.append("apikey", apiKey);
      url.searchParams.append("hash", marvelHash);
      const res = await fetch(url.toString());
      const comicDetails = await res.json();
      const allIds = comicDetails.data.results.map(
        (result: { id: string }) => result.id,
      );
      for (const id of allIds) {
        const comicDetail = await getComicById(id);
        comicDetailsArray.push(comicDetail);
      }
    }
    return comicDetailsArray;
  };
  const comicDetailsArray = await fetchComicDetails();
  return (
    <div key={id}>
      <h1>Series Page</h1>
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <p>Start Year: {startYear}</p>
      <p>End Year: {endYear}</p>
      <p>Rating: {rating}</p>
      <p>Type: {titleCase(type)}</p>
      <Image
        src={thumbnail.path + "." + thumbnail.extension}
        alt={title}
        width={200}
        height={200}
      />
      <p>Comics: {comics.available}</p>
      {comicDetailsArray &&
        comicDetailsArray.map((comic) => (
          <ComicListItem
            key={comic?.data?.results[0]?.id}
            id={comic?.data?.results[0]?.id}
            image={
              comic?.data?.results[0]?.thumbnail?.path +
              "." +
              comic?.data?.results[0]?.thumbnail?.extension
            }
            title={comic?.data?.results[0]?.title}
            format={comic?.data?.results[0]?.format}
            series={comic?.data?.results[0]?.series}
            dates={comic?.data?.results[0]?.created_at}
          />
        ))}
    </div>
  );
}
