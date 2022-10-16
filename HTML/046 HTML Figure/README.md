# HTML Figure

## Apa itu HTML Figure?

HTML Figure merupakan semantic HTML5 yang digunakan untuk menandai atau menjelaskan sebuah konten. Element `<figure>` juga dapat memberitahukan kepada browser bahwa dia adalah sebuah wadah yang menampung beberapa element yang memiliki hubungan satu sama lain.

Konten yang ada di dalam `<figure>` biasanya terdiri dari gambar dan `<figcaption>` sebagai keterangan.

```html
<figure>
  <img src="kucing-oren.jpg" alt="kucing oren" />
  <figcaption>Kucing oren</figcaption>
</figure>
```

Maka hasilnya seperti ini:

![HTML Figure](contoh-gambar.png)

## Contoh kode

Selain gambar, element `<figure>` juga dapat menyimpan video, barisan kode, kutipan dan lain-lain.

Contoh barisan kode:

```html
<figure>
  <pre>
     <code>
        p {
        color: green;
        }
      </code>
  </pre>
  <figcaption>contoh memberikan warna teks dengan CSS</figcaption>
</figure>
```

Contoh kutipan:

```html
<figure>
  <figcaption><b>Ali bin Abi Thalib berkata:</b></figcaption>
  <blockquote>
    Janganlah engkau mengucapkan perkataan yang engkau sendiri tak suka
    mendengarnya jika orang lain mengucapkannya kepadamu.
  </blockquote>
</figure>
```
