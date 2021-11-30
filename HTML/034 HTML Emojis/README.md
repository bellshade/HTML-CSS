# HTML Emojis

Emojis adalah karakter dari karakter set UTF-8 : 😄 😍 💗

## Apa itu Emoji?

Emojis terlihat seperti gambar, atau ikon, tapi bukan itu.

Mereka adalah huruf (karakter) dari karakter set UTF-8 (Unicode).

UTF-8 hampir mengkover semua karakter dan simbol di dunia.

## Atribut Charset HTML

Untuk memunculkan halaman HTML dengan benar, Web browser harus mengetahui set karakter yang digunakan dalam halaman web.

Ini ditentukan dalam tag <meta>:

```html
<meta charset="UTF-8" />
```

Jika tidak ditentukan, UTF-8 adalah bawaan set karakter di dalam HTML.

## Karakter UTF-8

Banyak UTF-8 karakter tidak bisa diketik di keyboard, tapi UTF-8 karakter selalu bisa di tampilkan dengan nomer (nomer entitas):

- A adalah 65
- B adalah 66
- C adalah 67

# Contoh

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <p>I will display A B C</p>
    <p>I will display &#65; &#66; &#67;</p>
  </body>
</html>
```

## Penjelasan Contoh

- Elemen <meta charset="UTF-8"> mendefinisikan set karakter.
- Karakter A,B, dan C, ditampilkan oleh angka 65, 66, dan 67.
- Agar browser memahami bahwa Anda menampilkan karakter, Anda harus memulai nomor entitas dengan &# dan mengakhirinya dengan ; (titik koma).

## Karakter Emoji

Emoji pun juga karakter dari alpabet UTF-8 :

- 😄 adalah 128516
- 😍 adalah 128525
- 💗 adalah 128151

# Contoh

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <h1>My First Emoji</h1>

    <p>&#128512;</p>
  </body>
</html>
```

Sejak Emoji adalah karakter, Emoji bisa disalin, ditampilkan, dan diukur seperti karakter lain di HTML.

# Contoh

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <h1>Sized Emojis</h1>

    <p style="font-size:48px">&#128512; &#128516; &#128525; &#128151;</p>
  </body>
</html>
```

## Simbol Emoji di UTF-8

| Nomor | Emoji |   Nilai   |
| :---: | :---: | :-------: |
|  01   |  🗻   | &#128507; |
|  02   |  🗼   | &#128508; |
|  03   |  🗽   | &#128509; |
|  04   |  🗾   | &#128510; |
|  05   |  🗿   | &#128511; |
|  06   |  😀   | &#128512; |
|  07   |  😁   | &#128513; |
|  08   |  😂   | &#128514; |
|  09   |  😃   | &#128515; |
|  10   |  😄   | &#128516; |
|  11   |  😅   | &#128517; |

Sumber : https://www.w3schools.com/html/html_emojis.asp
