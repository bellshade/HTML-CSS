# HTML Tables

## Apa Itu HTML Table ?

HTML Table adalah elemen untuk menyajikan data berupa tabel.

Tag `<table>` mendefinisikan tabel HTML.

- Setiap **baris** tabel didefinisikan dengan tag `<tr>`
- Setiap **header** tabel didefinisikan dengan tag `<th>`, secara default, teks dalam elemen `<th>` dicetak tebal dan di tengah.
- Setiap **data/sel** tabel didefinisikan dengan tag `<td>`, secara default, teks dalam elemen `<td>` teratur dan rata kiri.

Contoh:

```html
<table style="width:100%">
  <tr>
    <th>Nama Barang</th>
    <th>Jumlah Stock</th>
    <th>Harga satuan</th>
  </tr>
  <tr>
    <td>Buku</td>
    <td>20</td>
    <td>Rp.10000,-</td>
  </tr>
  <tr>
    <td>Pensil</td>
    <td>15</td>
    <td>Rp.3000,-</td>
  </tr>
</table>
```

### Colspan dan Rowspan

*Colspan* dan *Rowspan* adalah atribut pada HTML Table yang digunakan untuk melebarkan sebuah kolom secara vertikal atau horizontal. *Colspan* dan *Rowspan* biasanya diterapkan pada tabel yang kompleks dan multi-dimensi. Atribut `colspan` dan `rowspan` dapat digunakan pada tag `th` dan `td`. 

Contoh penerapan *Colspan* dan *Rowspan* dapat dilihat pada gambar berikut.

![HTML Table Colspan dan Rowspan](img/table-colspan-rowspan.png)

Berikut penjelasan tentang atribut *Colspan* dan *Rowspan*.

- `colspan` digunakan untuk merentangkan kolom secara horizontal atau terhadap kolom selanjutnya
- `rowspan` digunakan untuk merentangkan kolom secara vertikal atau terhadap baris selanjutnya

Contoh:

```html
<table style="width:100%" border="1">
  <tr>
    <th rowspan="2">Nama Barang</th>
    <th colspan="2">Toko A</th>
    <th colspan="2">Toko B</th>
  </tr>
  <tr>
    <th>Jumlah Stok</th>
    <th>Harga Satuan</th>
    <th>Jumlah Stok</th>
    <th>Harga Satuan</th>
  </tr>
  <tr>
    <td>Buku</td>
    <td>20</td>
    <td>Rp.10000,-</td>
    <td>15</td>
    <td>Rp.9500,-</td>
  </tr>
  <tr>
    <td>Pensil</td>
    <td>15</td>
    <td>Rp.3000,-</td>
    <td>12</td>
    <td>Rp.3500,-</td>
  </tr>
</table>
```
