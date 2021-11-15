# HTML Link

Tautan HTML adalah hyperlink.  
  
Kamu bisa klik link ini dan akan berpindah ke dokumen lain.  

Saat Anda menggerakkan mouse di atas tautan, panah mouse akan berubah menjadi tangan kecil.
  
### HTML Links - Syntax

Tag HTML <a> mendefinisikan hyperlink. Ini memiliki sintaks berikut:

  **HTML**

```html

<a href="url">link text</a>

```
  
Atribut terpenting dari elemen <a> adalah atribut href, yang menunjukkan tujuan tautan.
  
Teks tautan adalah bagian yang akan terlihat oleh pembaca.
  
Mengklik teks tautan, akan mengirim pembaca ke alamat URL yang ditentukan.
  
### Contoh
Contoh ini menunjukkan cara membuat link ke Bellshade:
  
  **HTML**

```html

 <a href="https://bellshade.org/">Visit Bellshade!</a> 

```  

Secara default, tautan akan muncul sebagai berikut di semua browser:

- Tautan yang belum dikunjungi digarisbawahi dan berwarna biru
- Tautan yang dikunjungi digarisbawahi dan berwarna ungu
- Tautan aktif digarisbawahi dan merah

Tip: Tautan tentu saja dapat ditata dengan CSS, untuk mendapatkan tampilan lain!

### HTML Links - Target Atribut

Secara default, halaman tertaut akan ditampilkan di jendela browser saat ini. Untuk mengubahnya, Anda harus menentukan target lain untuk tautan tersebut.
  
Atribut target menentukan tempat untuk membuka dokumen tertaut.

Atribut target dapat memiliki salah satu dari nilai berikut:

- _self - Bawaan. Membuka dokumen di jendela/tab yang sama dengan yang diklik
- _blank - Membuka dokumen di jendela atau tab baru
- _parent - Membuka dokumen dalam bingkai induk
- _top - Membuka dokumen di seluruh badan jendela
  
### Contoh
Gunakan target "_blank" untuk membuka link dokumen di halaman browser baru atau di tab:
  
  **HTML**

```html

  <a href="https://bellshade.org/" target="_blank">Visit Bellshade!</a>  

```
  
### URL Absolut vs URL Relatif
  
Kedua contoh di atas menggunakan URL absolut (alamat web lengkap) di atribut href.
  
Tautan lokal (tautan ke halaman dalam situs web yang sama) ditentukan dengan URL relatif (tanpa bagian "https://www"):  

### Contoh
  
**HTML**

```html

<h2>Absolute URLs</h2>
<p><a href="https://bellshade.org/">Bellshade</a></p>
<p><a href="https://www.google.com/">Google</a></p>

<h2>Relative URLs</h2>
<p><a href="html_images.asp">HTML Images</a></p>
<p><a href="/css/default.asp">CSS Tutorial</a></p> 

``` 

### HTML Links - Menggunakan Gambar sebagai Link
  
Untuk menggunakan gambar sebagai Link, cukup ketik tag <img> didalam tag <a> :
  
### Contoh
  
**HTML**

```html

 <a href="default.asp">
<img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;">
</a> 

``` 
  
### HTML Links - Link ke Alamat Email
  
Gunakan mailto: di dalam atribut href untuk membuat tautan yang membuka program email pengguna (agar mereka dapat mengirim email baru):
  
### Contoh
  
**HTML**

```html

 <a href="mailto:someone@example.com">Send email</a> 

```
  
### HTML Links - Tombol sebagai Link
  
Untuk menggunakan Tombol HTML sebagai link, Anda harus membuat kode Javascript terlebih dahulu.
  
JavaScript memungkinkan Anda untuk menentukan apa yang terjadi pada peristiwa tertentu, seperti mengklik tombol:

### Contoh
  
**HTML**

```html

 <button onclick="document.location='default.asp'">HTML Tutorial</button>  

```
  
### HTML Links - Link Judul
  
Atribut judul menentukan informasi tambahan tentang suatu elemen. Informasi ini paling sering ditampilkan sebagai teks tooltip ketika mouse bergerak di atas elemen.
  
### Contoh
  
**HTML**

```html

 <a href="https://bellshade.org/html/" title="Go to Bellshade HTML section">Visit our HTML Tutorial</a>  

```    
Referensi: https://www.w3schools.com/html/html_links.asp
