# Opsi Setup Form Contact

## 1. Formspree (Mudah & Recommended)
1. Kunjungi https://formspree.io/
2. Daftar dengan email Anda
3. Buat form baru
4. Ganti `YOUR_FORM_ID` di HTML dengan ID yang diberikan Formspree
5. Pesan akan dikirim ke email Anda

**Keuntungan:**
- Gratis sampai 50 pesan/bulan
- Setup mudah
- Anti-spam protection
- File upload support

## 2. Netlify Forms (Jika hosting di Netlify)
Ganti form di HTML dengan:
```html
<form class="contact-form" name="contact" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact">
    <!-- form fields sama -->
</form>
```

## 3. EmailJS (JavaScript Only)
1. Daftar di https://emailjs.com/
2. Setup email service
3. Tambahkan script EmailJS
4. Konfigurasi template email

## 4. Google Forms (Alternative)
1. Buat Google Form
2. Embed ke website
3. Responses masuk ke Google Sheets

## 5. Backend Custom (Advanced)
- PHP dengan mail()
- Node.js dengan Nodemailer
- Python Flask/Django
- Membutuhkan hosting dengan server-side support

## Recommendation
Untuk portfolio static: **Gunakan Formspree** - paling mudah dan reliable.
