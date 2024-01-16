import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"

function Kegiatan() {
    return (
        <div className="text-white text-center mt-40" id="bagian_kegiatan">
            <h1 className="text-transform: uppercase font-bold text-2xl" id='tentang_kami'>Kegiatan Kami</h1>
            <div className="lg:flex gap-7 justify-center lg:mt-5 p-1">
                <Card className="h-25 mt-5">
                    <CardHeader>Jakloth Semarang 2023</CardHeader>
                    <hr />
                    <CardContent className="flex items-center justify-center p-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                        <Image
                            src="https://i.ibb.co/K7djbms/5.png"
                            width={400}
                            height={400}
                            sizes="100vw"
                            // style={{ width: '100%', height: 'auto', objectFit: 'fill' }}
                            className='rounded'
                            alt=''
                        />
                    </CardContent>
                </Card>
                <Card className="h-25 mt-5">
                    <CardHeader>Ternyata Kolektif 2023</CardHeader>
                    <hr />
                    <CardContent className="flex items-center justify-center p-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                        <Image
                            src="https://i.ibb.co/DQQwWP8/4.png"
                            width={400}
                            height={400}
                            sizes="100vw"
                            // style={{ width: '100%', height: 'auto', objectFit: 'fill' }}
                            className='rounded'
                            alt=''
                        />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Kegiatan