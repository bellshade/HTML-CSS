# CSS Border Image

## Apa itu CSS Border Image?

CSS Border Image merupakan fitur yang hanya didukung pada browser yang support CSS3, yang memungkinkan untuk menggunakan gambar sebagai border pada elemen HTML.

contoh:

```css
.example {
  border-image: url(./border.png) 30 30 round;
}
```

![gambarnya masih otw](contoh.png)

Mari kita bedah apa saja nilai yang terdapat pada `border-image`:

- `url(./border.png)` : adalah gambar yang akan digunakan sebagai border

```css
border-image-source: url(./border.png);
```

- `30 30` : value yang menentukan berapa banyak gambar yang ditentukan oleh `border-image-source`.

```css
border-image-slice: 30 30;
```

- `round` : yang menentukan bahwa gambar diulang secara round

```css
border-image-repeat: round;
```

```css
.example {
  /* source | slice | repeat */
  border-image: url(./border.png) 30 30 round;
}
```
