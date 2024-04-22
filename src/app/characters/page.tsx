import { getAllCharacters } from "@/lib/utils";
import Image from "next/image";

export default async function CharactersPage() {
  const characters = await getAllCharacters();

  return (
    <div>
      <h1 className="text-2xl text-white">Characters</h1>

      {characters?.data.results.map(
        (character: {
          id: number;
          name: string;
          description: string;
          thumbnail: { path: string; extension: string };
        }) => (
          <div className="text-white" key={character.id}>
            <h2>{character.name}</h2>
            <p>{character.description}</p>
            <Image
              src={
                character.thumbnail.path + "." + character.thumbnail.extension
              }
              alt={character.name}
              width={200}
              height={200}
            />
          </div>
        ),
      )}
    </div>
  );
}
