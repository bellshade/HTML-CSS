# HTML Figure

## Apa itu HTML Figure?

HTML Figure merupakan semantic HTML5 yang digunakan untuk menandai atau menjelaskan sebuah konten. element figure juga dapat memberitahukan kepada browser bahwa dia adalah sebuah wadah yang menampung beberapa element yang memiliki hubungan satu sama lain. dengan memberikan tag `<figcaption>` di dalam figure sebagai keterangan.

```html
<figure>
  <img src="/media/cc0-images/elephant-660-480.jpg" alt="Elephant at sunset" />
  <figcaption>An elephant at sunset</figcaption>
</figure>
```

## Contoh kode

element figure dapat menyimpan gambar,video, barisan kode, kutipan dan lain-lain :

contoh barisan kode :

```html
<figure>
  <pre>
     <code>p {
       color: green;
        }</code>
        </pre>
  <figcaption>contoh memberikan warna teks dengan CSS</figcaption>
</figure>
```

contoh kutipan :

```html
<figure>
  <figcaption><b>Ali bin Abi Thalib berkata:</b></figcaption>
  <blockquote>
    Janganlah engkau mengucapkan perkataan yang engkau sendiri tak suka
    mendengarnya jika orang lain mengucapkannya kepadamu.
  </blockquote>
</figure>
```

<!-- HTML Figure adalah element yang dapat mempresentasikan konten tersendiri (self-contained) seperti ) seperti ilustrasi, gambar ,video, table, dereten kode dan merupakan semantic HTML5 -->
