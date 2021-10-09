# HTML Responsive
## Apa itu HTML Responsive?
### HTML Responsive berfungsi agar website kalian bisa terlihat bagus di semua devices diantaranya pc/laptop, tablet, dan handphone.

## Viewport
### agar website kalian bisa terlihat bagus di semua devices, kalian harus menambahkan viewport terlebih dahulu.

caranya kalian hanya perlu membuat tag bernama `<meta>` di antara `<head>` dan `</head>` (header)
```html
<meta>
```
setelah menambahkan tag `<meta>`, sekarang kalian perlu menambahkan beberapa attribute di dalam tag `<meta>`. yaitu `name`, `content`.
```html
name="viewport" content="width=device-width, initial-scale=1.0"
```


setelah menambahkan tag `<meta>` beserta attributenya, seharusnya di heading website kalian sudah memiliki ini:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

# Contoh sebelum dan sesudah menambahkan viewport
## Sebelum
![sebelum](./GAMBAR-sesudah.png)
##  Sesudah
![sesudah](./GAMBAR-sebelum.png)
