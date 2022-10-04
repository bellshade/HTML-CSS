# CSS Google Font

Kalau kamu tidak mau menggunakan font standar yang ada di HTML, kamu bisa menggunakan Google Fonts.

Google Fonts gratis dan bebas untuk digunakan untuk apa saja. Selain itu, koleksi Google Fonts juga banyak, ada lebih dari 1.000 font yang bisa kamu pilih.

## Cara Menggunakan Google Fonts

Ada dua cara untuk menggunakan Google Fonts:

Pertama, menggunakan link yang sudah disediakan Google Fonts:
1. Copy link style sheet dari Google Fonts dan paste link tersebut di bagian <head> pada file HTML.

![Link Style Sheet Google Fonts](https://i.ibb.co/CHt7DKk/Screenshot-2022-10-03-224721.png)

2. Cantumkan nama font tersebut pada CSS.

### Contoh

Misalnya, kita ingin menggunakan font "Silkscreen" dari Google Fonts:

```HTML 
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Silkscreen&display=swap" rel="stylesheet">

<style>
  body {
    font-family: "Silkscreen", cursive;
  }
</style>
</head>
```

Cara kedua, menggunakan link style sheet khusus di mana kamu cukup mengganti nama font di akhir link. Tempatkan link tersebut pada <head> dan panggil nama font pada CSS. 

``` HTML 
<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia">

<style>
  body {
    font-family: "Silkscreen", cursive;
  }
</style>
</head>
```

Hasil:
![Contoh Penggunakan Google Fonts](https://i.ibb.co/fMrksbG/Screenshot-2022-10-03-230101.png)

## Menggunakan Beberapa Google Fonts

Jika kamu ingin menggunakan beberapa Google Fonts, cukup paste semua link dari Google Fonts di <head>. Atau, gunakan link style sheet dan sebutkan semua nama font dengan dipisahkan oleh tanda ( | ).

Contoh:
```HTML
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Silkscreen|Pacifico|Indie Flower">
```

Hasil:
![Penggunaan Beberapa Google Fonts](https://i.ibb.co/QmmtTgw/Screenshot-2022-10-03-232919.png)

Catatan: menggunakan beberapa font sekaligus bisa memperlabat web kamu. Perhatikan hal ini.