# 📧 Setup EmailJS untuk Portfolio

## 🚀 Langkah Setup (5 menit)

### 1. Daftar EmailJS
- Kunjungi: https://www.emailjs.com/
- Sign up dengan email: **adelia021203@gmail.com**
- Verifikasi email

### 2. Setup Gmail Service
- Dashboard → **Email Services** → **Add New Service**
- Pilih **Gmail**
- Service ID: `gmail_service`
- Connect dengan Gmail Anda
- **SIMPAN Service ID!**

### 3. Buat Email Template
- Dashboard → **Email Templates** → **Create New Template**
- Template ID: `portfolio_contact`
- Subject: `Portfolio Contact: {{subject}}`
- Content:
```
Halo Adelia,

Pesan baru dari portfolio:

Nama: {{from_name}}
Email: {{from_email}}
Subjek: {{subject}}

Pesan:
{{message}}

---
Dari: https://portfolio-adelia.netlify.app
```
- **SIMPAN Template ID!**

### 4. Dapatkan Public Key
- Dashboard → **Account** → **API Keys**
- **SIMPAN Public Key!**

### 5. Update Konfigurasi
Edit file `js/emailjs-config.js`:
```javascript
const EMAILJS_CONFIG = {
    PUBLIC_KEY: "paste_public_key_here",
    SERVICE_ID: "gmail_service", 
    TEMPLATE_ID: "portfolio_contact"
};
```

### 6. Test
- Upload website
- Isi form contact
- Cek email **adelia021203@gmail.com**

## ✅ Hasil
- ✅ Form kirim email langsung ke Gmail
- ✅ Notifikasi sukses/error
- ✅ 200 email gratis/bulan
- ✅ No server required

## 🔧 Troubleshooting
- **Error 401**: Cek Public Key
- **Error 404**: Cek Service ID & Template ID  
- **No email**: Cek spam folder
- **Form error**: Buka browser console (F12)

## 📱 File yang Diubah
- `index.html` - EmailJS script
- `js/emailjs-config.js` - Konfigurasi
- `js/script.js` - Form handler
