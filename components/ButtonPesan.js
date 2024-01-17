import { Button } from "@/components/ui/button"
import { SiShopee } from "react-icons/si";
import Image from "next/image"

function ButtonPesan() {
    return (
        <div className="text-white text-center mt-40">
            <h1 className="text-transform: uppercase font-bold text-2xl" id='tentang_kami'>Pesan Sekarang</h1>
            <div className="flex gap-7 justify-center mt-5">
                <Button><a href="https://shopee.co.id/sandanggurau.id" className="flex items-center"><SiShopee className="mr-2" />Sandanggurau.id</a></Button>
                <Button>
                    <a href="https://www.tokopedia.com/sandanggurau" className="flex items-center" alt="Tokopedia">
                        <Image
                            src="https://i.ibb.co/ZKP3wcZ/berita-tokopedia-info-berita-terbaru-tokopedia-6.png"
                            width={15}
                            height={15}
                            alt=""
                            className="mr-2"
                        />
                        Sandanggurau
                    </a>
                </Button>
            </div>
        </div>
    )
}

export default ButtonPesan