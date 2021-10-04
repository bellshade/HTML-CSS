## CSS Colors

### Apa Itu CSS Colors?

Sesuai dengan namanya, css colors adalah syntax untuk memberi warna pada elemen HTML.
Warna dapat ditentukan menggunakan:

- Nama warna yang telah ditentukan
- Nilai RGB
- Nilai RGBA
- Nilai HSL
- Nilai HSLA
- Nilai HEX

### Nama warna dalam CSS

Di CSS, warna dapat ditentukan dengan menggunakan nama warna yang telah ditentukan:

<div>
<p style="color: #fff; background: red; padding: 1rem;">Red</p>
<p style="color: #fff; background: orange; padding: 1rem;">Orange</p>
<p style="color: #fff; background: green; padding: 1rem;">Green</p>
<p style="color: #fff; background: blue; padding: 1rem;">Blue</p>
<p style="color: #fff; background: DodgerBlue; padding: 1rem;">DodgerBlue</p>
<p style="color: #fff; background: SlateBlue; padding: 1rem;">SlateBlue</p>
</div>

Dan masih banyak lagi.

### Nilai RGB

Di CSS, warna dapat ditentukan sebagai nilai RGB, menggunakan rumus ini:

`rgb(red, green, blue)`

Setiap parameter (red, green, blue) mendefinisikan intensitas warna antara 0 dan 255.

Contoh:

<div>
<p style="color: #fff; background: rgb(255, 165, 0); padding: 1rem;">rgb(255, 165, 0)</p>
<p style="color: #fff; background: rgb(5, 142, 217); padding: 1rem;">rgb(5, 142, 217)</p>
<p style="color: #fff; background: rgb(106, 90, 205); padding: 1rem;">rgb(106, 90, 205)</p>
</div>

### Nilai RGBA

Sama seperti RGB, hanya saja di RGBA, kita dapat menambahkan properti alpha (opacity).

`rgba(red, green, blue, alpha)`

Parameter alpha adalah angka antara 0.0 (sepenuhnya transparan) dan 1.0 (tidak transparan sama sekali):

Contoh:

<div>
<p style="color: #fff; background: rgba(106, 90, 205, 0); padding: 1rem;">rgba(106, 90, 205, 0)</p>
<p style="color: #fff; background: rgba(106, 90, 205, 0.5); padding: 1rem;">rgba(106, 90, 205, 0.5)</p>
<p style="color: #fff; background: rgba(106, 90, 205, 1); padding: 1rem;">rgba(106, 90, 205, 1)</p>
</div>

### Nilai HSL

Di CSS, warna dapat ditentukan menggunakan hue, saturation, dan lightness (HSL) dalam bentuk:

`hsl(hue, saturation, lightness)`

Contoh:

<div>
<p style="color: #fff; background: hsl(39, 100%, 50%); padding: 1rem;">hsl(39, 100%, 50%)</p>
<p style="color: #fff; background: hsl(210, 100%, 56%); padding: 1rem;">hsl(210, 100%, 56%)</p>
<p style="color: #fff; background: hsl(248, 53%, 58%); padding: 1rem;">hsl(248, 53%, 58%)</p>
</div>

### Nilai HSLA

Sama seperti HSL, hanya saja di HSLA, kita dapat menambahkan properti alpha (opacity).

`hsla(hue, saturation, lightness, alpha)`

Parameter alpha adalah angka antara 0.0 (sepenuhnya transparan) dan 1.0 (tidak transparan sama sekali):

Contoh:

<div>
<p style="color: #fff; background: hsla(248, 53%, 58%, 0); padding: 1rem;">hsla(248, 53%, 58%, 0)</p>
<p style="color: #fff; background: hsla(248, 53%, 58%, 0.5); padding: 1rem;">hsla(248, 53%, 58%, 0.5)</p>
<p style="color: #fff; background: hsla(248, 53%, 58%, 1); padding: 1rem;">hsla(248, 53%, 58%, 1)</p>
</div>

### Nilai HEX

Warna heksadesimal ditentukan dengan: #RRGGBB, di mana bilangan bulat heksadesimal RR (merah), GG (hijau) dan BB (biru) menentukan komponen warna.

`#rrggbb`

Contoh:

<div>
<p style="color: #fff; background: #ffa500; padding: 1rem;">#ffa500</p>
<p style="color: #fff; background: #1e90ff; padding: 1rem;">#1e90ff</p>
<p style="color: #fff; background: #6a5acd; padding: 1rem;">#6a5acd</p>
</div>
