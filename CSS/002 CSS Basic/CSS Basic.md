## Cara menuliskan CSS

### Bagaimana cara untuk menuliskan CSS?

Ada 3 cara untuk menuliskan CSS. Antara lain:

- Inline CSS
- Internal CSS
- External CSS

### Inline CSS

Inline CSS adalah code css yang ditulis secara langsung, pada elemen HTML. Cara penulisannya cukup dengan menambahkan `style` pada tag HTML.

Contoh Inline CSS:

```html
<p style="color= red;">Text warna merah</p>
```

### Internal CSS

Internal CSS adalah code css yang ditulis pada tag `<style>`, dan di dalam tag `<head>`.

Contoh Internal CSS:

```html
<head>
  <style>
    p {
      color: red;
    }
  </style>

  <body>
    <p>Text warna merah</p>
  </body>
</head>
```

### External CSS

External CSS adalah code css yang ditulis pada sebuah file berekstensi `.css`.

Di sini saya sudah membuat file bernama `style.css`

Isi dari `style.css`

```css
h1 {
  font-size: 16px;
}

p {
  color: red;
}
```

Untuk menyambungkan CSS tersebut ke HTML. Kita perlu menambahkan tag `<link>` pada file HTML.

```html
<link rel="stylesheet" type="text/css" href="style.css" />
```

Penulisan full HTML.

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>

  <body>
    <h1>Judul</h1>
    <p>Paragraf</p>
  </body>
</html>
```
