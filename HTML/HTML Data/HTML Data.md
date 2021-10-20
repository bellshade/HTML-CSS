# HTML Data
### Apa itu tag ```<data>``` ?

Tag `<data>` digunakan untuk menambahkan terjemahan yang dapat dibaca mesin dari konten tertentu.

Elemen ini memberikan nilai yang dapat dibaca mesin untuk memproses data, dan nilai yang dapat dibaca manusia untuk rendering di browser.

Tips: Jika konten berhubungan dengan waktu maka gunakan tag ```<time>```

### Contoh kode

**HTML**
```html
<ul>
  <li><data value="1">Ayam Bakar</data></li>
  <li><data value="2">Nasi Goreng</data></li>
  <li><data value="3">Sate</data></li>
</ul>
```
  
### Contoh Lain 

```html
<input type="radio" id="K1">
<label for="K1"><data value="27">Kelas 1</data></label>
<br>
<input type="radio" id="K2">
<label for="K2"><data value="30">Kelas 2</data></label>
<br>
<input type="radio" id="K3">
<label for="K3"><data value="30">Kelas 3</data></label>
<br>
<input type="radio" id="K4">
<label for="K4"><data value="32">Kelas 4</data></label>
```


Referensi: https://www.w3schools.com/tags/tag_data.asp

