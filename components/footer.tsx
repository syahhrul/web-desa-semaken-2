import { MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak Kami</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm">Padukuhan Semaken II</p>
                  <p className="text-sm text-gray-300">Kalurahan Banjararum, Kecamatan Kalibawang, Kabupaten Kulon Progo</p>
                  <p className="text-sm text-gray-300">Daerah Istimewa Yogyakarta</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <p className="text-sm">0895-6316-03101</p>
              </div>
              {/* <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <p className="text-sm">info@semaken2.desa.id</p>
              </div> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <a href="/profil" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Profil Desa
                </a>
              </li>
              <li>
                <a href="/umkm" className="text-sm text-gray-300 hover:text-white transition-colors">
                  UMKM
                </a>
              </li>
              <li>
                <a href="/karang-taruna" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Karang Taruna
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tentang Kami</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Padukuhan Semaken II adalah bagian dari Kalurahan Banjararum yang berkomitmen untuk memajukan kesejahteraan
              masyarakat melalui pemberdayaan ekonomi dan pengembangan potensi daerah.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">© 2024 Padukuhan Semaken II. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
