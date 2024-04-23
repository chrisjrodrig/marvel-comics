export interface CharacterProps {
  id: number;
  name: string;
  description: string;
  thumbnail: { path: string; extension: string };
}
export interface ComicProps {
  thumbnail?: { path: string; extension: string };
  id: number;
  image: string;
  title: string;
  format: string;
  series: {
    name: string;
  };
  dates: { type: string; date: string }[];
}
