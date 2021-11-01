## CSS Math Function

### Apa Itu CSS Math Function?

CSS Math Function memungkinkan perhitungan dengan matematika pada properti.

### Contoh Penerapan CSS Math Function

#### 1. `calc()` Function

`calc()` berfungsi untuk melakukan perhitungan dan digunakan dalam nilai properti.

`calc()` memiliki syntaks: `calc(perhitungan)`.

Contoh penggunaan `calc()`:

```CSS
#div1 {
  position: absolute;
  left: 60px;
  width: calc(100% - 100px);
  border: 1px solid black;
  background-color: red;
  padding: 7px;
}
```

#### 2. `max()` Function

`max()` Digunakan untuk menentukan nilai terbesar sebagai nilai dari properti.

`max()` memiliki syntaks: `max(nilai1, nilai2, ...)`

Contoh penggunaan `max()`:

```CSS
#div1 {
  background-color: red;
  height: 100px;
  width: max(50%, 300px);
}
```

#### 3. `min()` Function

`min()` Digunakan untuk menentukan nilai terkecil sebagai nilai dari properti.

`min()` memiliki syntaks: `min(nilai1, nilai2, ...)`

Contoh penggunaan `min()`:

```CSS
#div1 {
  background-color: red;
  height: 100px;
  width: min(50%, 300px);
}
```
