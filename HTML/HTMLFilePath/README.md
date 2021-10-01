# file path pada html

file path menjelaskan tentang lokasi file, gambar, dll. lebih dikenal dengan struktur folder website

contoh

## file html dan file lainnya bersamaan
```html
<img src="gambar_pemandangan.jpg">
```
maka file gambar tersebut terletak sama dengan file html
```
index.html
gambar_pemandangan.jpg
```

## file html terpisah dam file lainnya dalam folder lain
```html
<img src="picture/gambar_saya.jpg">
```
maka file tersebut terdapat pada folder ``picture``
```
index.html
picture
├── gambar_saya.jpg
```

## file html terpisah dan file lainnya dengan url
```html
<img src="https://gambarsaya.url/gambar.jpg">
```

## contoh selain dengan gambar

- memanggil file css dan file html terpisah
    ```html
    <href="folder_lain/file.css">
    ```

- memanggil file javascript dan file html terpisah
    ```html
    <script src="folder_lain/file.js>
    ```