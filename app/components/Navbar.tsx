"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FiMenu, FiX } from "react-icons/fi"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              IAFC
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/members">Members</NavLink>
              <NavLink href="/trainers">Trainers</NavLink>
              <NavLink href="/admin">Admin</NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="/" mobile>
              Home
            </NavLink>
            <NavLink href="/members" mobile>
              Members
            </NavLink>
            <NavLink href="/trainers" mobile>
              Trainers
            </NavLink>
            <NavLink href="/admin" mobile>
              Admin
            </NavLink>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

const NavLink = ({ href, children, mobile = false }: { href: string; children: React.ReactNode; mobile?: boolean }) => (
  <Link
    href={href}
    className={`${
      mobile ? "block px-3 py-2 rounded-md text-base font-medium" : "px-3 py-2 rounded-md text-sm font-medium"
    } text-gray-400 hover:bg-blue-500 hover:text-white transition-colors duration-300`}
  >
    {children}
  </Link>
)

export default Navbar

