import { FaBars, FaFacebook, FaFilter, FaHeart, FaInstagram, FaTiktok } from 'react-icons/fa'
import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <nav className="w-full bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
         <Link to="/"> <h1 className="logo text-3xl text-[#764613]">
            ArtConnect
          </h1>
          </Link>

          <ul className="hidden md:flex space-x-8 font-semibold text-gray-500">
            <li><Link to="/" className="hover:text-[#895525]">Accueil</Link></li>
            <li><Link to="/about" className="hover:text-[#895525]">À propos</Link></li>
            <li><Link to="/publier" className="hover:text-[#895525]">Publier</Link></li>
            <li><Link to="/admin" className="hover:text-[#895525]">Admin</Link></li>
          </ul>

          <div className="flex items-center space-x-4 text-[#895525]">
            <Link to="/favoris"><FaHeart className="cursor-pointer hover:text-[#FEEB9E]" /></Link>
            <FaBars className="md:hidden cursor-pointer hover:text-[#FEEB9E]" />
          </div>
        </div>
      </nav>

      <main className="px-0 md:px-36">
        <Outlet />
      </main>

      <footer className="bg-[#763613] text-white py-10">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="logo text-2xl font-bold mb-6">ArtConnect Maroc</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="hover:underline">À propos nous</Link></li>
                <li><Link to="/store" className="hover:underline">Our store</Link></li>
                <li><Link to="/news" className="hover:underline">News</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Help</h3>
              <ul className="space-y-2">
                <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
                <li><Link to="/help" className="hover:underline">Help</Link></li>
                <li><Link to="/terms" className="hover:underline">Terms</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Social Media</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <FaFacebook /> <a href="#" target="_blank" className="hover:underline">Facebook</a>
                </li>
                <li className="flex items-center gap-2">
                  <FaTiktok /> <a href="#" target="_blank" className="hover:underline">Tiktok</a>
                </li>
                <li className="flex items-center gap-2">
                  <FaInstagram /> <a href="#" target="_blank" className="hover:underline">Instagram</a>
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
