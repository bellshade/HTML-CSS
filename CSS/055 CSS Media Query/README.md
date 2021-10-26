# CSS Media Query

## Pengenalan

**CSS Media Query** digunakan sebagai cara untuk mengubah tampilan dan perilaku sebuah website atau aplikasi berdasarkan serangkaian kondisi tertentu.

Teknik **_media query_** akan menerapkan **_custom style_** yang bisa kita tentukan hanya jika kondisi tertentu benar, misalnya kita ingin mengubah ukuran font _hanya_ ketika lebar layar perangkat diatas 1000px, maka kita bisa melakukannya dengan

```css
@media screen and (min-width: 1000px) {
  /* custom style */
  h1 {
    font-size: 24px;
  }
}
```

Properti CSS di atas akan diterapkan hanya pada layar perangkat yang memiliki lebar 1000 pixel atau lebih.

Kita juga bisa mengubah _style_ pada element-element lainnya agar tetap terlihat sempurna ketika diakses melalui perangkat apapun, atau dengan kata lain website kita akan tampak responsif.

Cara tersebut lebih difungsikan pada konsep _Responsive Design_ yaitu bagaimana membangun sebuah aplikasi web yang memiliki perilaku berbeda ketika dihadapkan pada kondisi tertentu, seperti ketika diakses melalui _smartphone_, _tablet_, _desktop_ dan perangkat lainnya.

## Penggunaan

Kita bisa menuliskan **CSS Media Query** menggunakan `@media` rule seperti berikut:

```css
@media [media-type] and ([media-feature]) {
  /* custom style */
  element {
    /* style */
  }
}
```

**`PERHATIKAN!`** dalam penulisan **Media Query** antara _media-type_ dengan _media-feature_ harus selalu dihubungkan dengan `and`.
Kenapa? karena pada dasarnya `@media` rule itu sendiri merupakan sebuah operator logika yang menyatakan bahwa **_"jika"_** `media-type` dan `media-feature` cocok, maka terapkan _custom style_.

### Media-Type

**_Media type_** merupakan jenis media yang dijadikan sebuah target pada `@media` rule.
Ada beberapa _media type_ diantaranya:

- `screen` : media dengan layar seperti _komputer_, _tablet_, _smartphone_ dll.
- `print` : media yang memecah halaman menjadi dokumen untuk dicetak seperti _printer_
- `speech` : media yang membaca halaman dengan suara seperti _screen reader_
- `all` : semua media (default)

### Media Feature

Setelah menentukan **_Media type_**, ada **_Media feature_** yang memberi detail yang lebih spesifik untuk menentukan fitur pada _media query_.

- `height` : menentukan tinggi _viewport_
- `width` : menentukan lebar _viewport_
- `min-height` : menentukan minimal tinggi _viewport_
- `min-width` : menentukan minimal lebar _viewport_
- `max-height` : menentukan maksimal tinggi _viewport_
- `max-width` : menentukan maksimal lebar _viewport_

Ada banyak sekali _media feature_ yang bisa digunakan, tetapi dalam ranah _Responsive Design_ hanya ada beberapa yang seringkali digunakan.
Kamu bisa lihat [disini](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp) untuk lengkapnya.

## Responsive Desain

Ketika kita ingin membuat sebuah desain website yang mampu beradaptasi dengan beragam jenis perangkat, maka di sinilah cara yang bisa dilakukan oleh **CSS Media Query**.

Misal, kita punya properti CSS seperti berikut:

```css
body {
  width: 100%;
  height: 100vh;
  background-color: lightgreen;
  margin: 0 auto;
}
```

> Bagaimana cara mengubah value `width` hanya **_jika_** lebar layarnya **768px** atau kurang?

Jika ingin melakukan hal ini, kita bisa menentukan `screen` pada _media type_ dan `max-width` pada _media feature_

```css
@media screen and (max-width: 768px) {
  body {
    /* Misal, kita ingin mengubah `width` ke 80%  */
    width: 80%;
  }
}
```

Hasilnya, ketika lebar _screen_ &le; 768px, maka lebar element _body_ akan menjadi 80%

> Bagaimana cara mengubah value `height` hanya **_jika_** lebar layarnya **480px** atau lebih?.

Kita bisa menggunakan `min-width` untuk _media feature_, lalu ubah nilainya dengan 480px;

```css
@media screen and (min-width: 480px) {
  body {
    /* Misal, kita ingin mengubah `height` ke 80vh  */
    height: 80vh;
  }
}
```

Hasilnya, ketika lebar _screen_ &ge; 480px, maka tinggi element _body_ akan menjadi 80vh

> Bagaimana cara mengubah value `background-color` **_jika_** lebar layarnya antara **480px** hingga **768px**.

Pada kasus ini, kita bisa menggunakan operator `and` untuk menghubungkan 2 kondisi pada _media feature_, seperti menargetkan _range_ lebar layar. Kemudian gunakan `min-width` dan `max-width` untuk kedua _media feature_ tersebut.

```css
/*  Jika lebar screen adalah 480px s/d 768px, maka terapkan style berikut */
@media screen and (min-width: 480px) and (max-width: 768px) {
  body {
    /* Misal, kita mengubah `background-color` dengan Salmon  */
    background-color: salmon;
  }
}
```

Hasilnya, warna background akan berubah ketika lebar _screen_ berada di 480px s/d 768px. Selain daripada itu, warna background akan kembali seperti semula.

Selain mengubah _value_ pada properti CSS, bisa juga untuk menyembunyikan (hidden) element tertentu, contohnya seperti:

```css
@media screen and (max-width: 320px) {
  body {
    display: none;
  }
}
```

Hasilnya, ketika lebar _screen_ di bawah 320px, maka element _body_ akan menghilang.

### Breakpoints

Kita tau bahwa ukuran layar dari berbagai perangkat tentu sangatlah bervariasi, kita tidak mungkin menerapkan _style css_ untuk semua jenis perangkat yang ada.

Tetapi, ada beberapa _Breakpoints_ tertentu yang biasanya menjadi 'patokan' agar lebih mudah dalam mendesain website yang responsif.

| Xtra Small (xs) | Small (sm) | Medium (md) | Large (lg)  | XtraLarge (xl) |
| :-------------: | :--------: | :---------: | :---------: | :------------: |
|   &lt; 557px    | &ge; 557px | &ge; 768px  | &ge; 1024px |  &ge; 1280px   |

Pada implementasinya, kita bisa gunakan teknik seperti berikut:

```css
/* Xtra Small (xs) - Small Phone */
element {
  /* styles */
}

element-2 {
  /* styles */
}

/* Small screen (sm) - Phone */
@media screen and (min-width: 557px) {
  /* Custom Styles */
  element {
    /* styles */
  }
  element-2 {
    /* styles */
  }
}

/* Medium screen (md) - Tablet */
@media screen and (min-width: 768px) {
  /* Custom Styles */
  element {
    /* styles */
  }
  element-2 {
    /* styles */
  }
}

/* Large screen (lg) - Laptop */
@media screen and (min-width: 1024px) {
  /* Custom Styles */
  element {
    /* styles */
  }
  element-2 {
    /* styles */
  }
}

/* Xtra Large screen (xl) - PC Monitor */
@media screen and (min-width: 1280px) {
  /* Custom Styles */
  element {
    /* styles */
  }
  element-2 {
    /* styles */
  }
}
```

Teknik diatas merupakan cara untuk membuat desain website yang mendahulukan versi mobile sebelum ke versi desktop, atau istilah dalam Web Desain adalah _Mobile First_.
