### HTML Entity

## Apa itu HTML Entity?

**HTML Entity** dapat direpresentasikan sebagai potongan `string`. Dalam penggunaannya, entity menggunakan `&` atau ampersan
untuk awalan sebuah entity, yang tidak jarang kita temukan dalam proses pembuatan sebuah website ataupun ketika sedang mengunjungi sebuah website entah itu simbol karakter seperti copyright (©), lebih besar (>), lebih kecil (<), dan sebagainya.

Dalam penggunaan **HTML Entity** terdapat 2 macam entity yaitu `Entity Name` dan juga `Entity Number`.

## Entity Number

Penggunaan dibuat dengan desimal ASCII atau heksadesimal ASCII, contoh penggunaan :

```html
<p>&#169; Bellshade LEARN WITH OUR COMMUNITY</p>
```

Output : `© Bellshade LEARN WITH OUR COMMUNITY`

## Entity Name

Penggunaan lebih mudah karena menggunakan alfabet sehingga lebih mudah diingat oleh user, contoh penggunaan :

```html
<p>&copy; Bellshade LEARN WITH OUR COMMUNITY</p>
```

Output : `© Bellshade LEARN WITH OUR COMMUNITY`

Terlihat perbedaan keduanya, `Entity Name` lebih mudah diingat karena menggunakan huruf alfabet namun dibalik kemudahan tersebut ternyata `Entity Name` masih belum mendukung semua browser sehingga penggunaan `Entity Number` lebih diunggulkan dari segi dukungan browser.


Beberapa karakter entity lain yang dapat digunakan : 

Char	|    Number    |  Entity    | 	
------|--------------|------------|
`©`	|    `&#169;`  |  `&copy;`	 |
`®`	|    `&#174;`  |  `&reg;`	 |
`™`	|    `&#8482;` |  `&trade;` |
`@`	|    `&#64;`	|  `&commat;`|
`¶`	|    `&#182;`  |  `&para;`	 |
`§`	|    `&#167;`  |  `&sect;`	 |
`&`   |    `&#38;`   |  `&amp;`   | 
`>`   |    `&#62;`   |  `&gt;`    |
`<`   |    `&#60;`   |  `&lt;`    |


Selengkapnya mengenai simbol-simbol yang ada di `HTML Entity` bisa mengunjungi:

- [Free Formatter](https://www.freeformatter.com/html-entities.html)
