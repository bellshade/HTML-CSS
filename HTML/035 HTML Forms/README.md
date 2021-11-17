# HTML Forms

Form pada html berfungsi untuk mengirimkan data melalui elemen-elemen form di dalamnya seperti, text field, radio button, dropdown, dll

## Form Element

> Sebelum membuat elemen-elemen pada form, seluruh elemen yang akan digunakan harus berada diantara tag `<form> dan </form>` contoh penggunaannya adalah sebagai berikut :

```html
<form>
  <!-- baris ini bisa dihapus -->
  elemen form ditulis disini
  <!-- baris ini bisa dihapus -->
</form>
```

## Membuat Elemen Input

Elemen `<input>` pada HTML forms menjadi elemen yang sering digunakan. adapun tag `<input>` memiliki beberapa type atribute seperti text, radio, checkbox.

### Input Type Text

elemen `<input type="text">` akan berupa textfields yang nantinya kita dapat memberikan input berupa text.

```html
<form>
  <h5>Nama Depan :</h5>
  <input type="text" />
  <h5>Nama Belakang :</h5>
  <input type="text" />
</form>
```

Output :

  <form>
    <h5>Nama Depan :</h5>
    <input type="text">
    <h5>Nama Belakang :</h5>
    <input type="text">
  </form>
  <br>

### Input Type Radio Button

elemen `<input type="radio">` akan berupa pilihan yang berbentuk bulat yang nantinya kita dapat memberikan input dengan memilih salah satu pilihan yang tersedia.

```html
<form>
  <h5>Jenis Kelamin</h5>
  <input type="radio" value="laki-laki" />
  <label>Laki-Laki</label><br />
  <input type="radio" value="perempuan" />
  <label>Perempuan</label><br />
</form>
```

Output :

<form>
  <h5>Jenis Kelamin</h5>
  <input type="radio" value="laki-laki">
  <label>Laki-Laki</label><br>
  <input type="radio" value="perempuan">
  <label>Perempuan</label><br>
</form>
<br>

### Input Type Checkbox

Elemen `<input type="checkbox">` akan berupa pilihan yang berbentuk kotak yang nantinya kita dapat memberikan input dengan memilih lebih dari satu pilihan yang tersedia.

```html
<form>
  <h5>Hobi</h5>
  <input type="checkbox" value="membaca" />
  <label>Membaca</label><br />
  <input type="checkbox" value="menyanyi" />
  <label>Menyanyi</label><br />
  <input type="checkbox" value="menulis" />
  <label>Menulis</label><br />
  <input type="checkbox" value="olahraga" />
  <label>Olahraga</label><br />
</form>
```

Output :

<form>
  <h5>Hobi</h5>
  <input type="checkbox" value="membaca">
  <label>Membaca</label><br>
  <input type="checkbox" value="menyanyi">
  <label>Menyanyi</label><br>
  <input type="checkbox" value="menulis">
  <label>Menulis</label><br>
  <input type="checkbox" value="olahraga">
  <label>Olahraga</label><br>
</form>
<br>
