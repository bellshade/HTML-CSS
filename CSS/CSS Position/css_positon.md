# CSS Position Property

### Apa itu CSS Position Property

CSS Properti posisi menentukan jenis metode penentuan posisi yang digunakan untuk elemen (static, relative, fixed, absolute atau sticky). `CSS Properti posisi` mengatur bagaimana elemen diposisikan dalam dokumen. Properti **atas, kanan, bawah, dan kiri** menentukan lokasi akhir elemen yang diposisikan.

**CSS Position memiliki beberapa properti yaitu:**

- `relative`
- `static`
- `fixed`
- `absolute`
- `sticky`

Elemen kemudian diposisikan menggunakan properti atas, bawah, kiri, dan kanan. Namun, properti ini tidak akan berfungsi kecuali properti posisi disetel terlebih dahulu.

### Position Relative :

Sebuah elemen dengan posisi: relatif; diposisikan relatif terhadap posisi normalnya.

Elemen diposisikan sesuai dengan aliran normal dokumen, dan kemudian diimbangi relatif terhadap dirinya sendiri berdasarkan nilai atas, kanan, bawah, dan kiri. Offset tidak mempengaruhi posisi elemen lainnya, dengan demikian, ruang yang diberikan untuk elemen dalam tata letak halaman sama seperti jika posisinya statis.

#### Contoh

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

Sebuah elemen dengan `position: absolute` diposisikan relatif terhadap leluhur yang diposisikan terdekat (bukan diposisikan relatif terhadap viewport, seperti tetap).

Namun, jika elemen yang diposisikan absolut tidak memiliki leluhur yang diposisikan, elemen tersebut menggunakan badan dokumen, dan bergerak bersama dengan pengguliran halaman.

#### Contoh

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

Sebuah elemen dengan `position: fixed;` diposisikan relatif terhadap viewport, yang berarti selalu tetap di tempat yang sama bahkan jika halaman di-scroll. Properti atas, kanan, bawah, dan kiri digunakan untuk memposisikan elemen.

Elemen tetap tidak meninggalkan celah di halaman tempat elemen tersebut biasanya berada.

#### Contoh

**HTML**

```html
<div class="outer">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor leo
    vel urna imperdiet consectetur. Nulla tempor, leo nec feugiat tincidunt, ex
    nulla auctor libero, et pulvinar nulla urna id dolor. Nullam vitae ipsum in
    lectus aliquet auctor. Nulla non arcu vel massa condimentum rhoncus sed ut
    tellus. Vestibulum tellus lacus, eleifend sit amet massa eget, vestibulum
    laoreet est. Nullam tempor sodales dolor, eget blandit nisl volutpat in.
    Nullam tristique maximus ex at lobortis. Suspendisse fringilla nunc sed
    tellus maximus vestibulum. Pellentesque suscipit et velit in suscipit. Proin
    laoreet varius nisl at faucibus.
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

Elemen dengan `position: sticky;` diposisikan berdasarkan posisi gulir pengguna.

Elemen lengket beralih antara `relative` dan `fixed`, tergantung pada posisi gulir. Itu diposisikan relatif sampai posisi offset yang diberikan terpenuhi di viewport - lalu "menempel" di tempatnya (seperti position:fixed).

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
  background: #fff;
  padding: 24px 0 0 0;
}

dt {
  background: #b8c1c8;
  border-bottom: 1px solid #989ea4;
  border-top: 1px solid #717d85;
  color: #fff;
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
  border-top: 1px solid #ccc;
}
```

### Position Static:

Elemen HTML diposisikan statis secara default.

Elemen posisi statis tidak terpengaruh oleh properti atas, bawah, kiri, dan kanan.

Elemen dengan `position: static;` tidak diposisikan dengan cara khusus apa pun itu selalu diposisikan sesuai dengan aliran normal halaman:

##### Contoh

**HTML**

```html
<div class="kotak">1</div>
```

**CSS**

```css
.kotak {
  background: red;
  position: static;
}
```
