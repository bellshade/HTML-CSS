# HTML Link

Header tautan HTTP menyediakan sarana untuk membuat serial satu atau beberapa tautan di header HTTP. Secara semantik setara dengan elemen <link> HTML.

### Syntax

```html
Link: <uri-reference>; param1=value1; param2="value2"</uri-reference>
```

<uri-referensi>
Referensi URI, harus diapit di antara < dan >.

### Parameter

# HTML Link

HTML Link adalah _hyperlink_. Kamu bisa klik link ini dan akan berpindah ke dokumen lain. Saat Anda menggerakkan mouse di atas tautan, panah mouse akan berubah menjadi tangan kecil.

## Sintaks

Tag HTML `<a>` mendefinisikan _hyperlink_ yang memiliki sintaks seperti berikut ini:

```html
<a href="url">Teks tautan</a>
```

Atribut terpenting dari elemen `<a>` adalah atribut `href`, yang menunjukkan tujuan tautan. _Teks tautan_ adalah bagian yang akan terlihat oleh pembaca. Mengklik _teks tautan_, akan mengirim pembaca ke alamat URL yang ditentukan.

Contoh di bawah ini menunjukkan cara membuat link ke website Bellshade:

```html
<a href="https://bellshade.org/">Visit Bellshade!</a>
```

Secara default, tautan akan muncul sebagai berikut di semua browser:

- Tautan yang belum dikunjungi digarisbawahi dan berwarna biru.
- Tautan yang telah dikunjungi digarisbawahi dan berwarna ungu.
- Tautan aktif digarisbawahi dan merah.

> Tip: Tautan tentu saja dapat ditata dengan CSS, untuk mendapatkan tampilan lain!

### Atribut Target

Secara default, halaman tertaut akan ditampilkan di jendela browser saat ini. Untuk mengubahnya, Anda harus menentukan target lain untuk tautan tersebut. Atribut `target` menentukan tempat untuk membuka dokumen tertaut. Atribut `target` dapat memiliki salah satu dari nilai berikut:

- `_self` - Bawaan. Membuka dokumen di jendela/tab yang sama dengan yang diklik.
- `_blank` untuk membuka link dokumen ke halaman atau tab browser yang baru.
- `_parent` - Membuka dokumen dalam bingkai induk.
- `_top` - Membuka dokumen di seluruh badan jendela.

Gunakan target `_blank` untuk membuka link dokumen di halaman browser baru atau di tab.

Contoh:

```html
<a href="https://bellshade.org/" target="_blank">Visit Bellshade!</a>
```

### URL Absolut vs URL Relatif

Kedua contoh di atas menggunakan **URL absolut** (alamat web lengkap) di atribut `href`. Tautan lokal (tautan ke halaman dalam situs web yang sama) ditentukan dengan **URL relatif** (tanpa bagian "https://www"):

Contoh:

```html
<h2>URL Absolut</h2>
<p><a href="https://bellshade.org/">Bellshade</a></p>
<p><a href="https://www.google.com/">Google</a></p>

<h2>URL Relatif</h2>
<p><a href="html_images.asp">HTML Images</a></p>
<p><a href="/css/default.asp">CSS Tutorial</a></p>
```

### Menggunakan Gambar Sebagai Link

Untuk menggunakan gambar sebagai Link, cukup ketik tag `<img>` di dalam tag `<a>` :

Contoh:

```html
<a href="default.asp">
  <img src="smiley.gif" alt="HTML tutorial" style="width:42px; height:42px;" />
</a>
```

### Link ke Alamat Email

Gunakan `mailto:` di dalam atribut `href` untuk membuat tautan yang membuka program email pengguna (agar mereka dapat mengirim email baru):

Contoh:

```html
<a href="mailto:someone@example.com">Send email</a>
```

### Tombol sebagai Link

Untuk menggunakan tombol HTML sebagai link, Anda harus membuat kode Javascript terlebih dahulu. JavaScript memungkinkan Anda untuk menentukan apa yang terjadi pada _event_ tertentu, contohnya saat mengklik tombol.

Contoh :

```html
<button onclick="document.location='default.asp'">HTML Tutorial</button>
```

### Link Title

Atribut `title` menentukan informasi tambahan tentang suatu elemen. Informasi ini paling sering ditampilkan sebagai teks _tooltip_ ketika mouse bergerak di atas elemen.

Contoh:

```html
<a href="https://bellshade.org/html/" title="Go to Bellshade HTML section">Visit our HTML Tutorial</a>
```

## Referensi

- [W3School](https://www.w3schools.com/html/html_links.asp)
