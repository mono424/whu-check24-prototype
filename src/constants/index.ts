export type Category = {
    key: string;
    imageUrl: string;
    keywords: string[];
}

export const categories: Category[] = [
    {
      key: "1",
      imageUrl: "/img/load-city.jpg",
      keywords: ["Stadt", "City", "Urban", "Metropole", "Großstadt"],
    },
    {
      key: "2",
      imageUrl: "/img/load-island.jpg",
      keywords: ["Insel", "Island", "Sea", "Meer", "Ozean"],
    },
    {
      key: "3",
      imageUrl: "/img/load-mountain.jpg",
      keywords: ["Berg", "Mountain", "Alpen", "Alps", "Gebirge"],
    },
];
