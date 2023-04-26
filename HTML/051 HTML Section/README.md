# HTML `<section>` Element

Tag `<section></section>` mendefinisikan section atau suatu bagian di dalam dokumen.

Tag `<section>` merupakan salah satu tag yang semantik sehingga, lebih mudah dibaca oleh mesin pencari atau user.

Menurut dokumentasi W3C, Section merupakan pengelompokan tematik konten, biasanya di dalam section terdapat judul (h1...h6).

Lantas bagaimana jika di dalam tag `<section>` tidak terdapat tag headings `(h1..h6)` atau tag paragraphs `(<p>)`?

Mesin pencari atau user sulit untuk memahami topik atau tujuan dari bagian tersebut. Hal ini dapat mengakibatkan kesulitan bagi pengguna untuk menavigasi halaman web Anda, dan mesin pencari mungkin tidak dapat mengindeks konten Anda dengan baik.

Biasanya tag `<section>` digunakan pada :

-   Chapters / bagian utama dari sebuah buku atau artikel
-   Introduction / perkenalan / pendahuluan
-   News items / bagian dari info berita
-   Contact information / informasi kontak / kontak personal

**Contoh penggunaannya sebagai berikut**

```html
<section>
    <h2>Judul</h2>
    <div>
        <h3>Sub Judul</h3>
        <p>Ini paragraf 1</p>
        <p>Ini paragraf 2</p>
    </div>
</section>
```

Didalam section kita bisa gunakan tag `div`. Biasanya untuk memisahkan bagian lain pada section. Pada contoh dibawah ini masih dalam kategori semantic, meskipun dikombinasikan dengan tag `div`.

**Contohnya**

```html
<section>
    <div>
        <h2>Judul</h2>
        <p>ini budi</p>
    </div>
</section>
```

Tag `<section>` memiliki default css yakni :

```css
display: block;
```
