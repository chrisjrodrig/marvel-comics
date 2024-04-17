import ButtonLink from "@/components/ButtonLink";
export default function Search() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Search</div>
      <div className="grid gap-4 p-4 grid-cols-2 w-1/2">
        <ButtonLink path="/comics" text="Comics" />
        <ButtonLink path="/series" text="Series" />
        <ButtonLink path="/characters" text="Characters" />
        <ButtonLink path="/creators" text="Creators" />
        <ButtonLink path="/events" text="Events" />
      </div>
    </main>
  );
}
