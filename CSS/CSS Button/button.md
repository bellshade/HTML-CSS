## CSS Button

### Apa itu CSS Button?

CSS button adalah sebuah property CSS, yang dimana berfungsi untuk membuat desain tombol , dan bisa untuk desain tag button pada html.

### Penerapan CSS Button

Note : ``gunakan class "button" pada html.`` jika ingin diterapkan contoh css dibawah.
Cara membuat tombol (button) pada website menjadi lebih menarik :

- Membuat button dan warna button

Gunakan ``background-color`` pada pewarnaan button.

Contoh :
```css
.button{
    background-color: black;
  }
```

jika ingin button terlihat menjadi berbentuk kotak gunakan css berikut :

```css
.button {
    background-color: black;
    display: inline-block;
    font-size: 14px;
    margin: 6px 3px;
    /*color dibawah digunakan untuk warna pada teks di button*/
    color: white;
    padding: 12px 28px;
    text-align: center;
    text-decoration: none;
  }
```
Tampilan yang dihasilkan : 

![button1](https://user-images.githubusercontent.com/89055857/137708655-381a7ec2-ec0a-4fee-a847-7ccf371f7e5f.PNG)

- Jika ingin button ada lengkungan pada sudutnya

Gunakan ``border-radius``, properti pada css yang digunakan untuk menambahkan lengkungan pada setiap sudut di suatu elemen.

Contoh :
```css
.button {
    background-color: black;
    display: inline-block;
    font-size: 14px;
    margin: 6px 3px;
    /*color dibawah digunakan untuk warna pada teks di button*/
    color: white;
    padding: 12px 28px;
    text-align: center;
    text-decoration: none;
    /*border-radius*/
    border-radius: 20px;
  }
```
Tampilan yang dihasilkan : 

![Button2](https://user-images.githubusercontent.com/89055857/137708790-865d02d4-1e3b-44f6-8429-828465988132.PNG)

Note : sesuaikan dengan kebutuhan, nilai pada ``border-radius`` bisa diubah.

- Button dengan effect shadow :

gunakan ``box-shadow``, karena properti tersebut akan memberikan effect bayangan pada button.

Contoh :
```css
.button {
    background-color: black;
    display: inline-block;
    font-size: 14px;
    margin: 6px 3px;
    /*color dibawah digunakan untuk warna pada teks di button*/
    color: white;
    padding: 12px 28px;
    text-align: center;
    text-decoration: none;
    /*box-shadow*/
    box-shadow: 3px 5px 0px 0 rgb(255 15 15);
  }
```
Nilai pada ``box-shadow`` bisa diubah dari transparan, ketebalan, posisi, dan ukurannya.

Tampilan yang dihasilkan : 

![button3](https://user-images.githubusercontent.com/89055857/137708865-a7b2a0be-3fac-456b-91fa-d7c516f5bdfb.PNG)

-  Mengubah ukuran button


Gunakan ``width``, boleh menggunakan satuan px(pixel) atau persen(%)

Contoh width pada button menggunakan px(pixel) :
```css
.button {
    /*width menggunakan 200px*/
    width: 200px;
    background-color: black;
    display: inline-block;
    font-size: 14px;
    margin: 6px 3px;
    /*color dibawah digunakan untuk warna pada teks di button*/
    color: white;
    padding: 12px 28px;
    text-align: center;
    text-decoration: none;
    /*box-shadow*/
    box-shadow: 3px 5px 0px 0 rgb(255 15 15);
  }
```
Tampilan yang dihasilkan : 

![button4](https://user-images.githubusercontent.com/89055857/137709091-9023a0e0-2019-4186-a9ba-9882ce706ad5.PNG)

Contoh width pada button menggunakan persen(%) :
```css
  .button {
    /*width menggunakan 10%*/
    width: 10%;
    background-color: black;
    display: inline-block;
    font-size: 14px;
    margin: 6px 3px;
    /*color dibawah digunakan untuk warna pada teks di button*/
    color: white;
    padding: 12px 28px;
    text-align: center;
    text-decoration: none;
    /*box-shadow*/
    box-shadow: 3px 5px 0px 0 rgb(255 15 15);
  }
```
Tampilan yang dihasilkan : 

![button5](https://user-images.githubusercontent.com/89055857/137709152-aa919fbe-724d-4a14-a614-b087863cfe2e.PNG)

- Button memiliki effect saat disentuh

Contoh :
```css
  .button {
    background-color: black;
    display: inline-block;
    font-size: 14px;
    margin: 6px 3px;
    /*color dibawah digunakan untuk warna pada teks di button*/
    color: white;
    padding: 12px 28px;
    text-align: center;
    text-decoration: none;
    /*box-shadow*/
    box-shadow: 3px 5px 0px 0 rgb(255 15 15);
    transition: 0.4s;
  }
  /*gunakan hover jika ingin terlihat effect dan berubah warna pada saat button disentuh*/
  .button:hover {
    background-color: #ffffff;
    color: black;
  }
```

Referensi : https://www.w3schools.com/csS/css3_buttons.asp
