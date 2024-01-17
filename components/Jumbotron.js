import Image from 'next/image'
import { Montagu_Slab } from 'next/font/google'
import { Button } from './ui/button'
import ImportFont from 'next/font/local'

const Font = Montagu_Slab({ subsets: ['latin'] })

const Local = ImportFont({ src:'./CooperFiveOpti-Black.otf'})

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
                    <h1 className={`${Local.className} relative -top-2 text-4xl lg:text-7xl drop-shadow-2xl`}>Our Product</h1>
                    <h2 className={`${Font.className} drop-shadow-md mb-3`}>Available On</h2>
                    <Button className="rounded-full bg-white w-15 h-15 items-center hover:bg-white">
                        <Image
                            src="https://i.ibb.co/ZKP3wcZ/berita-tokopedia-info-berita-terbaru-tokopedia-6.png"
                            width={40}
                            height={40}
                            alt=""
                        />
                    </Button>
                    <Button className="rounded-full bg-white w-15 h-15 items-center hover:bg-white ml-3">
                        <Image
                            src="https://i.ibb.co/Mn7C6jg/shopee-bag-logo-free-transparent-icon-17.png"
                            width={40}
                            height={40}
                            alt=""
                        />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron