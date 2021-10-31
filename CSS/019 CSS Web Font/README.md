# CSS WEB FONT

## Apa Itu CSS WEB FONT ?

CSS WEB FONT adalah sebuah font untuk web yang digunakan jika font pada web ingin anda custom sendiri, untuk menggunakan web font anda harus menggunakan property `@font-face` dan font yang anda inginkan, tetapi harus sesuai dengan format font di bawah ini.

- TrueType Fonts (TTF) :
  Merupakan font standar atau font yang paling umum.

- OpenType Fonts (OTF) :
  Merupakan format font yang dapat diskalakan.

- The Web Open Font Format (WOFF) :
  Merupakan format yang digunakan untuk halaman web. direkomendasikan oleh W3C. Kebanyakan web menggunakan ini

- The Web Open Font Format (WOFF 2.0) :
  Merupakan versi kedua dari versi sebelumnya

- Embedded OpenType Fonts (EOT) :
  Merupakan bentuk kompak dari OpenType,digunakan sebagai font yang disematkan pada sebuah website.

## Langsung saja ke contoh nya

```css
@font-face {
  /* Penjelasan */
  /* Untuk menggunakan web font harus menggunakan src */
  src: url(namafontnya.(nama formatnya));
}
```

## Demo menggunakan format woff

```css
@font-face {
  src: url(sansation_light.woff);
}
```

## NOTE

Untuk mendapatkan font sebenarnya bisa dimana saja, tetapi saya sarankan untuk mendownload font di https://www.1001fonts.com/google-web-fonts.html

## Referensi materi dan font

[W3SCHOOLS](https://www.w3schools.com/css/css3_fonts.asp)
