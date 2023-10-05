import Eyecatcher from '@/components/eyecatcher'
import StartForm from '@/components/start-form'

export default function Home() {
  return (
    <main>
      <Eyecatcher
        title={"Exclusive Urlaubsangebote"}
        subtitle={<span>
          Spaare bis zu <b>50%</b> bei deinem nächsten Urlaub!
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
            children: <span>Du bekommst ein individuell auf dich angepasstes Angebot</span>
          }
        ]}
      />
      <StartForm />
    </main>
  )
}
