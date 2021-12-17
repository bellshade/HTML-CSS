# HTML Picture

## Apa itu HTML Picture?

HTML memiliki sebuah elemen `<picture>` yang sangat berguna dalam melakukan membangun sebuah website. Tanpa gambar website akan terasa sangat membosankan, maka dari itu kalian perlu mempelajari tentang HTML Picture.

HTML Picture memiliki fungsi mirip seperti media query pada CSS, tetapi kita tidak memerlukan CSS untuk menggunakannya, hanya dengan HTML saja sudah bisa membuat img menjadi responsive pada website kalian.

## contoh Kode
```html
<picture></picture>
```

ada juga child dari `<picture>` ini yaitu `<source>` dan `<img>`

```html
<picture>
    <source>
    <img src="" alt="">
</picture>
```

untuk menampilkan gambar, kita perlu mengarahkan tag `<img>` kepada file yang kita inginkan melalui atribut `src="url"` atau bisa juga `src="imagepath"`

Belum belajar tag html img ? -> [HTML Image](https://github.com/bellshade/HTML-CSS/tree/main/HTML/015%20HTML%20Images)

Terdapat beberapa attribut yang biasa digunakan dalam tag `<source>`, yaitu:
- **srcset** - Digunakan untuk mengarahkan path dari suatu gambar.
- **sizes** - Digunakan untuk mengatur ukuran gambar.
- **media** - Digunakan untuk mengatur media query.

## contoh Kode
```html
<picture>
    <source srcset="img1.png">
    <source srcset="img2.png">
    <source srcset="img3.png">
    <img src="img1.png" alt="gambarku">
</picture>
```
atau
```html
<picture>
    <source media="(min-width: 960px)" srcset="img1.png">
    <source media="(min-width: 600px)" srcset="img2.png">
    <source srcset="img3.png">
    <img src="img1.png" alt="kucing-kawin">
</picture>
```
## contoh pengimplementasiannya:
1. silahkan buka index.html di bagian atas, copy dan paste seluruh isi kodenya.
2. buka vscode atau IDE favorit kalian.
3. buatlah file index.html & jalankan index.html pada browser kalian.
4. maka akan terlihat gambar kucing (lagi serius).
5. coba kecilkan browser kalian perlahan dari samping.
6. maka akan terlihat gambar kucing (lagi serius) berubah menjadi (lagi senyum), berubah lagi menjadi (lagi nangis) seiring browser kalian bertambah kecil.

Semoga Bermanfaat!

Source: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)