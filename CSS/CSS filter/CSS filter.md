# CSS FILTER

## Css filter itu apa ya?

Css filter adalah css property yang bisa memberikan efek pada suatu element

### Langsung saja ke kode-nya

```css
img {
  /* Memberikan kaburnya  image */
  /* Satuan yang digunakan dalam bentuk px */
  filter: blur(px);
}
```

```css
img {
  /* Mengubah gambar menjadi abu-abu */
  /* Satuan yang digunakan persen(%) */
  filter: grayscale(%);
}
```

```css
img {
  /* Mengatur kecerahan gambar */
  /* Satuan yang digunakan persen(%) */
  filter: brightness(%);
}
```

```css
img {
  /* Mengatur gelap atau terangnya gambar */
  /* Satuan yang digunakan persen(%) */
  filter: contrast(%);
}
```

```css
img {
  /* Mengatur bayangan seperti box-shadow bedanya drop-shadow adalah filter */
  /* Penjelasan */
  /* offset-x : mengatur jarak horizontal/kesamping */
  /* offset-y : mengatur jarak vertikal/keatas  */
  /* blur-radius : mengatur radius ketajaman/kabur-nya bayangan  */
  /* color : mengatur warna */
  filter: drop-shadow(offset-x offset-y blur-radius color);
}
```

```css
img {
  /* Mengatur rotasi gambar */
  /* Satuan yang digunakan deg/derajat */
  /* Ex */
  /* hue-rotate(360deg) */
  filter: hue-rotate(deg);
}
```

```css
img {
  /* Mengatur ketajaman element*/
  /* Satuan yang digunakan persen(%) atau angka saja */
  filter: opacity(%);
}
```

```css
img {
  /* Mengatur gambar agar lebih tajam warnanya */
  /* Satuan yang digunakan persen(%) atau angka saja */
  filter: saturate(%);
}
```

```css
img {
  /* Memberikan gambar lebih kuning,lebih hangat / coklat */
  /* Satuan yang digunakan persen(%) atau angka saja */
  filter: sepia(%);
}
```

```css
img {
  /* Mengikuti induknya */
  filter: inherit;
}
```

```css
img {
  /* Merupakan default filter  */
  filter: initial;
}
```
