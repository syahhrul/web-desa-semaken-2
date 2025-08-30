import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Star, ExternalLink } from "lucide-react"

export default function UMKMPage() {
  const businesses = [
    {
      name: "Semprong Cap Kelapa Gading",
      category: "Makanan",
      description: "Menyediakan semprong",
      contact: "082136378067",
      address: "Jl. Semaken",
      rating: 4.5,
      image: "/semprong.png",
    },
    {
      name: "Toko Bu Sudri",
      category: "Retail",
      description: "Menyediakan sembako dan sayuran",
      contact: "085173147515",
      address: "Jl. Semaken",
      rating: 4.3,
      image: "/toko-bu-sudri.png",
    },
    {
      name: "Warung Soto Ayam",
      category: "Kuliner",
      description: "Jual soto ayam",
      contact: "083142129708",
      address: "Jl. Semaken",
      rating: 4.4,
      image: "/warung-soto.png",
    },
  ]

  const categories = ["Semua", "Kuliner", "Retail", "Jasa", "Kerajinan", "Pertanian", "Fashion"]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">UMKM Desa</h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Dukung ekonomi l  okal dengan berbelanja di UMKM Padukuhan Semaken II
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      {/* <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button key={category} variant={category === "Semua" ? "default" : "outline"} size="sm" className="mb-2">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section> */}

      {/* UMKM Listings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Direktori UMKM</h2>
            <p className="text-lg text-gray-600">
              Temukan berbagai produk dan layanan berkualitas dari pelaku usaha lokal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businesses.map((business, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={business.image || "/placeholder.svg"}
                    alt={business.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {business.category}
                    </span>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{business.name}</CardTitle>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">{business.rating}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{business.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span>{business.address}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Phone className="h-4 w-4" />
                      <span>{business.contact}</span>
                    </div>
                  </div>

                  <Button className="w-full" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Hubungi Sekarang
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ingin Bergabung?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Daftarkan usaha Anda untuk menjangkau lebih banyak pelanggan dan berkembang bersama komunitas
          </p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
            Daftar UMKM Anda
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
