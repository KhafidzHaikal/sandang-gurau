import Image from 'next/image'
import { Montagu_Slab } from 'next/font/google'
import { Button } from './ui/button'

const Font = Montagu_Slab({ subsets: ['latin'] })

function Jumbotron() {
    return (
        <div>
            <div>
                <Image
                    src="https://i.ibb.co/Lv0tzCf/3.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    // style={{ width: '100%', height: 'auto', objectFit: 'fill' }}
                    className='absolute -z-10 left-0 top-0'
                    alt=''
                    id='background-jumbotron'
                />
                <div className='backdrop-opacity-0 backdrop-invert bg-black/50 absolute left-0 top-0 w-full h-full -z-10 bg-gradient-to-r from-white/5 to-black/20'>
                    
                </div>
                    <div className='text-white text-center mt-48 z-20' id='jumbotron'>
                        <h2 className={`${Font.className} drop-shadow-md`}>Baju Retro</h2>
                        <h3 className={Font.className}>BY</h3>
                        <h1 className={Font.className}>SANDANG GURAU</h1>
                        <Button className="bg-white text-black hover:bg-slate-500 relative top-10"><a href='https://linktr.ee/sandanggurau.id'>Pesan Sekarang</a></Button>
                    </div>
            </div>
        </div>
    )
}

export default Jumbotron