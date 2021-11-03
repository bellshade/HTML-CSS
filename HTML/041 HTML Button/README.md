# HTML Button

## Apa Itu HTML Button
`<button>` dalam HTML adalah elemen yang digunakan untuk membuat tombol yang bisa diklik. Kita bisa mengisi elemen `<button>` dengan text atau dengan elemen lainnya seperti `<p>`, `<i>`, `<b>`, `<strong>`, `<img>`, dan lain-lain. Namun elemen `<button>` tidak bisa dengan elemen `<input>`

## Atribut
Berikut adalah atribut-atribut yang ada dalam elemen `<button>`.
| Atribut | Nilai | Deskripsi |
|--|--|--|
| autofocus | autofocus | Membuat tombol secara otomatis mendapatkan fokus saat halaman pertama kali dimuat |
| disabled | disabled | Membuat tombol tidak bisa diklik |
| form | form_id | Menentukan form mana yang terkait dengan tombolnya |
| type | button, reset, submit | Menentukan tipe dari tombol. <br><br> - ```type="button"``` = Menandakan bahwa tombol tersebut adalah tombol yang dapat diklik <br><br> - ```type="submit"``` = Menandakan bahwa tombol tersebut berfungsi untuk melakukan submit form <br><br> - ```type="reset"``` = Menandakan bahwa tombol tersebut berfungsi untuk mereset data pada form |
| formaction | URL | Menentukan ke mana data dari form akan dikirim ketika form di submit. Atribut ini hanya digunakan jika `type="submit"` |
| formenctype | application/x-www-form-urlencoded, multipart/form-data, text/plain | Menentukan bagaimana data form dikodekan/diencode sebelum dikirim ke server. Atribut ini hanya digunakan jika `type="submit"` |
| formmethod | get, post | Menentukan metode HTTP apa yang digunakan ketika mengirim data form. Atribut ini hanya digunakan jika `type="submit"` |
| formnovalidate | formnovalidate | Menentukan data form tidak boleh divalidasi pada saat pengiriman. Atribut ini hanya digunakan jika `type="submit"` |
| formtarget | _blank, _self, _parent, _top, framename | Menentukan dimana letak untuk menampilkan respon setelah submit form. Atribut ini hanya digunakan jika `type="submit"` |
| name | nama | Menentukan nama untuk tombol |
| value | teks | Menentukan nilai untuk tombol |

## Contoh
Berikut adalah contoh penggunaan elemen `<button>`.
```html
<button type="submit" name="test" value="Test Submit">Submit</button>
```

## Referensi
* [HTML <button> Tag](https://www.w3schools.com/tags/tag_button.asp)
* [HTML <button> type Attribute](https://www.w3schools.com/tags/att_button_type.asp)
