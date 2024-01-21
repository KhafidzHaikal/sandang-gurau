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
            className='absolute -z-10 left-0 '
            alt=''
            id='background-jumbotron'
          />
          <div className='backdrop-opacity-0 backdrop-invert bg-black/20 absolute left-0 w-full h-full -z-10 bg-gradient-to-r from-white/5 to-black/20'>
          </div>
          <Image
            src="https://i.ibb.co/3N4BFnk/2.png"
            width={0}
            height={0}
            sizes="100vw"
            // style={{ width: '100%', height: 'auto', objectFit: 'fill' }}
            className='absolute -z-10 left-0 -mt-10'
            alt=''
            id='background-jumbotron'
          />
          <div className='backdrop-opacity-0 backdrop-invert bg-black/20 absolute -mt-10 left-0 w-full h-full -z-10 bg-gradient-to-r from-white/5 to-black/20'>

          </div>
          <Tentang />
          <VisiMisi />
        </div>
        <ProdukKami />
        <Kegiatan />
        <ButtonPesan />
        {/* <Milestone /> */}
      </div>
      <Footer />
    </main>
  )
}
