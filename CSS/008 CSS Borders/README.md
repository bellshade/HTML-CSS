## CSS Border

## Apa itu CSS border?

Property css border ini adalah untuk memberikan efek garis ke sekitar elemen yang diterapkan.

## Nilai-nilai dalam CSS Border ini

`border-width:` mengatur ketebalan border.

- Nilai numeric seperti unit px, rem, em, vw dan vh.
- `thin` nilai setara dengan 1px.
- `medium` nilai setara dengan 3px.
- `thick` nilai setara dengan 5px.

Contoh:

```css
    #border {
        border-width: thin / medium / thick / (px/rem/em/vw/vh);
    }
```

`border-style:` mengatur bagaimana garis border digambar disekitar elemen.

- `none` tidak ada garis border yang akan digambar dan ditunjukan.
- `solid` garis yang terus menerus atau solid.
- `hidden` garis border digambar, namun tidak diperlihatkan seperti transparan, bisa berguna untuk menambahkan jarak tambahan antar elemen namun lebih baik untuk menggunakan `CSS Margin`.
- `dashed` garis border akan digambarkan saling hubung menghubung - - - - -
- `dotted` garis border akan digambarkan sebagai titik-titik ◦◦◦◦
- `double` garis border akan digambarkan dua kali sekaligus.
- `groove` menambahkan efek seperti elemen ditekan terhadap dokumen.
- `ridge` sama seperti property `groove`, namun membuat efek seperti elemen dimunculkan terhadap dokumen.
- `inset` memberikan efek garis border yang disetiap setengah bagian elemen mempunyai tone warna yang berbeda.
- `outset` sama seperti property `inset`, namun sifatnya diterbalikan.

```css
    #border {
        border-style: none / solid / hidden / dashed / dotted / double / groove / ridge / inset / outset;
    }
```

`color` mengatur warna dari garis border yang sudah/akan ditetapkan yang menerima nilai warna `(rgb/rgba/hsl/hsla/nilai hex)`.

## Cara penggunaan style border

Berikut ini adalah cara penggunaan style border yang efektif.

```css
    #border {
        border: border-width / border-style / color;
    }
```

## Properti unik untuk memberikan efek border kepada elemen

`border-collapse:` property memberikan jarak terhadapborder dalam sebuah elemen.

- `collapse`
- `separate`

```css
    #border {
        border-collapse: collapse / separate;
    }
```

`border-image:` property ini memberikan efek garis border gambar.

Contoh penggunaan:

```css
    #border {
        border-image: url(direktori gambar kamu);
    }
```

`border-radius:` property ini memberikan efek sudut elemen menjadi lebih melingkar.

```css
    #border {
        border-radius: 0%-100% / (px, rem, em, vw, vw);
    }
```
