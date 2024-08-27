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
      <h1 className="text-2xl font-medium mb-10">Kategori Olahraga</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {categoriesData.map((category) => (
          <div
            key={category.id}
            className="flex flex-col gap-2.5 items-center px-4 py-6 bg-gray-100"
          >
            <img
              width="80px"
              height="80px"
              src={category.iconUrl}
              alt={category.slug}
            />
            <p>{category?.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
