# CSS Icon

## Cara Menambahkan Icon

Cara paling gampang untuk menambahkan icon di halaman HTML kamu adalah dengan menggunakan icon dari icon library seperti Font Awesome.

Cukup dengan menambahkan nama dari icon class pada HTML element yang bersifat inline, seperti `<i>` atau `<span>`.

Semua icon dari icon library yang ada di bawah ini adalah vektor yang bisa diubah ukurannya dan bisa dikustomisasi dengan menggunakan CSS seperti mengubah ukuran, warna, bayangan, dll.

## Icon dari Font Awesome

Untuk menggunakan icon dari Font Awesome, pertama-tama, kunjungi [fontawesome.com](https://fontawesome.com), sign in, dan copy kode di sana untuk ditambahkan di `<head>` pada halaman HTML.

Kode yang dimaksud seperti ini:
```HTML
<script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script>
```

Catatan: tidak perlu download atau install.

Contoh:
```HTML
<!DOCTYPE html>
<html>
    <head>
        <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
    </head>
<body>
    <i class="fas fa-cloud"></i>
    <i class="fas fa-heart"></i>
    <i class="fas fa-car"></i>
    <i class="fas fa-file"></i>
    <i class="fas fa-bars"></i>
</body>
</html>
```

Hasil:

![Icon dari Font Awesome](https://i.ibb.co/Q63N87N/Screenshot-2022-10-04-004714.png)


## Icon dari Bootstrap

Untuk menggunakan icon solid dari Bootstrap, tambahkan kode berikut ini di dalam tag `<head>` pada halaman HTML:
```HTML
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
```

Catatan: tidak perlu download atau install.

Contoh:
```HTML
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    </head>
<body>
    <i class="glyphicon glyphicon-cloud"></i>
    <i class="glyphicon glyphicon-remove"></i>
    <i class="glyphicon glyphicon-user"></i>
    <i class="glyphicon glyphicon-envelope"></i>
    <i class="glyphicon glyphicon-thumbs-up"></i>
</body>
</html>
```

Hasil:

![Icon dari Bootstrap](https://i.ibb.co/3p71Br4/Screenshot-2022-10-04-005335.png)

## Google Icon

Untuk menggunakan Google Icon, tambahkan baris kode di bawah ini ke dalam `<head>`pada halaman HTML:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```
Catatan: tidak perlu download atau install.

Contoh:
```HTML
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    </head>
<body>
    <i class="material-icons">cloud</i>
    <i class="material-icons">favorite</i>
    <i class="material-icons">attachment</i>
    <i class="material-icons">computer</i>
    <i class="material-icons">traffic</i>
</body>
</html>
```

Hasil:

![Icon dari Google](https://i.ibb.co/NSQCsYc/Screenshot-2022-10-04-005731.png)



Sumber: [w3schools.com](https://www.w3schools.com/css/css_icons.asp)