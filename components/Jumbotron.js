import Image from 'next/image'
import { Montagu_Slab } from 'next/font/google'
import { Button } from './ui/button'
import ImportFont from 'next/font/local'

const Font = Montagu_Slab({ subsets: ['latin'] })

const Local = ImportFont({ src: './CooperFiveOpti-Black.otf' })

function Jumbotron() {
    return (
        <div>
            <div>
                <Image
                    src="https://i.ibb.co/WkCWD6V/1.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    // style={{ width: '100%', height: 'auto', objectFit: 'fill' }}
                    className='absolute -z-10 left-0 top-0'
                    alt=''
                    id='background-jumbotron'
                />
                <div className='backdrop-opacity-0 backdrop-invert bg-black/50 absolute left-0 top-0 w-full h-screen  -z-10 bg-gradient-to-r from-white/5 to-black/20'>

                </div>
                <div className='text-white text-center mt-48 z-20' id='jumbotron'>
                    <h1 className={`${Local.className} relative -top-2 text-4xl lg:text-7xl drop-shadow-2xl`}>Sandang Gurau</h1>
                    <h2 className={`${Font.className} drop-shadow-md mb-3`}>Available On</h2>
                    <a href='https://www.tokopedia.com/sandanggurau'>
                        <Button className="rounded-full bg-white w-15 h-15 items-center hover:bg-white">
                            <Image
                                src="https://i.ibb.co/ZKP3wcZ/berita-tokopedia-info-berita-terbaru-tokopedia-6.png"
                                width={40}
                                height={40}
                                alt=""
                            />
                        </Button>
                    </a>
                    <a href='https://shopee.co.id/sandanggurau.id'>
                        <Button className="rounded-full bg-white w-15 h-15 items-center hover:bg-white ml-3">
                            <Image
                                src="https://i.ibb.co/Mn7C6jg/shopee-bag-logo-free-transparent-icon-17.png"
                                width={40}
                                height={40}
                                alt=""
                            />
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron