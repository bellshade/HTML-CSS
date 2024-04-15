## CSS Specificity

> Jika kamu memberikan style CSS tapi style tersebut tidak diterapkan oleh browser, maka besar kemungkinan masalah kamu di CSS Specificity

### Apa itu CSS Specificity?

CSS Specificity sederhananya adalah cara browser menentukan style mana yang akan diterapkan jika ada **selector** yang saling memberikan property stye yang sama tapi valuenya berbeda (bertabrakan).

Contoh sederhana:

```html
<p>Paragraf ini diberikan style bertabrakan</p>
```

```css
p {
  color: blue;
}
p {
  color: red;
}
```

Pada contoh diatas, tag p diberikan style color yang bertabrakan, ada yang memberikan warna biru dan ada yang memberikan warna merah. Disinilah CSS Specificity berperan untuk memilih salah satu style untuk diterapkan kepada tag p, antara warna biru atau warna merah. Kan tidak mungkin untuk menerapkan keduanya atau menganulir keduanya.

_"Saya paham kok penggunaan selector. Tidak mungkin saya membuat selector yang sama, apalagi sampai memberikan style yang bertabrakan"_

Sebagai pemula, kamu mungkin bisa berhati-hati agar tidak memberikan selector yang sama dan tidak memberikan style yang bertabrakan agar tidak perlu memikirkan CSS specificity. Tapi saat kamu terjun ke dunia kerja, kamu akan sangat membutuhkan materi CSS specificity ini.

Contoh kasus:

- Saat kamu membagi-bagi style kedalam beberapa file CSS. Contohnya saat kamu ingin memberikan style default bagi setiap tag, property, atau class yang disimpan pada file default.css lalu kamu bekerja pada file style.css.
- Saat kamu copas template html-css orang lain lalu ingin meng-custom-nya (menimpa style menjadi style sendiri)
- Saat kamu menggunakan CSS framework lalu ingin meng-custom-nya (menimpa style menjadi style sendiri)
- Saat kamu bekerja sama dengan developer lain
- dll

### Bagaimana CSS Specificity bekerja?

CSS Specificity bekerja dengan cara mengkalkulasi selector dengan memberikan bobot bagi tiap-tiap tipe selector. Selector dengan total bobot paling besarlah yang akan diterapkan. Jika bobotnya sama karena tag yang sama seperti pada contoh sederhana diatas, maka style terakhirlah yang akan diterapkan. Jika bobotnya sama karena sama-sama menggunakan selector id, maka style id terdekat elemenlah yang akan diterapkan.

Contoh sama-sama menggunakan selector id

```html
<div id="blog">
  <article id="article">
    <p id="paragraf">ID disini yang terdekat dengan elemen</p>
  </article>
</div>
```

```css
/* Style ini tidak diterapkan */
#blog {
  color: green;
}
/* Style ini yang akan diterapkan */
#paragraf {
  color: red;
}
/* Style ini tidak diterapkan */
#article {
  color: blue;
}
```

### Bobot Tiap-tiap Selector

Bobot pada CSS Specificity dibagi kedalam 3 kolom bobot tiap selector yang dimulai dari

1. Id
1. Class, Atribut, dan Pseudo-classes
1. Elemen dan Pseudo-elements

Visualisasi dari 3 kolom bobot ini digambarkan `0-0-0` dengan terurut dari id, class, lalu elemen. kolom paling kiri memiliki bobot terberat lalu diikuti sebelahnya sampai kolom paling kanan dengan bobot terringan.

Dari penjelasan diatas, kita tidak bisa menerjemahkannya agar dibaca sebagai `ratusan-puluhan-satuan` karena saat kolom class mencapai nilai 10, ia tidak menambahkan nilai 1 ke kolom id lalu mengulang kolom class dari 0 lagi. Saat kolom class mencapai nilai 10, kolom class tetap bernilai 10, begitulah seterusnya. Begitu pula dengan kolom elemen.

### Mengkalkulasi CSS Specificity

```html
<!-- Bahan mengkalkulasi CSS Specificity -->
<body id="body" class="container dark-mode">
  <section id="section">
    <div>
      <h1 id="heading1" class="impact">Warna apakah aku?</h1>
    </div>
  </section>
</body>
```

- Banyak id akan masuk ke kolom id.
  ```css
  #body #heading1 {
    color: indigo;
  }
  ```
  Karena selectornya menggunakan 2 id dan tidak ada selector class dan elemen, maka bobotnya menjadi `2-0-0`
- Banyak class akan masuk ke kolom class.
  ```css
  #body.container.dark-mode #heading1.impact {
    color: violet;
  }
  ```
  Karena selectornya menggunakan 2 id dan 3 class tanpa elemen, maka bobotnya menjadi `2-3-0`
- Banyak elemen akan masuk ke kolom elemen

  ```css
  body#body.container.dark-mode section div h1#heading1.impact {
    color: red;
  }
  ```

  Karena selectornya menggunakan 2 id, 3 class, dan 4 elemen, maka bobotnya menjadi `2-3-4`

  Dari hasil membandingkan kalkulasi diatas, maka dapat dipastikan bahwa style yang akan diterapkan adalah `color: red`

  > Selector terpanjang tidak selalu berarti ia akan diterapkan oleh browser. Tetap harus dikalkulasi CSS Specificitynya

  Untuk membuktikan teori ini, selector terpanjang diatas dapat dilawan dengan selector yg lebih pendek, yaitu dengan:

  ```css
  #body #section #heading1 {
    color: green;
  }
  ```

### Inline CSS

_"Selector kan adanya pada internal dan external CSS, sedangkan teknik untuk memberikan style ada tambahan satu lagi yaitu inline css dan inline css tidak memakai selector. Bagaimana jadinya jika inline css ditabrakkan dengan internal atau eksternal css?"_

Inline CSS bobotnya lebih berat dari 3 kolom selector sebelumnya. Jadi jika divisualisasikan akan menjadi 4 kolom seperti `0-0-0-0` dengan kolom paling kiri (kolom terberat) adalah inline css.

Jika kita mengambil contoh pada Mengkalkulasi CSS Specificity sebelumnya, maka 3 id yg memberikan style `color: green` bisa dilawan dengan cara inline css pada tag h1

```html
<h1 id="heading1" class="impact" style="color: black;">Warna apakah aku?</h1>
```

### !important

_"Berarti kalau memberikan style melalui inline css sudah tidak bisa dilawan lagi dong?"_

Secara teori, inline CSS masih bisa dilawan dengan `!important`. Jika kita mengambil contoh pada Mengkalkulasi CSS Specificity sebelumnya, bahkan kita bisa menerapkan style pada selector `#body #heading1` dengan bantuan !important ini. Contoh penggunaan !important:

```css
#body #heading1 {
  color: indigo !important;
}
```

Karena cara kerja !important mengabaikan hukum CSS Specificity, maka penggunaannya tidak dianjurkan (bad practice). Sebaiknya jangan gegabah.

### Referensi

[Specificity - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
