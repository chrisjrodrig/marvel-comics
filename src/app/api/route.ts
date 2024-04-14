// api/routes.ts
import { NextApiRequest, NextApiResponse } from "next";
import "dotenv/config";

export default async function getAllComics(res: NextApiResponse) {
  const url = "https://gateway.marvel.com/v1/public/comics";
  const params = {
    apikey: process.env.MARVEL_PUBLIC_KEY,
  };

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });
    const comicsData = await response.json();
    res.status(200).json(comicsData);
  } catch (error) {
    console.error("Error fetching comics:", error);
    res.status(500).json({ error: "Failed to fetch comics" });
  }
}
