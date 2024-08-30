import { Link } from "react-router-dom";

type Category = {
  id: string;
  iconUrl: string;
  name: string;
  slug: string;
};

type CategoriesParams = {
  categoriesData: Category[];
};

export function Categories({ categoriesData }: CategoriesParams) {
  return (
    <>
      <h2 className="text-3xl text-j-gray-dark font-semibold mb-10">
        Kategori Olahraga
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {categoriesData.map((category) => (
          <Link to={`/events?q=${category.slug}`}>
            <div
              key={category.id}
              className="rounded-lg flex flex-col gap-2.5 items-center px-4 py-6 bg-gray-100"
            >
              <img
                width="80px"
                height="80px"
                src={category.iconUrl}
                alt={category.slug}
              />
              <p className="text-2xl text-j-gray-dark">{category?.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
