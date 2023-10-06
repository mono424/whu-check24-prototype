import Eyecatcher from '@/components/eyecatcher'
import InstagramPost from '@/components/instagram-post'
import StartForm from '@/components/start-form'

const instagramPosts = [
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
  {
    key: "4",
    profilePic: "https://www.check24.de/favicon-32x32.png",
    imageUrl: "/img/vac4.jpg",
    username: "CHECK24",
    caption: "Travel far, travel often, and travel with an open heart. 🌄🎒 #GlobeTrotter"
  }
];

export default function Home() {
  return (
    <main>
      <Eyecatcher
        title={"Exklusive Urlaubsangebote"}
        subtitle={<span>
          Spare bis zu <b>50%</b> bei Deinem nächsten Urlaub!
        </span>}
        features={[
          {
            key: "Perfekte Reiseplanung",
            children: <span>Wir übernehmen die Reiseplanung von Flug bis Mietwagen</span>
          },
          {
            key: "Bestpreisgarantie",
            children: <span>Wir garantieren exklusive Best-Preise</span>
          },
          {
            key: "Individuelles Angebot",
            children: <span>Du bekommst ein individuell auf Dich angepasstes Angebot</span>
          }
        ]}
      />
      <StartForm />
      <h3 className="mx-3 my-4 text-[#666666] text-xl">Community Momente</h3>
      <div className="flex overflow-y-auto">
        {instagramPosts.map(({profilePic, caption, imageUrl, username, key}) => <InstagramPost key={key} profilePic={profilePic} imageUrl={imageUrl} username={username} caption={caption} />)}
      </div>
    </main>
  )
}
