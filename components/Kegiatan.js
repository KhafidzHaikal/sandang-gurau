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
            <div id='tentang_kami'>

            <h1 className="text-transform: uppercase font-bold text-2xl drop-shadow-2xl lg:hidden" >Kegiatan Kami</h1>
            </div>
            <div className="flex justify-center">
                <Carousel className="flex-full lg:-mt-20"
                    plugins={[
                        Autoplay({
                            delay: 6000,
                        }),
                    ]}
                >
                    <CarouselContent>
                        <CarouselItem>
                            <h1 className={`${Local.className} relative top-14 left-24 sm:left-40 sm:text-2xl sm:top-20 md:left-40 md:top-20 md:text-3xl lg:left-72 lg:top-48 text-black drop-shadow-2xl text-sm lg:text-5xl`}>Event Jakloth <br/> Semarang 2023</h1>
                            <Image
                                src="https://i.ibb.co/K7djbms/5.png"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto', objectFit: 'fill' }}
                                alt=''
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <h1 className={`${Local.className} relative top-14 -left-24 sm:-left-40 sm:text-2xl sm:top-20 md:-left-40 md:top-20 md:text-3xl lg:-left-72 lg:top-48 text-black drop-shadow-2xl text-sm lg:text-5xl`}>Event Ternyata <br/> Kolektif 2023</h1>
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