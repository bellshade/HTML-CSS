# HTML AUDIO

## Apa itu HTML audio

HTML audio adalah sebuah tag HTML yang berfungsi untuk menunjukan suara,
terdapat 3 type atau format audio yaitu :

- ogg
- mp3
- wav

Ada 2 tag yang digunakan untuk mengeluarkan suara yaitu :

- `<audio>` : fungsinya sebagai tag html
- `<source>`: fungsinya menentukan file audio dan type/formatnya

Ada juga untuk atribut tag audio

- autoplay : memulai langsung
- mute : tidak ada suara ketika di putar
- controls : menampilkan kontrol di audio

## Langsung saja ke contohnya

```html
<audio>
  <source src="" type="" />
</audio>
```

### Penjelasan

- `src`: menentukan file audio
- `type`: menentukan type/formatnya

### Penerapan

```html

<audio controls autoplay>
  <source src="" type="audio/(typenya)" />
</audio>
```

## Penggunaan demo

```html
<!-- Penjelasan -->
<!-- Atribut control = menampilkan control di audio  -->
<!-- Atribut autoplay = memulai langsung  -->
<!-- src = sumber audio (horse.ogg) -->
<!-- type = tipe/format dari audio tersebut (audio/ogg) -->
<audio controls autoplay>
  <source src="horse.ogg" type="audio/ogg" />
</audio>
```

## Referensi untuk audio dan materi [W3SCHOOLS](https://www.w3schools.com/html/html5_audio.asp)
