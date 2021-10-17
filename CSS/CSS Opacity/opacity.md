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

![Opacity image](https://user-images.githubusercontent.com/89055857/137605644-d2c71672-0926-43ba-be2b-0b9d0e5a109f.PNG)

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

![box transparan](https://user-images.githubusercontent.com/89055857/137605647-ae37e257-b6ec-4047-a0e7-f045485c667f.PNG)

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
Output tampilannya :

![box transparan RGBA](https://user-images.githubusercontent.com/89055857/137605652-8edd4203-f2eb-45b3-9e27-5f659f80d122.PNG)

Referensi : https://www.w3schools.com/css/css_image_transparency.asp
