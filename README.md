# PageTranslator---Sendtransl
Page Extension Browser (Chrome) - Sendtransl

```markdown
**Page Translator** adalah ekstensi Chrome sederhana yang memungkinkan Anda menerjemahkan halaman web ke berbagai bahasa secara langsung dengan mudah. Ekstensi ini dibuat oleh **Sendy** untuk memudahkan pengguna dalam mengakses terjemahan halaman web tanpa perlu meninggalkan tab aktif mereka.

## Fitur

- **Pemilihan Bahasa**: Pilih dari berbagai bahasa yang ingin Anda gunakan untuk menerjemahkan halaman web.
- **Integrasi API Terjemahan**: Menggunakan Google Translate untuk menerjemahkan halaman dengan cepat.
- **User-friendly UI**: Antarmuka pengguna yang sederhana dan mudah digunakan.
- **Pengalaman Pengguna yang Disesuaikan**: Respon cepat dengan menggunakan tombol translate langsung dari popup ekstensi.
- **Open Source**: Kode sumber tersedia dan dapat dimodifikasi sesuai kebutuhan Anda.

## Instalasi

### 1. Clone Repo dari GitHub

Clone repositori ini ke komputer lokal Anda menggunakan perintah berikut:

```bash
git clone https://github.com/username/repository-name.git
```

### 2. Tambahkan ke Chrome sebagai Ekstensi

1. Buka Chrome dan pergi ke `chrome://extensions/`.
2. Aktifkan **Developer mode** di sudut kanan atas.
3. Klik **Load unpacked** dan pilih direktori proyek yang telah Anda clone.

Ekstensi sekarang akan terinstal dan terlihat di bilah alat Chrome Anda.

## Penggunaan

1. Klik ikon ekstensi **Page Translator** di bilah alat Chrome.
2. Pilih bahasa yang diinginkan dari dropdown yang tersedia.
3. Klik tombol **Translate** untuk menerjemahkan halaman web aktif ke bahasa yang dipilih.

Ekstensi akan memuat ulang halaman dengan terjemahan yang sesuai menggunakan Google Translate.

## Struktur Direktori

```plaintext
project-folder/
├── background.js            # Background script to handle extension events
├── languages.js             # Script containing supported languages codes and names
├── popup.html               # HTML file for the extension popup UI
├── popup.css                # CSS file for styling the popup UI
├── popup.js                 # JavaScript for handling user interactions in the popup
├── apitranslate.js          # Script for translating the active page
├── manifest.json            # Manifest file defining extension settings and permissions
├── logo/                    # Directory containing extension icons
│   ├── logo16.jpg
│   ├── logo32.jpg
│   ├── logo128.png
└── README.md                # README file with project details
```

## Manifest Permissions

Ekstensi ini menggunakan beberapa izin utama:

- **activeTab**: Mengizinkan ekstensi untuk berinteraksi dengan tab yang aktif.
- **scripting**: Mengizinkan penggunaan API scripting untuk menjalankan skrip pada halaman yang aktif.

## Kontribusi

Kontribusi untuk proyek ini sangat dihargai. Jika Anda menemukan bug atau memiliki fitur yang ingin ditambahkan, silakan ajukan **Issue** atau buat **Pull Request** dengan perubahan Anda.

## Author

**Sendy Prismana Nurferian**

- [GitHub](https://github.com/SendyPrismanaNurferian)
- Email: sendyprisma02@gmail.com

## Lisensi

Proyek ini dilisensikan di bawah lisensi MIT.

## Tangkapan Layar

![image.png](https://github.com/SendyPrismanaNurferian/PageTranslator---Sendtransl/blob/main/pagetranlatorextension/image.png))
```

## Catatan Tambahan

- Pastikan Anda memiliki koneksi internet yang stabil saat menggunakan ekstensi ini karena ekstensi menggunakan layanan Google Translate untuk menerjemahkan halaman.
- Ekstensi ini dirancang untuk penggunaan pribadi, pastikan untuk mematuhi syarat dan ketentuan penggunaan layanan Google Translate.
