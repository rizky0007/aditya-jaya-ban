# Aditya Jaya Ban — Website v2

Website katalog ban truk kanisir berbasis Next.js + Tailwind CSS v4.

## Menjalankan
```bash
npm install
npm run dev
```
Buka http://localhost:3000

## Mengganti gambar dengan foto milik sendiri
Ganti file berikut dengan gambar milik toko (nama file harus sama):
- `public/images/hero-placeholder.jpg` — visual utama hero dan bagian tentang.

Untuk hasil terbaik gunakan foto landscape lebar (sekitar 1600×900). File bisa JPG atau WebP; jika mengganti format, sesuaikan path di `app/globals.css`.

Gambar produk saat ini dibuat dengan CSS (ilustrasi ban), jadi tidak perlu mengunduh gambar tambahan. Jika nanti punya foto tiap ukuran, bagian `TireVisual` di `app/page.tsx` bisa diganti dengan komponen gambar.

## Kustomisasi
- Nomor WhatsApp: ubah `waNumber` di `app/page.tsx` (format kode negara tanpa +).
- Produk/ukuran: ubah array `products` di `app/page.tsx`.
- Warna: ubah variabel `:root` di `app/globals.css`.

## Performa
Versi ini tidak menggunakan Lenis atau Framer Motion. Smooth scroll memakai CSS, animasi masuk memakai CSS keyframes, dan reveal saat scroll memakai IntersectionObserver bawaan browser. Animasi menghormati preferensi `prefers-reduced-motion`.
