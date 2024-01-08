import { Card, CardContent } from "@/components/ui/card"

function Kegiatan() {
    return (
        <div className="text-white text-center mt-40" id="bagian_kegiatan">
            <h1 className="text-transform: uppercase font-bold text-2xl" id='tentang_kami'>Kegiatan Kami</h1>
            <div className="flex gap-7 justify-center mt-5 p-1">
                <Card className="h-25 w-1/3">
                    <CardContent className="flex items-center justify-center p-6">
                    </CardContent>
                </Card>
                <Card className="h-25 w-1/3">
                    <CardContent className="flex items-center justify-center p-6">
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Kegiatan