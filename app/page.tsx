import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const events = [
    {
      title: "Lomba 17 Agustus",
      date: "09 Agustus 2025",
      description: "Perlombaan seru dalam rangka menyambut HUT RI",
      image: "/lomba-17an.JPG",
    },
    {
      title: "Malam Tirakatan 17 Agustus",
      date: "16 Agustus 2025",
      description: "Acara pentas seni dan pembagian hadiah lomba",
      image: "/tirakatan.JPG",
    },
    {
      title: "Malam Puncak 17 Agustus",
      date: "22 Agustus 2025",
      description: "Penampilan pentas seni dan pertunjukan angguk",
      image: "/malam-puncak.JPG",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Selamat Datang di
              <br />
              <span className="text-green-200">Padukuhan Semaken II</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Kalurahan Banjararum, Kecamatan Kalibawang, Kabupaten Kulon Progo - Membangun Bersama Menuju Masa Depan yang Lebih Baik
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50">
                <Users className="mr-2 h-5 w-5" />
                Profil Desa
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-700 bg-transparent"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Lokasi Kami
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Village Head Greeting */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/foto-kepala-dukuh.jpg"
                alt="Kepala Dukuh Semaken II"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sambutan Kepala Dukuh</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">Assalamu'alaikum Warahmatullahi Wabarakatuh,</p>
                <p className="mb-4">
                  Selamat datang di website resmi Padukuhan Semaken II. Sebagai Kepala Dukuh, saya mengundang seluruh
                  warga dan masyarakat luas untuk bersama-sama membangun desa kita menuju kemajuan yang berkelanjutan.
                </p>
                <p className="mb-6">
                  Mari kita wujudkan visi bersama untuk menciptakan lingkungan yang sejahtera, aman, dan nyaman bagi
                  seluruh keluarga di Padukuhan Semaken II.
                </p>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-gray-900">Bapak Suyanto</p>
                  <p className="text-sm text-gray-600">Kepala Dukuh Semaken II</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kegiatan Terbaru</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ikuti berbagai kegiatan dan program yang diselenggarakan untuk kemajuan desa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                {/* Tambah gambar di atas card */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <div className="flex items-center space-x-2 text-green-600 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Jelajahi Desa Kami</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/profil" className="group">
              <Card className="h-full hover:shadow-lg transition-all group-hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Profil Desa</h3>
                  <p className="text-gray-600 mb-4">Pelajari sejarah, visi misi, dan struktur organisasi desa</p>
                  <div className="flex items-center justify-center text-green-600 group-hover:text-green-700">
                    <span className="text-sm font-medium">Selengkapnya</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/umkm" className="group">
              <Card className="h-full hover:shadow-lg transition-all group-hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">UMKM Desa</h3>
                  <p className="text-gray-600 mb-4">Temukan produk dan layanan dari pelaku usaha lokal</p>
                  <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-700">
                    <span className="text-sm font-medium">Selengkapnya</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/karang-taruna" className="group">
              <Card className="h-full hover:shadow-lg transition-all group-hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Karang Taruna</h3>
                  <p className="text-gray-600 mb-4">Organisasi pemuda yang aktif dalam pembangunan desa</p>
                  <div className="flex items-center justify-center text-orange-600 group-hover:text-orange-700">
                    <span className="text-sm font-medium">Selengkapnya</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lokasi Padukuhan</h2>
            <p className="text-lg text-gray-600">Temukan kami di Google Maps</p>
          </div>

          <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.58020713275!2d110.21890167455308!3d-7.728106876585329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af15a5a626385%3A0xe491e632040ffe55!2sSemaken%20Dua%2C%20Banjararum%2C%20Kec.%20Kalibawang%2C%20Kabupaten%20Kulon%20Progo%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1756441014309!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  )
}
