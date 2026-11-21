# Company Profile Template

Template website company profile 4 halaman untuk perusahaan jasa logistik. Dibuat dengan HTML, CSS, dan JavaScript murni, tanpa framework dan tanpa proses build.

> **Catatan:** "PT Samudra Karya Logistik" beserta alamat, nomor telepon, email, tim, dan angka statistiknya adalah **data fiktif** untuk contoh tampilan. Ganti dengan data resmi sebelum dipakai untuk klien sungguhan.

## Tampilan

<!-- Tambahkan screenshot setelah diunggah, contoh:
![Halaman beranda](docs/screenshot-home.png)
-->

## Halaman

| Halaman | File | Isi |
|---|---|---|
| Beranda | `index.html` | Hero, statistik perusahaan, ringkasan layanan, alasan memilih kami, alur 4 langkah, logo klien, ajakan bertindak |
| Tentang | `about.html` | Profil perusahaan, visi dan misi, nilai, timeline 2012 sampai 2024, tim |
| Layanan | `services.html` | 6 layanan (darat, laut, udara, pergudangan, distribusi, penanganan khusus) dan FAQ |
| Kontak | `contact.html` | Form penawaran yang dikirim lewat WhatsApp, info kantor, jam operasional, placeholder peta |

## Fitur

- Desain responsif dengan menu navigasi untuk layar kecil
- Animasi muncul saat halaman di-scroll
- FAQ yang bisa dibuka dan ditutup
- Form penawaran yang menyiapkan pesan ke WhatsApp
- Aksesibilitas dasar: tautan "Lewati ke konten utama", label ARIA, dan breadcrumb
- Tag SEO dan Open Graph di setiap halaman
- Font Plus Jakarta Sans dan Inter dari Google Fonts

## Struktur folder

```
company-profile-template/
├── index.html
├── about.html
├── services.html
├── contact.html
├── assets/
│   ├── css/style.css     Semua gaya tampilan
│   ├── js/main.js        Menu mobile, animasi scroll, form WhatsApp
│   └── img/              Ilustrasi SVG (hero, gudang, foto tim, og-image)
├── .gitignore
└── README.md
```

## Cara menjalankan

Buka `index.html` langsung di browser, atau jalankan server lokal:

```
python -m http.server 8000
```

Lalu buka http://localhost:8000

Koneksi internet dibutuhkan untuk memuat font dari Google Fonts.

## Cara menyesuaikan

Cari komentar `GANTI` di setiap file HTML. Komentar itu menandai bagian yang harus diisi dengan data sebenarnya:

- **Identitas dan logo**: nama perusahaan, logo SVG di header dan footer
- **Konten pemasaran**: headline, statistik, nama layanan, timeline, nilai perusahaan
- **Tim**: nama, jabatan, dan foto anggota (pastikan sudah ada izin publikasi)
- **Kontak**: alamat, telepon, email, jam operasional, tautan sosial media
- **SEO**: `canonical`, `og:url`, `og:image`, dan favicon sesuai domain asli
- **Peta**: ganti placeholder di halaman kontak dengan peta lokasi kantor
- **Logo klien**: ganti nama placeholder di beranda dengan logo mitra yang sudah disetujui

### Nomor WhatsApp untuk form

Buka `assets/js/main.js`, lalu ubah konstanta `WHATSAPP_NUMBER` dengan nomor tujuan, dalam format internasional tanpa tanda plus (contoh: `6281234567890`).

### Warna

Warna utama adalah biru tua dan kuning. Ubah di bagian atas `assets/css/style.css`.

## Deploy gratis

**GitHub Pages**
1. Buka Settings pada repo ini, lalu pilih Pages.
2. Pada Source, pilih branch `main` dan folder `/ (root)`, lalu Save.
3. Situs akan online di `https://USERNAME.github.io/company-profile-template/`.

**Netlify**: seret folder proyek ke https://app.netlify.com/drop

## Teknologi

HTML5 · CSS3 · JavaScript (ES6)

## Lisensi

Belum ditentukan. Tambahkan file `LICENSE` bila template ini ingin dibagikan untuk dipakai orang lain.
