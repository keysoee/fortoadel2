# Portfolio Elegan - Dark Theme

Portfolio website dengan desain elegan dan tema gelap yang modern.

## 🌟 Fitur

- **Desain Responsif**: Optimal di semua perangkat
- **Tema Gelap Elegan**: Nuansa gelap dengan aksen cyan/teal
- **Animasi Smooth**: Transisi dan efek yang halus
- **Modern UI/UX**: Desain minimalis dan profesional
- **Form Kontak**: Form kontak dengan validasi
- **Navigasi Smooth**: Smooth scrolling antar section
- **Mobile Friendly**: Hamburger menu untuk mobile

## 🎨 Teknologi

- HTML5 semantic
- CSS3 dengan custom properties
- Vanilla JavaScript
- Font Awesome icons
- Google Fonts (Poppins)

## 📁 Struktur File

```
portfolio/
├── index.html          # File utama HTML
├── css/
│   └── style.css       # Stylesheet utama
├── js/
│   └── script.js       # JavaScript functionality
└── README.md           # Dokumentasi
```

## 🚀 Cara Menggunakan

1. **Personalisasi Konten**:
   - Edit `index.html` untuk mengubah teks dan informasi pribadi
   - Ganti "Your Name" dengan nama Anda
   - Update informasi kontak di section contact
   - Tambahkan link social media yang sesuai

2. **Kustomisasi Warna**:
   - Edit variabel CSS di `:root` dalam `style.css`
   - Ubah `--primary-color` untuk mengubah warna aksen
   - Sesuaikan `--dark-bg` dan `--card-bg` untuk nuansa background

3. **Menambah Proyek**:
   - Copy struktur `.project-card` di section projects
   - Update konten dan teknologi yang digunakan
   - Tambahkan link ke live demo dan repository

4. **Menambah Skill**:
   - Tambahkan `.skill-item` baru dalam kategori yang sesuai
   - Gunakan icon Font Awesome yang relevan

## 🎨 Kustomisasi Warna

Ubah variabel di bagian `:root` dalam `style.css`:

```css
:root {
    --primary-color: #64ffda;     /* Warna aksen utama */
    --secondary-color: #536dfe;   /* Warna sekunder */
    --dark-bg: #0a0e1a;          /* Background utama */
    --darker-bg: #050814;        /* Background lebih gelap */
    --card-bg: #1a1f2e;          /* Background card */
}
```

## 📱 Fitur Responsif

- Breakpoint 768px untuk tablet
- Breakpoint 480px untuk mobile
- Hamburger menu untuk navigasi mobile
- Grid responsif untuk semua section

## ⚡ Performance

- Optimized CSS dengan custom properties
- Lazy loading untuk gambar
- Throttled event listeners
- Minimal external dependencies

## 🔧 Konfigurasi Form Kontak

Form kontak saat ini menggunakan simulasi. Untuk mengintegrasikan dengan backend:

1. **EmailJS**: Tambahkan EmailJS untuk kirim email langsung
2. **Netlify Forms**: Jika hosting di Netlify
3. **Custom Backend**: Integrate dengan API sendiri

## 🚀 Deployment

### GitHub Pages
1. Push ke repository GitHub
2. Enable GitHub Pages di settings
3. Pilih branch main/master

### Netlify
1. Drag & drop folder ke Netlify
2. Atau connect dengan Git repository

### Vercel
1. Import project dari GitHub
2. Deploy otomatis

## 📞 Support

Jika ada pertanyaan atau butuh bantuan kustomisasi:
- Email: your.email@example.com
- Portfolio: [Your Portfolio URL]

## 📝 License

Free to use untuk personal dan komersial.

---

⭐ Jangan lupa untuk star repository ini jika bermanfaat!
