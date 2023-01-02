# CSS List

Pada CSS, List adalah sebuah elemen yang digunakan untuk membuat daftar item yang tersusun. List biasa digunakan untuk menampilkan daftar barang semacam _to-do list_.

Untuk membuat List di HTML, kamu bisa menggunakan elemen seperti `ul` atau `ol` sebagai wadahnya dan untuk membuat item-item yang didaftar kamu bisa menggunakan elemen `li`.

```html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ul>
```

## Perbedaan `ul` dan `ol`

Ada perbedaan antara elemen `ul` dan `ol`, Elemen `ul` digunakan untuk membuat daftar bullet, sedangkan elemen `ol` digunakan untuk membuat daftar numerik.

Daftar bullet:

![list bullet](list-bullet.png)

Daftar numerik:

![list bullet](list-numerik.png)

Ada beberapa properti yang bisa kamu gunakan untuk men-style list

## list-style-type

Properti `list-style-type` untuk mengatur tanda pada daftar.

Contoh:

```css
ul {
  list-style-type: japanese-formal;
}
```

Hasil:
![list-type](list-type.png)

## list-image

Anda juga dapat meng-custom tanda dengan gambar menggunakan properti `list-image`.

Contoh:

```css
ul {
  list-style-image: url("icons8-beef-burger-24.png");
}
```

Hasil:
![list-image](list-image.png)

## list-position

Porperti `list-position` untuk mengatur posisi tanda list dan hanya memiliki dua value yaitu `inside` dan `outside`.

Contoh:

```css
ul {
  list-style-position: inside;
}
```

Hasil:
![list-position](list-position.png)

Jika diperhatikan lebih dalam melalui _inspect_ di browser, kamu akan menemukan bahwa `list` tersebut berada dalam content yang mana secara default list berada di luar content.

Untuk membuat List, kamu bisa menggunakan elemen seperti `ul` (untuk daftar bullet), ol (untuk daftar numerik), dan li (untuk setiap item pada daftar).

Contoh penggunaan list pada CSS adalah sebagai berikut:

Copy code
ul {
list-style-type: square;
margin: 0;
padding: 0;
}

li {
margin: 10px 0;
}

>

Dengan menggunakan kode di atas, kita dapat membuat daftar bullet yang menggunakan symbol kotak sebagai tanda pemisah antar item pada daftar. Margin dan padding pada elemen ul dan li juga dapat diatur sesuai kebutuhan.
