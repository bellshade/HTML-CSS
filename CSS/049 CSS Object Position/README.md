# CSS Object Position

## Apa itu CSS Object Position?

`Object position` merupakan properti CSS yang menentukan posisi objek yang berada di dalam element (misal: `<img>` atau `<video>` ). kamu bisa menggunakan properti ini bersamaan `object-fit` untuk mengatur objek tersebut.

Contohnya jika `object-position:20% 80%`, maka objek akan ditetapkan memilki jarak 20% dari sisi kiri (left) dan 80% dari bagian atas (top) element. contoh lain, `object-position: 50% 50%`, objek akan ditempatkan tepat di tengah element.

```css
img {
  width: 500px;
  height: 500px;
  border: 2px solid blue;
  object-fit: none;
  object-position: 20% 80%;
}
```

Pada penulisan diatas object akan ditetapkan 20% dari sisi kiri dan 80% dari bagian atas element.

## Values

Beberapa contoh penerapan yang bisa kamu tiru:

**Positional values**

```css
object-position: 50% 50%; /* default position */
object-position: right top;
object-position: 20px 95px;
object-position: center 20px; /* mix and match */
```

**Global values**

```css
object-position: inherit;
object-position: initial;
object-position: unset;
```

Penulisan tersebut bisa kamu kombinasikan seperti `object-position: right bottom ` atau `object-position: top left `.

```css
/* menggunakan nilai absolute dan relatif */
object-position: 25% 75%;
object-position: 20px 80px;
object-position: 2cm 1cm;
object-position: 3rem 12vw;
```

```css
object-position: bottom 10px right 20px;
object-position: right 3em bottom 10px;
object-position: top 0 right 10px;
```

Contoh pada baris pertama `object-position: bottom 10px right 20px`, objek akan diterapkan 10px dari bagian bawah dan 20px dari bagian kanan.

Mungkin sampai disini dulu pembahasan `Object Position` kali ini, referensi yang bisa kamu gunakan untuk belajar lebih lanjut:

- https://developer.mozilla.org/en-US/docs/Web/CSS/object-position
- https://www.w3schools.com/cssref/css3_pr_object-position.php
- https://css-tricks.com/almanac/properties/o/object-position/
