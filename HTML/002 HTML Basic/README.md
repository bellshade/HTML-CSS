# HTML Basic

## Dokumen HTML

* Dokumen **HTML** harus dimulai dengan deklarasi tipe dokumen `<!DOCTYPE html>`
* Dokumen **HTML** harus mempunyai tag `html`. Dimulai dengan tag pembuka `<html>` dan diakhiri dengan tag penutup  `</html>`
* Dokumen **HTML** harus mempunyai tag `head`. Dimulai dengan tag pembuka `<head>` dan diakhiri dengan tag penutup `</head>`
* Dokumen **HTML** harus mempunyai tag `body`. Dimulai dengan tag pembuka  `<body>` dan di akhiri dengan tag penutup `</body>`
* Element **HTML** harus terletak di dalam tag `body`

    Contoh Dokumen HTML:

    ```html
    <!DOCTYPE html>
    <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hello World</title>
        </head>
        <body>
        <!--Masukan Element HTML di dalam tag body -->
        <h1>Hello World</h1>
        <p>Halo Dunia</p>
        </body>
    </html>
    ```

#### Hasil

![hasil](img/hello_.png)

## Emmet Abbreviation

Untuk beberapa IDE seperti Visual Studio Code, sudah tersedia emmet yang berguna untuk mempermudah pembuatan dokumen HTML diatas. Yaitu dengan mengetik tanda `!` lalu tekan `Enter`.

![preview](./img/emmet.png)

![emmetoutput](./img/output-emmet.png)