import ButtonPesan from '@/components/ButtonPesan'
import Footer from '@/components/Footer'
import Jumbotron from '@/components/Jumbotron'
import Kegiatan from '@/components/Kegiatan'
import Milestone from '@/components/Milestone'
import NavBar from '@/components/NavBar'
import ProdukKami from '@/components/ProdukKami'
import Tentang from '@/components/Tentang'
import VisiMisi from '@/components/VisiMisi'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='my-5'>
      <div className='container'>
        <NavBar />
        <Jumbotron />
        <div>
          <Image
            src="https://i.ibb.co/3N4BFnk/2.png"
            width={0}
            height={0}
            sizes="100vw"
            // style={{ width: '100%', height: 'auto', objectFit: 'fill' }}
            className='absolute -z-20 left-0 mt-36'
            alt=''
            id='background-jumbotron'
          />
          <div className='backdrop-opacity-0 backdrop-invert bg-black/20 mt-40 absolute left-0 w-full h-full -z-20 bg-gradient-to-r from-white/5 to-black/20'>
          </div>
          <Image
            src="https://i.ibb.co/3N4BFnk/2.png"
            width={0}
            height={0}
            sizes="100vw"
            // style={{ width: '100%', height: 'auto', objectFit: 'fill' }}
            className='absolute -z-20 left-0 -mt-20'
            alt=''
            id='background-jumbotron'
          />
          <div className='backdrop-opacity-0 backdrop-invert bg-black/20 absolute -mt-16 lg:-mt-20 left-0 w-full h-full -z-20 bg-gradient-to-r from-white/5 to-black/20'>

          </div>
          <Tentang />
          <VisiMisi />
        </div>
        <ProdukKami />
      </div>
      <Kegiatan />
      <div className='container'>
        <ButtonPesan />

      </div>
      {/* <Milestone /> */}
      <Footer />
    </main>
  )
}
