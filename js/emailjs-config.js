// js/emailjs-config.js

// =================================================================
// PANDUAN KONFIGURASI EMAILJS
// =================================================================
// 1. Buka https://www.emailjs.com/ dan buat akun gratis.
// 2. Hubungkan layanan email Anda (misalnya, Gmail) di menu "Email Services".
//    - Klik "Add New Service" dan pilih penyedia email Anda.
//    - Ikuti petunjuk untuk menghubungkan akun. Anda akan mendapatkan "Service ID".
// 3. Buat template email di menu "Email Templates".
//    - Klik "Create New Template".
//    - Atur subjek dan isi email. Gunakan variabel seperti `{{Nama}}`, `{{Email}}`, `{{Pesan}}`
//      untuk menyisipkan data dari formulir.
//    - Simpan template. Anda akan mendapatkan "Template ID".
// 4. Dapatkan "Public Key" Anda dari menu "Account" > "API Keys".
//
// Ganti nilai-nilai placeholder di bawah ini dengan kredensial Anda.
// =================================================================

const emailjsConfig = {
    publicKey: 'tXXd8IffMO5FPwsNG',   // <-- Ganti dengan Public Key Anda dari menu Account
    serviceID: 'service_x2mw59k', // <-- Ganti dengan Service ID dari menu Email Services
    templateID: 'template_f67g543', // <-- SUDAH DIUBAH
};

// Export konfigurasi agar bisa diakses oleh script.js
window.emailjsConfig = emailjsConfig;

