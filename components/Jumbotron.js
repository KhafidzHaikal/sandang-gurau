import Image from 'next/image'
import { Montagu_Slab } from 'next/font/google'
import { Button } from './ui/button'

const Font = Montagu_Slab({ subsets: ['latin'] })

function Jumbotron() {
    return (
        <div>
            <div>
                {/* <Image
                    src="/pic.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '400', objectFit: 'contain' }}
                    className='absolute -z-10 left-0 top-0'
                    alt='jumbotron image'
                /> */}
                <div className='text-white text-center mt-48 z-20' id='jumbotron'>
                    <h2 className={Font.className}>Baju Retro</h2>
                    <h3 className={Font.className}>BY</h3>
                    <h1 className={Font.className}>SANDANG GURAU</h1>
                    <Button><a href='https://linktr.ee/sandanggurau.id'>Pesan Sekarang</a></Button>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron