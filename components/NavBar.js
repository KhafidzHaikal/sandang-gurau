"use client"
import { Montserrat } from 'next/font/google'
import Image from 'next/image';
import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";

const Font = Montserrat({ subsets: ['latin'] })

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="r-0 px-4 py-4 flex justify-between items-center">
        <a className="lg:text-2xl font-bold leading-none uppercase lg:normal-case" href="#">
          <Image
            src="https://i.ibb.co/BK4GCXs/Main-Logo-removebg-preview.png"
            alt=""
            className='absolute top-1'
            width={150}
            height={150}
          />
        </a>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-white p-3 relative -top-4" onClick={toggleMenu}>
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className='absolute shadow-4xl w-52 right-0 top-[3.5rem] p-5 pt-0 border-b z-40'
              >
                <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1,
                  }}
                  className="w-full rounded-xl"
                >
                  <li className="mb-1">
                    <a className="flex items-center justify-between w-full p-3 rounded-md bg-neutral-950" href="#">Beranda</a>
                  </li>
                  <li className="mb-1">
                    <a className="flex items-center justify-between w-full p-3 rounded-md bg-neutral-950" href="#bagian_tentang_kami">Tentang Kami</a>
                  </li>
                  <li className="mb-1">
                    <a className="flex items-center justify-between w-full p-3 rounded-md bg-neutral-950" href="#bagian_produk">Produk Kami</a>
                  </li>
                  <li className="mb-1">
                    <a className="flex items-center justify-between w-full p-3 rounded-md bg-neutral-950" href="#bagian_kegiatan">Kegiatan</a>
                  </li>
                </motion.li>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
        <ul className="hidden absolute transform -translate-y-1/2 -translate-x-1/2 right-0 lg:flex lg:mx-auto lg:items-end lg:space-x-6 lg:mt-5">
          <li><a className="text-sm text-white drop-shadow-2xl" href="#">Beranda</a></li>
          <li><a className="text-sm text-white drop-shadow-2xl" href="#bagian_tentang_kami">Tentang Kami</a></li>
          <li><a className="text-sm text-white drop-shadow-2xl" href="#bagian_produk">Produk Kami</a></li>
          <li><a className="text-sm text-white drop-shadow-2xl" href="#bagian_kegiatan">Kegiatan</a></li>
        </ul>
      </nav>

    </div>
  )
}

export default NavBar