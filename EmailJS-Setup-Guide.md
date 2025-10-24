# Setup EmailJS untuk Form Contact Website

## Langkah-langkah Setup EmailJS:

### 1. Daftar di EmailJS
1. Kunjungi https://www.emailjs.com/
2. Klik "Sign Up" dan daftar dengan email adelia021203@gmail.com
3. Verifikasi email Anda

### 2. Setup Email Service
1. Di dashboard EmailJS, klik "Email Services"
2. Klik "Add New Service"
3. Pilih "Gmail" 
4. Masukkan email adelia021203@gmail.com
5. Ikuti instruksi untuk authorize Gmail
6. Catat **Service ID** yang diberikan

### 3. Buat Email Template
1. Klik "Email Templates"
2. Klik "Create New Template"
3. Gunakan template ini:

**Subject:** Portfolio Contact: {{subject}}

**Content:**
```
Halo Adelia,

Anda mendapat pesan baru dari portfolio website:

Nama: {{from_name}}
Email: {{from_email}}
Subjek: {{subject}}

Pesan:
{{message}}

---
Dikirim dari portfolio website
```

4. Catat **Template ID** yang diberikan

### 4. Dapatkan User ID
1. Klik "Account" di menu
2. Catat **User ID** Anda

### 5. Update Website
Di file `js/script.js`, ganti:
- `YOUR_EMAILJS_USER_ID` dengan User ID Anda
- `YOUR_SERVICE_ID` dengan Service ID Gmail
- `YOUR_TEMPLATE_ID` dengan Template ID

### 6. Test Form
1. Upload website ke hosting
2. Coba kirim pesan melalui form
3. Cek email adelia021203@gmail.com

## Keuntungan EmailJS:
✅ Gratis sampai 200 email/bulan
✅ Langsung ke Gmail Anda
✅ No server needed
✅ Spam protection
✅ Easy setup

## Jika EmailJS tidak work, alternatif cepat:
Gunakan Netlify Forms (jika hosting di Netlify):
- Form otomatis terhubung
- Notifikasi ke email
- Dashboard untuk melihat pesan
