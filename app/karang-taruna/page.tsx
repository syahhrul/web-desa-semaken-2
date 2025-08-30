import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Calendar, Target, Phone, Globe, Instagram, Music3 } from "lucide-react"

export default function KarangTarunaPage() {
  const boardMembers = [
    { name: "NANDA AYU KARTIKA", position: "Ketua" },
    { name: "DZULFI MAHENDRA", position: "Wakil Ketua" },
    { name: "MEISYA AGNI CAHYA NAJWA", position: "Sekretaris 1" },
    { name: "FITRI DWI KARTIKA", position: "Sekretaris 2" },
    { name: "GIRI PRASTOWO", position: "Bendahara 1" },
    { name: "GUSTALINI WULANDARI", position: "Bendahara 2" },
    { name: "PANDU ADITYA CANDRA", position: "Sie Olahraga" },
    { name: "NURAHMAN PRIYOHANDONO", position: "Sie Kerohanian" },
    { name: "DENI KRISNA PUTRA", position: "Sie Humas" },
    { name: "GIRI PRASTOWO", position: "Sie Kesenian Budaya" },
  ]

  const programs = [
    "Arisan pemuda pemudi setiap 1 bulan sekali",
    "Rapat pertanggung jawaban tahunan diadakan 1 tahun sekali di akhir tahun",
    "Perayaan 17 Agustus diadakan selama bulan Agustus",
    "Kegiatan Ramadhan setiap bulan Ramadhan",
    "Halal bihalal setiap Idul Fitri",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <img
            src="/logo-karang-taruna.png"
            alt="Logo Karang Taruna Basunanda"
            className="mx-auto mb-6 w-32 h-32 object-contain"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Karang Taruna BASUNANDA</h1>
          <p className="text-lg text-purple-100 max-w-3xl mx-auto">
            Organisasi kepemudaan Padukuhan Semaken II, berdiri sejak <b>14 Februari 2024</b>
          </p>
        </div>
      </section>

      {/* Tujuan Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Tujuan</h2>
          <ul className="list-decimal list-inside space-y-3 text-gray-700">
            <li>Membuat kualitas generasi muda yang dapat bertanggung jawab, memiliki jiwa kepemimpinan, mandiri, berpengetahuan luas dan jiwa sosial yang tinggi melewati berbagai bidang seperti ketrampilan dan keagamaan.</li>
            <li>Mengembangkan dan menggali potensi serta kemampuan yang dimiliki diberbagai bidang.</li>
            <li>Mendukung program pembangunan di tingkat dusun, desa/kelurahan dari segi fisik dan SDM.</li>
            <li>Wadah memperoleh informasi, komunikasi dan edukasi.</li>
          </ul>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Struktur Organisasi</h2>
          <p className="text-center text-gray-600 mb-8">Jumlah Anggota: <b>50 Anggota</b></p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-600 font-medium">{member.position}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Program Rutin</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 max-w-3xl mx-auto">
            {programs.map((program, i) => (
              <li key={i}>{program}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Kontak & Media Sosial */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Kontak & Media Sosial</h2>
          <p className="mb-4 flex justify-center items-center gap-2">
            <Phone className="h-5 w-5" /> 0895-6316-03101 (Deni Krisna)
          </p>
          <div className="space-y-3">
            <p className="flex justify-center items-center gap-2">
              <Music3 className="h-5 w-5" /> 
              TikTok: <a href="https://www.tiktok.com/@semaken02?_t=ZS-8zFPbz9t9zo&_r=1" target="_blank" className="underline">MUDA MUDI SEMAKEN II</a>
            </p>
            <p className="flex justify-center items-center gap-2">
              <Instagram className="h-5 w-5" /> 
              Instagram: <a href="https://www.instagram.com/kt_basunanda?igsh=Ynhqd2V2ZTBkN3Jv" target="_blank" className="underline">@kt_basunanda</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
