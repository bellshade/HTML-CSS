# HTML Head

`<head>` merupakan salah satu element utama dalam HTML. Element `<head>` digunakan sebagai wadah untuk metadata
pada HTML. Apa itu metadata? Pada HTML, metadata adalah data yang berisi tentang informasi dokumen HTML,
dan metadata tidak akan ditampilkan ketika kode dijalankan. Metadata biasanya digunakan untuk menentukan judul dokumen,
style, script, dan informasi meta lainnya. Element yang biasa dimasukkan pada tag `<head>` adalah
`<title>`, `<style>`, `<meta>`, `<link>`, `<script>`, dan `<base>`.

## Emmet Abbreviation

Untuk beberapa IDE seperti Visual Studio Code, sudah tersedia emmet yang berguna untuk mempermudah pembuatan tag template HTML. Yaitu dengan mengetik tanda `!` lalu tekan `Enter`.

![preview](./img/emmet.png)

![emmetoutput](./img/output-emmet.png)

## `<title>`

`<title>` digunakan untuk memberikan judul pada halaman website. `<title>` hanya boleh berisi teks dan
akan ditampilkan pada bar tab dalam browser. Element ini wajib ada pada dokumen HTML. Element ini
juga sangat penting untuk _Search Engine Optimization_ (SEO) karena akan ditampilkan pada mesin pencari.

## `<style>`

`<style>` digunakan untuk mempercantik halaman website kita. Materi ini sudah pernah dibahas [di sini](https://github.com/bellshade/HTML-CSS/tree/main/HTML/008%20HTML%20Style), silahkan cek materi tersebut agar lebih jelas.

## `<link>`

`<link>` digunakan untuk menghubungkan HTML dengan sumber daya eksternal yang dibutuhkan. Element ini paling sering
digunakan untuk menghubungkan HTML dengan CSS eksternal, namun bisa juga digunakan untuk menambahkan favicon pada
halaman website. Favicon adalah gambar kecil yang ditampilkan di sebelah judul pada tab browser. Untuk menambahkannya,
kalian bisa menggunakan tag `<link>` seperti ini:

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <title>Bellshade</title>
    <link rel="shortcut icon" href="bellshade.png" type="image/x-icon" />
  </head>
  <body></body>
</html>
```

Hasilnya:

![Hasil favicon](img/favicon.png)

## `<meta>`

`<meta>` digunakan untuk menentukan karakter set, deskripsi halaman, pembuat halaman, dan lainnya. Selebihnya,
lihat [materi ini](https://github.com/bellshade/HTML-CSS/tree/main/HTML/026%20HTML%20Meta) untuk penjelasan lebih detail tentang `<meta>`

## `<script>`

`<script>` digunakan untuk menyisipkan script, biasanya menggunakan JavaScript. Coba lihat [materi ini](https://github.com/bellshade/HTML-CSS/tree/main/HTML/023%20HTML%20Script) karena sudah pernah dibahas sebelumnya.

## `<base>`

`<base>` digunakan untuk menentukkan URL dasar sebuah dokumen, artinya kita akan membuat sebuah alamat URL
sebagai sandaran untuk semua relative URL. Kalian hanya boleh menggunakan satu element `<base>`. Di dalam element `<base>` kalian
bisa menggunakan `href`, `target`, atapun keduanya. Jika kita menambahkan atribut `target` pada element ini, maka
default semua [hyperlink](https://github.com/bellshade/HTML-CSS/tree/main/HTML/014%20HTML%20HyperLink) akan memiliki
atribut yang diberikan pada element `<base>`.
