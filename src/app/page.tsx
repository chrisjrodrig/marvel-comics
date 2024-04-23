import CarouselResentComics from "@/components/CarouselResentComics";
import { getFirstFiveComics } from "@/lib/utils";
const Home = async () => {
  const comics = await getFirstFiveComics();
  const first5Comics = comics.data.results;
  const first5ComicsData = first5Comics.map(
    (comic: { id: number; thumbnail: { path: string; extension: string } }) => {
      return {
        id: comic.id,
        imageUrl: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
      };
    },
  );
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {" "}
      <h1 className="text-3xl font-bold text-white">
        Recently Added Comics
      </h1>{" "}
      <CarouselResentComics comics={first5ComicsData} />{" "}
    </main>
  );
};
export default Home;
