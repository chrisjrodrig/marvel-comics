import { getAllCharacters } from "@/lib/utils";
import Image from "next/image";
import { CharacterProps } from "@/lib/types";

export default async function CharactersPage() {
  const characters = await getAllCharacters();

  return (
    <div>
      {" "}
      <h1 className="text-2xl text-white">Characters</h1>{" "}
      {characters?.data.results.map((character: CharacterProps) => {
        const thumbnailUrl =
          character.thumbnail.path + "." + character.thumbnail.extension;
        return (
          <div className="text-white" key={character.id}>
            {" "}
            <h2>{character.name}</h2> <p>{character.description}</p>{" "}
            <Image
              src={thumbnailUrl}
              alt={character.name}
              width={200}
              height={200}
            />{" "}
          </div>
        );
      })}{" "}
    </div>
  );
}
