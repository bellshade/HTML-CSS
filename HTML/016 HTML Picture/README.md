# HTML Picture

## Apa itu HTML Picture?

HTML memiliki sebuah elemen `<picture>` yang sangat berguna dalam melakukan membangun sebuah website. Tanpa gambar website akan terasa sangat membosankan, maka dari itu kalian perlu mempelajari tentang HTML Picture.

HTML Picture memiliki fungsi mirip seperti media query pada CSS, tetapi kita tidak memerlukan CSS untuk menggunakannya, hanya dengan HTML saja sudah bisa membuat img menjadi responsive pada website kalian.

## Contoh kode
```html
<picture></picture>
```

Ada juga child dari `<picture>` ini yaitu `<source>` dan `<img>`

```html
<picture>
    <source>
    <img src="" alt="">
</picture>
```

Untuk menampilkan gambar, kita perlu mengarahkan tag `<img>` kepada file yang kita inginkan melalui atribut `src="url"` atau bisa juga `src="imagepath"`

Belum belajar tentang tag HTML img? Silahkan pelajari di [HTML Image](https://github.com/bellshade/HTML-CSS/tree/main/HTML/015%20HTML%20Images)

Terdapat beberapa attribut yang biasa digunakan dalam tag `<source>`, yaitu:
- **srcset** - Digunakan untuk mengarahkan path dari suatu gambar.
- **sizes** - Digunakan untuk mengatur ukuran gambar.
- **media** - Digunakan untuk mengatur media query.

## Contoh kode
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
## Contoh pengimplementasiannya:
1. Silahkan buka [index.html](index.html), copy dan paste seluruh isi kodenya.
2. Buka vscode atau IDE favorit kalian.
3. Buatlah file index.html & jalankan index.html pada browser kalian.
4. Maka akan terlihat gambar kucing (lagi serius).
5. Coba kecilkan browser kalian perlahan dari samping.
6. Maka akan terlihat gambar kucing (lagi serius) berubah menjadi (lagi senyum), berubah lagi menjadi (lagi nangis) seiring browser kalian bertambah kecil.

Semoga bermanfaat!

Source: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
