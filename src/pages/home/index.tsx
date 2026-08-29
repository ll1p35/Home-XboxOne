import { useState} from 'react';
import Clock from '../../components/Clock';
import BgImage from '../../components/BgImage';
import '../../index.css'


function App() {
  const [background, setBackground] = useState("/images/background-inicio.jpg");
  const [fade, setFade] = useState(true);

  const changeBackground = (imagePath: string) => {

    setFade(false);

    setTimeout(() => {
      setBackground(imagePath);
      setFade(true);
    }, 300);
  };

  // Lista dos jogos (fica bem organizado)
  const games = [
    {
      capa: "/images/hollow-knight-capa.webp",
      background: "/images/hollow-knight-background.jpg",
      name: "Hollow Knight",
    },
    {
      capa: "/images/celeste-capa.jpg",
      background: "/images/celeste-background.jpg",
      name: "Celeste",
    },
    {
      capa: "/images/flight-simulator-capa.jpg",
      background: "/images/flight-simulator-background.jpg",
      name: "Flight Simulator",
    },
    {
      capa: "/images/forza-capa.avif",
      background: "/images/forza-background.jpg",
      name: "Forza Horizon 5",
    },
    {
      capa: "/images/hades-2-capa.jpg",
      background: "/images/hades-2-background.webp",
      name: "Hades 2",
    },
    {
      capa: "/images/halo-infinite-capa.png",
      background: "/images/halo-infinite-background.jpg",
      name: "Halo Infinite",
    },
    {
      capa: "/images/hi-fi-rush-capa.jpg",
      background: "/images/hi-fi-rush-background.jpg",
      name: "Hi-Fi Rush",
    },
    {
      capa: "/images/minecraft-capa.png",
      background: "/images/minecraft-background.jpg",
      name: "Minecraft",
    },
    {
      capa: "/images/brotato-capa.png",
      background: "/images/brotato-background.png",
      name: "Brotato",
    },
  ];

  return (
    <>
    <div className="relative w-full min-h-screen">

      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ease-in-out ${
        fade ? "opacity-100" : "opacity-0"
      }`}
        style={{ backgroundImage: `url(${background})` }}
      />

      <div className="relative z-10 w-full min-h-screen flex flex-col items-center pt-6">

        <nav className="flex justify-between items-center w-[92%] max-w-[1500px] h-16 mb-10">

          <div className="flex items-center gap-3">
            <img className="w-11 h-11 rounded-full" src="/images/user.jpg" alt="User" />
            <div className="flex flex-col leading-tight">
              <p className="text-sm font-medium">fsantanaf</p>
              <div className="flex items-center gap-1.5">
                <img className="w-3.5 h-3.5" src="/images/icons/gamerscore-icon.png" alt="Gamerscore" />
                <p className="text-sm">21,337</p>
              </div>
            </div>
          </div>

          <ul className="flex items-center gap-7 list-none">
            <li><img className="w-6 h-6" src="/images/icons/library.png" alt="Library" /></li>
            <li><img className="w-6 h-6" src="/images/icons/microsoft-store.png" alt="Store" /></li>
            <li><img className="w-6 h-6" src="/images/icons/gamepass.png" alt="GamePass" /></li>
            <li><img className="w-5 h-5" src="/images/icons/search.png" alt="Search" /></li>
            <li><img className="w-5 h-5" src="/images/icons/settings.png" alt="Settings" /></li>
          </ul>

          <ul className="flex items-center gap-3 list-none">
            <li><img className="w-5 h-5" src="/images/icons/mic.png" alt="Microphone" /></li>
            <li><img className="w-5 h-5" src="/images/icons/battery.png" alt="Battery" /></li>
            <li><Clock /></li>
          </ul>

        </nav>

        <main className="flex flex-col items-center gap-5 w-full max-w-[1500px] px-4 flex-1 mt-[35vh]">

          <div className="flex flex-wrap justify-center items-end gap-5">

            {games.map((game) => (
              <BgImage
                key={game.capa}
                capa={game.capa}
                background={game.background}
                name={game.name}
                onSelect={changeBackground}
                isSelected={background === game.background}   // ← compara com o background atual
              />
            ))}
            
          </div>

          <div className="flex flex-wrap justify-center gap-5">  

            <div
              className="relative w-[295px] h-[175px] rounded-md bg-cover bg-center"
              style={{ backgroundImage: "url('/images/browse your games.jpg')" }}
            >
              <p className="absolute bottom-3 left-3 text-[18px] font-light">
                Browse your games
              </p>
            </div>

            <div
              className="relative w-[295px] h-[175px] rounded-md bg-cover bg-center"
              style={{ backgroundImage: "url('/images/friends-are-playing.jpg')" }}
            >
              <p className="absolute bottom-3 left-3 text-[18px] font-light">
                Friends are playing
              </p>
            </div>

            <div
              className="relative w-[295px] h-[175px] rounded-md bg-cover bg-center"
              style={{ backgroundImage: "url('/images/gamepass.jpg')" }}
            >
              <p className="absolute bottom-3 left-3 text-[18px] font-light">
                Play Beast of Reincarnation
              </p>
            </div>

            <div
              className="relative w-[295px] h-[175px] rounded-md bg-cover bg-center"
              style={{ backgroundImage: "url('/images/Elite.jpg')" }}
            >
              <p className="absolute bottom-3 left-3 text-[18px] font-light">
                Find your Elite
              </p>
            </div>

          </div>

        </main>

      </div>
    
    </div>
    </>
  )
}

export default App