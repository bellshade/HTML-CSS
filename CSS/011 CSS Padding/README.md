## CSS Padding

### Apa Itu CSS Padding?

Properti CSS `padding` digunakan untuk membuat jarak pada antar elemen, di bagian dalam.

Padding memiliki beberapa property, antara lain:

- `padding-top` - Untuk mengatur padding atas
- `padding-right` - Untuk mengatur padding kanan
- `padding-bottom` - Untuk mengatur padding bawah
- `padding-left` - Untuk mengatur padding kiri
- `padding` (shorthand) - Untuk mengatur padding di semua arah

Contoh:

```css
p {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 40px;
}
```

### Padding Shorthand

Properti `padding` (shorthand) ini, memiliki beberapa parameter nilai.

Contoh pertama:

```css
p {
  padding: 10px;
}
```

Code tersebut memiliki arti yaitu :

- Nilai pertama - Untuk padding semua bagian.

Contoh kedua:

```css
p {
  padding: 10px 20px;
}
```

Code tersebut memiliki arti yaitu :

- Nilai pertama - Untuk padding bagian atas dan bawah.
- Nilai kedua - Untuk padding bagian kanan dan kiri.

Contoh ketiga:

```css
p {
  padding: 10px 20px 30px;
}
```

Code tersebut memiliki arti yaitu :

- Nilai pertama - Untuk padding bagian atas.
- Nilai kedua - Untuk padding bagian kanan dan kiri.
- Nilai ketiga - Untuk padding bagian bawah.

Contoh keempat:

```css
p {
  padding: 10px 20px 30px 40px;
}
```

Code tersebut memiliki arti yaitu :

- Nilai pertama - Untuk padding bagian atas.
- Nilai kedua - Untuk padding bagian kanan.
- Nilai ketiga - Untuk padding bagian bawah.
- Nilai keempat - Untuk padding bagian kiri.
