export type Category = {
    key: string;
    imageUrl: string;
}

export const categories: Category[] = [
    {
      key: "1",
      imageUrl: "/img/load-city.jpg",
    },
    {
      key: "2",
      imageUrl: "/img/load-island.jpg",
    },
    {
      key: "3",
      imageUrl: "/img/load-mountain.jpg",
    },
];

export default {
    category: categories[0],
};
