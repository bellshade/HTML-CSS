# HTML Select

## Definisi dan Penggunaan

Elemen `<select>` digunakan untuk membuat drop-down list.

Elemen `<select>` paling sering digunakan pada sebuah form untuk mengumpulkan input dari user.

Nama atribut dibutuhkan sebagai referensi dari form data setelah form tersebut disubmit (jika kamu melewatkan nama atribut, tidak ada data dari drop-down list yang akan tersubmit).

Atribut id dibutuhkan untuk mengasosiasikan drop-down list dengan sebuah label.

Tag `<option>`di dalam `<select>` mendefinisikan opsi yang tersedia pada drop-down list.

Tips: Selalu tambahkan tag `<label>` sebagai praktik aksesibilitas terbaik.

## Contoh

### Membuat drop-down list dengan empat pilihan

```HTML
<label for="mobil">Piih salah satu mobil:</label>
<select name="mobil" id="mobil">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
```

## Contoh Lain

### Menggunakan `<select>` dengan `<optgroup>`

```html
<label for="cars">Pilih mobil:</label>
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

Referensi: [w3schools](https://www.w3schools.com/tags/tag_select.asp)
