import ButtonLink from "@/components/ButtonLink";
import CategoryItem from "@/components/CategoryItem";
export default function Search() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>Search</div>
      <div className="grid gap-4 p-4 grid-cols-2 w-1/2">
        <CategoryItem path="/comics" title="Comics" variant="comics" />
        <CategoryItem path="/series" title="Series" variant="series" />
        <CategoryItem
          path="/characters"
          title="Characters"
          variant="characters"
        />
        <CategoryItem path="/creators" title="Creators" variant="creators" />
        <CategoryItem path="/events" title="Events" variant="events" />
      </div>
    </main>
  );
}
