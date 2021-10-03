## HTML Attribute

### Apa Itu HtML Attribute ?
HTML Attribute adalah suatu atribut untuk melengkapi informasi dari suatu elemen HTML

- Semua elemen HTML dapat memiliki Attribute.
- Attribute HtML memberikan informasi tambahan terhadap elemen HTML.
- Attribute selalu berada diawal tag, seperti: `<a href="google.com">Google</a>`
- Attribute selalu berbapasangan dengan value/nilai, seperti: `href="google.com"`
- Value/Nilai dari attribute harus selalu dibungkus menggunakan double quote/petik dua (").


### Contoh Penerapan Attribute Pada HTML
**href Attribute**

href berfungsi untuk menentukan URL halaman yang ingin dituju.
```html 
<html>
  <a href="Github.com">Github Website</a>
</html>
```

**src Attribute**

src berfungsi untuk menentukan lokasi gambar file yang ingin ditampilkan.
```html
<html>
  <img src="attribute.png" >
</html>
```
Ada dua cara untuk mendefinisikan URL di attribute src

1. Absolute URL - Memasukan gambar dari hosting eksternal/tidak dalam local, seperti:

  `<img src="https://avatars.githubusercontent.com/u/76999048?s=200&v=4" >`
2. Relative URL

  `<img src="/src/images/avatar.png" >`

**width & height Attribute**

width dan height berfungsi untuk menentukan lebar dan tinggi gambar dalam satuan piksel (px).
```html
<html>
  <img src="/src/images/avatar.png" width="32" height="32">
</html>
```

**alt Attribute**

alt berfungsi untuk menggantikan gambar dengan tulisan, jika gambar tidak bisa ditampilkan dengan alasan tertentu.
```html
<html>
  <img src="/src/images/avatar.png" alt="avatar">
</html>
```

**style Attribute**

style berfungsi untuk menambahkan gaya/style pada elemen seperti color, font, size, dan lainnya.
```html
<html>
  <h1 style="color:green;">Hello World</h1>
</html>
```

**lang Attribute**

lang berfungsi untuk mendeklarasikan bahasa yang digunakan dalam website, untuk membantu mesin pencari / browser.
```html
<!DOCTYPE html>
<html lang="en">
<body>
  Hello World
</body>
</html>
```

**title Attribute**

title berfungsi sebagai penambah informasi dalam suatu elemen, yang jika dihover akan memunculkan tooltip
```html
<html>
  <p title="Komunitas untuk mengelola dan menulis kode">Bellshade</p>
</html>
```
