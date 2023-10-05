import Eyecatcher from '@/components/eyecatcher'
import InstagramPost from '@/components/instagram-post'
import StartForm from '@/components/start-form'

const classifier = [
  {
    key: "1",
    profilePic: "https://www.check24.de/favicon-32x32.png",
    imageUrl: "/img/vac1.jpg",
    username: "CHECK24",
    caption: "Chasing horizons and collecting memories. ✈️🌍 #Wanderlust"
  },
  {
    key: "2",
    profilePic: "https://www.check24.de/favicon-32x32.png",
    imageUrl: "/img/vac2.jpg",
    username: "CHECK24",
    caption: "Sun, sea, and a splash of serenity. 🌴☀️ #VacayModeOn"
  },
  {
    key: "3",
    profilePic: "https://www.check24.de/favicon-32x32.png",
    imageUrl: "/img/vac3.jpg",
    username: "CHECK24",
    caption: "Lost in paradise, and not looking to be found. 🏝️🍹 #EscapeTheOrdinary"
  },
];

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <img src="/img/logo.png" alt="logo" className="w-1/2" />
    </main>
  )
}
