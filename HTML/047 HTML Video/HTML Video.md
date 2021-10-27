# HTML Video

## Apa itu HTML Video?

HTML memiliki sebuah elemen tag `<video>` yang digunakan untuk menampilkan video di dalam browser maupun website, namun tidak semua browser mendukung seluruh format video, jadi kita harus menyajikan banyak format video untuk memastikan browser menjalankan video tersebut, yaitu dengan cara lokasi file video di tempatkan di dalam elemen tag `<source>` atau di dalam attribute src.

## Bagaimana cara penggunaan attribute `<video>` ?

Cara penggunaan tag `<video>` lebih jelasnya adalah seperti berikut:

**penggunaan sederhana**:

```html
<video
  controls
  src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
  width="620"
>
  Maaf, browser yang anda gunakan tidak support video embedded, jangan khawatir,
  kamu tetap bisa melihatnya dengan mendownload video tersebut
  <a href="https://archive.org/details/BigBuckBunny_124">disini</a>
</video>
```

**penggunaan dengan lebih dari 1 format video**:

jika ingin memastikan video tampil di browser manapun gunakan tag `<source>` di dalam tag `<video>` dengan format video yang berbeda-beda. seperti ini:

```html
<video controls>
  <!-- memasukan lebih dari 1 format video menggunakan tag <source> 
  untuk mengantisipasi browser yang tidak mendukung video format tertentu -->
  <source src="video/myVideo.mp4" type="video/mp4" />
  <source src="video/myVideo.webm" type="video/webm" />

  <!-- fallback jika  browser tidak mendukung tag <video> -->
  <p>
    Browser yang kamu pakai tidak mendukung HTML5 video. berikut
    <a href="video/myVideo.mp4">link video</a> untuk melihatnya.
  </p>
</video>
```

**memasang subtitle/captions ke dalam video**:

di tag `<video>` kita juga dapat menambahkan captions / subtitle dengan memasukkan tag `<track>` ke dalam tag `<video>`. seperti ini:

```html
<video id="video" controls preload="metadata">
  <source src="video/myVideo.mp4" type="video/mp4" />
  <source src="video/myVideo.webm" type="video/webm" />
  <track
    label="English"
    kind="subtitles"
    srclang="en"
    src="captions/vtt/myVideo-en.vtt"
    default
  />
  <track
    label="Indonesia"
    kind="subtitles"
    srclang="id"
    src="captions/vtt/myVideo-id.vtt"
  />
</video>
```

untuk tag `<track>` lebih jelasnya bisa di akses di sini [HTML Track]
dan untuk tag `<source>` bisa diakses di sini [HTML Source]

## Atribut di dalam tag `<video>`

Terdapat setidaknya dua atribut yang biasa digunakan.

- **autoplay** - attribute bertipe boolean yang digunakan untuk menjalankan video secara otomatis. (di sebagian browser attribute ini tidak akan aktif jika tidak ada attribute `muted` )
- **controls** - browser akan menampilkan control video berupa volume, seeking, pause/resume.
- **muted** - jika terdapat attribute ini, maka video tidak akan mengeluarkan audio.
- **poster** - link / URL untuk menampilkan gambar video ketika video sedang di download, jika attribute ini tidak di pasang, tidak ada yang di tampilkan sampai video tersebut terdownload & frame pertama dari video tersebut menjadi poster frame.

Namun sebagai catatan jika ingin menampilkan video dari suatu link di internet, pastikan tidak melanggar hak cipta dari kepemilikan video tersebut.

## Referensi

Untuk referensi lengkapnya, kalian bisa mengunjungi [website berikut](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video).
