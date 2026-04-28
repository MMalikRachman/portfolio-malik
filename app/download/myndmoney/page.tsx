import { Button } from "@/components/ui/button"
import { Download, Smartphone, Shield, Zap, Globe } from "lucide-react"

export const metadata = {
  title: "Download MyndMoney",
  description: "Download the MyndMoney app and start managing your finances.",
}

export default function DownloadMyndMoneyPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background px-4 py-12">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Header */}
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            100% Offline - MyndMoney
          </h1>
          <p className="text-lg text-muted-foreground">
            Kelola keuanganmu dengan lebih cerdas dan simpel.
          </p>
        </div>

        {/* Features List */}
        <div className="rounded-xl border bg-card p-6 text-left shadow-sm space-y-4">
          <h2 className="text-xl font-semibold text-card-foreground">
            Fitur Utama
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <Zap className="mt-0.5 h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="font-medium text-foreground">Pencatatan Transaksi</p>
                <p className="text-sm">Input pemasukan & pengeluaran, tunai & non-tunai, serta lampiran nota.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Zap className="mt-0.5 h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="font-medium text-foreground">Kategorisasi</p>
                <p className="text-sm">Kategori bawaan & kustom dengan sub-kategori untuk detail lebih mendalam.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Zap className="mt-0.5 h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="font-medium text-foreground">Budgeting / Anggaran</p>
                <p className="text-sm">Atur limit pengeluaran dan dapatkan notifikasi saat mendekati budget.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Zap className="mt-0.5 h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="font-medium text-foreground">Manajemen Dompet</p>
                <p className="text-sm">Multi dompet (bank, e-wallet, tunai) dengan transfer antar akun.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Zap className="mt-0.5 h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="font-medium text-foreground">Laporan & Analisis</p>
                <p className="text-sm">Grafik tren mingguan/bulanan dan pie chart pengeluaran per kategori.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Zap className="mt-0.5 h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="font-medium text-foreground">Transaksi Berulang</p>
                <p className="text-sm">Setup pengeluaran rutin otomatis seperti tagihan dan langganan.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Zap className="mt-0.5 h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="font-medium text-foreground">Rekam Jejak</p>
                <p className="text-sm">Histori transaksi lengkap dengan filter dan fitur ekspor ke Excel/PDF.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Shield className="mt-0.5 h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="font-medium text-foreground">Keamanan</p>
                <p className="text-sm">PIN/Fingerprint lock serta fitur backup & restore data yang aman.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Download Button */}
        <Button asChild size="lg" className="w-full gap-2 text-base">
          <a
            href="https://s.id/5w3yJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="h-5 w-5" />
            Download MyndMoney
          </a>
        </Button>

        <p className="text-xs text-muted-foreground">
          Klik tombol di atas untuk mengunduh aplikasi
        </p>
      </div>
    </main>
  )
}
