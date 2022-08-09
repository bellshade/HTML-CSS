## CSS Custom Properties

### Apa Itu CSS Custom Properties?

**_Custom Properties_** (terkadang disebut sebagai variabel CSS atau _cascading variables_) adalah entitas yang ditentukan oleh penulis CSS yang berisi nilai tertentu untuk digunakan kembali di seluruh dokumen. Mereka disetel menggunakan notasi properti khusus, seperti:

```css
--main-color: black;
```

Dan diakses menggunakan fungsi `var()` seperti:

```css
color: var(--main-color);
```

**_Custom Properties_** ini biasa digunakan untuk mempermudah para developer dalam mengakses value yang ada di dalam variabel tersebut tanpa harus memanggil value dari variabel tersebut secara berulang-ulang.

## Penggunaan Dasar

**_Custom Properties_** dapat dituliskan dengan cara mengetikkan `--(nama variabel): (isi variabel);` dimana sebelum mendeklarasikan nama dari sebuah variabel, anda harus mengetikkan `--` (double _dash_/strip) terlebih dahulu. Adapun untuk nama dari variabelnya, anda dapat memberikan nama sesuai keinginan anda asalkan didahului dengan tanda `--` tadi. Isi dari variabel dapat berupa nilai CSS apa pun yang valid.

Seperti properti lainnya, variabel ini ditulis di dalam sebuah _selector element_, seperti berikut:

```css
element {
  --main-bg-color: brown;
}
```

Penjelasan:

`--main-bg-color` adalah nama variabel dan `brown` adalah value/isi dari variabel `--main-bg-color` tersebut.

Perhatikan bahwa _selector_ yang diberikan kepada variabel tersebut mendefinisikan ruang lingkup tempat variabel dapat digunakan. Contohnya seperti kode di atas, variabel `--main-bg-color: brown;` hanya bisa digunakan pada elemen tersebut saja. Praktik terbaik yang umum digunakan adalah mendefinisikan variabel pada sebuah _pseudo-class_ `:root`.

_Selector_ `:root` ini adalah _selector_ tertinggi yang mencakup semua _selector_ yang ada di dalam sebuah dokumen CSS. Jika kita meletakkan sebuah variabel pada selector `:root`, maka anda dapat memakai variabel ini pada semua _selector_ yang ada.

Contoh:

```css
:root {
  --main-bg-color: brown;
}
```

> Catatan: Nama variabel peka terhadap huruf besar/kecil (_case sensitive_) — `--main-bg-color` akan diperlakukan sebagai variabel yang berbeda dengan `--Main-bg-color`.

### Mengakses Variabel

Untuk dapat menggunakan/mengakses sebuah variabel, maka anda dapat mengetikkan function `var()` setelah mengetikkan nama properti yang akan digunakan, contoh:

```css
p {
  background-color: var(--main-bg-color);
}
```

Dimana `background-color` adalah properti di CSS untuk mengubah warna _background_ dari sebuah elemen dan `var(--main-bg-color)` adalah variabel yang telah dideklarasikan pada selector `:root` tadi. Oleh karena itu, ketika anda mengetikkan kode CSS tersebut semua paragraf akan mempunyai _background_ berwarna coklat.

### Contoh penggunaan sederhana **_custom properties_**

Biasanya tanpa menggunakan **_custom properties_** kita akan menuliskan baris-baris css sebagai berikut:

```css
.one {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 50px;
  height: 50px;
  display: inline-block;
}
.two {
  color: white;
  background-color: black;
  margin: 10px;
  width: 150px;
  height: 70px;
  display: inline-block;
}
.three {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 75px;
}
.four {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 100px;
}
.five {
  background-color: brown;
}
```

Perhatikan bahwa kita telah mengulang-ulang penggunaan properti `background-color: brown;` pada beberapa elemen dan jika kita ingin mengubah `background-color: brown;` tersebut menjadi `background-color: red;`, maka kita harus mengubah satu persatu properti css tersebut. Nah, dengan **_custom properties_** ini, kita dapat melakukan hal seperti di bawah ini pada file css kita :

```css
:root {
  --main-bg-color: brown;
}
.one {
  color: white;
  background-color: var(--main-bg-color);
  margin: 10px;
  width: 50px;
  height: 50px;
  display: inline-block;
}
.two {
  color: white;
  background-color: black;
  margin: 10px;
  width: 150px;
  height: 70px;
  display: inline-block;
}
.three {
  color: white;
  background-color: var(--main-bg-color);
  margin: 10px;
  width: 75px;
}
.four {
  color: white;
  background-color: var(--main-bg-color);
  margin: 10px;
  width: 100px;
}
.five {
  background-color: var(--main-bg-color);
}
```

Jika kita ingin mengubah `background-color` tersebut maka kita hanya perlu mengubah 1 bagian saja yaitu `--main-bg-color: brown;` dan semua `background-color` akan berubah.

### Kenapa kita harus menggunakan **_custom properties_**

Banyak keunggulan yang terasa ketika anda menggunakan CSS variabel, diantaranya:

1.  Mereka membantu _DRY_ CSS Kita. _DRY_ adalah "_Don’t Repeat Yourself_." **_Custom Properties_** dapat membuat kode lebih mudah di _maintain_ karena kita dapat memperbarui satu nilai dan menampilkannya di banyak tempat.
2.  Mereka sangat membantu untuk hal-hal seperti membuat tema warna di situs web.
3.  Variabel dapat diperbarui melalui _JavaScript_.

## Browser support

Berikut adalah data browser support dari [caniuse.com](caniuse.com) untuk **_custom properties_**.

![Data browser support dari caniuse.com](https://res.cloudinary.com/ireaderinokun/image/upload/v1633265298932/caniuse-embed/all/CSS-Variables.webp)

## Sumber dan Resorurce

- [caniuse.com](https://caniuse.com/)
- [developer.mozilla.org](https://developer.mozilla.org/)
- [css-tricks.com](https://css-tricks.com/)
