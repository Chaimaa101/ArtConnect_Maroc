
import Search from '../Components/search'
import Bartitre from '../Components/Bartitre'

export default function Home() {
  return (
    <>
    <Search />
     <div className="w-full flex justify-center">
        <img
          src="src/assets/morocco.jpg" 
          alt="Morocco Skyline"
          className="max-w-4xl"
        />
    </div>
    <Bartitre title="Evénements"> 
      <h1>HELOOOOOOOOOOOOO</h1>
    </Bartitre>
    </>
  
  )
}
