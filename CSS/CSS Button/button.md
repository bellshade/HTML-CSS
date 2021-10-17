## CSS Button

### Apa itu CSS Button?

CSS button adalah sebuah property CSS, yang dimana berfungsi untuk desain tombol pada website.
Jika menggunakan HTML bisa menggunakan :

<!--Button dengan menggunakan syntax aslinya-->
- ``<button type="submit">Mulai</button>``
<!--Button dengan menggunakan syntax input-->
- ``<input type="submit" value="Selesai">``
<!--Button dengan dibungkus link-->
- ``<a href="#" class="tombol">Link Button</a>``

### Penerapan CSS Button

Cara agar tampilan tombol (button) pada website menjadi lebih menarik :

HTML
```html
<body>
<h3>CSS Button</h3>

<!--button-->
<button class="button1">Send</button>
<input type="button" class="button2" value="Reset">
<!--button yang mengarahkan ke link gmail-->
<a href="www.gmail.com" class="button3">Submit</a>
</body>

</body>
```
CSS
```css
.button1 {
    background-color: black;
    display: inline-block;
    font-size: 14px;
    margin: 6px 3px;
    cursor: pointer;
    border: none;
    color: white;
    padding: 12px 28px;
    text-align: center;
    text-decoration: none;
    border-radius: 25px;
  }
  .button2 {
    background-color: blue;
    display: inline-block;
    font-size: 14px;
    margin: 6px 3px;
    cursor: pointer;
    border: none;
    color: white;
    padding: 12px 28px;
    text-align: center;
    text-decoration: none;
    border-radius: 10px;
  }
  .button3 {
    background-color: #05c90b;
    display: inline-block;
    font-size: 14px;
    margin: 6px 3px;
    cursor: pointer;
    border: none;
    color: white;
    padding: 12px 28px;
    text-align: center;
    text-decoration: none;
  }
```

### Ouput yang dihasilkan

- Class button1, button2, dan button3

![button](https://user-images.githubusercontent.com/89055857/137605681-338f0453-7025-4f37-93c1-e402b16edefe.PNG)
