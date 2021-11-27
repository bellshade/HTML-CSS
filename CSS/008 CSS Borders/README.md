## CSS Border

## Apa itu CSS border?

Property css border ini adalah property memberikan efek garis ke sekitar elemen yang diterapkan.

## Nilai-nilai dalam CSS Border ini

`border-width:` mengatur ketebalan pada garis border yang akan digambar.

- Nilai numeric seperti unit px, rem, em, vw dan vh.
- `:thin` nilai setara dengan 1px.
- `:medium` nilai setara dengan 3px.
- `:thick` nilai setara dengan 5px.

Contoh:

```css
    #border {
        border-width: thin | medium | thick | (px/rem/em/vw/vh);
    }
```

`border-style:` mengatur bagaimana garis border digambar disekitar elemen.

- `:none` tidak ada garis border yang akan digambar dan ditunjukan.
- `:solid` garis yang terus menerus atau solid.
- `:hidden` garis border digambar, namun tidak diperlihatkan seperti transparan, bisa berguna untuk menambahkan jarak tambahan antar elemen namun lebih baik untuk menggunakan `CSS Margin`.
- `:dashed` garis border akan digambarkan saling hubung menghubung - - - - -
- `:dotted` garis border akan digambarkan sebagai titik-titik ◦◦◦◦
- `:double` garis border akan digambarkan dua kali sekaligus.
- `:groove` menambahkan efek seperti elemen ditekan terhadap dokumen.
- `:ridge` sama seperti property `:groove`, namun membuat efek seperti elemen dimunculkan terhadap dokumen.
- `:inset` memberikan efek garis border yang disetiap setengah bagian elemen mempunyai tone warna yang berbeda.
- `:outset` sama seperti property `:inset`, namun sifatnya diterbalikan.

```css
    #border {
        border-style: none | solid | hidden | dashed | dotted | double | groove | ridge | inset | outset;
    }
```

`color` mengatur warna dari garis border yang sudah/akan ditetapkan yang menerima nilai warna `(rgb/rgba/hsl/hsla/nilai hex)`.

## Cara penggunaan style border

Berikut ini adalah cara penggunaan property border.

```css
    #border {
        border: border-width | border-style | color;
    }
```

## Properti border unik untuk memberikan efek tertentu kepada elemen

`border-collapse:` merupakan property yang menentukan apakah border pada setiap sel yang ada di dalam `</table>` digabung atau terpisah.

- `:collapse` setiap sel saling bagi-membagi border
- `:separate` setiap sel memiliki border tersendiri / terpisah

```css
    #border {
        border-collapse: collapse | separate;
    }
```

`border-image:` property ini memberikan efek garis border menjadi gambar dan bukan hanya garis biasa yang berwarna.

Contoh penggunaan:

```css
    #border {
        border-image: url(direktori gambar kamu);
    }
```

`border-radius:` adalah property CSS yang membuat sudut element menjadi lebih melingkar.

```css
    #border {
        border-radius: 0%-100% | (px, rem, em, vw, vw);
    }
```
