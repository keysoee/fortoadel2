# Setup EmailJS - Langkah demi Langkah

## 1. Daftar EmailJS
1. Kunjungi https://www.emailjs.com/
2. Klik "Sign Up"
3. Daftar dengan email: adelia021203@gmail.com
4. Verifikasi email

## 2. Setup Gmail Service
1. Login ke dashboard EmailJS
2. Klik "Email Services" di sidebar
3. Klik "Add New Service"
4. Pilih "Gmail"
5. Isi:
   - Service ID: `gmail_service` (atau nama lain)
   - User: adelia021203@gmail.com
6. Klik "Connect Account" dan authorize Gmail
7. **SIMPAN SERVICE ID INI!**

## 3. Buat Email Template
1. Klik "Email Templates"
2. Klik "Create New Template"
3. Isi Template:

**Template Name:** Portfolio Contact
**Template ID:** `portfolio_contact` (atau nama lain)

**Subject:** 
```
Portfolio Contact: {{subject}}
```

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
Dikirim otomatis dari portfolio website
Website: https://yourwebsite.com
```

4. **SIMPAN TEMPLATE ID INI!**

## 4. Dapatkan Public Key
1. Klik "Account" di menu
2. Di bagian "API Keys"
3. **SIMPAN PUBLIC KEY INI!**

## 5. Update Kode Website
Ganti di file `js/script.js`:
- `YOUR_EMAILJS_PUBLIC_KEY` → Public Key dari step 4
- `YOUR_SERVICE_ID` → Service ID dari step 2  
- `YOUR_TEMPLATE_ID` → Template ID dari step 3

## Contoh:
```javascript
emailjs.init("your_public_key_here");
emailjs.sendForm('gmail_service', 'portfolio_contact', this)
```

## 6. Test
1. Upload website
2. Isi form dan kirim
3. Cek email adelia021203@gmail.com

## Free Limits:
- 200 emails/bulan
- Unlimited services
- Basic support
