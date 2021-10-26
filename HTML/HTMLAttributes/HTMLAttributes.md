## HTML Attribute

### Apa Itu HtML Attribute ?

HTML Attribute adalah suatu atribut untuk melengkapi informasi dari suatu elemen HTML

- Semua elemen HTML dapat memiliki Attribute.
- Attribute HtML memberikan informasi tambahan terhadap elemen HTML.
- Attribute selalu berada diawal tag, seperti:

  ```html
  <a href="google.com">Google</a>
  ```

- Attribute selalu berbapasangan dengan value/nilai, seperti: `href="google.com"`
- Value/Nilai dari attribute harus selalu dibungkus menggunakan double quote/petik dua (").

### Contoh Penerapan Attribute Pada HTML

#### `href` Attribute

`href` berfungsi untuk menentukan URL halaman yang ingin dituju.

```html
<html>
  <a href="Github.com">Github Website</a>
</html>
```

#### `src` Attribute

`src` berfungsi untuk menentukan lokasi gambar file yang ingin ditampilkan.

```html
<html>
  <img src="attribute.png" />
</html>
```

Ada dua cara untuk mendefinisikan URL di attribute `src`

1. Absolute URL - Memasukan gambar dari hosting eksternal/tidak dalam local, seperti:

    ```html
    <img src="https://avatars.githubusercontent.com/u/76999048?s=200&v=4" >
    ```

2. Relative URL

    ```html
    <img src="/src/images/avatar.png" >
    ```

#### `width` & `height` Attribute

`width` dan `height` berfungsi untuk menentukan lebar dan tinggi gambar dalam satuan piksel (px).

```html
<img src="/src/images/avatar.png" width="32" height="32" />
```

#### `alt` Attribute

`alt` berfungsi untuk menggantikan gambar dengan tulisan, jika gambar tidak bisa ditampilkan dengan alasan tertentu.

```html
<img src="/src/images/avatar.png" alt="avatar" />
```

#### `style` Attribute

`style` berfungsi untuk menambahkan gaya/style pada elemen seperti color, font, size, dan lainnya.

```html
<h1 style="color: green">Hello World</h1>
```

#### `lang` Attribute

`lang` berfungsi untuk mendeklarasikan bahasa yang digunakan dalam website, untuk membantu mesin pencari / browser.

```html
<!DOCTYPE html>
<html lang="en">
  <body>
    Hello World
  </body>
</html>
```

#### `title` Attribute

`title` berfungsi sebagai penambah informasi dalam suatu elemen, yang jika dihover akan memunculkan tooltip

```html
<span title="Komunitas untuk mengelola dan menulis kode">Bellshade</span>
```

#### `class` Attribute

`class` berfungsi untuk menunjuk nama class dalam style sheet, dapat digunakan untuk mengakses dan memanipulasi elemen di Javascript.

```html
<div class="kota">
  <p>Jakarta terletak di pulau Jawa, Indonesia.</p>
</div>
```

#### `id` Attribute

`id` berfungsi untuk menentukan id unik untuk elemen HTML, dapat digunakan untuk menunjuk deklarasi style tertentu dalam style sheet dan juga digunakan untuk mengakses dan memanipulasi elemen dengan id tertentu di Javascript.

```html
<html>
  <h1 id="judulSaya">Judul Saya</h1>
</html>
```

#### `method` Attribute

`method` berfungsi untuk menentukan cara mengirim data formulir (data formulir dikirim ke halaman yang ditentukan dalam atribut action).

Form-data dapat dikirim sebagai variabel URL (dengan `method="get"`) atau sebagai transaksi posting HTTP (dengan method="post").

Catatan tentang [GET](https://github.com/bellshade/PHP/tree/main/basics/9_form_handling):

- Menambahkan data formulir ke dalam URL dalam pasangan nama/nilai
- Panjang URL dibatasi (sekitar 3000 karakter)
- Jangan pernah menggunakan `GET` untuk mengirim data sensitif! (akan terlihat di URL)
- Berguna untuk pengiriman formulir di mana pengguna ingin menandai hasilnya
- `GET` lebih baik untuk data yang tidak aman, seperti string kueri di Google

```html
<form action="/action_page.php" method="get">
  Nama Depan: <input type="text" name="namaDepan" /><br />
  Nama Belakang: <input type="text" name="namaBelakang" /><br />
  <input type="submit" value="Submit" />
</form>
```

Catatan tentang [POST](https://github.com/bellshade/PHP/tree/main/basics/9_form_handling):

- Menambahkan formulir-data di dalam isi permintaan HTTP (data tidak ditampilkan dalam URL)
- Tidak memiliki batasan ukuran
- Pengiriman formulir dengan `POST` tidak dapat di-bookmark

```html
<form action="/action_page.php" method="post">
  Nama: <input type="text" name="nama" /><br />
  Password: <input type="text" name="password" /><br />
  <input type="submit" value="Submit" />
</form>
```
