import { Montserrat } from 'next/font/google'

const Font = Montserrat({ subsets: ['latin'] })

function VisiMisi() {
    return (
        <div className="mx-5 mt-7 lg:flex lg:mt-30 gap-4">
            <div id="visi">
                <h1 className="text-transform: uppercase font-bold text-2xl text-center" id="tentang_kami">Visi</h1>
                <hr class="h-px my-4 lg:my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className="shadow-md shadow-white p-4 mb-4 lg:mb-0 lg:p-8 rounded">
                    <p className={`${Font.className} text-white text-center`}>Menjadi pioneer brand clothing yang membahas tentang film dan musisi</p>
                </div>
            </div>
            <div>
                <h1 className="text-transform: uppercase font-bold text-2xl text-center" id="tentang_kami">Misi</h1>
                <hr className="h-px mt-4 lg:my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <div id="misi" className="lg:flex gap-4">
                    <div className="mt-4 lg:mt-0">
                        <div className="shadow-md shadow-white p-4 lg:p-8 rounded">
                            <p className="text-white text-center">Menjadi salah satu media pengedukasi terkait musik dan film</p>
                        </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                        <div className="shadow-md shadow-white p-4 lg:p-8 rounded">
                            <p className="text-white text-center">Membuat penyatuan parodi agar memudahkan pengenalan produk</p>
                        </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                        <div className="shadow-md shadow-white p-4 lg:p-8 rounded">
                            <p className="text-white text-center">Menyatukan kalangan muda dan tua agar bercengkrama melalui busana</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisiMisi