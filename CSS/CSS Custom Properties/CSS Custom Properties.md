## Custom Properties

***Custom Properties*** (terkadang disebut sebagai variabel CSS atau *cascading variables*) adalah entitas yang ditentukan oleh penulis CSS yang berisi nilai tertentu untuk digunakan kembali di seluruh dokumen. Mereka disetel menggunakan notasi properti khusus, misalnya :
```css 
--main-color: black;
``` 
dan diakses menggunakan fungsi `var()` seperti :
```css 
color: var(--main-color);
```

### Penggunaan Dasar

Mendeklarasikan ***custom properties*** dilakukan dengan menggunakan nama ***custom properties*** yang dimulai dengan tanda hubung ganda/tanda strip/tanda minus (`--`), dan nilai properti yang dapat berupa nilai CSS apa pun yang valid. Seperti properti lainnya, ini ditulis di dalam sebuah *selector element*, seperti:

```css
element {
  --main-bg-color: brown;
}
```

Perhatikan bahwa *selector* yang diberikan ke *ruleset* mendefinisikan ruang lingkup tempat ***custom properties*** dapat digunakan. Contohnya seperti kode di atas, ***custom properties*** `--main-bg-color: brown;` hanya bisa digunakan pada elemen tersebut saja. Praktik terbaik yang umum adalah mendefinisikan ***custom properties*** pada *pseudo-class* `:root`, sehingga dapat diterapkan secara global di seluruh dokumen HTML Anda:

```css
:root {
  --main-bg-color: brown;
}
```

> Catatan: Nama ***custom properties*** peka terhadap huruf besar/kecil (*case sensitive*) — `--my-color` akan diperlakukan sebagai ***custom properties*** yang berbeda dengan `--My-color`.

### Contoh penggunaan sederhana ***custom properties***

Biasanya tanpa menggunakan ***custom properties*** kita akan menuliskan baris-baris css sebagai berikut:

#### File css :
```css
.one {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 50px;
  height: 50px;
  display: inline-block;
}

.two {
  color: white;
  background-color: black;
  margin: 10px;
  width: 150px;
  height: 70px;
  display: inline-block;
}
.three {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 75px;
}
.four {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 100px;
}

.five {
  background-color: brown;
}
```

#### File HTML :

```html
<div>
  <div class="one">1:</div>
  <div class="two">2: Text <span class="five">5 - more text</span></div>
  <input class="three">
  <textarea class="four">4: Lorem Ipsum</textarea>
</div>
```	

Perhatikan bahwa kita telah mengulang-ulang penggunakan properti `background-color: brown;` pada beberapa elemen. Nah, dengan ***custom properties*** ini kita dapat melakukan hal seperti dibawah ini pada file css kita :

```css
:root {
  --main-bg-color: brown;
}

.one {
  color: white;
  background-color: var(--main-bg-color);
  margin: 10px;
  width: 50px;
  height: 50px;
  display: inline-block;
}

.two {
  color: white;
  background-color: black;
  margin: 10px;
  width: 150px;
  height: 70px;
  display: inline-block;
}
.three {
  color: white;
  background-color: var(--main-bg-color);
  margin: 10px;
  width: 75px;
}
.four {
  color: white;
  background-color: var(--main-bg-color);
  margin: 10px;
  width: 100px;
}

.five {
  background-color: var(--main-bg-color);
}
```