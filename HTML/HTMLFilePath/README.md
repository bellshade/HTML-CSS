# File Path Pada HTML

*File path* menjelaskan tentang lokasi file, gambar, dll. lebih dikenal dengan struktur folder website

## Contoh

### File HTML dan File Lainnya Bersamaan

```html
<img src="gambar_pemandangan.jpg">
```

Maka file gambar tersebut terletak sama dengan file html

```
📂HTML-CSS/
    ├── 📄index.html
    └── 🚞gambar_pemandangan.jpg
```

### File HTML Terpisah dan File Lainnya Dalam Folder Lain

```html
<img src="picture/gambar_saya.jpg">
```

Maka file tersebut terdapat pada folder ``picture``

```
📂HTML-CSS/
    ├── 📄index.html
    └── 📂Pictures/
        └── 🚞gambar_pemandangan.jpg
```

### File HTML Terpisah dan File Lainnya dengan URL

```html
<img src="https://gambarsaya.url/gambar.jpg">
```

#### Contoh Selain dengan Gambar

- Memanggil file CSS dan file html terpisah

    ```html
    <link rel="stylesheet" href="folder_lain/file.css" />
    ```

- Memanggil file JavaScript dan file HTML terpisah

    ```html
    <script src="folder_lain/file.js"></script>
    ```
