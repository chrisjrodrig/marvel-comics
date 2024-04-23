import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Md5 } from "ts-md5";
import { ReadonlyURLSearchParams } from "next/navigation";

const { MARVEL_PRIVATE_KEY: privateKey, MARVEL_PUBLIC_KEY: apiKey } =
  process.env;
const timestamp = new Date().getTime().toString();
const config = {
  privateKey,
  apiKey,
  timestamp,
  generateHash: () => {
    return Md5.hashAsciiStr(timestamp + privateKey + apiKey);
  },
};
const generateHash = () => Md5.hashAsciiStr(timestamp + privateKey + apiKey);

const generateMarvelAPIUrl = (endpoint: string, queryParams: any = {}) => {
  const queryString = new URLSearchParams({
    ...queryParams,
    ts: timestamp,
    apikey: apiKey,
    hash: generateHash(),
  });
  return `https://gateway.marvel.com/v1/public/${endpoint}?${queryString}`;
};
const fetchData = async (url: string) => {
  try {
    const response = await fetch(url, {
      method: "GET",
    });
    return response.json();
  } catch (error) {
    console.error(`Error fetching data from ${url} :`, error);
    return { data: { results: [] } };
  }
};
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

async function getFirstThumbnail(endpoint: string, params = {}) {
  const url = generateMarvelAPIUrl(endpoint, params);
  const response = await fetch(url, { method: "GET" });
  const data = await response.json();
  const firstResult = data.data.results[0];
  return firstResult.thumbnail.path + "." + firstResult.thumbnail.extension;
}

async function getAllComics() {
  const url = generateMarvelAPIUrl("comics", {
    format: "digital comic",
    formatType: "comic",
    noVariants: true,
    hasDigitalIssue: true,
    orderBy: "-onsaleDate",
  });
  return fetchData(url);
}
async function getFirstFiveComics() {
  const url = generateMarvelAPIUrl("comics", {
    format: "digital comic",
    formatType: "comic",
    noVariants: true,
    hasDigitalIssue: true,
    orderBy: "-onsaleDate",
    limit: 5,
  });
  return fetchData(url);
}
async function getAllCharacters() {
  const url = generateMarvelAPIUrl("characters", {});
  return fetchData(url);
}

async function getCharacterFirstThumbnail(characterName: string) {
  return getFirstThumbnail("characters", { name: characterName });
}

async function getComicsFirstThumbnail(comicId: number) {
  return getFirstThumbnail(`comics/${comicId}`);
}

async function getAllSeries() {
  const url = generateMarvelAPIUrl("series", {});
  return fetchData(url);
}

async function getComicById(comicId: string) {
  const url = generateMarvelAPIUrl(`comics/${comicId}`, {});
  return fetchData(url);
}
async function getSeriesStories(seriesId: string) {
  const url = generateMarvelAPIUrl(`series/${seriesId}`, {});
  return fetchData(url);
}

export const titleCase = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const formatDate = (dateString: string): string => {
  const dateObj = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return dateObj.toLocaleDateString("en-US", options);
};

export const createURL = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams,
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;
  return `${pathname}${queryString}`;
};

export {
  getAllComics,
  getAllCharacters,
  getCharacterFirstThumbnail,
  getComicsFirstThumbnail,
  getFirstFiveComics,
  getComicById,
  getAllSeries,
  getSeriesStories,
  config,
};
