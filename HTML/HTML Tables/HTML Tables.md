## HTML Tables

### Apa Itu HTML Table ?

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
