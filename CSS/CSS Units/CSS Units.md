# CSS Units

## Apa ya CSS Units?


**CSS Units** adalah satuan ukuran yang sering kita pakai dalam membuat suatu style element. Contoh penggunaan satuan ini sering kita temui ketika menggunakan `Font-Size`, `Padding`, `Margin` dan masih banyak lagi.Contoh Penggunaan:

**Contoh Penggunaan pada `Font-Size`**

```css
p {
  font-size: 20px;
}
```


### Macam-Macam CSS Units

- **Absolute Length**
    Ukuran yang tidak bisa berubah walau lebar layar berubah, **Absolute Length** tidak sarankan untuk digunakan karena setiap ukuran layar yang digunakan pasti berbeda-beda antara satu dan lainnya.Kira-Kira satuan apa aja ya yang masuk ke **Absolute Length** yuk baca tabel berikut ini

    | Jenis Ukuran | Penjelasan |
    |--|--|
    | cm | Centimeter |
    | mm | Milimeter |
    | in | 	inches (1in = 96px = 2.54cm) |
    | px * | pixels (1px = 1/96th of 1in) |
    | pt | 	points (1pt = 1/72 of 1in) |
    | pc | 	picas (1pc = 12 pt) |

**Contoh Penggunaan Absolute Length**
    
```css
.class {
  margin-top: 50px;
}
```

- **Relative Length**
    Ukuran yang digunakan menyesuaikan dari lebar layar yang digunakan. Sehingga lebih baik jika menggunakan satuan jenis yang ada pada  **Relative Length**.

    | Jenis Ukuran | Penjelasan |
    |--|--|
    | em | Relatif terhadap ukuran element |
    | ex | Relatif terhadap height font |
    | ch | 	 Relatif terhadap lebar |
    | rem | Relatif terhadap font root element |
    | vw | 	 Relatif terhadap 1% dari lebar viewport|
    | vh | 	Relatif terhadap 1% dari tinggi viewport |
    | vmin | Relatif terhadap 1% viewport (minimal) |
    | vmax |  Relatif terhadap 1% viewport (maximal) |
    | % | 	Relatif terhadap parent suatu element |

**Contoh Penggunaan Absolute Length**

```css
.class h1{
  font-size: 24em;
}
```
