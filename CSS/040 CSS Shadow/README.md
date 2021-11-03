# CSS Shadow

## TEXT SHADOW

### Apa itu text shadow?

text shadow merupakan sebuah property CSS yang digunakan untuk memberikan bayangan pada text

### Langsung saja ke kodenya

Contoh

```html
<h1>Halo nama saya kuro</h1>
```

di file style CSS menggunakan property text-shadow

```css
h1 {
  text-shadow: 3px 5px 10px red;
}
```

### Penjelasan

Untuk menggunakan property text-shadow maka yang harus diperlukan adalah

- `offset-x` : untuk mengatur posisi ke kiri-kanan/horizontal
- `offset-y` : untuk mengatur posisi ke atas-bawah/vertikal
- `spread-radius` : untuk mengatur radius bayangan
- `color` : untuk mengatur warna bayangan

### Penjelasan kode css

- `3px` merupakan `offset-x`
- `5px` merupakan `offset-y`
- `10px` merupakan `spread-radius`
- `red` merupakan `color`

### Hasil

![CSS textShadow](text-shadow.png)

#### Referensi [Developer Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)

## BOX SHADOW

Apa sih itu box shadow ? box shadow adalah sebuah property css yang digunakan untuk memberikan
Bayangan pada element

### Langsung saja ke demo nya

```css
div {
  /* Penjelasan */
  /* offset-x : untuk mengatur posisi kesamping atau horizontal */
  /* offset-y : untuk mengatur posisi keatas atau vertikal */
  /* blur : untuk mengatur blur */
  /* spread-radius : untuk mengatur besarnya bayangan */
  /* color : untuk mengatur warna */
  /* Note */
  /* untuk color bisa menggunakan rgba() */
  box-shadow: (offset-x| offset-y | blur | spread radius | color);
}
```

### Praktek

```css
div {
  box-shadow: 5px 10px 4px 30px red;
}
```

_Kreasikan propety css ini ya agar website kamu terlihat cantik :)_

#### Referensi [Developer Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
