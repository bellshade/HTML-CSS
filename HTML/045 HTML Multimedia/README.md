# HTML Multimedia

## Apa itu Multimedia

Multimedia memiliki banyak macam format. Hampir semua hal yang dapat Anda dengar atau lihat, seperti gambar, musik, suara, video, rekaman, film, animasi, dan banyak lagi.

## Format Multimedia

Multimedia (seperti suara atau video) disimpan di media file. Cara paling umum untuk mengetahui jenis file adalah dengan melihat ekstensi file.

File multimedia memiliki format dan ekstensi yang berbeda seperti: `.wav`, .`mp3`, `.mp4`, `.mpg`, `.wmv`, dan `.avi.`

## Format video

Ada banyak sekali format video pada multimedia, hanya saja `MP4`,` WebM,` dan `Ogg` yang support pada HTML. Youtube merekomendasi format `MP4`.

|     Format      |    File    | Deskripsi                                                                                                                                                                                       |
| :-------------: | :--------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|      MPEG       | .mpg .mpeg | Dikembangkan oleh Moving Pictures Expert Group. Format video yang pertama populer di web. Tidak lagi mensupport HTML.                                                                           |
|       AVI       |    .avi    | AVI (Audio Video Interleave). Dikembangkan oleh Microsoft. Biasa digunakan di kamera video dan perangkat keras TV. Dapat diputar dengan baik di komputer Windows, tetapi tidak di web browser.; |
|       WMV       |    .wmv    | WMV (Windows Media Video). Dikembangkan oleh Microsoft. Biasa digunakan di kamera video dan perangkat keras TV. Dapat diputar dengan baik di komputer Windows, tetapi tidak di web browser.     |
|    QuickTime    |    .mov    | QuickTime. Dikembangkan oleh Apple. Biasa digunakan di kamera video dan perangkat keras TV. Dapat diputar dengan baik di komputer Apple, tetapi tidak di web browser.                           |
|    RealVideo    |  .rm .ram  | RealVideo. Dikembangkan oleh Real Media untuk memungkinkan streaming video dengan bandwidth rendah. Tidak dapat diputar diweb browser.                                                          |
|      Flash      | .swf .flv  | Flash. Dikembangkan oleh Macromedia. Seringkali membutuhkan komponen tambahan (plug-in) untuk dimainkan di browser web.                                                                         |
|       Ogg       |    .ogg    | Theora Ogg. Dikembangkan oleh Xiph.Org Foundation. Didukung oleh HTML.                                                                                                                          |
|      WebM       |   .webm    | WebM. Dikembangkan oleh Mozilla, Opera, Adobe, dan Google. Didukung oleh HTML.                                                                                                                  |
| MPEG-4 atau MP4 |    .mp4    | MP4. Dikembangkan oleh Moving Pictures Expert Group. Biasa digunakan di kamera video dan perangkat keras TV. Didukung oleh semua browser dan direkomendasikan oleh YouTube.                     |

### Contoh penulisan pada HTML:

```html
<video width="320" height="240" controls autoplay>
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

#### Penjelasan

- controls : merupakan atribute video seperti tombol _play_, _pause_ dan _volume_.
- autoplay : untuk memulai video secara otomatis.

## Format audio

`MP3` adalah format terbaik untuk mengkompres file rekaman musik.
Jika situs web yang anda buat berisi rekaman musik, format `MP3` adalah pilihannya. Perlu diingat bahwa Hanya audio berformat `MP3`, `WAV`, dan `Ogg` yang didukung oleh standar HTML.
Berikut dibawah ini adalah jenis-jenis format musik selain `MP3`.

|  Format   |    File    | Deskripsi                                                                                                                                                                                                                                                                                                                                              |
| :-------: | :--------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|   MIDI    | .mid .midi | MIDI (Musical Instrument Digital Interface). Format utama untuk semua perangkat musik elektronik seperti synthesizer dan sound card PC. File MIDI tidak mengandung suara, tetapi memilki not digital yang dapat dimainkan secara elektronik. Dapat diputar dengan baik di semua komputer dan perangkat keras untuk musik, tetapi tidak di web browser. |
| RealAudio |  .rm .ram  | RealAudio. Dikembangkan oleh Real Media untuk memungkinkan streaming audio dengan bandwidth rendah. Tidak dapat diputar di web browser.                                                                                                                                                                                                                |
|    WMA    |    .wma    | WMA (Windows Media Audio). Dikembangkan oleh Microsoft. Dapat diputar dengan baik di komputer Windows, tetapi tidak di web browser.                                                                                                                                                                                                                    |
|    AAC    |    .aac    | AAC (Advanced Audio Coding). Dikembangkan oleh Apple sebagai format default untuk iTunes. Dapat diputar dengan baik di komputer Apple, tetapi tidak di web browser.                                                                                                                                                                                    |
|    WAV    |    .wav    | WAV. Dikembangkan oleh IBM dan Microsoft. Dapat diputar dengan baik di sistem operasi Windows, Macintosh, dan Linux. Didukung oleh HTML.                                                                                                                                                                                                               |
|    Ogg    |    .ogg    | Theora Ogg. Dikembangkan oleh Xiph.Org Foundation. Didukung oleh HTML.                                                                                                                                                                                                                                                                                 |
|    MP3    |    .mp3    | MP3 adalah format paling populer untuk pemutar musik. Menggabungkan kompresi yang baik (file kecil) dengan kualitas tinggi. Didukung oleh semua browser.                                                                                                                                                                                               |
|    MP4    |    .mp4    | MP4 adalah format video, tetapi juga dapat digunakan untuk audio. Didukung oleh semua browser.                                                                                                                                                                                                                                                         |

### Contoh penulisan pada HTML:

```html
<audio controls autoplay>
  <source src="horse.ogg" type="audio/ogg" />
  <source src="horse.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
```

## Referensi

- [W3school](https://www.w3schools.com/html/html_media.asp)
