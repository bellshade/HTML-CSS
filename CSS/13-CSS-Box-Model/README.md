## CSS Box Model

### Apa itu CSS box model?

CSS box model adalah sebuah desain yang dimana digunakan untuk membuat pembungkus pada elemen html. Properti css yang diperlukan untuk membuat box model, diantaranya yaitu :

- Padding : Membuat jarak pada antar elemen, di bagian dalam.
- Border  : Pembatas antara elemen dan elemen lainnya.
- Margin  : Membuat jarak pada antar elemen, di bagian luar.
- Content : Bagian isi pada box model yang berasal dari elemen html.

### Penerapan CSS box model

Jika ingin mencobanya, buat html terlebih dahulu. Seperti dibawah ini :

```html
<body>
    <h2>Contoh box model</h2>
    <div class="boxModel1">Ini adalah box model 1</div>
    <div class="boxModel2">ini adalah box model 2</div>  
    <div class="boxModel3">ini adalah box model 3</div>  
</body>
```
pada CSS gunakan seperti ini :

```css
.boxModel1{
    width: 300px;
    padding: 15px;
    border: 5px solid rgb(255, 0, 0);
    margin: 0;
    margin-bottom: 10px;
    text-align: center;
    font-size: 18px;
  }
.boxModel2{
    width: 300px;
    padding: 15px;
    border: 5px solid rgb(238, 255, 0);
    margin: 0;
    margin-bottom: 10px;
    text-align: center;
    font-size: 18px;
  }
.boxModel3{
    width: 300px;
    padding: 15px;
    border: 5px solid rgb(0, 255, 21);
    margin: 0;
    margin-bottom: 10px;
    text-align: center;
    font-size: 18px;
}
```
Maka tampilan yang dihasilkan :

![box model](https://user-images.githubusercontent.com/89055857/138234044-1076debd-a763-44e6-a06b-a96663041513.PNG)

Catatan : Seperti yang diketahui pada hasil output yang diatas, box model ini lebih mengarah ke pembungkus pada sebuah content. Jika ingin membuat sebuah box model, maka gunakanlah :
- ``width``
- ``padding``
- ``border``
- ``margin``
- ``text-align``
- ``font-size``

Jika ingin menambahkan sebuah effect, dan lain sebagainya, bisa ditambahkan propertinya sesuai dengan kebutuhan pada website yang dibuat.

Referensi : [w3schools](https://www.w3schools.com/css/css_boxmodel.asp)
