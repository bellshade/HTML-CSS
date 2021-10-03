# Definisi CSS

CSS adalah kepanjangaan dari Cascading Style Sheetsyang berguna untuk menyederhanakan proses pembuatan website dengan mengatur elemen yang tertulis di bahasa markup.

Pertama perlu disebutkan tag HTML yang ingin kita rubah stylenya, 
lalu dalam CSS style tersebut dimasukkan ke dalam {}.

Syntax CSS adalah
```css
    H1 {color : white}
/* {tag} {property} {Value} */
```


Penulisan CSS pun bisa langsung di HTML nya.
contohnya seperti ini :
```html
<tag class="" style="color: white;"></tag>
```

Tak hanya itu, penulisan Penulisan CSS bisa dilakukan di file terpisah.
Biasanya nama file tersebut adalah style.css.

Contoh penulisannya di style.css adalah :
```css
tag {
    color:white
}
```

Untk memakai file style.css tersebut, kita harus menghubungkannya ke file HTML
Cara menghubungkan nya adalah menambahkan
```html
<link rel="stylesheet" href="style.css">
<!--  href = untuk menghubungkan ke nama file css nya-->
```
di dalam tag <Head>.


Style dalam CSS ada banyak sekali, kita akan membahas itu satu-persatu


Teks editor untuk membuat file CSS diantaranya Notepad++, SublimeText, dan Visual Studio Code.