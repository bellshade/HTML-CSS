## CSS Units

### Apa Itu CSS Units?
CSS Units adalah beberapa unit berbeda pada CSS untuk menentukan ukuran.

Beberapa properti CSS yang digunakan untuk menentukan ukuran, contoh `width`, `margin`, `padding`, `font-size`, dan lain-lain.
Properti CSS tersebut diikuti dengan angka satuan, seperti `10px`, `2em`, dan lain-lain.

Untuk beberapa properti diperbolehkan memasukan nilai negatif (-)

### Contoh CSS Units
CSS unit dibagi menjadi 2 yaitu; **absolute** dan **relative**

**1. Absolute**

Unit absolute ukurannya bersifat tetap, ukuran yang didefinisikan akan muncul persis sama dengan ukuran tersebut. Karena itu Unit Absolute tidak disarankan untuk digunakan di layar, sebab ukuran layar sangat bervariasi.

| Unit | Deskripsi  | 
| :----- | :- |
| cm | Sentimeter |
| mm | Millimeter |
| in | Inchi (1in = 96px = 2.54cm) |
| px | Piksel (1px = 1/96th dari 1in) |
| pt | Points (1pt = 1/72 dari 1in) |
| pc | Picas (1pc = 12 pt) |


**2. Relative**

Satuan unit relative, menentukan ukuran relatif terhadap properti lainnya. Unit relative ini lebih baik saat digunakan pada layar, karena ukurannya akan menyesuaikan dengan ukuran layar.

| Unit | Deskripsi  | 
| :----- | :- |
| em | Relatif terhadap ukuran font saat ini (2em berarti 2 kali ukuran font saat ini)) |
| ex | Relatif terhadap tinggi-x dari ukuran font saat ini (ex jarang digunakan) |
| ch | Relatif terhadap lebar "0" |
| rem | Relatif terhadap ukuran font elemen root |
| vw | Relatif terhadap 1% dari lebar viewport |
| vh | Relatif terhadap 1% dari ketinggian viewport* |
| vmin | Relatif terhadap 1% dari viewport untuk mendefinisikan ukuran minimal |
| vmax | Relatif terhadap 1% dari viewport untuk mendefinisikan ukuran maximal |
| % | Relatif terhadap elemen induk |