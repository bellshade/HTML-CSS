# HTML Link

Dalam HTML, tipe tautan menunjukkan hubungan antara dua dokumen, di mana satu tautan ke dokumen lain menggunakan elemen <a>, <area>, <form>, atau <link>.
  
### Daftar jenis tautan yang ditentukan dan signifikansinya dalam HTML

|  Tipe Link  |                                Deskripsi                                  |  Elemen yang diijinkan | Elemen yang tidak diizinkan |
|:-----------:|:-------------------------------------------------------------------------:|:----------------------:|:---------------------------:|  
|  Alternate  |  - Jika elemennya adalah <link> dan atribut rel juga berisi tipe          |        <a>             |          <form>             |
|             |    stylesheet, link akan mendefinisikan style sheet alternatif; dalam hal |        <area>          |                             |
|             |    ini atribut judul harus ada dan bukan string kosong.                   |        <link>          |                             |
|             |                                                                           |                        |                             |
|             |  - Jika jenisnya diatur ke application/rss+xml atau application/atom+xml, |                        |                             |
|             |    tautan akan menentukan umpan sindikasi. Yang pertama ditentukan pada   |                        |                             |
|             |     halaman adalah default.                                               |                        |                             |
|             |  - Jika tidak, tautan menentukan halaman alternatif, dari salah satu jenis|                        |                             | 
|             |    berikut:                                                               |                        |                             |
|             |      o untuk media lain, seperti perangkat genggam                        |                        |                             |
|             |        (jika atribut media disetel)                                       |                        |                             |
|             |      o dalam bahasa lain (jika atribut hreflang disetel),                 |                        |                             |
|             |      o dalam format lain, seperti PDF (jika atribut type diatur)          |                        |                             |
|             |      o kombinasi dari ini                                                 |                        |                             |
|  Archives   |  Mendefinisikan hyperlink ke dokumen yang berisi link arsip ke dokumen    |         <a>            |            <form>           |
|             |  ini. Misalnya, entri blog dapat ditautkan ke halaman indeks bulanan      |         <area>         |                             |
|             |  dengan cara ini.                                                         |         <link>         |                             |
|             |                                                                           |                        |                             |
|             |  Catatan: Meskipun dikenali, arsip tunggal tidak benar dan harus          |                        |                             | 
|             |  dihindari.                                                               |                        |                             |
|   Author    |  Mendefinisikan hyperlink ke halaman yang menjelaskan penulis atau        |          <a>           |            <form>           |
|             |  menyediakan cara untuk menghubungi penulis.                              |          <area>        |                             |
|             |                                                                           |          <link>        |                             |
|             |  Catatan: Ini mungkin hyperlink mailto:, tetapi ini tidak disarankan di   |                        |                             |
|             |  halaman publik karena pemanen robot akan dengan cepat menyebabkan banyak |                        |                             |
|             |  spam yang dikirim ke alamat tersebut. Dalam hal ini, lebih baik mengarah |                        |                             |
|             |  ke halaman yang berisi formulir kontak.                                  |                        |                             |
  
  
### Syntax

```html
Link: <uri-reference>; param1=value1; param2="value2"</uri-reference>
```

<uri-referensi>
Referensi URI, harus diapit di antara < dan >.

### Parameter

Tajuk tautan berisi parameter, yang dipisahkan dengan ; dan setara dengan atribut elemen <link>.

### Contoh kode

URI (absolut atau relatif) harus diapit di antara < dan >

**HTML**

```html
Link: <https://example.com>; rel="preconnect" True. Link: https://bad.example; rel="preconnect" False
```

Menentukan beberapa tautan
Anda dapat menentukan beberapa tautan yang dipisahkan dengan koma, misalnya:

**HTML**

```html
Link: <https://one.example.com>; rel="preconnect", <https://two.example.com>; rel="preconnect", <https://three.example.com>; rel="preconnect"
```

Referensi: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link
