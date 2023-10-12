# HTML Input Attributes

Elemen `<input>` digunakan untuk membuat berbagai jenis input seperti teks , kata sandi, kotak centang, radio button, dan banyak lagi.  Kamu dapat mengontrol perilaku dan tampilan elemen input ini dengan menggunakan berbagai atribut.

Berikut adalah beberapa atribut umum yang digunakan dalam elemen input:

## 1. `type`
Atribut `type` digunakan untuk menentukan jenis input yang akan digunakan. Beberapa contoh jenis yang umum adalah:

- `text`: Untuk input teks biasa.
- `password`: Untuk input kata sandi.
- `checkbox`: Untuk kotak centang.
- `radio`: Untuk tombol radio.
- `file`: Untuk mengunggah berkas.
- `number`: Untuk input angka.
- `email`: Untuk alamat email.
- `date`: Untuk memilih tanggal.
- `color`: Untuk memilih warna.

**Contoh penggunaan:**

```html
<input  type="text"  name="username">
<input  type="password"  name="password">
<input  type="checkbox"  name="subscribe"  value="yes">
```

  

## 2. `name`

Atribut `name` digunakan untuk memberi nama input, yang akan digunakan saat mengirimkan data formulir. Ini sifatnya harus unik dalam satu formulir.

  
**Contoh penggunaan:**

```html
<input type="text" name="username">
<input type="text" name="email">
```
  
## 3. `value`

Atribut `value` digunakan untuk mengatur nilai awal dari elemen input. Ini berguna untuk mengisi nilai awal dalam kasus input teks atau kata sandi.

**Contoh penggunaan:**

```html
<input  type="text"  name="username"  value="JohnDoe">
<input  type="radio"  name="gender"  value="male"  checked> Male
<input  type="radio"  name="gender"  value="female"> Female
```

  

## 4. `placeholder`

Atribut `placeholder` digunakan untuk menampilkan teks tip pada input sebelum pengguna memasukkan nilai. Ini memberikan panduan kepada pengguna.

  

**Contoh penggunaan:**

```html
<input  type="text"  name="search"  placeholder="Cari...">
```

  

## 5. `required`

Atribut `required` digunakan untuk membuat input wajib diisi sebelum formulir dapat disubmit.

  
**Contoh penggunaan:**
```html
<input type="email"  name="email"  required>
<input type=checkbox  name="agree"  value="yes"  required>
```

## 6. `disabled`

Atribut `disabled` digunakan untuk menonaktifkan input, sehingga tidak dapat diedit atau diklik.
  
**Contoh penggunaan:**

```html
<input type="text" name="disabledInput" value="Ini input nonaktif" disabled>
```


## 7. `readonly`

Atribut `readonly` digunakan untuk membuat input hanya bisa dibaca, tapi tidak bisa diubah.

**Contoh penggunaan:**

```html
<input  type="text"  name="readOnlyInput"  value="Ini input hanya bacaan"  readonly>
```

  

## 8. `max` dan `min`

Atribut `max` dan `min` digunakan untuk menentukan nilai maksimum dan minimum yang dapat dimasukkan oleh pengguna dalam input tipe `number`, `date`, atau atribut lainnya.
  
**Contoh penggunaan:**

```html
<input  type="number"  name="age"  min="18"  max="99">
<input  type="date"  name="birthDate"  min="1990-01-01"  max="2005-12-31">
```

**Referensi:** [w3schools (https://www.w3schools.com/html/html_form_attributes.asp)](https://www.w3schools.com/html/html_form_attributes.asp)