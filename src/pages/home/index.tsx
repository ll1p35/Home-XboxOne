import Clock from '../../components/Clock';
import './style.css'


function App() {
  return (
    <>
    
    <div className="w-full min-h-screen flex flex-col items-center pt-6">

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

      <main className="flex flex-col items-center gap-8 w-full max-w-[1500px] px-4 flex-1 mt-[25vh]">

        <div className="flex flex-wrap justify-center gap-5">

          <div
            className="w-[120px] h-[120px] rounded-xl bg-cover bg-center hover:shadow-[inset_0_0_0_3px_#15803d,0_0_12px_#15803d] transition-shadow duration-300"
            style={{ backgroundImage: "url('/images/hollow-knight-capa.webp')" }}
          >
            </div>

          <div className="w-[120px] h-[120px] rounded-xl bg-cover bg-center hover:shadow-[inset_0_0_0_3px_#15803d,0_0_12px_#15803d] transition-shadow duration-300"
            style={{ backgroundImage: "url('/images/celeste-capa.jpg')" }}
          >
          </div>

          <div className="w-[120px] h-[120px] rounded-xl bg-cover bg-center hover:shadow-[inset_0_0_0_3px_#15803d,0_0_12px_#15803d] transition-shadow duration-300"
            style={{ backgroundImage: "url('/images/flight-simulator-capa.jpg')" }}
          >
          </div>

          <div className="w-[120px] h-[120px] rounded-xl bg-cover bg-center hover:shadow-[inset_0_0_0_3px_#15803d,0_0_12px_#15803d] transition-shadow duration-300"
            style={{ backgroundImage: "url('/images/forza-capa.avif')" }}
          >
          </div>

          <div className="w-[120px] h-[120px] rounded-xl bg-cover bg-center hover:shadow-[inset_0_0_0_3px_#15803d,0_0_12px_#15803d] transition-shadow duration-300"
            style={{ backgroundImage: "url('/images/hades-2-capa.jpg')" }}
          >
          </div>

          <div className="w-[120px] h-[120px] rounded-xl bg-cover bg-center hover:shadow-[inset_0_0_0_3px_#15803d,0_0_12px_#15803d] transition-shadow duration-300"
            style={{ backgroundImage: "url('/images/halo-infinite-capa.png')" }}
          >
          </div>

          <div className="w-[120px] h-[120px] rounded-xl bg-cover bg-center hover:shadow-[inset_0_0_0_3px_#15803d,0_0_12px_#15803d] transition-shadow duration-300"
            style={{ backgroundImage: "url('/images/hi-fi-rush-capa.jpg')" }}
          >
          </div>

          <div className="w-[120px] h-[120px] rounded-xl bg-cover bg-center hover:shadow-[inset_0_0_0_3px_#15803d,0_0_12px_#15803d] transition-shadow duration-300"
            style={{ backgroundImage: "url('/images/minecraft-capa.png')" }}
          >
          </div>

          <div className="w-[120px] h-[120px] rounded-xl bg-cover bg-center hover:shadow-[inset_0_0_0_3px_#15803d,0_0_12px_#15803d] transition-shadow duration-300"
            style={{ backgroundImage: "url('/images/redfall-capa.jpg')" }}
          >
          </div>
          
        </div>

        <div className="flex flex-wrap justify-center gap-5 mt-4">  

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
    
    </>
  )
}

export default App