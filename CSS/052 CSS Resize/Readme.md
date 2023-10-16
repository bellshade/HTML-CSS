# Resize


<strong>Cara Mengubah Ukuran Gambar / Resize</strong> Untuk mengubah ukuran gambar, terdapat beberapa properti yang biasa digunakan yakni dengan properti width dan height supaya lebih jelas saya akan praktekan penggunaan properti tersebut kepada objek gambar.

Silahkan kalian bisa membuat struktur HTML dan menyematkan satu gambar sebagai objek yang akan diubah ukuran nya, disarankan gambar berukuran besar ya agar kelihatan perbedaan ketikan di resize.


```HTML
    <body>
    <div class="container">
        <img src="html-1080x500.png" alt="Cara Mengubah Ukuran Gambar pada CSS">
    </div>
    </body>
```

Secara default ukuran gambar awal adalah 1080x500 tentu dengan CSS bisa kita ubah ukuran menjadi lebih kecil atau sebaliknya dengan properti width dan height. Untuk mengubah ukuran nya silahkan kalian ketikan CSS berikut.

```HTML
    <style>
        .container {
            width: 1000px;
            height: 500px;
            border: 2px solid #000000;
        }
        img {
            width: 900px;
            height: 400px;
        }
    </style>
```
Dari sintak CSS diatas penggunaan width dan height bisa kita pakai untuk mengubah ukuran gambar, box dan yang lainnya. Jika sudah kalian bisa melihat perbedaan setelah gambar di resize.


<strong>Source : https://www.dumetschool.com/blog/cara-mengubah-ukuran-gambar-pada-css</strong>