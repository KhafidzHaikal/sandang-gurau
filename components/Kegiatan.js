"use client"

import Image from "next/image"
import { Montagu_Slab } from 'next/font/google'
import ImportFont from 'next/font/local'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const Font = Montagu_Slab({ subsets: ['latin'] })

const Local = ImportFont({ src: './CooperFiveOpti-Black.otf' })

function Kegiatan() {
    return (
        <div className="text-white text-center mt-40" id="bagian_kegiatan">
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
            <div className='backdrop-opacity-0 backdrop-invert bg-black/20 absolute left-0 -mt-10 w-full h-full -z-10 bg-gradient-to-r from-white/5 to-black/20'>

            </div>
            <h1 className="text-transform: uppercase font-bold text-2xl" id='tentang_kami'>Kegiatan Kami</h1>
            <div className="flex justify-center">
                <Carousel className="w-full max-w-screen-lg"
                    plugins={[
                        Autoplay({
                            delay: 3500,
                        }),
                    ]}
                >
                    <CarouselContent>
                        <CarouselItem>
                            <h1 className={`${Local.className} relative top-10 text-black drop-shadow-2xl`}>Jakloth Semarang 2023</h1>
                            <Image
                                src="https://i.ibb.co/K7djbms/5.png"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto', objectFit: 'fill' }}
                                alt=''
                                id='background-jumbotron'
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <h1 className={`${Local.className} relative top-10 text-black drop-shadow-2xl`}>Ternyata Kolektif 2023</h1>
                            <Image
                                src="https://i.ibb.co/DQQwWP8/4.png"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto', objectFit: 'fill' }}
                                className='rounded'
                                alt=''
                            />
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}

export default Kegiatan