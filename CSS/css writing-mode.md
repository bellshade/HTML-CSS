# CSS WRITING-MODE
### Apa itu CSS writing-mode ?

CSS writing-mode menentukan arah menulis teks apakah itu vertikal atau horizontal

**CSS writing-mode ada 3 jenis**
-```horizontal-tb```
-```vertical-rl```
-```vertical-lr```

### Writing-mode horizontal-tb
Sebuah elemen tulisan dengan ```writing-mode: horizontal-tb``` akan tertulis secara horizontal dari kiri ke kanan, dan vertikal dari atas ke bawah.
#### Contoh

**HTML**
```html
<p>Writing-Mode horizontal-tb</p>
```
**CSS**
```css
p{
  writing-mode: horizontal-tb;
} 
```
### Writing-mode vertical-rl
Sebuah elemen tulisan dengan ```writing-mode: vertical-rl;``` akan tertulis secara vertikal dari atas ke bawah, dan horizontal dari kanan ke kiri.
#### Contoh

**HTML**
```html
<p>Writing-Mode vertical-rl </p>
```
**CSS**
```css
p{
  writing-mode: vertical-rl;
}
```
### Writing-mode vertical-lr
Sebuah elemen tulisan dengan ```writing-mode: vertical-lr;``` akan tertulis secara vertikal dari atas ke bawah, dan horizontal dari kiri ke kanan.
#### Contoh

**HTML**
```html
<p>Writing-Mode vertical-lr </p>
```
**CSS**
```css
p{
  writing-mode: vertical-lr;
}
```

Referensi: https://www.w3schools.com/cssref/css3_pr_writing-mode.asp
