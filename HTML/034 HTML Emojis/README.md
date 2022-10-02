# HTML Emojis

HTML dapat menampilakan sebuah emojis dengan menggunakan _decimal_ atau _hexadecimal_, dan agar browser memahami kalau kita sedang menampilkan _character_ kita harus mengawali dengan `&#` dan diakhiri dengan `;`.

sebagai contoh

```HTML
<!-- Menggunakan Hexadecimal-->
<p>Akan menampilkan &#x1F981;</p> <!--Akan menampilkan 🦁 -->

<!-- Menggunakan Decimal -->
<p>Akan menampilkan &#129409;</p> <!--Akan menampilkan 🦁 -->
```

Daftar emojis dapat kamu lihat disini https://unicode.org/emoji/charts/full-emoji-list.html

## Emojis dengan tone warna kulit

Beberapa emoji memiliki tone warna kulit yang berbeda beda, berikut contoh tone warna kulitnya,

|   Decimal   |         Warna          | Preview   |
| :---------: | :--------------------: | --------- |
| `&#127999;` |     Dark skin tone     | &#127999; |
| `&#127998;` | Medium Dark skin tone  | &#127998; |
| `&#127997;` |    Medium skin tone    | &#127997; |
| `&#127996;` | Medium Light skin tone | &#127996; |
| `&#127995;` |    Light skin tone     | &#127995; |

Penggunaan warna kulit dapat ditambahkan setelah kode emoji, sebagai contoh

```HTML
<p><span>&#129306;</span> No skin tone</p> <!--🤚  No skin tone -->
<p><span>&#129306;&#127999;</span> Dark skin tone</p> <!--🤚🏿  Dark skin tone -->
<p><span>&#129306;&#127998;</span> Medium Dark skin tone</p> <!--🤚🏾  Medium Dark skin tone -->
<p><span>&#129306;&#127997;</span> Medium skin tone</p> <!--🤚🏽  Medium skin tone -->
<p><span>&#129306;&#127996;</span> Medium Light skin tone</p> <!--🤚🏼  Medium Light skin tone -->
<p><span>&#129306;&#127995;</span> Light skin tone</p> <!--🤚🏻  Light skin tone -->
```

Referensi: <br />
https://www.w3schools.com/charsets/ref_emoji.asp <br />
https://www.w3schools.com/charsets/ref_emoji_skin_tones.asp
