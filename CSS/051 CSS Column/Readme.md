# Columns

<strong>Columns</strong> adalah sebuah fitur pada CSS yang memungkinkan untuk membagi konten menjadi beberapa kolom yang terpisah. Ini sangat berguna untuk menampilkan konten secara lebih terstruktur dan mudah dibaca.

Ada beberapa properti yang bisa digunakan untuk menggunakan <strong>Columns</strong>:

- column-count
- column-width

Fungsi dari `column-count` adalah untuk membagi elemen menjadi beberapa bagian, sedangkan `column-width` untuk mengatur lebar kolom tersebut.

Contoh:

```css
.container {
  column-count: 3; /* membagi elemen menjadi 3 kolom */
  column-width: 200px; /* mengatur lebar elemen sebesar 200px */
}
```

Untuk penulisan dua properti diatas dapat diringkas dengan penulisan sebagai berikut:

```css
.container {
  columns: 6rem auto;
}
```

Browser secara otomatis akan membaca bahwa dalam properti `columns` memiliki dua nilai yaitu `column-width` dan `column-count`. penulisan seperti ini tidak perlu diurutkan kamu bisa mendahulukan `column-count` dulu atau `column-width`

Ada beberapa properti lain pendukung seperti `column-gap` yang menentukan jarak antar kolom, `column-rule` untuk menambahkan atau memberikan garis pemisah antara kolom dan `column-fill` untuk mengatur keseimbangan antara kolom.

Contoh :

**column-gap**

```css
.container {
  column-gap: 9px;
}
```

**column-rule**

```css
.container {
  column-rule: solid 6px;
}
```

**column-balance**

```css
.container {
  column-fill: balance;
}
```

Penggunaan **Columns** untuk membagi teks menjadi beberapa kolom pada sebuah dokumen, atau membagi konten pada sebuah website menjadi beberapa kolom untuk memudahkan navigasi dan mempercantik tampilan.

**Columns** sangat berguna untuk menampilkan konten secara lebih terstruktur dan mudah dibaca, terutama jika konten tersebut cukup panjang. Namun, perlu dipertimbangkan lagi apakah penggunaan **Columns** akan sesuai dengan desain dan tujuan dari website atau dokumen yang dibuat.

Sumber:

- https://developer.mozilla.org/en-US/docs/Web/CSS/columns
- https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap
- https://www.w3schools.com/css/css3_multiple_columns.asp
<br>
<br>
<br>
<hr>

### **Catatan**:

Perlu diketahui bahwa **Column** tidak sama dengan properti lain seperti `flexbox` atau `grid`. **Column** hanya berguna untuk membagi konten menjadi beberapa kolom, sementara `flexbox` dan `grid` hanya mengatur _layout_ agar lebih simple dan mudah
