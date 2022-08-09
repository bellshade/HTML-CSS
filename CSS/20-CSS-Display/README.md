# CSS Display

Setiap elemen pada halaman web didefinisikan sebagai kotak persegi panjang dan properti `display` di CSS lah yang menentukan bagaimana perilaku dari kotak persegi panjang tersebut.

Setiap tag pada HTML memiliki nilai default untuk properti `display`. Tetapi kita juga dapat mengubah perilaku dari tag tersebut dengan mengganti *valuenya*.

*Value* default untuk semua elemen adalah `inline`, tetapi kebanyakan *“User-Agent Stylesheets”* (*style* default yang diterapkan browser untuk semua situs) mengatur ulang banyak elemen menjadi `block`. Di bagian ini kita akan membahas masing-masing *value* dari CSS Display ini.

## Value

Properti `display` mempunyai banyak sekali kata kunci untuk *valuenya*. Kata kunci tersebut dapat dikelompokkan ke dalam beberapa kategori yang berbeda.

```css
/* <display-outer> (Mengatur perilaku dari sebuah elemen). */  
display: block;  
display: inline;

/* <display-inner> (Mengatur perilaku 'konten/child' dari sebuah elemen) */  
display: flex;  
display: flow-root;  
display: grid;  
display: table;  
display: ruby;  /* experimental */

/* <display-listitem> (Membuat 'content box' dan 'inline list-item box') */
display: list-tem;  
display: inline list-tem;  

/* <display-internal> (Mendefinisikan tabel dan 'ruby layouts') */  display: table-row-group;  
display: table-header-group;  
display: table-footer-group;  
display: table-row;  
display: table-cell;  
display: table-column-group;  
display: table-column;  
display: table-caption;  
display: ruby-base;  /* experimental */  
display: ruby-text;  /* experimental */  
display: ruby-base-container;  /* experimental */  
display: ruby-text-container;  /* experimental */

/* <display-box> (Mengatur sebuah elemen untuk ditampilkan atau tidak) */  
display: contents;  
display: none;  

/* <display-legacy> (CSS2 single-keyword syntax) */  
display: inline-block;  
display: inline-flex;  
display: inline-grid;  
display: inline-table;

/* Contoh menggunakan Two-value */  
display: block flow;  
display: inline flow;  
display: inline flow-root;  
display: block flex;  
display: inline flex;  
display: block grid;  
display: inline grid;  
display: block flow-root;  

/* Value global */  
display: inherit;  
display: initial;  
display: revert;  
display: unset;
```

Ada banyak sekali bukan? Maka dari itu disini kami tidak akan membahas semua *value* tersebut. Kami akan membahas value yang sering digunakan saja. Jika ingin mengetahui apakah *value* tersebut sudah didukung oleh browser apa saja kalian bisa lihat di [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/display#browser_compatibility).

### Inline

Elemen yang secara default memiliki `display: inline;`:

- `<span>`
- `<a>`
- `<img>`

Lebih lengkap bisa dilihat di [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements).

Sesuai namanya, `display: inline;` artinya memanjang ke samping, sehingga elemen ini akan memenuhi tempat yang ada di sampingnya dan jika tidak ada ruang lagi, maka elemen tersebut akan turun kebawah. Bingung? Coba kita lihat contoh yang telah saya buat di bawah ini.

Jika saya memiliki kode seperti ini:

```html
<span>Span merupakan salah satu elemen dengan display inline</span>
<span>Lorem ipsum dolor sit amet.</span>
<span>Consectetur adipisicing elit. Doloribus ducimus delectus ratione?</span>
```

Maka saya akan mendapat hasil seperti ini:

![Hasil display inline 1](https://i.ibb.co/LnrpKqF/Screenshot-38.png)

Terlihat dari hasil diatas, ketika tidak ada ruang lagi disamping, maka kalimat selanjutnya akan turun dan mengisi ruang dibawahnya. Jika masih belum paham, bisa lihat gambar dibawah ini:

![enter image description here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow/mdn-horizontal.png)

Perhatikan bahwa arah dari `inline` mengarah dari kiri ke kanan, atau menyamping.

Selanjutnya, elemen yang memiliki property  `display: inline;` juga hanya memiliki [lebar dan tinggi](https://github.com/bellshade/HTML-CSS/tree/main/CSS/012%20CSS%20Size) sesuai dengan konten yang ada pada elemen tersebut. Kita juga tidak dapat mengubah atau mengatur nilai [lebar dan tinggi](https://github.com/bellshade/HTML-CSS/tree/main/CSS/012%20CSS%20Size) dari elemen inline tersebut **kecuali** untuk elemen `<img>`. Bisa dilihat contoh di bawah ini.

```html
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis <span>cupiditate numquam</span> ipsum, doloribus architecto, praesentium, animi itaque eaque expedita eius.</p>

<style>
    span {
        border: 1px solid red;
    }
</style>
```

Jika saya menambahkan [border](https://github.com/bellshade/HTML-CSS/tree/main/CSS/008%20CSS%20Borders) pada sebuah elemen span yang secara default telah memiliki `display: inline;` seperti diatas, maka hasilnya akan seperti ini:

![Hasil display inline 2](https://i.ibb.co/cXLbRjk/Screenshot-39.png)

Terlihat bahwa elemen tersebut hanya memiliki  [lebar dan tinggi](https://github.com/bellshade/HTML-CSS/tree/main/CSS/012%20CSS%20Size) sesuai dengan isi kontennya, yakni `cupiditate numquam`. Dan jika saya mencoba menambahkan [lebar dan tinggi](https://github.com/bellshade/HTML-CSS/tree/main/CSS/012%20CSS%20Size) pada elemen `span` tersebut seperti dibawah ini:

```html
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis <span>cupiditate numquam</span> ipsum, doloribus architecto, praesentium, animi itaque eaque expedita eius.</p>

<style>
    span {
        border: 1px solid red;
        width: 200px;
        height: 200px;
    }
</style>
```

Maka hasilnya akan tetap sama seperti yang sebelumnya:

![Hasil display inline 2](https://i.ibb.co/cXLbRjk/Screenshot-39.png)

Elemen `inline` akan menerima [margin](https://github.com/bellshade/HTML-CSS/tree/main/CSS/010%20CSS%20Margin) dan [padding](https://github.com/bellshade/HTML-CSS/tree/main/CSS/011%20CSS%20Padding), tetapi elemen tersebut tetap berada inline seperti yang seharusnya. [Margin](https://github.com/bellshade/HTML-CSS/tree/main/CSS/010%20CSS%20Margin) dan [padding](https://github.com/bellshade/HTML-CSS/tree/main/CSS/011%20CSS%20Padding) hanya akan mendorong elemen lain menjauh secara horizontal, bukan vertikal. Perhatikan kode dibawah ini:

```html
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis <span>cupiditate numquam</span> ipsum, doloribus architecto, praesentium, animi itaque eaque expedita eius. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

<style>
    span {
        border: 1px solid red;
        padding: 1rem;
        margin: 1rem;
    }
</style>
```

Jika saya menjalankan kode tersebut, maka hasilnya akan seperti ini:

![Hasil display inline 3](https://i.ibb.co/gSzC90p/Screenshot-41.png)

Terlihat posisi `span` tersebut masih di tempat yang sama, hanya saja elemen lain terdorong menjauh oleh [Margin](https://github.com/bellshade/HTML-CSS/tree/main/CSS/010%20CSS%20Margin) dan [padding](https://github.com/bellshade/HTML-CSS/tree/main/CSS/011%20CSS%20Padding) yang telah diberikan pada elemen tersebut, tapi hanya secara horizontal.

### Block

Elemen yang secara default memiliki `display: block;`:

- `<div>`
- `<p>`
- `<form>`

Lebih lengkap bisa dilihat di [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements#elements).

Elemen yang memiliki properti `display: block;` selalu membuat blok baru setiap kali dipanggil. Contoh jika saya punya kode seperti ini:

```html
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officiis beatae reprehenderit, ullam minima, accusamus veniam repellendus laboriosam praesentium non dolorum deserunt molestias officia temporibus adipisci? Ipsum, ipsa doloribus! Doloribus.</p>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, deserunt?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia soluta consequatur adipisci ad nulla eum!</p>
```

Hasil yang saya dapatkan akan seperti ini:

![Hasil display inline 1](https://i.ibb.co/4KdQS5k/Screenshot-44.png)

Bisa dilihat bahwa setiap kita memanggil elemen yang memiliki `display: block;` dia akan selalu membuat baris baru, tidak seperti `display: inline;` yang akan selalu mengisi ruang kosong di samping elemen.

Secara default elemen ini akan membentang dari kiri ke kanan mengisi penuh [lebar](https://github.com/bellshade/HTML-CSS/tree/main/CSS/012%20CSS%20Size) dari elemen *parent*-nya meskipun isi kontennya tidak sampai memenuhi elemen tersebut. Sebagai contoh, saya menggunakan tag `<p>` seperti di bawah ini:

```html
<p>Hi! Aku adalah elemen block</p>

<style>
    p {
        background-color: violet;
    }
</style>
```

Hasil yang saya dapatkan seperti ini:

![Hasil display inline 2](https://i.ibb.co/gwNkW11/Screenshot-45.png)

Bisa dilihat diatas bahwa elemen `<p>` tersebut memiliki [lebar](https://github.com/bellshade/HTML-CSS/tree/main/CSS/012%20CSS%20Size) memenuhi elemen *parent*-nya yang dalam hal ini adalah elemen `<body>`, padahal isi kontennya hanya sedikit.

Contoh lain jika saya memasukkan elemen `<p>` tersebut ke dalam sebuah `<div>` yang mempunyai [lebar](https://github.com/bellshade/HTML-CSS/tree/main/CSS/012%20CSS%20Size) `30rem` seperti berikut ini:

```html
<div>
    <p>Hi! Aku adalah elemen block</p>
</div>

<style>
    div {
        width: 30rem;
    }

    p {
        background-color: violet;
    }
</style>
```

Maka hasil yang saya dapatkan adalah seperti ini:

![Hasil display inline 3](https://i.ibb.co/0jDqCb7/Screenshot-46.png)

Lebar elemen `<p>` tersebut akan memenuhi dan mengikuti [lebar](https://github.com/bellshade/HTML-CSS/tree/main/CSS/012%20CSS%20Size) dari `<div>` yang merupakan elemen *parent*-nya.

Selanjutnya kita dapat memanipulasi banyak hal pada elemen `block` ini, baik mengatur [lebar, tinggi](https://github.com/bellshade/HTML-CSS/tree/main/CSS/012%20CSS%20Size), [margin](https://github.com/bellshade/HTML-CSS/tree/main/CSS/010%20CSS%20Margin), dan [padding](https://github.com/bellshade/HTML-CSS/tree/main/CSS/011%20CSS%20Padding) sesuai dengan yang kita inginkan seperti berikut ini:

```html
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ea nemo velit aut praesentium.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, minima.</p>

<style>
    p {
        width: 50%;
        height: 200px;
        padding: 2rem;
        margin: 2rem;
        background-color: violet;
    }
</style>
```

Hasil:

![Hasil display inline 3](https://i.ibb.co/85QCcGB/Screenshot-47.png)

> [Margin](https://github.com/bellshade/HTML-CSS/tree/main/CSS/010%20CSS%20Margin) dan [padding](https://github.com/bellshade/HTML-CSS/tree/main/CSS/011%20CSS%20Padding) pada `display: block;` ini akan mendorong elemen
> lain menjauh secara horizontal dan juga vertikal.

### Inline-Block

Display yang memiliki *value* `inline-block` ini memiliki karakteristik gabungan dari dua *value* sebelumnya yaitu, `inline` dan `block`. Jadi, elemen ini akan tampil secara menyamping seperti `display: inline` namun tetap bisa diatur [lebar, tinggi](https://github.com/bellshade/HTML-CSS/tree/main/CSS/012%20CSS%20Size), [margin](https://github.com/bellshade/HTML-CSS/tree/main/CSS/010%20CSS%20Margin), dan [padding](https://github.com/bellshade/HTML-CSS/tree/main/CSS/011%20CSS%20Padding)nya seperti `display: block`. Perhatikan contoh dibawah ini, saya sudah menambahkan `display: inline-block;` pada contoh sebelumnya seperti ini:

```html
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis <span>cupiditate numquam</span> ipsum, doloribus architecto, praesentium, animi itaque eaque expedita eius. Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

<style>
    span {
        border: 1px solid red;
        display: inline-block;
        width: 200px;
        height: 200px;
    }
</style>
```

Dan hasil yang saya dapatkan seperti ini:

![Hasil display inline-block 1](https://i.ibb.co/qpVmDfQ/Screenshot-42.png)

Terlihat pada hasil diatas bahwa [lebar dan tinggi](https://github.com/bellshade/HTML-CSS/tree/main/CSS/012%20CSS%20Size) dari elemen `span` yang sebelumnya diabaikan sekarang telah berubah dan bisa diatur.

### None

Singkatnya, elemen yang memiliki `display: none;` ini tidak akan ditampilkan di browser, namun kode HTMLnya akan tetap ada. Hal ini tidak akan berakibat pada elemen-elemen lainnya.

### Table dan kawanannya

Sekarang ini sangat jarang sekali orang menggunakan `display: table;`, `display: table-row;`, `display: table-cell;`, atau display lainnya yang berhubungan dengan *table*, tapi setidaknya kalian harus tau bagaimana dan apa kegunaan dari display-display tersebut, karena sebelum ada float, flex, ataupun grid display ini sangat sering digunakan untuk mengatur layout.

Jadi, apa itu `display: table;` dan kawanannya? Sesuai namanya, display ini mengatur perilaku elemen menjadi seperti elemen `<table>`. Berikut ini beberapa *value* display yang memiliki kesamaan dengan elemen `<table>`:

- `display: table;` sama seperti elemen `<table>`.
- `display: table-caption;` sama seperti elemen `<caption>`.
- `display: table-column-group;` sama seperti elemen `<colgroup>`.
- `display: table-header-group;` sama seperti elemen `<thead>`.
- `display: table-footer-group;` sama seperti elemen `<tfoot>`.
- `display: table-row-group;` sama seperti elemen `<tbody>`.
- `display: table-cell;` sama seperti elemen `<td>`.
- `display: table-column;` sama seperti elemen `<col>`.
- `display: table-row;` sama seperti elemen `<tr>`.

Sebagai contoh, kita akan membuat tabel dengan dan tanpa menggunakan elemen `<table>`. Pertama-tama kita akan membuat tabel menggunakan elemen `<table>` seperti berikut ini:

```html
<table border="1">
    <thead>
        <tr>
            <th>Materi</th>
            <th>Dibuat oleh</th>
            <th>Tanggal</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>CSS Display</td>
            <td>Abi Noval Fauzi</td>
            <td>06 Februari 2022</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="3">Ini adalah tabel yang dibuat meggunakan elemen <code>&lt;table&gt;</code< /td>
        </tr>
    </tfoot>
</table>
```

Mudah saja ya, dan hasilnya seperti ini:

![Hasil display table 2](https://i.ibb.co/4gvTmkZ/Screenshot-48.png)

Selanjutnya, bagaimana cara kita membuat tabel tanpa menggunakan `<table>`? Pertama, kita buat struktur HTMLnya terlebih dahulu seperti ini:

```html
<div class="table">
    <div class="thead">
        <div class="tr">
            <div class="th">Materi</div>
            <div class="th">Dibuat Oleh</div>
            <div class="th">Tanggal</div>
        </div>
    </div>
    <div class="tbody">
        <div class="tr">
            <div class="td">CSS Display</div>
            <div class="td">Abi Noval Fauzi</div>
            <div class="td">06 Februari 2022</div>
        </div>
    </div>
    <div class="tfoot">
        <div class="tr">
            <div class="td colspan-3">
                Ini adalah tabel yang dibuat tanpa meggunakan elemen <code>&lt;table&gt;</code>
            </div>
        </div>
    </div>
</div>
```

Jika kita lihat hasilnya, maka kita akan mendapatkan halaman seperti ini:

![Hasil display table 2](https://i.ibb.co/CskSKMz/Screenshot-49.png)

Tidak terlihat seperti tabel bukan? Maka dari itu, sekarang kita akan bermain menggunakan `display: table;` dan kawanannya. Kita akan mulai dengan membuat `<div class="table">` tersebut memiliki karakteristik seperti `<table>` dengan cara menambahkan *style* `display: table;` seperti ini:

```css
.table {
    display: table;
}
```

Lalu kita akan membuat `section` tabel seperti elemen `<thead>`, `<tbody>`, dan `<tfoot>` menggunakan display *table group* seperti dibawah ini:

```css
.thead {
    display: table-header-group;
}

.tbody {
    display: table-row-group;
}

.tfoot {
    display: table-footer-group;
}
```

Jika kita lihat hasilnya, ternyata masih belum ada perubahan, itu karena kita belum mengatur kolom dan barisnya. Sekarang mari kita tambahkan itu.

Untuk membuat kolom (`<tr>`), kita akan menggunakan `display: table-row;` seperti dibawah ini:

```css
.tr {
    display: table-row;
}
```

Untuk membuat baris (`<td>` / `<th>`), kita akan menggunakan `display: table-cell;` seperti dibawah ini:

```css
.td, .th {
    display: table-cell;
}
```

Supaya `.th` kita mirip dengan elemen `<th>` milik `<table>`, maka kita harus menambahkan sedikit *style* tambahan seperti berikut ini:

```css
.th {
    font-weight: 700;
    text-align: center;
}
```

Sekarang, jika kita lihat hasilnya, maka kita sudah mendapatkan sebuah tabel tanpa harus menggunakan elemen `<table>`:

![Hasil display table 3](https://i.ibb.co/Ttv9rzD/Screenshot-50.png)

Tapi bukan seperti itu tabel yang kita inginkan bukan? Maka dari itu, kita akan lanjutkan lagi menambahkan beberapa *style* supaya mirip dengan tabel yang kita buat sebelumnya menggunakan `<table>`.

Sekarang kita tambahkan border dulu pada tabel dan kolom kita seperti ini:

```css
.table {
    display: table;
    border: 1px solid #2c2c2c;
    border-spacing: 2px;
}

.td,
.th {
    display: table-cell;
    border: 1px solid #2c2c2c;
}
```

Maka kita akan dapatkan hasil seperti ini:

![Hasil display table 4](https://i.ibb.co/6rcTNmm/Screenshot-51.png)

Sudah mirip dengan tabel yang sebelumnya kita buat bukan? Sekarang tinggal kita akali atribut `colspan="3"` yang terdapat di elemen `<td>` yang ada di dalam elemen `<tfoot>` karena di CSS tidak ada cara `elegan` untuk membuat `colspan`.

Sekarang kita coba pakai properti `column-span` seperti dibawah ini:

```css
.colspan-3 {
    column-span: 3;
}
```

Ternyata tidak ada perubahan, bagaimana kalau kita pakai *value* `all` seperti ini:

```css
.colspan-3 {
    column-span: all;
}
```

Ternyata tidak bisa juga, karena bukan seperti itu cara menggunakan `column-span`, jadi kita harus menggunakan cara lain. Bagaimana kalau kita ubah [lebar](https://github.com/bellshade/HTML-CSS/tree/main/CSS/012%20CSS%20Size) dari `<div class="td colspan-3">`nya sesuai dengan jumlah kolom?

```css
.colspan-3 {
    width: 300%;
}
```

Kita malah mendapatkan hasil seperti ini:

![Hasil display table 5](https://i.ibb.co/yFbqDzt/Screenshot-52.png)

Karena dia adalah kolom, jadi dia akan terus melebar di kolom yang sama, jadi mungkin kita harus ubah `display: table-cell;`nya menjadi `display: table;` supaya dia tidak menjadi kolom lagi.

```css
.colspan-3 {
    display: table;
    width: 300%;
}
```

Kita mendapatkan hasil seperti ini:

![Hasil display table 6](https://i.ibb.co/frNK8X0/Screenshot-53.png)

Sepertinya hampir sudah benar, hanya saja dia terlalu melebar jauh sampai keluar dari elemen *parent*-nya, itu dikarenakan `width: 300%;` mengkalkulasi [lebar](https://github.com/bellshade/HTML-CSS/tree/main/CSS/012%20CSS%20Size) kolom 1 (karena dia berada di kolom 1) lalu dikali 3 sedangkan kolom 2 dan kolom 3 memiliki [lebar](https://github.com/bellshade/HTML-CSS/tree/main/CSS/012%20CSS%20Size) lebih kecil dari kolom 1 yang menyebabkan lebarnya lebih besar daripada elemen elemen *parent*-nya dan akhirnya keluar.

Ada satu properti CSS bernama `table-layout` yang memiliki 2 *value*, yaitu `auto` dan `fixed`, properti ini digunakan untuk mengatur algoritma layout dari tabel yang kita buat. Secara default, `<table>` atau `display: table;` diatur agar memiliki `table-layout: auto;` dan sepertinya kita harus mengubahnya menjadi `table-layout: fixed;` agar [lebar](https://github.com/bellshade/HTML-CSS/tree/main/CSS/012%20CSS%20Size) dari setiap kolomnya menjadi `fixed` atau sama semua, tapi kita juga harus mendefinisikan [lebar](https://github.com/bellshade/HTML-CSS/tree/main/CSS/012%20CSS%20Size) dari tabelnya, kita akan menggunakan `width: 500px;` sebagai contoh seperti berikut ini:

```css
.table {
    display: table;
    border: 1px solid #2c2c2c;
    border-spacing: 2px;
    table-layout: fixed;
    width: 500px;
}
```

Kita akhirnya mendapatkan hasil seperti ini:

![Hasil display table 7](https://i.ibb.co/28S4Lc0/Screenshot-54.png)

Tapi sayangnya [lebar](https://github.com/bellshade/HTML-CSS/tree/main/CSS/012%20CSS%20Size) `.colspan-3` kita kurang sedikit [lebar](https://github.com/bellshade/HTML-CSS/tree/main/CSS/012%20CSS%20Size) dikarenakan kita disini menggunakan `border-spacing`, jadi kita harus menambahkan [lebar](https://github.com/bellshade/HTML-CSS/tree/main/CSS/012%20CSS%20Size) sebesar `2px` sama seperti *value* dari `border-spacing` kita, kita bisa memanfaatkan fungsi `calc()` di CSS seperti ini:

```css
.colspan-3 {
    display: table;
    width: calc(300% + 2px);
}
```

Dan akhirnya kita dapatkan hasil yang sesuai dengan keinginan kita:

![Hasil display table 8](https://i.ibb.co/vh2QnzH/Screenshot-55.png)

Sepertinya sampai sini kita sudah selesai, tapi nyatanya ada kesalahan kecil yang telah saya sampaikan sebelumnya, bahwa [lebar](https://github.com/bellshade/HTML-CSS/tree/main/CSS/012%20CSS%20Size) dari `.colspan-3` harus ditambah dengan jumlah yang sama seperti *value* dari `border-spacing` kita, ternyata tidak seperti itu, jika kita ubah `border-spacing` kita menjadi `4px` dan [lebar](https://github.com/bellshade/HTML-CSS/tree/main/CSS/012%20CSS%20Size) dari `.colspan-3`nya kita tambahkan dengan `4px`, sama seperti *value* dari `border-spacing` yang tadi kita ubah, maka kodenya akan menjadi seperti ini:

```css
.table {
    display: table;
    border: 1px solid #2c2c2c;
    border-spacing: 4px;
    table-layout: fixed;
    width: 500px;
}

.colspan-3 {
    display: table;
    width: calc(300% + 4px);
}
```

Setelah dilihat, ternyata hasilnya tidak sesuai dengan yang kita harapkan:

![Hasil display table 8](https://i.ibb.co/1J1Jxb4/Screenshot-56.png)

Masalah yang sama seperti sebelumnya datang kembali, kira-kira kenapa? Padahal kita sudah tambah lebarnya sama dengan `border-spacing`.

Setelah saya utak-atik kodenya, ternyata ada rumus agar [lebar](https://github.com/bellshade/HTML-CSS/tree/main/CSS/012%20CSS%20Size) `.colspan-3`nya pas, kita harus menjumlahkan 2 `border-width` kita yang ada di `.table` (`1px`) dan di `.td, .th` (`1px`) dalam kasus ini kita punya `2px`, lalu kita kurangi `border-spacing` kita (`4px`) dengan hasil tambah `border-width` tadi (`2px`), `4px - 2px = 2px`, jadi kita punya `2px` sekarang, lalu kita tambahkan lagi dengan jumlah `border-spacing` kita (`4px`), `2px + 4px = 6px`, nah hasil tersebutlah yang harusnya kita tambah kedalam [lebar](https://github.com/bellshade/HTML-CSS/tree/main/CSS/012%20CSS%20Size) dari `.colspan-3` itu. Jika kita coba, maka hasilnya akan sesuai dengan yang kita inginkan:

```css
.table {
    display: table;
    border: 1px solid #2c2c2c;
    border-spacing: 4px;
    table-layout: fixed;
    width: 500px;
}

.colspan-3 {
    display: table;
    width: calc(300% + 6px);
}
```

![Hasil display table 9](https://i.ibb.co/pWR8jHH/Screenshot-57.png)

Masih bingung? Coba baca ulang saja. Untuk mempermudah, kita sebenarnya bisa menggunakan custom property seperti ini:

```css
.table {
    --border-spacing: 4px;
    --border-width: 1px;
    display: table;
    table-layout: fixed;
    border: var(--border-width) solid #2c2c2c;
    border-spacing: var(--border-spacing);
    width: 500px;
}

.thead {
    display: table-header-group;
}

.tbody {
    display: table-row-group;
}

.tfoot {
    display: table-footer-group;
}

.tr {
    display: table-row;
}

.td,
.th {
    display: table-cell;
    border: var(--border-width) solid #2c2c2c;
}

.th {
    font-weight: 700;
    text-align: center;
}

.colspan-3 {
    display: table;
    width: calc(300% + (var(--border-spacing) - (var(--border-width) * 2) + var(--border-spacing)));
}
```

Jadi kita tinggal ubah variabel `--border-spacing` dan `--border-width` saja, tanpa perlu pusing-pusing menghitung ulang semuanya. Jika masih belum mengerti custom property atau variabel dalam CSS, bisa membaca materi [053 CSS Custom Property](https://github.com/bellshade/HTML-CSS/tree/main/CSS/053%20CSS%20Custom%20Property).

Ribet bukan? Untuk sekarang sepertinya kurang direkomendasikan menggunakan display *table* ini, untuk mengatur layout sudah ada [flexbox](https://github.com/bellshade/HTML-CSS/tree/main/CSS/056%20CSS%20Flexbox) dan [grid](https://github.com/bellshade/HTML-CSS/tree/main/CSS/057%20CSS%20Grid) dan untuk membuat tabel lebih baik menggunakan `<table>` saja.

### Flow-Root

Display ini mungkin akan susah dimengerti oleh sebagian besar pemula termasuk saya. Secara singkat, `display: flow-root;` ini bisa menyelesaikan masalah penggunaan [float](https://github.com/bellshade/HTML-CSS/tree/main/CSS/027%20CSS%20Float) yang selama ini harus menggunakan `clearfix` untuk menyelesaikannya. Misalnya saya punya masalah [float](https://github.com/bellshade/HTML-CSS/tree/main/CSS/027%20CSS%20Float) seperti ini:

```html
<div>
    <img src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80" width="200">
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis beatae eum veritatis consequatur amet inventore facilis quae unde accusantium.
    </p>
</div>
<br>
<div>
    <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit ducimus nisi reprehenderit sit tenetur aperiam dolorem pariatur quibusdam molestias vitae necessitatibus qui ratione magni, ullam tempore fugiat atque nobis error!
    </p>
</div>

<style>
    div {
        padding: 1rem;
        background-color: pink;
    }
    
    img {
        float: left;
    }
</style>
```

![Hasil display flow-root 1](https://i.ibb.co/N1d08dp/Screenshot-58.png)

Terlihat kalau gambar yang telah diberi `float: left;` tersebut mengambang dan tidak mengisi elemen *parent*-nya. Kebanyakan orang akan menggunakan *clearfix hack* untuk menyelesaikan masalah ini, tapi sekarang dengan adanya `display: flow-root;`, kita bisa saja langsung menyelesaikannya tanpa perlu ribet menggunakan *clearfix*.

Kita coba tambahkan `display: flow-root;` pada div kita:

```css
div {
    padding: 1rem;
    background-color: pink;
    display: flow-root;
}
```

Maka masalah tersebut selesai dengan cepat dan mudah:

![Hasil display flow-root 2](https://i.ibb.co/16CCtn1/Screenshot-59.png)

### Flexbox

Dikarenakan materi tentang [flexbox](https://github.com/bellshade/HTML-CSS/tree/main/CSS/056%20CSS%20Flexbox) atau `display: flex;` sendiri sangatlah banyak, jadi kami memisahkan materi tersebut menjadi materi tersendiri, kalian bisa baca materi [056 CSS Flexbox](https://github.com/bellshade/HTML-CSS/tree/main/CSS/056%20CSS%20Flexbox) untuk mengetahui cara penggunaan `display: flex;`

### Grid

Dikarenakan materi tentang `display: grid;` sendiri sangatlah banyak, jadi kami memisahkan materi tersebut menjadi materi tersendiri, kalian bisa baca materi [057 CSS Grid](https://github.com/bellshade/HTML-CSS/tree/main/CSS/057%20CSS%20Grid) untuk mengetahui cara penggunaan `display: grid;`

## Kesimpulan

Masih banyak sekali *value* display yang belum kita bahas, bukan karena tidak mau, tapi karena keterbatasan informasi yang didapat dan kemungkinan untuk saat ini materi tersebut belum terlalu Penting. Tapi dari materi yang sudah dibahas diatas, saya rasa cukup untuk memahami apa itu display di CSS. Mungkin di lain waktu saya akan tambah materinya lagi.

### Referensi

Saya tidak akan bisa membuat materi ini tanpa membaca referensi-referensi ini:

- [https://sixv.com/cascading-style-sheets/css-display-inline-block-dan-inline-block/](https://sixv.com/cascading-style-sheets/css-display-inline-block-dan-inline-block/)
- [https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)
- [https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements)
- [https://medium.com/@elelvyra/learn-css-display-property-1-9ddc9e5f3fb0](https://medium.com/@elelvyra/learn-css-display-property-1-9ddc9e5f3fb0)
- [https://css-tricks.com/almanac/properties/d/display/](https://css-tricks.com/almanac/properties/d/display/)
- [https://developer.mozilla.org/en-US/docs/Web/CSS/display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
- [https://www.freecodecamp.org/news/the-css-display-property-display-none-display-table-inline-block-and-more/](https://www.freecodecamp.org/news/the-css-display-property-display-none-display-table-inline-block-and-more/)
- [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
- [https://stackoverflow.com/questions/2403990/html-colspan-in-css](https://stackoverflow.com/questions/2403990/html-colspan-in-css)
- [https://css-tricks.com/almanac/properties/t/table-layout/](https://css-tricks.com/almanac/properties/t/table-layout/)
