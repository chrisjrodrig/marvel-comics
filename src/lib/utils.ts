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
    const marvelHash = Md5.hashAsciiStr(timestamp + privateKey + apiKey);
    return marvelHash;
  },
};
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

async function getAllComics() {
  const { apiKey, timestamp } = config;
  const marvelHash = config.generateHash();
  const url = `https://gateway.marvel.com/v1/public/comics?format=digital%20comic&formatType=comic&noVariants=true&hasDigitalIssue=true&orderBy=-onsaleDate&ts=${timestamp}&apikey=${apiKey}&hash=${marvelHash}`;
  try {
    const response = await fetch(url, {
      method: "GET",
    });
    return response.json();
  } catch (error) {
    console.error("Error fetching all comics:", error);
    return { data: { results: [] } };
  }
}

async function getComicById(comicId: string) {
  const { apiKey, timestamp } = config;
  const marvelHash = config.generateHash();
  const url = `https://gateway.marvel.com/v1/public/comics/${comicId}?ts=${timestamp}&apikey=${apiKey}&hash=${marvelHash}`;
  const response = await fetch(url, {
    method: "GET",
  });
  return response.json();
}

async function getAllSeries() {
  const { apiKey, timestamp } = config;
  const marvelHash = config.generateHash();
  const url = `https://gateway.marvel.com/v1/public/series?ts=${timestamp}&apikey=${apiKey}&hash=${marvelHash}`;
  const response = await fetch(url, {
    method: "GET",
  });
  return response.json();
}

async function getSeriesStories(seriesId: string) {
  const { apiKey, timestamp } = config;
  const marvelHash = config.generateHash();
  const url = `https://gateway.marvel.com/v1/public/series/${seriesId}?ts=${timestamp}&apikey=${apiKey}&hash=${marvelHash}`;
  const response = await fetch(url, {
    method: "GET",
  });
  return response.json();
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
  params: URLSearchParams | ReadonlyURLSearchParams
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;
  return `${pathname}${queryString}`;
};


export { getAllComics, getComicById, getAllSeries, getSeriesStories, config };
