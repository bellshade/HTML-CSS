# HTML META

### Apa itu HTML meta ?

Tag `<meta>` di dalam html mendefinisikan metadata tentang dokumen HTML.
Metadata adalah informasi tentang data.

Tag `<meta>` selalu berada di dalam `<head>` elemen dan biasanya digunakan untuk menspesifikasikan karakter,
mendeskripsikan halaman, author dari dokumen dan settingan viewport.

Metadata tidak akan terlihat di halaman website namun akan terlihat didalam source code.

Metadata digunakan oleh browser (cara menampilkan konten atau memuat ulang halaman web), mesin pencari/search engines (keyword), dan layanan web lainnya.

Ada metode untuk membiarkan web desainer untuk mengambil kendali atas viewport (area yang terlihat oleh pengguna dari halaman web),
melalui tag `<meta>`.

### Emmet Abbreviation

Untuk beberapa IDE seperti Visual Studio Code, sudah tersedia emmet yang berguna untuk mempermudah pembuatan tag template HTML termasuk `<meta>`. Yaitu dengan mengetik tanda `!` lalu tekan `Enter`.

![preview](./img/emmet.png)

![emmetoutput](./img/output-emmet.png)

#### Contoh kode

```html
<head>
  <meta charset="UTF-8" />
  <meta name="deskripsi" content="Cara PR" />
  <meta name="keywords" content="Github, PR, Pull request" />
  <meta name="author" content="Putri Aliya" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
```

#### Contoh lain

Keywords untuk search engines:
`<meta name="keywords" content="Github, PR, Pull request">`

Deskripsi untuk halaman page:
`<meta name="description" content="Cara PR">`

Author dari web
`<meta name="author" content="Putri Aliya">`

Refresh dokumen setiap 40 detik
`<meta http-equiv="refresh" content="40">`

Setting viewport untuk membuat website terlihat bagus di semua divice
`<meta name="viewport" content="width=device-width, initial-scale=1.0">`

### Setting viewport

Area pandang (Viewport) adalah area halaman web yang terlihat oleh pengguna. Area ini bervariasi dengan perangkat viewport akan
terlihat lebih kecil di layar ponsel daripada di layar komputer.

Elemen `<meta>` harus disertakan disemua halaman web
`<meta name="viewport" content="width=device-width, initial-scale=1.0">`
Ini memberi browser instruksi untuk mengontrol dimensi dan skala halaman web.

`width=device-width` mengatur lebar halaman untuk mengikuti lebar layar perangkat (yang akan bervariasi tergantung pada perangkat).

`initial-scale=1.0` mengatur tingkatan zoom pertama saat halaman web pertama kali dimuat.

Referensi : https://www.w3schools.com/tags/tag_meta.asp

### Open Graph

`Open Graph` merupakan protocol dalam integrasi website kedalam sosial media, seperti Facebook, Twitter, LinkedIn, dll.
Dengan `Open Graph` kita dapat mengontrol informasi apa saja yang dapat ditampilkan pada sosial media ketika kita membagikan link website kita.

protocol ini pertama kali diperkenalkan oleh `Facebook` pada tahun 2010.

cara menambahkan open graph pada website

```html
<meta property="og:url" content="https://www.linkwebsite.com" />
<!-- Tag ini merepresentasikan link halaman yang akan ditampilkan -->
<meta property="og:title" content="Pengenalan Mengenai Open Graph" />
<!-- Tag ini merepresentasikan judul yang akan ditampilkan -->
<meta
  property="og:description"
  content="`Open Graph` merupakan protocol dalam integrasi website kedalam sosial media, seperti Facebook, Twitter, LinkedIn, dll.
Dengan  `Open Graph` kita dapat mengontrol informasi apa saja yang dapat ditampilkan pada sosial media ketika kita membagikan link website kita."
/>
<!-- Tag ini merepresentasikan deskripsi website yang akan ditampilkan -->
<meta property="og:image" content="https://www.linkwebsite/link-gambar" />
<!-- Tag ini merepresentasikan gambar yang akan ditampilkan -->
```

Open Graph dapat berguna untuk kebutuhan SEO, dengan menambahkan informasi yang detail di website kita, maka akan memudahkan mesin pencari untuk menampilkan website kita di halaman pencarian.

Lalu bagaimana cara kita mengecek apakah Open Graph sudah benar-benar terintegrasi dengan website kita?

beberapa sosial media memiliki _debugger_ nya masing masing, contohnya

Facebook: https://developers.facebook.com/tools/debug/

Twitter: https://cards-dev.twitter.com/validator

LinkedIn: https://www.linkedin.com/post-inspector/

Pinterest: https://developers.pinterest.com/tools/url-debugger/

atau kalian bisa menggunakan tools pada https://www.opengraph.xyz/

Referensi: https://ogp.me/.
