## CSS Counters
### Apa itu CSS CSS Counters?

CSS Counters adalah sebuah fitur dalam Cascading Style Sheets (CSS) yang memungkinkan kamu untuk menghitung elemen-elemen dalam dokumen HTML dan menampilkan jumlah tersebut dengan gaya  atau tampilan yang kamu tentukan. Ini adalah cara yang berguna untuk membuat daftar terurut, nomor halaman, atau membuat tata letak yang kompleks dalam dokumen.  

Counters digunakan dalam CSS untuk menghitung elemen-elemen HTML, seperti `<li>`, dan menampilkan jumlahnya dalam tampilan web. Kamu dapat mengatur dimulai dari berapa angka, cara menghitungnya, dan cara menampilkan hasilnya dalam dokumen.

  
### Cara Menggunakan Counters

 1.  **Mendefinisikan Counter**: Pertama, Kamu perlu mendefinisikan counter dalam CSS dengan menggunakan properti `counter-reset`. Ini akan memberi tahu CSS bahwa kamu ingin menghitung elemen-elemen tertentu.

  
```css
.counter {
    counter-reset: my-counter;
}
```
  
2.  **Menggunakan Counter**: Sekarang, Kamu dapat menggunakan counter ini dalam dokumen HTML kamu dengan properti `counter-increment`. Misalnya, Kamu ingin menghitung elemen-elemen `<li>` dalam daftar:

 ```css
.counter  li {
    counter-increment: my-counter;
}
```

  
3.  **Menampilkan Hasil Counter**: Kamu dapat menampilkan hasil counter dalam elemen-elemen HTML dengan properti `content` dan `counter()`. Contoh, menampilkan nomor urut pada daftar:
```css
.counter  li::before {
    content: counter(my-counter) ". ";
}
```

### Contoh Penggunaan
```html
<!DOCTYPE  html>
<html>
    <head>
        <link  rel="stylesheet"  type="text/css"  href="style.css">
    </head>
    <body>
        <div  class="counter">
            <ol>
                <li>List Item 1</li>
                <li>List Item 2</li>
                <li>List Item 3</li>
            </ol>
        </div>
    </body>
</html>
```
  
```css
/* style.css */
.counter {
    counter-reset: my-counter;
}

.counter  li {
    counter-increment: my-counter;
}

.counter  li::before {
    content: counter(my-counter) ". ";
}
```

Hasilnya akan menjadi daftar terurut seperti ini:

```text
1. List Item 1
2. List Item 2
3. List Item 3
```

### Referensi
- [MDN Web Docs - CSS Counters](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters)
- [W3Schools - CSS Counters](https://www.w3schools.com/css/css_counters.asp)