## HTML CSS

### Apa Itu HTML CSS?

CSS (Cascading Style Sheets) berfungsi sebagai pengformat tata letak juga tampilan bagi sebuah website.

CSS bisa digunakan dengan 3 cara,

1. **Inline CSS** - Menggunakan atribut `<style>` di dalam elemen HTML.
2. **Internal CSS** - Menggunakan elemen `<style>` di bagian `<head>`.
3. **Eksternal CSS** - Menggunakan elemen `<link>` untuk menautkan file HTML dengan file CSS.

### Contoh Penerapan CSS

**Inline CSS**

```HTML
<h1 style="color:blue;">Heading Berwarna Biru.</h1>

<p style="color:red;">Paragraf Berwarna Merah.</p>
```

**Internal CSS**
```HTML
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {background-color: black;}
      h1   {color: blue;}
      p    {color: red;}
    </style>
  </head>
  <body>

    <h1>Ini adalah Heading.</h1>
    <p>Ini adalah Paragraf.</p>

  </body>
</html>
```

**Eksternal CSS**

```HTML
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>

    <h1>Ini adalah Heading.</h1>
    <p>Ini adalah Paragraf.</p>

  </body>
</html>
```

Dalam file CSS:
```CSS
body {
  background-color: black;
}
h1 {
  color: blue;
}
p {
  color: red;
}
```