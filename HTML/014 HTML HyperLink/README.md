# HTML HYPERLINK

## Apa itu HTML hyperlink?

HTML hyperlink adalah sebuah tag HTML yang berfungsi untuk navigasi antar halaman, ataupun navigasi ke link eksternal.

Hyperlink di-representasikan dengan tag `<a>`.

Tag `<a>` memiliki beberapa atribut, yaitu:

## `href`
`href` adalah atribut dari elemen `<a>` yang paling penting, karena berfungsi untuk meletakan link atau halaman tujuan.
### contoh kode
```html
<a href="https://github.com/">Link menuju situs Github</a>
<a href="dashboard.html">Link menuju halaman dashboard</a>
<a href="#about">Link menuju section atau elemen HTML yang diberi id about</a>
```

## `target`
Atribut `target` berfungsi untuk menjelaskan ke mana link akan dibuka. Untuk lebih jelasnya, berikut adalah beberapa nilai yang dapat digunakan sebagai nilai atribut `target`:  

### `_self`
Ini adalah nilai default untuk `target`, berfungsi untuk membuka link di halaman/tab yang sama.
```html
<a href="https://github.com/" target="_self">Link menuju Github</a>
```
Jika tidak memberikan atribut `target`, berarti sama saja dengan memberi nilai `_self`.
```html
<a href="https://github.com/">Link menuju Github</a>
```

### `_blank`
Berfungsi untuk membuka link di tab baru.
```html
<a href="https://github.com/" target="_blank">Link menuju Github</a>
```

### `_parent`
Berfungsi untuk membuka link hanya di parent dari sebuah `frame`.
```html
<a href="https://github.com/" target="_parent">Link menuju Github</a>
```

### `_top`
Berfungsi untuk membuka link secara penuh di window browser, walaupun terdapat `frame` yang bersarang.
```html
<a href="https://github.com/" target="_top">Link menuju Github</a>
```
---
## Kesimpulan
 Jika kita ingin membuat navigasi antar halaman atau membuka link situs eksternal, maka kita dapat menggunakan tag `<a>` dengan atribut `href` yang di-isi halaman atau situs yang kita inginkan. Lalu ada atribut `target`, kebanyakan orang mengisinya dengan nilai `_blank` agar membuka link tersebut di tab baru.
