import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MapPin, Building, TrendingUp } from "lucide-react"

export default function ProfilPage() {
  const officials = [
    { name: "Suryanto", position: "Kepala Dukuh", period: "2019-2025" },
    { name: "Budi Priyanto", position: "KKLPMK", period: "2019-2025" },
    { name: "Sukratsihno", position: "Wakil KKLPMK", period: "2019-2025" },
    { name: "Dwi Suharyanto", position: "Bendahara", period: "2019-2025" },
    { name: "Aji Prabowo", position: "Wakil Bendahara", period: "2019-2025" },
    { name: "Subarmanto", position: "Sekretaris", period: "2019-2025" },
    { name: "Budi Rianto", position: "Wakil Sekretaris", period: "2019-2025" },
    { name: "Subarmanto", position: "Ketua RW 31", period: "2019-2025" },
    { name: "Dwi Suharyanto", position: "Ketua RW 32", period: "2019-2025" },
    { name: "Sukratsihno", position: "Ketua RT 61", period: "2019-2025" },
    { name: "Mulyadi", position: "Ketua RT 62", period: "2019-2025" },
    { name: "Budi Rianto", position: "Ketua RT 63", period: "2019-2025" },
    { name: "Buyono", position: "Ketua RT 64", period: "2019-2025" }
  ]

  const demographics = [
    { label: "Total Penduduk", value: "1,247", icon: Users, color: "text-blue-600" },
    { label: "Kepala Keluarga", value: "312", icon: Building, color: "text-green-600" },
    { label: "Luas Wilayah", value: "2.5 km²", icon: MapPin, color: "text-orange-600" },
    { label: "Tingkat Pertumbuhan", value: "2.1%", icon: TrendingUp, color: "text-purple-600" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Profil Desa</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Mengenal lebih dekat Padukuhan Semaken II dan struktur pemerintahan desa
            </p>
          </div>
        </div>
      </section>

      {/* Demographics */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Demografis</h2>
            <p className="text-lg text-gray-600">Statistik terkini Padukuhan Semaken II</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {demographics.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${item.color.replace("text-", "bg-").replace("-600", "-100")}`}
                  >
                    <item.icon className={`h-8 w-8 ${item.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.value}</h3>
                  <p className="text-gray-600">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Village History */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sejarah Desa</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  Padukuhan Semaken II memiliki sejarah panjang sebagai bagian dari Desa Wonokromo. Nama "Semaken"
                  berasal dari bahasa Jawa yang memiliki makna filosofis tentang kebersamaan dan gotong royong
                  masyarakat.
                </p>
                <p className="mb-4">
                  Sejak tahun 1950-an, wilayah ini telah berkembang menjadi komunitas yang solid dengan tradisi budaya
                  Jawa yang masih terjaga. Masyarakat Semaken II dikenal dengan semangat gotong royong yang tinggi dalam
                  setiap kegiatan pembangunan.
                </p>
                <p>
                  Saat ini, Padukuhan Semaken II terus berkembang dengan memadukan nilai-nilai tradisional dan
                  modernisasi untuk kesejahteraan bersama.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/indonesian-traditional-village-landscape-with-rice.png"
                alt="Pemandangan Desa Semaken II"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Village Officials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Perangkat Desa</h2>
            <p className="text-lg text-gray-600">Struktur pemerintahan Padukuhan Semaken II</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {officials.map((official, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-gray-500" />
                  </div>
                  <CardTitle className="text-lg">{official.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-blue-600 font-medium mb-2">{official.position}</p>
                  {/* <p className="text-sm text-gray-500">Periode: {official.period}</p> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Village Map / Peta Administrasi */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Peta Administrasi</h2>
            <p className="text-lg text-gray-600">Wilayah administrasi Padukuhan Semaken II</p>
          </div>

          <div className="flex justify-center">
            <img
              src="/peta-semaken.jpg"
              alt="Peta Administrasi Padukuhan Semaken II"
              className="w-full max-w-4xl rounded-lg shadow-lg border"
            />
          </div>
        </div>
      </section>


      {/* Vision Mission */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-blue-600">Visi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 text-center leading-relaxed">
                  "Mewujudkan Padukuhan Semaken II yang sejahtera, mandiri, dan berbudaya dengan mengedepankan
                  nilai-nilai gotong royong dan kearifan lokal"
                </p>
              </CardContent>
            </Card>

            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-green-600">Misi</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Meningkatkan kesejahteraan masyarakat melalui pemberdayaan ekonomi
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Melestarikan budaya dan tradisi lokal
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Mengembangkan infrastruktur dan fasilitas umum
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Meningkatkan kualitas pendidikan dan kesehatan
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}
