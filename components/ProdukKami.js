'use client'

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
// import * as React from "react"

function ProdukKami() {

    return (
        <div className="text-white text-center mt-40" id="bagian_produk_kami">
            <h1 className="text-transform: uppercase font-bold text-2xl" id='tentang_kami'>Produk Kami</h1>
            <div className="flex justify-center mt-5">
                <Carousel className="w-full max-w-xs"
                    plugins={[
                        Autoplay({
                            delay: 3000,
                        }),
                    ]}
                >
                    <CarouselContent>
                        <CarouselItem>
                            <div className="p-1">
                                <Card>
                                    <span className="relative top-4" >RINTO HARAP CLASSIC POP</span>
                                    <CardContent className="aspect-square items-center justify-center mt-4 p-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                                        <Image
                                            src="https://i.ibb.co/s1kqYgz/IMG-5058.jpg"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '100%', height: '400', objectFit: 'contain' }}
                                            alt='jumbotron image'
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <Card>
                                    <span className="relative top-4" >RINTO HARAP CLASSIC POP</span>
                                    <CardContent className="aspect-square items-center justify-center mt-4 p-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                                        <Image
                                            src="https://i.ibb.co/86WS1d5/IMG-5059.jpg"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '100%', height: '400', objectFit: 'contain' }}
                                            alt='jumbotron image'
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <Card>
                                    <span className="relative top-4" >RINTO HARAP CLASSIC POP</span>
                                    <CardContent className="aspect-square items-center justify-center mt-4 p-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                                        <Image
                                            src="https://i.ibb.co/FWfNy5X/IMG-5060.jpg"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '100%', height: '400', objectFit: 'contain' }}
                                            alt='jumbotron image'
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <Card>
                                    <span className="relative top-4" >RINTO HARAP CLASSIC POP</span>
                                    <CardContent className="aspect-square items-center justify-center mt-4 p-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                                        <Image
                                            src="https://i.ibb.co/T2xg1bF/IMG-5061.jpg"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '100%', height: '400', objectFit: 'contain' }}
                                            alt='jumbotron image'
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <Card>
                                    <span className="relative top-4" >RINTO HARAP CLASSIC POP</span>
                                    <CardContent className="aspect-square items-center justify-center mt-4 p-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                                        <Image
                                            src="https://i.ibb.co/wBMBhb9/IMG-5063.jpg"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '100%', height: '400', objectFit: 'contain' }}
                                            alt='jumbotron image'
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <Card>
                                    <span className="relative top-4" >RINTO HARAP CLASSIC POP</span>
                                    <CardContent className="aspect-square items-center justify-center mt-4 p-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                                        <Image
                                            src="https://i.ibb.co/VVFnQH8/IMG-5065.jpg"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '100%', height: '400', objectFit: 'contain' }}
                                            alt='jumbotron image'
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <Card>
                                    <span className="relative top-4" >RINTO HARAP CLASSIC POP</span>
                                    <CardContent className="aspect-square items-center justify-center mt-4 p-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                                        <Image
                                            src="https://i.ibb.co/V3nBXhx/IMG-5067.jpg"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '100%', height: '400', objectFit: 'contain' }}
                                            alt='jumbotron image'
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <Card>
                                    <span className="relative top-4" >RINTO HARAP CLASSIC POP</span>
                                    <CardContent className="aspect-square items-center justify-center mt-4 p-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                                        <Image
                                            src="https://i.ibb.co/mHGwsMZ/IMG-5069.jpg"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '100%', height: '400', objectFit: 'contain' }}
                                            alt='jumbotron image'
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <Card>
                                    <span className="relative top-4" >RINTO HARAP CLASSIC POP</span>
                                    <CardContent className="aspect-square items-center justify-center mt-4 p-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                                        <Image
                                            src="https://i.ibb.co/hCf7M8M/IMG-5070.jpg"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '100%', height: '400', objectFit: 'contain' }}
                                            alt='jumbotron image'
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <Card>
                                    <span className="relative top-4" >RINTO HARAP CLASSIC POP</span>
                                    <CardContent className="aspect-square items-center justify-center mt-4 p-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                                        <Image
                                            src="https://i.ibb.co/vjRKSwK/IMG-5071.jpg"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '100%', height: '400', objectFit: 'contain' }}
                                            alt='jumbotron image'
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <Card>
                                    <span className="relative top-4" >RINTO HARAP CLASSIC POP</span>
                                    <CardContent className="aspect-square items-center justify-center mt-4 p-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                                        <Image
                                            src="https://i.ibb.co/7X7TYj0/IMG-5073.jpg"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '100%', height: '400', objectFit: 'contain' }}
                                            alt='jumbotron image'
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <Card>
                                    <span className="relative top-4" >RINTO HARAP CLASSIC POP</span>
                                    <CardContent className="aspect-square items-center justify-center mt-4 p-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                                        <Image
                                            src="https://i.ibb.co/RSqtMhQ/IMG-5074.jpg"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '100%', height: '400', objectFit: 'contain' }}
                                            alt='jumbotron image'
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <Card>
                                    <span className="relative top-4" >RINTO HARAP CLASSIC POP</span>
                                    <CardContent className="aspect-square items-center justify-center mt-4 p-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                                        <Image
                                            src="https://i.ibb.co/m43dsMk/IMG-5075.jpg"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '100%', height: '400', objectFit: 'contain' }}
                                            alt='jumbotron image'
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <Card>
                                    <span className="relative top-4" >RINTO HARAP CLASSIC POP</span>
                                    <CardContent className="aspect-square items-center justify-center mt-4 p-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                                        <Image
                                            src="https://i.ibb.co/wc7QGNC/IMG-5077.jpg"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '100%', height: '400', objectFit: 'contain' }}
                                            alt='jumbotron image'
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>

                    </CarouselContent>
                    <div className="invisible lg:visible">
                    <CarouselPrevious />
                    <CarouselNext />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default ProdukKami