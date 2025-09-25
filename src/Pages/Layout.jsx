import { FaBars, FaFacebook, FaFilter, FaHeart, FaInstagram, FaTiktok } from 'react-icons/fa'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
     <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    
        <h1 className=" logo text-3xl text-[#764613]">
          ArtConnect
        </h1>

        <ul className="hidden md:flex space-x-8 font-semibold text-gray-500">
          <li><a href="/" className="hover:text-[#895525]">Accueil</a></li>
          <li><a href="/about" className="hover:text-[#895525]">À propos</a></li>
          <li><a href="/publier" className="hover:text-[#895525]">Publier</a></li>
          <li><a href="/admin" className="hover:text-[#895525]">Admin</a></li>
        </ul>


        <div className="flex items-center space-x-4 text-[#895525]">
          <FaHeart className="cursor-pointer hover:text-[#FEEB9E]" />
          <FaFilter className="cursor-pointer hover:text-[#FEEB9E]" />
          <FaBars className= "md:hidden  cursor-pointer hover:text-[#FEEB9E]" />
        </div>
      </div>
    </nav>

      <main className='px-36'>
          <Outlet />
      </main>
   
     <footer className="bg-[#763613] text-white py-10">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="logo text-2xl font-bold mb-6">ArtConnect Maroc</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">À propos nous</a></li>
              <li><a href="#" className="hover:underline">Our store</a></li>
              <li><a href="#" className="hover:underline">News</a></li>
            </ul>
          </div>

        
          <div>
            <h3 className="font-semibold mb-3">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Help</a></li>
              <li><a href="#" className="hover:underline">Terms</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Social Media</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaFacebook /> <a href="#" className="hover:underline">Facebook</a>
              </li>
              <li className="flex items-center gap-2">
                <FaTiktok /> <a href="#" className="hover:underline">Tiktok</a>
              </li>
              <li className="flex items-center gap-2">
                <FaInstagram /> <a href="#" className="hover:underline">Instagram</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <p>Sukasuk, Kota Tangerang, Banten 15111</p>
            <p>Phone: 0978446897</p>
            <p>Mail: adminmaroc@domain.com</p>
          </div>
        </div>

        <div className="text-center mt-8 text-sm border-t border-gray-400 pt-4 bg-[#895525] ">
          Copyright ©2025. All Rights Reserved
        </div>
      </div>
    </footer>
    </>
  )
}
