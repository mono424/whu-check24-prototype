export type Category = {
    key: string;
    imageUrl: string;
    keywords: string[];
    details: {
        image: string;
        title: string;
        destination: string;
        startAirport: string;
        endAirport: string;
        hotel: string;
        room: string;
        catering: string;
        carCategorie: string;
        pickup: string;
        dropoff: string;
        price: string;
        co2: string;
    }
}

export const categories: Category[] = [
    {
      key: "1",
      imageUrl: "/img/load-city.jpg",
      keywords: ["stadt", "city", "urban", "metropole", "großstadt"],
      details: {
        image: "/img/cat-singapur.jpg",
        title: "Städtereise nach Singapur",
        destination: "Singapur",
        startAirport: "Köln-Bonn (CGN)",
        endAirport: "Flughafen Singapur (SIN)",
        hotel: "Hotel Singapur",
        room: "Doppelzimmer",
        catering: "Frühstück",
        carCategorie: "Kleinwagen",
        pickup: "Flughafen",
        dropoff: "Flughafen",
        price: "1.200€",
        co2: "1,2t",
      }
    },
    {
      key: "2",
      imageUrl: "/img/load-island.jpg",
      keywords: ["strand", "beach", "insel", "inseln", "island", "sea", "meer", "ozean"],
      details: {
        image: "/img/cat-kreta.jpg",
        title: "Insel-Urlaub auf Kreta",
        destination: "Kreta",
        startAirport: "Köln-Bonn (CGN)",
        endAirport: "Flughafen Heraklion (HER)",
        hotel: "Hotel Kreta",
        room: "Doppelzimmer",
        catering: "Halbpension",
        carCategorie: "Kleinwagen",
        pickup: "Flughafen",
        dropoff: "Flughafen",
        price: "1.000€",
        co2: "0,3t",
      }
    },
    {
      key: "3",
      imageUrl: "/img/load-mountain.jpg",
      keywords: ["berg", "berge", "mountain", "alpen", "alps", "gebirge", "wandern"],
      details: {
        image: "/img/cat-innsbruck.jpg",
        title: "Urlaub in den Bergen",
        destination: "Innsbruck",
        startAirport: "Köln-Bonn (CGN)",
        endAirport: "Flughafen Innsbruck (INN)",
        hotel: "Hotel Innsbruck",
        room: "Doppelzimmer",
        catering: "Frühstück",
        carCategorie: "Kleinwagen",
        pickup: "Flughafen",
        dropoff: "Flughafen",
        price: "450€",
        co2: "0,4t",
      }
    },
    {
      key: "4",
      imageUrl: "/img/load-roadtrip.jpg",
      keywords: ["roadtrip", "norwegen", "natur", "landschaft", "reise", "wohnwagen"],
      details: {
        image: "/img/cat-norway.jpg",
        title: "Roadtrip durch Norwegen",
        destination: "Norwegen", 
        startAirport: "Köln-Bonn (CGN)",
        endAirport: "Flughafen Oslo (OSL)", 
        hotel: "-",
        room: "-",
        catering: "-",
        carCategorie: "SUV oder Wohnmobil",
        pickup: "Flughafen", 
        dropoff: "Flughafen", 
        price: "279€",
        co2: "0.5t", 
      }
    }
];

export function predict(promp: string) : number {
    const keywords = promp.split(" ");
    const categoryIndex = categories.findIndex(category => {
        return keywords.some(keyword => category.keywords.includes(keyword.toLowerCase()));
    });
    return categoryIndex === -1 ? 0 : categoryIndex;
}
