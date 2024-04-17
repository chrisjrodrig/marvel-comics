import { CarouselResentComics } from "@/components/CarouselResentComics";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl font-bold text-white">Recently Added Comics</h1>
      <CarouselResentComics />
    </main>
  );
}
