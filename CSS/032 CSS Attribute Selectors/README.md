# CSS Attribute Selectors

## Apa itu CSS Attribute Selectors

CSS `Attribute` Selectors merupakan cara yang digunakan untuk memilih elemen HTML yang ingin diberikan style berdasarkan keberadaan atau nilai `attribute` tertentu.

Ada beberapa jenis CSS `Attribute` Selectors yang bisa digunakan, diantaranya sebagai berikut:

- `[attribute]`
- `[attribute="value"]`
- `[attribute~="value"]`
- `[attribute|="value"]`
- `[attribute^="value"]`
- `[attribute$="value"]`
- `[attribute*="value"]`


## Macam - macam CSS Attribute Selector

### CSS `[attribute]` Selector

`[attribute]` selector digunakan untuk memilih elemen HTML dengan `attribute` tertentu.

Berikut adalah contoh untuk memilih seluruh elemen `<a>` dengan `attribute` `[target]`:
```css
a[target] {
    background-color: cyan;
}
```


### CSS `[attribute="value"]` Selector

`[attribute="value"]` selector digunakan untuk memilih elemen HTML dengan `attribute` dan `value` tertentu.

Berikut adalah contoh untuk memilih seluruh elemen `<a>` dengan `attribute` `[target="_blank"]`:
```css
a[target="_blank"] {
    background-color: red;
}
```


### CSS `[attribute~="value"]` Selector

`[attribute~="value"]` selector digunakan untuk memilih elemen HTML dengan `value` `attribute` yang mengandung kata tertentu.

Berikut adalah contoh untuk memilih seluruh elemen dengan `attribute` `title` yang berisi daftar kata yang dipisahkan oleh spasi, salah satunya adalah `flower`:
```css
[title~="flower"] {
    border: 2px solid yellow;
}
```

Contoh di atas akan mencocokkan elemen dengan `title="flower"`, `title="summer flower"`, `title="flower new"`, tapi tidak akan mencocokkan elemen dengan `title="my-flower"` atau `title="flowers"`.


### CSS `[attribute|="value"]` Selector

`[attribute|="value"]` selector digunakan untuk memilih elemen HTML dengan `attribute` tertentu, yang `value`nya bisa sama persis dengan `value` yang ditentukan, atau `value` yang ditentukan tersebut diikuti oleh tanda hubung `(-)`.

**Catatan**: `value` harus berupa keseluruhan kata, baik individu seperti `class="top"`, atau diikuti oleh tanda hubung `(-)` seperti `class="top-next"`.

Berikut adalah contohnya:
```css
[class|="top"] {
    background: green;
}
```


### CSS `[attribute^="value"]` Selector

`[attribute^="value"]` selector digunakan untuk memilih elemen HTML dengan `attribute` tertentu, yang `value`nya dimulai dengan `value` yang ditentukan.

Berikut adalah contoh untuk memilih seluruh elemen dengan `value` yang dimulai dengan kata `"top"` untuk `attribute` `class`nya:

**Catatan**: `value` tidak harus berupa keseluruhan kata.
```css
[class^="top"] {
    background: green;
}
```


### CSS `[attribute$="value"]` Selector

`[attribute$="value"]` selector digunakan untuk memilih elemen HTML yang `value` `attribute`nya diakhiri dengan `value` tertentu.

Berikut adalah contoh untuk memilih seluruh elemen dengan `value` yang diakhiri dengan kata `"test"` untuk `attribute` `class`nya:

**Catatan**: `value` tidak harus berupa keseluruhan kata.
```css
[class$="test"] {
    background: yellow;
}
```


### CSS `[attribute*="value"]` Selector

`[attribute*="value"]` selector digunakan untuk memilih elemen HTML yang `value` `attribute`nya berisi `value` tertentu.

Berikut adalah contoh untuk memilih seluruh elemen dengan `value` yang mengandung kata `"te"` untuk `attribute` `class`nya:

**Catatan**: `value` tidak harus berupa keseluruhan kata.
```css
[class*="te"] {
    background: blue;
}
```
