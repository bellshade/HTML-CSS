## CSS Variable

### Apa Itu CSS Variable?

CSS `variable` atau nama resminya adalah _Css Custom Properties_ biasa digunakan untuk mempermudah para developer dalam mengakses value yang ada di dalam variabel tersebut tanpa harus memanggil value dari variable tersebut secara berulang - ulang.

### Bagaimana cara menulis CSS Variable?

CSS `variable` dapat di tuliskan dengan cara mengetikkan `--(nama properti): (isi variable)` dimana sebelum mendeklarasikan nama dari sebuah variable, anda harus mengetikkan `--` (double dash / strip) terlebih dahulu. Dan adapun untuk nama dari variablenya anda dapat memberikan nama sesuai keinginan anda / bebas asalkan di dahului dengan tanda _double trip_ tadi.

Seperti:

```css
--red-color: red;
```

dimana `--red-color` adalah nama variable dan `red` adalah value / isi dari variable `--red-color` tersebut yang dimana isi dari variable tersebut adalah sebuah warna `merah`.

Contoh Penulisan Variable:

```css
--red-color: red;
--padding: 20px;
--display: block;
```

### Dimana kita dapat mengetikkan variable-variable tersebut?

Sebenarnya, kita dapat meletakkan variable - variable tersebut pada selector apa pun yang kita inginkan tanpa ada aturan khusus dimana kita harus meletakkannya.

Seperti:

_ID Selectors_

```css
#container {
  --red-color: red;
}
```

_Class Selectors_

```css
.content {
  --padding: 20px;
}
```

dan lainnya..

Namun harus di ingat, jika anda meletakkan variable tersebut pada _Selector Khusus_ maka variable tersebut hanya dapat di akses pada selector itu saja dan tidak bisa di akses pada semua selector. Atau dengan kata lain, variable tersebut hanya bersifat `lokal` dan tidak bersifat `global`. Sedangkan, jika sebuah variable ingin di akses pada semua selector yang ada, maka kita harus menjadikannya sebagai `variable global`.
Adapun untuk menjadikan sebuah variable dapat di akses pada semua selector di `CSS`, maka kita dapat meletakkannya dalam selector `:root`. Dimana selector `:root` ini adalah selector tertinggi yang mencakup semua selector yang ada di dalamnya. Oleh karena itu, dengan meletakkan sebuah variable pada selector _induk_-nya, maka anda dapat memakai variable ini pada semua selector yang ada.

Adapun cara penulisannya adalah:

```css
:root {
  --bg-color: #ffffff;
  --padding: 20px auto;
}
```

### Bagaimana cara mengakses sebuah variable?

Untuk dapat menggunakan / mengakses sebuah variable, maka anda dapat mengetikkan function `var()` setelah mengetikkan nama properti yang akan digunakan, contoh

```css
p {
  color: var(--red-color);
}
```

_Penjelasan_

Dimana `color` adalah properti di _CSS_ untuk memberikan sebuah warna, dan `var(--red-color)` adalah variable yang telah di deklarasikan pada selector `:root` tadi. Oleh karena itu, maka ketika anda mengetikkan code CSS tersebut, maka semua pragraf akan menjadi warna merah (p adalah selector untuk memanggil semua paragraf dalam CSS).

### Apa kelebihan menggunakan CSS Variable?

Tentu saja keunggulan yang sangat terasa ketika anda menggunakan CSS Variable adalah penggunaan yang mudah tanpa perlu menuliskan sebuah properti secara satu per satu. Selain itu, dengan menggunakan CSS Variable, maka perawatan yang dilakukan akan sangat mudah. Karena, ketika anda ingin mengubah isi dari sebuah variable, maka otomatis semua selector yang menggunakan variable tersebut isinya akan ikut berubah tanpa perlu di ubah satu per satu.

Contoh:

_Sebelum di ubah_

```css
:root {
  --bg-color: #ffffff;
  --padding: 20px auto;
}

#container {
  background-color: var(--bg-color);
  padding: var(--padding);
}

.content {
  padding: var(--padding);
  display: flex;
}
```

_Setelah di ubah_

```css
:root {
  --bg-color: black;
  --padding: 10px;
}

#container {
  background-color: var(--bg-color);
  padding: var(--padding);
}

.content {
  padding: var(--padding);
  display: flex;
}
```

Dengan hanya mengubah isi dari variable yang telah di deklarasikan, maka otomatis semua `padding` dan `background-color` akan otomatis berubah menjadi `10px` dan juga warna `hitam` pada setiap selector yang _menggunakan_ variable tersebut.
