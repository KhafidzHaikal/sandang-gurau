import ButtonPesan from '@/components/ButtonPesan'
import Footer from '@/components/Footer'
import Jumbotron from '@/components/Jumbotron'
import Kegiatan from '@/components/Kegiatan'
import NavBar from '@/components/NavBar'
import ProdukKami from '@/components/ProdukKami'
import Tentang from '@/components/Tentang'
import VisiMisi from '@/components/VisiMisi'

export default function Home() {
  return (
    <main className='my-5'>
      <div className='lg:mx-32'>
        <NavBar />
        <Jumbotron />
        <Tentang />
        <VisiMisi />
        <ProdukKami />
        <Kegiatan />
        <ButtonPesan />
      </div>
      <Footer />
    </main>
  )
}
