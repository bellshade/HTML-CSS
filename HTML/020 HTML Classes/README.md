# HTML CLASSES

## Apa itu HTML classes ?

HTML classes adalah sebuah panggilan untuk melakukan pengelompokan atau class. misalnya saya ingin membuat class header dan class untuk paragraphs.

## Langsung saja ke demonya agar lebih paham

Untuk melakukan class/pengelompokan terdapat sebuah tag yang bernama `<div>` yang dimana sebuah element harus diletakkan di dalam `<div>`, biasanya `<div>` akan diberi sebuah property yaitu `class=""` atau `id=""`

### Contoh

Penggunaan tag `<div>`dan property `class`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pengelompokan/class</title>
  </head>
  <body>
    <!-- Harus di bungkus dalam tag <div> -->
    <!-- Yang diberi nama class yaitu header -->
    <div class="box">
      <h1>Hello world</h1>
    </div>
  </body>
</html>
```

### Contoh lagi

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contoh ke 2</title>
  </head>
  <body>
    <div id="main">
      <p>Halo nama saya kuro</p>
    </div>
  </body>
</html>
```

## Styling dengan css

Keuntungan menggunakan class ini kita bisa melakukan style di class itu.
Jika kita ingin memberi style pada sebuah class maka kita perlu melakukan `.`+`nama class`.
Jika menggunakan id maka lakukan `#`+`nama id`

## Contoh styling menggunakan nama class

```css
/* sebuah titik di depan nama class */
.box {
  width: 100px;
  height: 100px;
  background-color: red;
}
```

Artinya saya akan memberi style pada sebuah class yang bernama box dengan property `width,height,dan background-color`

### Dengan element di dalamnya

```css
.box h1 {
  color: blue;
}
```

Artinya saya akan memberi style pada sebuah class yang didalamnya terdapat tag `<h1>` dengan property `color`.

## Contoh styling menggunakan id

<!-- sebuah hastag di depan nama id -->

```css
#main {
  width: 100px;
  height: 100px;
  background-color: red;
}
```

Artinya saya akan memberi style pada sebuah id yang bernama main dengan property `width,height,dan background-color`

### Dengan element di dalamnya

```css
#main p {
  color: purple;
}
```

Artinya saya akan memberi style pada sebuah id yang bernama main yang di dalamnya terdapat tag `<p>` dengan property `color`

## Note

untuk penamaan class dan id itu bebas atau sesuai keinginan.
Jika memakai id hanya dapat boleh satu dalam suatu halaman, tidak boleh sama dengan element lain.
Jika memakai class diperbolehkan sama dengan element lain. 
