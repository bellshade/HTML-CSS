## CSS Box Model

### Apa itu CSS Box Model?

CSS box model adalah sebuah desain yang dimana membuat pembungkus(kotak) untuk elemen HTML, dan elemen HTML ini terdiri dari padding, border, margin, dan content

Padding : membuat jarak pada antar elemen, di bagian dalam.
border  : pembatas antara elemen dan elemen lainnya.
margin  : membuat jarak pada antar elemen, di bagian luar.
content : bagian isi pada CSS box model

### Penerapan CSS Box Model

buat HTML terlebih dahulu :

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
Maka output yang dihasilkan :

![box model](https://user-images.githubusercontent.com/89055857/137605450-f21c84b8-d34f-46f3-89d1-4f74cfbd3ff6.PNG)

Referensi : https://www.w3schools.com/Css/css_boxmodel.asp
