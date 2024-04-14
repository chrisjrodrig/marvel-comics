const ComicListItem = ({
  id,
  image,
  title,
  format,
  series,
}: {
  id: number;
  image: string;
  title: string;
  format: string;
  series: {
    name: string;
  };
}) => {
  return (
    <div key={id} className="relative group overflow-hidden rounded-lg">
      <a href={`/comics/${id}`}>
        <img
          alt={title}
          className="object-cover w-full h-60"
          height={500}
          src={image}
          style={{
            aspectRatio: "400/500",
            objectFit: "cover",
          }}
          width={400}
        />
      </a>
      <div className="bg-white p-4 dark:bg-gray-950">
        <h3 className="font-semibold text-lg md:text-xl">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{format}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {series.name}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          <a href={`/comics/${id}`}>View</a>
        </p>
      </div>
    </div>
  );
};

ComicListItem.displayName = "ComicListItem";

export default ComicListItem;
