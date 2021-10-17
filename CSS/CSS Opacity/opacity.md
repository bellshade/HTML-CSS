## CSS Opacity

### Apa itu CSS Opacity?

CSS opacity adalah sebuah property CSS, yang dimana berfungsi untuk memberikan effect, seperti effect transparan, blur, dan yang lainnya.

Ada beberapa penerapan opacity pada CSS, yang diantaranya adalah :
- Opacity dengan Image
- Opacity dengan efek hover
- Teks dalam box transparan
- Transparan dengan menggunakan RGBA

### Penerapan CSS Opacity

code HTML yang digunakan :
```html
<body>
    <img class="gambar1" src="KamisatoAyaka-min.png" alt="">
    <img class="gambar2" src="KamisatoAyaka-min.png" alt="">
</body>
```

### CSS Opacity dengan Image :

CSS
```css
.gambar1 {
    opacity: 0.2;
}
.gambar2 {
    opacity: 0.7;
}
```
Output yang dihasilkan :

![Opacity image](https://user-images.githubusercontent.com/89055857/137604971-df55ac4e-1c5f-4df2-87c0-ee8e2d3deb7e.PNG)

### CSS Opacity dengan efek hover :

CSS
```css
.gambar1 {
    opacity: 0.6;
}
.gambar2 {
    opacity: 0.2;
}
img:hover {
    opacity: 100;
}
```
Pada saat menyentuh gambar1 atau gambar2, gambar yang awalnya transparan akan terlihat lebih terang karena nilai transparannya berubah menjadi tinggi.

### Teks dalam box transparan :

Untuk contoh yang ini, pada html menggunakan ``<div>`` 

HTML
```html
<body>
<div class="box1"><p>opacity 0.5</p></div>
<div class="box2"><p>opacity 0.8</p></div>
<div class="box3"><p>opacity 1</p></div>
<body>
```

CSS
```css
div {
    background-color: blue;
    padding: 15px;
}
.box1 {
    opacity: 0.5;
}
.box2 {
    opacity: 0.8; 
}
.box3 {
    opacity: 1; 
}
```
Output yang dihasilkan : 

![box transparan](https://user-images.githubusercontent.com/89055857/137604984-7e7e50d7-ccd4-4a30-9c75-aeafa69dddfa.PNG)

### Transparan dengan menggunakan RGBA

CSS
```css
div {
    background-color: blue;
    padding: 15px;
}
.box1 {
    background: rgba(0, 36, 240, 0.3);
}
.box2 {
    background: rgba(0, 36, 240, 0.6);
}
.box3 {
    background: rgba(0, 36, 240, 0.9);
}
```
Output yang dihasilkan :

![box transparan RGBA](https://user-images.githubusercontent.com/89055857/137604987-4f6c20b0-a1f5-417d-9569-28a4a1553660.PNG)

Referensi : https://www.w3schools.com/css/css_image_transparency.asp
