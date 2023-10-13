# HTML Label

## Definisi dan Penggunaan

Elemen `<label>` digunakan dalam mendefinisikan label untuk beberapa elemen lainnya, seperti `<input>`, `<textarea>`, dan `<select>`. Label ini dapat diklik untuk fokus pada elemen yang ditunjuk.

Penggunan elemen `<label>` sangat penting untuk meningkatkan aksesibilitas situs web. Jika elemen `<label>` digunakan dengan benar, maka pengguna yang menggunakan layar pembaca layar akan mendapatkan informasi yang lebih baik tentang elemen yang ditunjuk. Selain itu, elemen `<label>` juga dapat digunakan untuk menghubungkan elemen lainnya dengan elemen yang ditunjuk.

Elemen `<label>` dengan attribute `for` yang sama dengan `id` elemen lain akan menghubungkan elemen tersebut. Sebagai contoh, elemen `<label>` dengan attribute `for="nama"` akan menghubungkan elemen `<input>` dengan `id="nama"`.



## Contoh

### Penggunaan `<label>` untuk `<input>`

```HTML
<form action="/action_page.php">
  <input type="radio" id="html" name="fav_language" value="HTML">
  <label for="html">HTML</label><br>
  <input type="radio" id="css" name="fav_language" value="CSS">
  <label for="css">CSS</label><br>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript">
  <label for="javascript">JavaScript</label><br><br>
  <input type="submit" value="Submit">
</form>
```

Referensi: [w3schools](https://www.w3schools.com/tags/tag_label.asp)
