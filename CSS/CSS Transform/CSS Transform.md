# CSS Transform

CSS Transform merupakan property yang mengatur transformasi dari elemen baik secara 2D ataupun 3D

### Property apa saja yang ada pada CSS Transform?

CSS Transform memiliki beberapa property yang sering dipakai, lengkapnya bisa cek [disini](https://www.w3schools.com/cssref/css3_pr_transform.asp)

**Rotate**
Value : (deg)

- rotate() - Mengatur rotasi elemen
- rotateX() - Mengatur rotasi elemen secara horizontal (sumbu-X)
- rotateY() - Mengatur rotasi elemen secara vertikal (sumbu-Y)

**Translate**
Value : (px)

- translate(_x,y_) - Mengatur posisi atau letak elemen 
- translateX() - Mengatur posisi atau letak elemen secara horizontal (sumbu-X)
- translateY() - Mengatur posisi atau letak elemen secara vertikal (sumbu-Y)

**Scale**
Value : (angka)

- scale(_x,y_) - Memperbesar ukuran elemen
- scaleX() - Memperbesar lebar elemen (sumbu-X)
- scaleY() - Memperbesar tinggi elemen (sumbu-Y)

**Skew**
Value : (deg)

- skew(_x,y_) - Mengatur condong elemen
- skewX() - Mengatur condong elemen secara horizontal (sumbu-X)
- skewY() - Mengatur condong elemen secara vertikal (sumbu-Y)
## Contoh pemakaian Property CSS Transform

**HTML**
```html
<div id="box"></div>
```

**CSS**

- rotate()

```css
#box {
  width: 100px;
  height: 100px;
  background-color: black;
  transform: rotate(90deg);
  /* Mengatur rotasi elemen 90 derajat */
}
```

- translate()

```css
#box {
  width: 100px;
  height: 100px;
  background-color: black;
  transform: translate(50px, 25px);
  /* Mengatur posisi elemen sumbu-X 50 piksel dan sumbu-Y 25 piksel */
}
```

- scale()

```css
#box {
  width: 100px;
  height: 100px;
  background-color: black;
  transform: scale(2, 1.5)
  /* Memperbesar lebar elemen 2 kali lipat dan tinggi elemen 1.5 kali lipat */
}
```

- skew()

```css
#box {
  width: 100px;
  height: 100px;
  background-color: black;
  transform: skew(30deg, 15deg)
  /* Mencondongkan elemen 30 derajat secara horizontal dan 15 derajat secara vertikal */
}
```

**Referensi : [Klik disni](https://www.w3schools.com/cssref/css3_pr_transform.asp)**
