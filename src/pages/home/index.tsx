import Clock from '../../components/Clock';
import './style.css'


function App() {
  return (
    <>
      <nav className="mt-[30px] flex justify-between items-center w-[88vw] h-[20vh]">
        <div className="flex justify-center items-center gap-[15px]">
          <img className="w-[45px] h-[45px] rounded-full" src="/images/user.jpg" alt="User" />
          <div className="flex flex-col items-start gap-[5px]">
            <p>fsantanaf</p>
            <div className="flex items-center gap-[5px]">
            <img className="w-[15px] h-[15px]" src="/images/icons/gamerscore-icon.png" alt="Gamerscore" />
            <p>21,337</p>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex list-none gap-[30px] p-0">
            <li className="w-[25px] h-[25px]"><img src="/images/icons/library.png" alt="Library" /></li>
            <li className="w-[25px] h-[25px]"><img src="/images/icons/microsoft-store.png" alt="Store" /></li>
            <li className="w-[25px] h-[25px]"><img src="/images/icons/gamepass.png" alt="GamePass" /></li>
            <li className="w-[20px] h-[20px]"><img src="/images/icons/search.png" alt="Search" /></li>
            <li className="w-[20px] h-[20px]"><img src="/images/icons/settings.png" alt="Settings" /></li>
          </ul>
        </div>
        <div>
          <ul className="flex list-none gap-[10px] p-0">
            <li className="w-[20px] h-[20px]"><img src="/images/icons/mic.png" alt="Microphone" /></li>
            <li className="w-[20px] h-[20px]"><img src="/images/icons/battery.png" alt="Battery" /></li>
            <li><Clock /></li>
          </ul>
        </div>
      </nav>

      <main className="flex flex-col items-center justify-center gap-[30px] h-[80vh]">

        <div className="flex gap-[20px] align-center justify-center h-[250px] items-end">

          <div
            className="w-[120px] h-[120px] rounded-[10px] flex flex-col items-center bg-cover justify-center shadow-[none] hover:shadow-[inset_0_0_0_3px_#15803d,0_0_10px_#15803d] overflow-hidden transition-shadow duration-300"
            style={{ backgroundImage: "url('/images/hollow-knight-capa.webp')" }}
          >
            </div>

          <div className="w-[120px] h-[120px] rounded-[10px] flex flex-col items-center bg-cover justify-center shadow-[none] hover:shadow-[inset_0_0_0_3px_#15803d,0_0_10px_#15803d] overflow-hidden transition-shadow duration-300"
            style={{ backgroundImage: "url('/images/celeste-capa.jpg')" }}
          >
          </div>

          <div className="w-[120px] h-[120px] rounded-[10px] flex flex-col items-center bg-cover justify-center shadow-[none] hover:shadow-[inset_0_0_0_3px_#15803d,0_0_10px_#15803d] overflow-hidden transition-shadow duration-300"
            style={{ backgroundImage: "url('/images/flight-simulator-capa.jpg')" }}
          >
          </div>

          <div className="w-[120px] h-[120px] rounded-[10px] flex flex-col items-center bg-cover justify-center shadow-[none] hover:shadow-[inset_0_0_0_3px_#15803d,0_0_10px_#15803d] overflow-hidden transition-shadow duration-300"
            style={{ backgroundImage: "url('/images/forza-capa.avif')" }}
          >
          </div>

          <div className="w-[120px] h-[120px] rounded-[10px] flex flex-col items-center bg-cover justify-center shadow-[none] hover:shadow-[inset_0_0_0_3px_#15803d,0_0_10px_#15803d] overflow-hidden transition-shadow duration-300"
            style={{ backgroundImage: "url('/images/hades-2-capa.jpg')" }}
          >
          </div>

          <div className="w-[120px] h-[120px] rounded-[10px] flex flex-col items-center bg-cover justify-center shadow-[none] hover:shadow-[inset_0_0_0_3px_#15803d,0_0_10px_#15803d] overflow-hidden transition-shadow duration-300"
            style={{ backgroundImage: "url('/images/halo-infinite-capa.png')" }}
          >
          </div>

          <div className="w-[120px] h-[120px] rounded-[10px] flex flex-col items-center bg-cover justify-center shadow-[none] hover:shadow-[inset_0_0_0_3px_#15803d,0_0_10px_#15803d] overflow-hidden transition-shadow duration-300"
            style={{ backgroundImage: "url('/images/hi-fi-rush-capa.jpg')" }}
          >
          </div>

          <div className="w-[120px] h-[120px] rounded-[10px] flex flex-col items-center bg-cover justify-center shadow-[none] hover:shadow-[inset_0_0_0_3px_#15803d,0_0_10px_#15803d] overflow-hidden transition-shadow duration-300"
            style={{ backgroundImage: "url('/images/minecraft-capa.png')" }}
          >
          </div>

          <div className="w-[120px] h-[120px] rounded-[10px] flex flex-col items-center bg-cover justify-center shadow-[none] hover:shadow-[inset_0_0_0_3px_#15803d,0_0_10px_#15803d] overflow-hidden transition-shadow duration-300"
            style={{ backgroundImage: "url('/images/redfall-capa.jpg')" }}
          >
          </div>
          
        </div>

        <div className="flex gap-[20px] p-20 items-end">  

          <div
            className="relative flex flex-col justify-end items-start w-[295px] h-[180px] rounded-[5px] bg-cover font-light text-[19px]"
            style={{ backgroundImage: "url('/images/browse your games.jpg')" }}
          >
            <p className="absolute bottom-[10px] left-[10px]">
              Browse your games
            </p>
          </div>

          <div
            className="relative flex flex-col justify-end items-start w-[295px] h-[180px] rounded-[5px] bg-cover text-lg text-[19px]"
            style={{ backgroundImage: "url('/images/friends-are-playing.jpg')" }}
          >
            <p className="absolute bottom-[10px] left-[10px]">
              Friends are playing
            </p>
          </div>

          <div
            className="relative flex flex-col justify-end items-start w-[295px] h-[180px] rounded-[5px] bg-cover font-light text-[19px]"
            style={{ backgroundImage: "url('/images/gamepass.jpg')" }}
          >
            <p className="absolute bottom-[10px] left-[10px]">
              Play Beast of Reincarnation
            </p>
          </div>

          <div
            className="relative flex flex-col justify-end items-start w-[295px] h-[180px] rounded-[5px] bg-cover font-light text-[19px]"
            style={{ backgroundImage: "url('/images/Elite.jpg')" }}
          >
            <p className="absolute bottom-[10px] left-[10px]">
              Find your Elite
            </p>
          </div>

        </div>

      </main>

    </>
  )
}

export default App