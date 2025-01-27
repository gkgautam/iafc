import Link from "next/link"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">IAFC Gym</h3>
            <p className="text-gray-400">Transform your body, transform your life.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/members" className="text-gray-400 hover:text-white transition-colors">
                  Members
                </Link>
              </li>
              <li>
                <Link href="/trainers" className="text-gray-400 hover:text-white transition-colors">
                  Trainers
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-gray-400 hover:text-white transition-colors">
                  Admin
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400">123 Fitness Street</p>
            <p className="text-gray-400">Healthy City, HC 12345</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
            <p className="text-gray-400">Email: info@iafc_gym.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">&copy; 2023 IAFC Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

