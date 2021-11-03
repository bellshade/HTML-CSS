# HTML Textarea

### Apa itu tag `<textarea>` ?

Elemen HTML <textarea> mewakili kontrol pengeditan teks biasa multi-baris, berguna saat Anda ingin mengizinkan pengguna memasukkan teks bentuk bebas dalam jumlah yang cukup besar, misalnya komentar pada ulasan atau formulir umpan balik.

Fitur <textarea> antara lain:

    Atribut id untuk memungkinkan <textarea> dikaitkan dengan elemen <label> untuk tujuan aksesibilitas
    Atribut nama untuk mengatur nama titik data terkait yang dikirimkan ke server saat formulir dikirimkan.
    baris dan atribut cols untuk memungkinkan Anda menentukan ukuran yang tepat untuk <textarea> yang akan diambil. Mengatur ini adalah ide yang bagus untuk konsistensi, karena default browser dapat berbeda.
    Konten default dimasukkan di antara tag pembuka dan penutup. <textarea> tidak mendukung atribut nilai.

Elemen <textarea> juga menerima beberapa atribut yang umum untuk membentuk <input>, seperti pelengkapan otomatis, fokus otomatis, dinonaktifkan, placeholder, hanya baca, dan diperlukan.

### Contoh kode

**HTML**

```html
<label for="story">Tell us your story:</label>

<textarea id="story" name="story" rows="5" cols="33">
It was a dark and stormy night...
</textarea>
```

**CSS**

```css
label,
textarea {
  font-size: 0.8rem;
  letter-spacing: 1px;
}
textarea {
  padding: 10px;
  max-width: 100%;
  line-height: 1.5;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px #999;
}
```

### Contoh Lain

### Contoh Basic

Contoh berikut menunjukkan area teks yang sangat sederhana, dengan sejumlah baris dan kolom dan beberapa konten default.

```HTML
<textarea name="textarea"
   rows="10" cols="50">Write something here</textarea>
```

### Panjang minimal dan maksimal

Contoh ini memiliki jumlah karakter minimum dan maksimum — masing-masing 10 dan 20. Cobalah dan lihat.

```HTML
<textarea name="textarea"
   rows="5" cols="30"
   minlength="10" maxlength="20">Write something here</textarea>
```

Perhatikan bahwa minlength tidak menghentikan pengguna untuk menghapus karakter sehingga angka yang dimasukkan melewati batas minimum, tetapi itu membuat nilai yang dimasukkan ke dalam <textarea> tidak valid. Perhatikan juga bahwa meskipun Anda memiliki set nilai minlength (3, misalnya), <textarea> kosong masih dianggap valid kecuali Anda juga memiliki set atribut yang diperlukan.

### Placeholder

Contoh ini memiliki set placeholder. Perhatikan bagaimana itu menghilang ketika Anda mulai mengetik ke dalam kotak.

```HTML
<textarea name="textarea"
   rows="5" cols="30"
   placeholder="Comment text."></textarea>
```

Catatan: Placeholder hanya boleh digunakan untuk memperlihatkan contoh tipe data yang harus dimasukkan ke dalam formulir; mereka bukan pengganti elemen <label> yang tepat yang terikat pada input. Lihat Label dan placeholder di <input>: Elemen Input (Form Input) untuk penjelasan lengkapnya.

### Dinonaktifkan dan hanya dapat dibaca

Contoh ini menunjukkan dua <textarea> — salah satunya dinonaktifkan, dan salah satunya hanya bisa dibaca. Mainkan keduanya dan Anda akan melihat perbedaan perilaku — elemen yang dinonaktifkan tidak dapat dipilih dengan cara apa pun (dan nilainya tidak dikirimkan), sedangkan elemen hanya-baca dapat dipilih dan isinya dapat disalin (dan nilainya dikirimkan) ; Anda hanya tidak dapat mengedit isinya.

Catatan: Di browser selain firefox, seperti chrome, konten textarea yang dinonaktifkan dapat dipilih dan disalin.

```HTML
<textarea name="textarea"
   rows="5" cols="30"
   disabled>I am a disabled textarea</textarea>
<textarea name="textarea"
   rows="5" cols="30"
   readonly>I am a readonly textarea</textarea>

```

Referensi: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
