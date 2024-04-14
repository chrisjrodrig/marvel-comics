import { getAllSeries } from "@/lib/utils";
import SeriesListItem from "@/components/SeriesListItem";

export default async function SeriesListPage() {
  const allSeries = await getAllSeries();

  return (
    <div>
      <h1>Series List Page</h1>
      <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
        {allSeries?.data.results.map((series: any) => (
          <SeriesListItem
            key={series.id}
            id={series.id}
            image={series.thumbnail.path + "." + series.thumbnail.extension}
            title={series.title}
            format={series.format}
            series={series.series}
          />
        ))}
      </div>
    </div>
  );
}
