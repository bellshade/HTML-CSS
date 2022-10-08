# Elemen HTML

## Apa itu Elemen dalam HTML ?

Elemen __HTML__  bisa dikatakan segalanya mulai dari tag awal hingga tag akhir. Elemen __HTML__ didefinisikan oleh tag awal. Jika elemen berisi konten lain, itu diakhiri dengan tag penutup, di mana nama elemen didahului oleh garis miring seperti yang ditunjukkan di bawah ini dengan beberapa tag.

## Contoh Elemen HTML

```html
<p>Elemen HTML</p>
<div>Ini adalah Elemen HTML</div>
```

Keterangan :
| Konten   | Tag Pembuka | Tag Penutup |
| -------- | :---------: | :---------: |
| Paragraf |    `<p>`    |   `</p>`    |
| Divisi   |   `<div>`   |  `</div>`   |

Jadi di sini ada dua elemen HTML yaitu, elemen `<p>...</p>` dan elemen `<div>...</div>`. Ada beberapa elemen yang tidak memerlukan tag __penutup__ seperti `<img>`, `<br>`, `<hr>`, `<input>`, dll.

## Nesting Elemen HTML

Elemen HTML dapat memiliki struktur yang bersarang, artinya suatu elemen dapat dibuat dalam elemen lain. 

Contoh :

```html
<div>
    <h3><a href="#">Bellshade</a></h3>
</div>
```

Dari contoh diatas, elemen `<div></div>` menampung elemen `<h3></h3>`, dan elemen `<h3></h3>` menampung elemen hyperlink (`<a></a>`). Sehingga, akan ditampilkan sebuah hyperlink dalam bentuk heading yang dibungkus dalam sebuah elemen `<div></div>`.
