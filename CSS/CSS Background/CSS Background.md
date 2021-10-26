## CSS Background

### Apa Itu CSS Background

Properti untuk menentukan sebuah background elemen.

Background memiliki beberapa property, antara lain:

- `background` - (shorthand) - Untuk menentukan sebuah background elemen yang mewakili beberapa properti background lainnya.
- `background-color` - Untuk menentukan warna latar belakang sebuah elemen html.
- `background-image` - Untuk menjadi gambar sebagai latar belakang dokumen html atau elemen html.
- `background-repeat` - Untuk mengatur kontrol pengulangan pada background gambar.
- `background-position` - Untuk mengatur kontrol posisi pada background gambar.
- `background-attachment` - Untuk mengatur kontrol scrolling pada background gambar.
- `background-size` - Untuk mengatur kontrol ukuran pada background gambar.

Contoh:

```css
background: pink url('images/bg.png') no-repeat center center;
background-color: pink;
background-image: url('images/bg.png');
background-repeat: repeat-y repeat-x no-repeat;
background-position: right top;
background-attachment: fixed scroll;
background-size: 500px 400px cover;
```

### Background Shorthand

Background (shorthand) mewakili beberapa properti background lainnya.

Contoh:

```css
background: pink url('images/bg.png') no-repeat right top;
```

Saat menggunakan properti background (shorthand), memiliki urutan nilai sebagai berikut:

- Nilai pertama adalah `background-color` ditandai dengan parameter `pink`
- Nilai kedua adalah `background-image` ditandai dengan parameter `url('images/bg.png')`
- Nilai ketiga adalah `background-repeat` ditandai dengan parameter `no-repeat`
- Nilai keempat adalah `background-position` ditandai dengan parameter `right top`

### Background Repeat

Pada properti `background-repeat` memiliki 4 nilai yang dapat kita gunakan, berikut ini masing-masing penjelasannya.

```css
background-repeat: repeat;
```

Nilai repeat adalah nilai bawaan pada background-repeat, dimana dengan nilai ini background akan mengulang gambar secara horizontal dan vertical.

```css
background-repeat: repeat-x;
```

Nilai repeat-x yaitu untuk menentukan gambar background secara horizontal.

```css
background-repeat: repeat-y;
```

Nilai repeat-y yaitu untuk menentukan gambar background secara vertical, sebaliknya dari repeat-x.

```css
background-repeat: no-repeat;
```

Nilai no-repeat yaitu untuk menghentikan atau menghilangkan pengulangan background gambar.

### Background Position

Untuk mengatur posisi background image dapat menggunakan properti background-position dimana kita dapat memberikan nilai antara vertical dan horizontal secara bersamaan.

Contoh:

```css
background-position: right top;
```

Nilai pada properti background-posisition yang diatas bisa di isi dengan nilai pixel atau dengan menggunakan satuan ukuran lainnya.

```css
background-position: 30px 10px;
```

### Background Attachment

Fungsi background-attachment ini dapat menciptakan background image diam ketika di scroll.

```css
background-attachment: fixed;
```

Selain nilai fixed, background-attachment memiliki nilai scroll, dimana sebuah background akan tetap mengikuti objek konten di browser.

```css
background-attachment: scroll;
```

### Background Size

Untuk dapat mengatur ukuran background image yaitu dengan menggunakan properti background-size.

```css
background-size: width height;
```

Contoh:

```css
background-size: 100px 500px;
```

Untuk membuat background image agar menjadi fullscreen atau full layar monitor yaitu menggunakan nilai cover.

```css
background-size: cover;
```
