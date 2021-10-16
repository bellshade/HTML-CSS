# HTML Canvas

## Apa itu HTML Canvas?

Pada HTML5 terdapat elemen `<canvas>`, elemen ini cukup berguna untuk menggambar grafik-grafik atau objek pada halaman website dengan **menggunakan bantuan JavaScript**. Kalian wajib menguasai setidaknya hal-hal dasar mengenai JavaScript untuk memanipulasi objek pada elemen ini, sebab elemen ini hanya sebuah _Badan_ bagi grafik yang akan digambar, dan sisanya di manipulasikan dengan JavaScript.

Secara umum elemen ini sering digunakan untuk membangun sebuah _Game Web_, contoh penulisan sebuah elemen `<canvas>` sebagai berikut: 

```html
<canvas></canvas>
```

## Apakah ada atribut di dalam tag `<canvas>`?

Pada tag ini tidak terdapat atribut khusus karena penyelesaiannya menggunakan JavaScript.

## Apa saja yang bisa kita gambar?

-   **Tulisan** - HTML canvas bisa digunakan untuk menggambar tulisan.
-   **Grafik** - HTML canvas seringkali digunakan untuk menggambar berbagai jenis grafik.
-   **Animasi** - HTML canvas bisa digunakan untuk menganimasikan objek yang sudah digambar.

Dan masih banyak lainnya yang bisa kita interaksikan dengan tag satu ini.

## Bagaimana cara menggambarnya?

```html
<canvas id="canvas1" width="500" height="500"></canvas>

<script>
  const canvas = document.getElementById("canvas1")
  const ctx = canvas.getContext("2d")
  console.log(ctx) // untuk melihat function built-in yang tersedia

  const letakHorizontal = 100
  const letakVertikal = 100
  const width = 200
  const height = 200

  ctx.fillRect(letakHorizontal, letakVertikal, width, height)
  ctx.fillStyle = "black"
  ctx.fill()
</script>
```
Output:

![20211016_225218](https://user-images.githubusercontent.com/87674246/137592171-f561296d-7913-4ca8-879b-6d3016ebe962.jpg)

Keunikannya, objek ini bisa di manipulasikan dengan banyak hal karena `<canvas>` memiliki _function built-in_ yang cukup banyak. Canvas ini tidak hanya bisa menggambar satu objek saja melainkan tidak terbatas atau sebanyak yang dibutuhkan.


## Referensi

Untuk referensi lengkapnya, kalian bisa mengunjungi [website berikut](https://www.w3schools.com/html/html5_canvas.asp).
