# Semantic HTML

## Apa itu semantic HTML?
Semantic HTML adalah dokumen HTML yang terstruktur berdasarkan elemen semantik. Elemen semantik sendiri diperkenalkan pada HTML 5 yang bertujuan untuk memberikan makna, maksud atau arti kepada halaman web.

HTML memiliki beberapa elemen semantik seperti `<header>`, `<footer>`, `<article>`, dan lain-lain.

Contohnya tag `<header>`, tag ini digunakan untuk membuat elemen header atau bagian atas dari web. Kita bisa saja menggunakan tag `<div>` dan tidak menggunakan tag `<header>`, tetapi hal itu membuat website yang kita buat nantinya menjadi tidak semantik.

## Kenapa HTML harus semantik?
Tentunya, HTML yang benar secara semantis akan membantu perangkat seperti _screen reader_ untuk menguraikan isi dari website tersebut. Perangkat seperti _screen reader_ membantu teman-teman kita yang disabilitas untuk bisa mendapatkan informasi dari website yang kita buat nantinya.

Selain itu juga, jika kita menggunakan elemen semantik, dokumen HTML kita akan mudah dibaca, baik itu oleh mesin maupun oleh kita sebagai manusia.

Ini adalah contoh kode HTML yang tidak menggunakan elemen semantik:
```html
<div id="header"></div>
<div class="bagian-awal">
  <div class="artikel"></div>
</div>
```

Dan ini adalah kode HTML yang menggunakan elemen semantik:
```html
<header></header>
<section>
  <article></article>
</section>
```
Jika dibandingkan, kode HTML yang menggunakan elemen semantik lebih mudah untuk dibaca dan lebih ringkas dibandingkan dengan kode yang tidak menggunakan elemen semantik.

## SEO
Karena sifat HTMl semantik yang mudah dibaca oleh manusia ataupun mesin, maka tidak dipungkiri bahwa HTML yang semantik lebih disukai oleh _search engine_ karena sifat HTML yang semantic yang bisa menginterpretasikan konten dengan baik. 
Hal ini tentunya akan berdampak baik pada website kita karena kemungkinan untuk mendapatkan ranking teratas di hasil pancarian seperti Google.

## Daftar elemen-elemen semantik
- `<header>` untuk membuat elemen bagian atas dari web
- `<article>` untuk membuat elemen artikel
- `<nav>` untuk membuat navigasi
- `<main>` untuk membuat elemen utama
- `<details>` untuk membuat elemen detail atau spoiler
- `<aside>` untuk membuat elemen pada bagian samping
- `<summary>` untuk membuat ringkasan artikel atau isi spoiler
- `<figcaption>` untuk membuat teks caption pada figure
- `<mark>` untuk menandai teks
- `<section`> untuk membuat bagian artikel
- `<time>` untuk membuat elemen yang menyatakan waktu
- dan masih banyak lagi.


## Referensi
Untuk referensi lengkapnya, kalian bisa mengunjungi [website berikut](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html).
