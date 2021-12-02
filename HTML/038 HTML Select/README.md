### HTML Tag <select>

## Contoh

Buat daftar drop-down dengan empat opsi:

```html
<label for="cars">Choose a car:</label>

<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
```

## Definisi dan Penggunaan

- Elemen <select> digunakan untuk membuat daftar drop-down.
- Elemen <select> paling sering digunakan dalam formulir, untuk mengumpulkan input user.
- Atribut name diperlukan untuk mereferensikan data formulir setelah formulir dikirimkan (jika Anda menghilangkan atribut nama, tidak ada data dari daftar drop-down yang akan dikirimkan).
- Atribut id diperlukan untuk mengaitkan daftar drop-down dengan label.

## Browser Pendukung

| Elemen | Google Chrome | Internet Explorer/Edge | Mozilla Firefox | Safari | Opera |
| :----: | :-----------: | :--------------------: | :-------------: | :----: | :---: |
| Select |      Yes      |          Yes           |       Yes       |  Yes   |  Yes  |

## Atribut Global HTML

Tag <link> juga masuk dalam kategori tabel Atribut Global HTML

## Atribut Event HTML

Tag <link> juga masuk dalam kategori tabel Atribut Event HTML

## Contoh Lain

Gunakan <select> dengan tag <optgroup>:

```html
<label for="cars">Choose a car:</label>
<select name="cars" id="cars">
  <optgroup label="Swedish Cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
  </optgroup>
  <optgroup label="German Cars">
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </optgroup>
</select>
```

## Pengaturan CSS Bawaan

tidak ada.

Sumber : https://www.w3schools.com/tags/tag_select.asp
