# HTML Images

## Apa itu HTML Images?

HTML memiliki sebuah elemen `<img>` yang sangat berguna dalam melakukan membangun sebuah website. Tanpa gambar website akan terasa sangat membosankan, maka dari itu kalian perlu mempelajari tentang HTML Images.

Nah cara penulisan tag `<img>` sendiri tidak memerlukan tag penutup, atau lebih jelasnya adalah seperti ini:

```html
<img src="" alt="">
```

## Atribut di dalam tag `<img>`

Terdapat setidaknya dua atribut yang biasa digunakan.

- **src** - Digunakan untuk mengarahkan path dari suatu gambar.
- **alt** - Digunakan untuk membuat teks alternatif jika gambar gagal ditayangkan.

## Bagaimana cara menampilkan gambar?

Untuk menampilkan gambar, kita perlu mengarahkan tag `<img>` kepada file yang kita inginkan melalui atribut `src="url"` atau bisa juga `src="imagepath"`

Sebagai contoh saja misalkan ingin menampilkan gambar kucing.png yang berada satu folder dengan file HTML.

```html
<img src="kucing.png" alt="kucing">
```

Jika file gambar terdapat pada direktori tertentu, kita dapat menuliskan terlebih dahulu direktorinya.

```html
<img src="images/kucing.png" alt="kucing">
```

Jika file gambar ada di suatu link di internet.

```html
<img src="https://www.contoh.com/images/kucing.png" alt="kucing">
```

Namun sebagai catatan jika ingin mengutip gambar dari suatu link di internet, pastikan tidak melanggar hak cipta dari kepemilikan gambar tersebut.

## Referensi

Untuk referensi lengkapnya, kalian bisa mengunjungi [website berikut](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML).
