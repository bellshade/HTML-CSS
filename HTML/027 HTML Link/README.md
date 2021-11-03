# HTML Link

Bidang header entitas Tautan HTTP menyediakan sarana untuk membuat serial satu atau beberapa tautan di header HTTP. Secara semantik setara dengan elemen <link> HTML.

### Syntax

```html
Link: <uri-reference>; param1=value1; param2="value2"</uri-reference>
```

<uri-referensi>
Referensi URI, harus diapit di antara < dan >.

### Parameter

Tajuk tautan berisi parameter, yang dipisahkan dengan ; dan setara dengan atribut elemen <link>.

### Contoh kode

URI (absolut atau relatif) harus diapit di antara < dan >

**HTML**

```html
Link: <https://example.com>; rel="preconnect" True. Link: https://bad.example; rel="preconnect" False
```

Menentukan beberapa tautan
Anda dapat menentukan beberapa tautan yang dipisahkan dengan koma, misalnya:

**HTML**

```html
Link: <https://one.example.com>; rel="preconnect", <https://two.example.com>; rel="preconnect", <https://three.example.com>; rel="preconnect"
```

Referensi: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link
