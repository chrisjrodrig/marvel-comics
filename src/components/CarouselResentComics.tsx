import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
type ComicCardProps = {
  id: number;
  imageUrl: string;
};

const ComicCard: React.FC<ComicCardProps> = ({ id, imageUrl }) => (
  <CarouselItem key={id} className="pl-1 md:basis-1/2 lg:basis-1/5">
    <div className="p-1">
      <Card>
        <CardContent className="flex aspect-square items-center justify-center p-6">
          <Image src={imageUrl} alt={`Comic ${id}`} />
        </CardContent>
      </Card>
    </div>
  </CarouselItem>
);
export default function CarouselRecentComics({ comics = [] }) {
  console.log(`first5Comics1`, comics);
  return (
    <Carousel className="w-full max-w-5xl">
      <CarouselContent className="-ml-1">
        {comics.map((comic: ComicCardProps) => (
          <ComicCard key={comic.id} id={comic.id} imageUrl={comic.imageUrl} />
        ))}
      </CarouselContent>
      <CarouselPrevious /> <CarouselNext />
    </Carousel>
  );
}
