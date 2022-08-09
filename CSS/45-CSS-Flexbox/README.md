# CSS Flexbox

## Apa Itu Flexbox

Flexbox adalah metode tata letak satu dimensi untuk mengatur item dalam baris atau kolom. Flexbox diperkenalkan di CSS versi terbaru yaitu, CSS3. Dengan flexbox, mudah untuk memusatkan elemen pada halaman dan membuat antarmuka pengguna dinamis yang menyusut dan meluas secara otomatis.

Untuk membuat elemen HTML menjadi flexbox kita bisa pilih elemen tersebut dengan menggunakan CSS selector dan menambahkan properti `display` dengan value `flex`.

```css
.flex-container {
  display: flex;
}
```

## Flexbox Layout

![flex-model](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox/flex_terms.png)

- Main axis merupakan sumbu utama yang arahnya horizontal atau mendatar. Awal sumbu disebut main start dan akhir sumbu disebut main end.
- Cross axis merupakan sumbu yang arahnya vertikal atau tegak. Awal sumbu disebut cross start dan akhir sumbu disebut cross end.
- Flex container merupakan parent elemen dari flex item yang telah kita atur dengan CSS menggunakan `display: flex;`.
- Flex item merupakan child elemen dari flex container.
- Main size merupakan lebar dari flex item.
- Cross size merupakan tinggi dari flex item.
- Beberapa CSS properti di flex container:
  - `flex-direction`
  - `flex-wrap`
  - `flex-flow`
  - `justify-content`
  - `align-items`
  - `align-content`
- Beberapa CSS properti di flex item:
  - `order`
  - `flex-grow`
  - `flex-shrink`
  - `flex-basis`
  - `flex`
  - `align-self`

## Properti di Flex Container

Berikut adalah beberapa properti CSS yang ada di flex container untuk mengatur flex item:

- `flex-direction` - Untuk menentukan arah flex item di dalam flex container.

  Contoh:

  Untuk mengatur flex item secara vertikal dengan arah dari atas ke bawah.

  ```css
  .flex-container {
    flex-direction: column;
  }
  ```

  Untuk mengatur flex item secara horizontal dengan arah dari kiri ke kanan

  ```css
  .flex-container {
    flex-direction: row;
  }
  ```

  Sama seperti row namun dengan arah sebaliknya

  ```css
  .flex-container {
    flex-direction: row-reverse;
  }
  ```

  Sama seperti column namun dengan arah sebaliknya

  ```css
  .flex-container {
    flex-direction: column-reverse;
  }
  ```

- `flex-wrap` - Untuk menentukan apakah flex item harus wrap atau tidak, jika tidak ada cukup ruang untuk mereka pada main axis.

  Contoh:

  Flex item akan wrap jika tidak ada cukup ruang di dalam container

  ```css
  .flex-container {
    flex-wrap: wrap;
  }
  ```

  Flex item tidak akan wrap meskipun tidak ada cukup ruang di dalam container

  ```css
  .flex-container {
    flex-wrap: nowrap;
  }
  ```

  Flex item akan wrap dengan arah yang sebaliknya

  ```css
  .flex-container {
    flex-wrap: wrap-reverse;
  }
  ```

- `flex-flow` - Shorthand untuk `flex-direction` dan `flex-wrap`.

  Contoh:

  ```css
  .flex-container {
    flex-direction: row;
    flex-wrap: wrap;
  }
  ```

  Maka shorthand nya akan seperti ini

  ```css
  .flex-container {
    flex-flow: row wrap;
  }
  ```

- `justify-content` - Untuk menyejajarkan flex item secara horizontal saat item tidak menggunakan semua ruang yang tersedia di main axis.

  Contoh:

  Menyejajarkan flex item di tengah main axis

  ```css
  .flex-container {
    justify-content: center;
  }
  ```

  Menyejajarkan flex item di awal main axis

  ```css
  .flex-container {
    justify-content: flex-start;
  }
  ```

  Menyejajarkan flex item di akhir main axis

  ```css
  .flex-container {
    justify-content: flex-end;
  }
  ```

  Flex item akan memiliki ruang kosong diantara flex item

  ```css
  .flex-container {
    justify-content: space-between;
  }
  ```

  Flex item akan memiliki ruang kosong disekitarnya

  ```css
  .flex-container {
    justify-content: space-around;
  }
  ```

  Flex item akan memiliki ruang kosong disekitarnya dengan ukuran yang sama sesuai panjang main axis

  ```css
  .flex-container {
    justify-content: space-evenly; /* */
  }
  ```

- `align-items` - Untuk menyejajarkan flex item secara vertikal saat item tidak menggunakan semua ruang yang tersedia pada cross axis.

  Contoh:

  Menyejajarkan flex item di tengah cross axis

  ```css
  .flex-container {
    align-items: center;
  }
  ```

  Flex item akan diregangkan sesuai dengan panjang cross axis

  ```css
  .flex-container {
    align-items: stretch;
  }
  ```

  Menyejajarkan flex item di awal cross axis

  ```css
  .flex-container {
    align-items: flex-start;
  }
  ```

  Menyejajarkan flex item di akhir cross axis

  ```css
  .flex-container {
    align-items: flex-end;
  }
  ```

  Flex item akan diposisikan di garis dasar container

  ```css
  .flex-container {
    align-items: baseline;
  }
  ```

- `align-content` - Untuk memodifikasi perilaku properti flex-wrap. Hal ini mirip dengan align-item, tapi bukan untuk menyelaraskan flex item, melainkan untuk menyelaraskan garis flex.

  Contoh:

  Garis dikemas ke arah tengah container

  ```css
  .flex-container {
    align-content: center;
  }
  ```

  Garis meregang untuk mengambil ruang yang tersisa di container

  ```css
  .flex-container {
    align-content: stretch;
  }
  ```

  Garis dikemas ke awal cross axis

  ```css
  .flex-container {
    align-content: flex-start;
  }
  ```

  Garis dikemas ke akhir cross axis

  ```css
  .flex-container {
    align-content: flex-end;
  }
  ```

  Garis didistribusikan secara merata di dalam container

  ```css
  .flex-container {
    align-content: space-between;
  }
  ```

  Garis didistribusikan secara merata di dalam container, dengan ruang setengah ukuran di kedua ujungnya

  ```css
  .flex-container {
    align-content: space-around;
  }
  ```

  Garis didistribusikan secara merata di dalam container, dengan ruang yang sama di sekelilingnya

  ```css
  .flex-container {
    align-content: space-evenly;
  }
  ```

## Properti di Flex Item

Berikut adalah beberapa properti CSS yang ada di flex item:

- `order` - Untuk menentukan urutan flex item di dalam container yang sama.

  Contoh:

  Flex item akan berurutan mulai dari flex-item-1, flex-item-2, flex-item-3 sesuai order yang diberikan. Nilai defaultnya adalah 0.

  ```css
  .flex-container {
    display: flex;
  }

  .flex-container .flex-item-1 {
    order: 3;
  }

  .flex-container .flex-item-2 {
    order: 2;
  }

  .flex-container .flex-item-3 {
    order: 1;
  }
  ```

- `flex-grow` - Untuk menentukan seberapa banyak flex item akan tumbuh relatif terhadap flex item lainnya di dalam container yang sama.

  Contoh:

  flex-item-1 akan memiliki ukuran lebih besar relatif terhadap flex item lainnya. Nilai defaultnya adalah 0.

  ```css
  .flex-container {
    display: flex;
  }

  .flex-container .flex-item-1 {
    flex-grow: 3;
  }

  .flex-container .flex-item-2 {
    flex-grow: 1;
  }

  .flex-container .flex-item-3 {
    flex-grow: 1;
  }
  ```

- `flex-shrink` - Untuk menentukan seberapa banyak flex item akan menyusut relatif terhadap flex item lainnya di dalam wadah yang sama.

  Contoh:

  flex-item-1 akan menyusut lebih kecil relatif terhadap ukuran flex item lainnya. Nilai defaultnya adalah 1.

  ```css
  .flex-container {
    display: flex;
  }

  .flex-container .flex-item-1 {
    flex-shrink: 3;
  }
  ```

- `flex-basis` - Untuk menentukan panjang awal flex item.

  Contoh:

  flex-item-1 akan memiliki panjang awal dengan ukuran 300px.

  ```css
  .flex-container {
    display: flex;
  }

  .flex-container .flex-item-1 {
    flex-basis: 300px;
  }
  ```

- `flex` - Untuk shorthand properti flex-grow, flex-shrink, dan flex-basis.

  Contoh:

  Tidak menggunakan shorthand.

  ```css
  .flex-container {
    display: flex;
  }

  .flex-container .flex-item-1 {
    flex-grow: 1;
    flex-shrink: 2;
    flex-basis: 300px;
  }
  ```

  Saat menggunakan shorthand.

  ```css
  .flex-container {
    display: flex;
  }

  .flex-container .flex-item-1 {
    flex: 1 2 300px;
  }
  ```

- `align-self` - Untuk menentukan perataan flex item secara spesifik untuk item tertentu (menimpa properti align-items container).

  Contoh:

  flex-item-1 akan berada di tengah cross axis, flex-item-2 akan berada di awal cross axis,
  flex-item-3 akan berada di akhir cross axis.

  ```css
  .flex-container {
    display: flex;
  }

  .flex-container .flex-item-1 {
    align-self: flex-start;
  }

  .flex-container .flex-item-2 {
    align-self: center;
  }

  .flex-container .flex-item-3 {
    align-self: flex-end;
  }
  ```

  ## Referensi

  Untuk referensi lengkapnya, kalian bisa mengunjungi website berikut:

  - [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
  - [W3Schools](https://www.w3schools.com/css/css3_flexbox.asp)
