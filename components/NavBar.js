"use client"
import { Montserrat } from 'next/font/google'
import Image from 'next/image';
import React, { useState } from 'react'

const Font = Montserrat({ subsets: ['latin'] })

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav class="r-0 px-4 py-4 flex justify-between items-center">
        <a class="lg:text-2xl font-bold leading-none uppercase lg:normal-case" href="#">
          <Image
            src="https://i.ibb.co/BK4GCXs/Main-Logo-removebg-preview.png"
            alt=""
            className='absolute top-1'
            width={150}
            height={150}
          />
        </a>
        <div class="lg:hidden">
          <button class="navbar-burger flex items-center text-white p-3 relative -top-4" onClick={toggleMenu}>
            <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
          {isOpen && (
            <div className='absolute top-100 left-0 gap-2'>
              <ul className='flex'>
                <li class="mb-1">
                  <a class="block p-4 text-sm font-semibold text-white rounded drop-shadow-xl" href="#">Beranda</a>
                </li>
                <li class="mb-1">
                  <a class="block p-4 text-sm font-semibold text-white  rounded drop-shadow-xl" href="#bagian_tentang_kami">Tentang Kami</a>
                </li>
                <li class="mb-1">
                  <a class="block p-4 text-sm font-semibold text-white  rounded drop-shadow-xl" href="#bagian_produk_kami">Produk Kami</a>
                </li>
                <li class="mb-1">
                  <a class="block p-4 text-sm font-semibold text-white  rounded drop-shadow-xl" href="#bagian_kegiatan">Kegiatan</a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <ul className="hidden absolute transform -translate-y-1/2 -translate-x-1/2 right-0 lg:flex lg:mx-auto lg:items-end lg:space-x-6 lg:mt-5">
          <li><a class="text-sm text-white drop-shadow-2xl" href="#">Beranda</a></li>
          <li><a class="text-sm text-white drop-shadow-2xl" href="#bagian_tentang_kami">Tentang Kami</a></li>
          <li><a class="text-sm text-white drop-shadow-2xl" href="#bagian_produk">Produk Kami</a></li>
          <li><a class="text-sm text-white drop-shadow-2xl" href="#bagian_kegiatan">Kegiatan</a></li>
        </ul>
      </nav>

    </div>
  )
}

export default NavBar