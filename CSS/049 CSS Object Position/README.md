# CSS Object Position

## Apa itu CSS Object Position?

`Object position` merupakan properti CSS yang menentukan posisi objek yang ditentukan dalam element. kamu bisa menggunakan properti ini bersamaan `object-fit` untuk menentukan posisi objek yang ditentukan dalam sebuah element.

Contohnya jika `object-position:20% 80%`, maka objek akan ditetapkan memilki jarak 20% dari sisi kiri(left) dan 80% dari bagian atas(top) element. contoh lain, `object-position: 50% 50%`, objek akan ditempatkan tepat di tengah element.

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
