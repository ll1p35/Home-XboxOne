import Clock from '../../components/Clock';
import './style.css'

function App() {
  return (
    <>
      <nav className="mt-[30px] flex justify-between items-center w-[88vw] h-[100px]">
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

      <div
        className="w-[110px] h-[110px] rounded-[10px] flex flex-col items-center bg-cover justify-center"
        style={{ backgroundImage: "url('/images/hollow-knight-capa.webp')" }}
      >
        </div>
    </>
  )
}

export default App