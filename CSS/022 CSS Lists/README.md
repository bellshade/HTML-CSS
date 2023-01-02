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

```
- Coffee
- Tea
- Coca Cola
```

Daftar numerik:

```
1. Coffee
2. Tea
3. Coca Cola
```

Ada beberapa properti yang bisa kamu gunakan untuk men-style list

## list-style

contoh penggunanan list pada CSS:

```css
ul {
  list-style-type: circle;
}
```

```css
ol {
  list-style-type: upper-roman;
}
```

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
