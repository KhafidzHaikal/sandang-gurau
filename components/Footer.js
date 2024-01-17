import Image from "next/image";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { SiShopee } from "react-icons/si";

function Footer() {
  return (
    <div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <footer class="bg-black">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="/" class="flex items-center">
                <span class="self-center text-2xl font-semibold whitespace-nowrap">Sandang Gurau</span>
              </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Resources</h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="">Sandang Gurau</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Follow us</h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="https://shopee.co.id/sandanggurau.id" className="flex items-center"><SiShopee className="mr-2" /> Shopee</a>
                  </li>
                  <li>
                    <a href="https://www.tokopedia.com/sandanggurau" className="flex items-center">
                      <Image
                        src="https://i.ibb.co/ZKP3wcZ/berita-tokopedia-info-berita-terbaru-tokopedia-6.png"
                        width={15}
                        height={15}
                        alt=""
                        className="mr-2"
                      />
                      Tokopedia
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Social Media</h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://www.instagram.com/sandanggurau.id/" className="flex items-center"><FaInstagram className="mr-2" /> Instagram</a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center"><FaTiktok className="mr-2" /> Tiktok</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/">Sandang Gurau</a>.
            </span>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer