## CSS Border Radius

### Apa Itu CSS Border Radius?

CSS Border Radius adalah syntax untuk membuat lengkungan di tag HTML.

Jika `border-radius` tidak ditentukan propertinya, maka secara default semua sudut akan terbentuk lengkungan sesuai nilai yang telah tentukan :

Contoh:

```css
.div {
  border-radius: 5px;
  /* Terbentuk lengkungan di keempat sudutnya dan nilai nya sama*/
}
```

### Properti Border Radius

Properti `border-radius` memiliki 4 nilai yang dapat digunakan untuk menentukan sudut dimana lengkungan yang ingin kita buat.

- `border-top-left-radius: 25px` - sudut atas kiri menjadi lengkungan, sementara sudut lain akan tetap normal.
- `border-top-right-radius: 25px` - sudut atas kanan menjadi lengkungan, sementara sudut lain akan tetap normal.
- `border-bottom-left-radius: 25px` - sudut bawah kiri menjadi lengkungan, sementara sudut lain akan tetap normal.
- `border-bottom-right-radius: 25px` - sudut bawah kanan menjadi lengkungan, sementara sudut lain akan tetap normal.

Contoh:

```css
.div1 {
  border-top-left-radius: 30px;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 25px;
}
```

### Border Radius Shorthand

Contoh:

```css
.div2 {
  /* Memasukkan 2 nilai = akan merubah sudut atas kiri dan bawah kanan menjadi lengkungan dengan nilai yang pertama, 
  sementara sudut atas kanan dan bawah kiri akan dimasukkkan nilai kedua*/
  border-radius: 15px 50px;

  /* Memasukkan 3 nilai = akan merubah sudut atas kiri dengan nilai yang pertama nilai kedua akan merubah sudut atas kanan dan bawah kiri,
    sementara sudut bawah kanan akan dimasukkkan nilai ketiga*/
  border-radius: 15px 50px 30px;

  /* Memasukkan 4 nilai = akan merubah sudut atas kiri dengan nilai yang pertama, 
    nilai kedua akan merubah sudut atas kanan, nilai ketiga akan merubah sudut bawah kanan, 
    sementara nilai ke empat merubah sudut bawah kiri*/
  border-radius: 15px 50px 30px 75px;
}
```
