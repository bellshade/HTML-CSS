# HTML META
### Apa itu HTML meta ?

Tag ```<meta>``` di dalam html mendefinisikan metadata tentang dokumen HTML.
Metadata adalah informasi tentang data.

Tag ```<meta>``` selalu berada di dalam ```<head>``` elemen dan biasanya digunakan untuk menspesifikasikan karakter, 
mendeskripsikan halaman, author dari dokumen dan settingan viewport. 

Metadata tidak akan terlihat di halaman website namun akan terlihat didalam source code.

Metadata digunakan oleh browser (cara menampilkan konten atau memuat ulang halaman web), mesin pencari/search engines (keyword), dan layanan web lainnya.

Ada metode untuk membiarkan web desainer untuk mengambil kendali atas viewport (area yang terlihat oleh pengguna dari halaman web),
melalui tag ```<meta>```.

#### Contoh kode

```html
<head>
  <meta charset="UTF-8">
  <meta name="deskripsi" content="Cara PR">
  <meta name="keywords" content="Github, PR, Pull request">
  <meta name="author" content="Putri Aliya">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```

#### Contoh lain

Keywords untuk search engines:
```<meta name="keywords" content="Github, PR, Pull request">```

Deskripsi untuk halaman page:
```<meta name="description" content="Cara PR">```

Author dari web
```<meta name="author" content="Putri Aliya">```

Refresh dokumen setiap 40 detik
```<meta http-equiv="refresh" content="40">```

Setting viewport untuk membuat website terlihat bagus di semua divice
```<meta name="viewport" content="width=device-width, initial-scale=1.0">```

### Setting viewport

Area pandang (Viewport) adalah area halaman web yang terlihat oleh pengguna. Area ini bervariasi dengan perangkat viewport akan 
terlihat lebih kecil di layar ponsel daripada di layar komputer.

Elemen ```<meta>``` harus disertakan disemua halaman web
```<meta name="viewport" content="width=device-width, initial-scale=1.0">```
Ini memberi browser instruksi untuk mengontrol dimensi dan skala halaman web.

```width=device-width``` mengatur lebar halaman untuk mengikuti lebar layar perangkat (yang akan bervariasi tergantung pada perangkat).

```initial-scale=1.0``` mengatur tingkatan zoom pertama saat halaman web pertama kali dimuat.

Referensi : https://www.w3schools.com/tags/tag_meta.asp


