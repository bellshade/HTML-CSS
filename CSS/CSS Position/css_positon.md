# CSS Position Property
### Apa itu CSS Position Property

CSS Properti posisi menentukan jenis metode penentuan posisi yang digunakan untuk elemen (static, relative, fixed, absolute atau sticky). ```CSS Properti posisi``` mengatur bagaimana elemen diposisikan dalam dokumen. Properti **atas, kanan, bawah, dan kiri** menentukan lokasi akhir elemen yang diposisikan.

**CSS Position memiliki beberapa properti yaitu:**
- ```relative``` 
- ```static```
- ```fixed```
- ```absolute```
- ```sticky```

Elemen kemudian diposisikan menggunakan properti atas, bawah, kiri, dan kanan. Namun, properti ini tidak akan berfungsi kecuali properti posisi disetel terlebih dahulu.

### Position Relative :
 
 Sebuah elemen dengan posisi: relatif; diposisikan relatif terhadap posisi normalnya.
 
 Elemen diposisikan sesuai dengan aliran normal dokumen, dan kemudian diimbangi relatif terhadap dirinya sendiri berdasarkan nilai atas, kanan, bawah, dan kiri. Offset tidak mempengaruhi posisi elemen lainnya; dengan demikian, ruang yang diberikan untuk elemen dalam tata letak halaman sama seperti jika posisinya statis.
 ##### Contoh
 **HTML**
```html
<div class="box" id="Satu">1</div>
<div class="box" id="Dua">2</div>
<div class="box" id="Tiga">3</div>
```
**CSS**
```css
* {
  box-sizing: border-box;
}

.box {
  display: inline-block;
  width: 100px;
  height: 100px;
  background: red;
  color: white;
}

#Dua {
  position: relative;
  top: 20px;
  left: 20px;
  background: blue;
}
```

### Position Absolute :
Sebuah elemen dengan ```position: absolute``` diposisikan relatif terhadap leluhur yang diposisikan terdekat (bukan diposisikan relatif terhadap viewport, seperti tetap).

Namun; jika elemen yang diposisikan absolut tidak memiliki leluhur yang diposisikan, elemen tersebut menggunakan badan dokumen, dan bergerak bersama dengan pengguliran halaman.
##### Contoh

 **HTML**
```html
<div class="box" id="Satu">1</div>
<div class="box" id="Dua">2</div>
<div class="box" id="Tiga">3</div>
```
**CSS**
```css
* {
  box-sizing: border-box;
}

.box {
  display: inline-block;
  width: 100px;
  height: 100px;
  background: red;
  color: white;
}

#Dua {
  position: absolute;
  top: 2rem;
  left: 2rem;
  background: green;
}
```
### Position Fixed :
Sebuah elemen dengan ```position: fixed;``` diposisikan relatif terhadap viewport, yang berarti selalu tetap di tempat yang sama bahkan jika halaman di-scroll. Properti atas, kanan, bawah, dan kiri digunakan untuk memposisikan elemen.

Elemen tetap tidak meninggalkan celah di halaman tempat elemen tersebut biasanya berada.
##### Contoh
 **HTML**
```html
<div class="outer">
  <p>
    Tidak seperti anggapan banyak orang, Lorem Ipsum bukanlah teks-teks yang diacak. Ia berakar dari sebuah naskah sastra latin klasik dari era 45 sebelum masehi, hingga bisa dipastikan usianya telah mencapai lebih dari 2000 tahun. Richard McClintock, seorang professor Bahasa Latin dari Hampden-Sidney College di Virginia, mencoba mencari makna salah satu kata latin yang dianggap paling tidak jelas, yakni consectetur, yang diambil dari salah satu bagian Lorem Ipsum. Setelah ia mencari maknanya di di literatur klasik, ia mendapatkan sebuah sumber yang tidak bisa diragukan. Lorem Ipsum berasal dari bagian 1.10.32 dan 1.10.33 dari naskah "de Finibus Bonorum et Malorum" (Sisi Ekstrim dari Kebaikan dan Kejahatan) karya Cicero, yang ditulis pada tahun 45 sebelum masehi. BUku ini adalah risalah dari teori etika yang sangat terkenal pada masa Renaissance. Baris pertama dari Lorem Ipsum, "Lorem ipsum dolor sit amet..", berasal dari sebuah baris di bagian 1.10.32.
    Bagian standar dari teks Lorem Ipsum yang digunakan sejak tahun 1500an kini di reproduksi kembali di bawah ini untuk mereka yang tertarik. Bagian 1.10.32 dan 1.10.33 dari "de Finibus Bonorum et Malorum" karya Cicero juga di reproduksi persis seperti bentuk aslinya, diikuti oleh versi bahasa Inggris yang berasal dari terjemahan tahun 1914 oleh H. Rackham.
    Ada banyak variasi tulisan Lorem Ipsum yang tersedia, tapi kebanyakan sudah mengalami perubahan bentuk, entah karena unsur humor atau kalimat yang diacak hingga nampak sangat tidak masuk akal. Jika anda ingin menggunakan tulisan Lorem Ipsum, anda harus yakin tidak ada bagian yang memalukan yang tersembunyi di tengah naskah tersebut. Semua generator Lorem Ipsum di internet cenderung untuk mengulang bagian-bagian tertentu. Karena itu inilah generator pertama yang sebenarnya di internet. Ia menggunakan kamus perbendaharaan yang terdiri dari 200 kata Latin, yang digabung dengan banyak contoh struktur kalimat untuk menghasilkan Lorem Ipsun yang nampak masuk akal. Karena itu Lorem Ipsun yang dihasilkan akan selalu bebas dari pengulangan, unsur humor yang sengaja dimasukkan, kata yang tidak sesuai dengan karakteristiknya dan lain sebagainya.
  </p>
  <div class="box" id="satu">1</div>
</div>
```
**CSS**
```css
* {
  box-sizing: border-box;
}

.box {
  width: 100px;
  height: 100px;
  background: red;
  color: white;
}

#satu {
  position: fixed;
  top: 80px;
  left: 10px;
  background: purple;
}

.outer {
  width: 500px;
  height: 300px;
  overflow: scroll;
  padding-left: 150px;
}
```
### Position Sticky :
Elemen dengan ```position: sticky;``` diposisikan berdasarkan posisi gulir pengguna.

Elemen lengket beralih antara ```relative``` dan ```fixed```, tergantung pada posisi gulir. Itu diposisikan relatif sampai posisi offset yang diberikan terpenuhi di viewport - lalu "menempel" di tempatnya (seperti position:fixed).
##### Contoh
 **HTML**
```html
<dl>
  <div>
    <dt>A</dt>
    <dd>Andrew W.K.</dd>
    <dd>Apparat</dd>
    <dd>Arcade Fire</dd>
    <dd>At The Drive-In</dd>
    <dd>Aziz Ansari</dd>
  </div>
  <div>
    <dt>C</dt>
    <dd>Chromeo</dd>
    <dd>Common</dd>
    <dd>Converge</dd>
    <dd>Crystal Castles</dd>
    <dd>Cursive</dd>
  </div>
  <div>
    <dt>E</dt>
    <dd>Explosions In The Sky</dd>
  </div>
  <div>
    <dt>T</dt>
    <dd>Ted Leo &amp; The Pharmacists</dd>
    <dd>T-Pain</dd>
    <dd>Thrice</dd>
    <dd>TV On The Radio</dd>
    <dd>Two Gallants</dd>
  </div>
</dl>

```
**CSS**
```css
* {
  box-sizing: border-box;
}

dl > div {
  background: #FFF;
  padding: 24px 0 0 0;
}

dt {
  background: #B8C1C8;
  border-bottom: 1px solid #989EA4;
  border-top: 1px solid #717D85;
  color: #FFF;
  font: bold 18px/21px Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 2px 0 0 12px;
  position: -webkit-sticky;
  position: sticky;
  top: -1px;
}

dd {
  font: bold 20px/45px Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0 0 0 12px;
  white-space: nowrap;
}

dd + dd {
  border-top: 1px solid #CCC;
}
```

### Position Static:
Elemen HTML diposisikan statis secara default.

Elemen posisi statis tidak terpengaruh oleh properti atas, bawah, kiri, dan kanan.

Elemen dengan ```position: static;``` tidak diposisikan dengan cara khusus apa pun itu selalu diposisikan sesuai dengan aliran normal halaman:
##### Contoh
 **HTML**
```html
<div class="kotak">1</div>
```
**CSS**
```css
.kotak{
  background: red;
  position: static;
}
```
