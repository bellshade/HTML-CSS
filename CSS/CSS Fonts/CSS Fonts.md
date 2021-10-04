## CSS Fonts

### Apa Itu CSS Fonts?

Properti CSS Fonts untuk merubah style dari tulisan di tag tersebut.

Fonts memiliki beberapa property, antara lain:

- `font-style` - Untuk mengatur margin atas
- `font-size` - Untuk mengatur margin atas
- `font-variant` - Untuk mengatur margin atas
- `font-weight` - Untuk mengatur margin bawah
- `font-family` - Untuk mengatur margin kiri

Contoh:

```css
p {
  font-style: normal;     /* font style = normal*/
  font-style: italic;     /* font style = tulisan miring*/ 
}
```

```css
p {
  font-size: 5px;         /* font size = 5 pixel */
  font-size: 3rem;        /* font size = 1rem = 16 pixel*/ 
}
```

```css
p {
  font-variant: normal;       /* font variant = normal */
  font-variant: small-caps;   /* font variant = huruf besar semua tapi ukuran kecil*/ 
}
```

```css
p {
  font-weight: normal;       /* font weight: normal */
  font-weight: bold;         /* font weight: lebih tebal dari normal*/ 
}
```

Font Family:
serif        contoh: Times New Roman
sans-serif   contoh: Arial
monospace    contoh: Monaco
cursive      contoh: Lucida Handwriting
fantasy      contoh: Copperplate

```css
p {
  font-family: "Times New Roman", Times, serif;      
  /* font family: pertama akan pakai style Times New Roman, jika tidak ada
        maka styles Times*/ 
}
```

### Fonts Shorthand

```css
p{
  font: italic small-caps bold 12px/30px Georgia, serif;
    /* pertama adalah font style, variant, weight, size, lalu terakhir font family */
}
```