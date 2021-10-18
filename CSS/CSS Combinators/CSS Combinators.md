# CSS Combinators

## Apa ya CSS Combinators?

**CSS Combinators** sering kita gunakan ketika benar-benar membutuhkan selector yang lebih spesifik dibandingkan selectors biasa. 

## Macam-Macam CSS Combinators

- `Descendant Selector` selector 'vanilla' tanpa ada nya tambahan pada syntax

- `Child Selector` menggunakan **(>)** sebagai syntax tambahan

- `Adjacent Sibling Selector` menggunakan **(+)** sebagai syntax tambahan

- `General Sibling Selector` menggunakan **(~)** sebagai syntax tambahan

## Pembahasan Masing-Masing CSS Combinators


- `Descendant Selector` selector yang penulisannya sama seperti css selector biasanya tanpa ada syntax tambahan pada selector. Untuk lebih jelasnya kamu dapat melihat contoh berikut:


```html
<html>
<div class='class'>
    <h1>Tester Header 1</h1>
    <span>
        <h1>Tester Header 2</h1>
    </span>
</div>
<h1>Tester Header 3</h1>
</html>
```


```css
.class h1{
    background-color: #840618;
}
```

- `Child Selector` selector yang penulisannya ditambahkan **(>)**. Ketika element yang dituju ada di dalam parent  tidak bisa terselect. Untuk lebih jelasnya kamu dapat melihat contoh berikut:

```html
<html>
<div class='class'>
    <h1>Tester Header 1</h1>
    <span>
        <h1>Tester Header 2</h1>
    </span>
    <h1>Tester Header Semi</h1>
</div>
<h1>Tester Header 3</h1>
  </html>
```


```css
.class > h1{
    background-color: #840618;
}
```


- `Adjacent Sibling Selector` yang didalam penulisannya ditambahkan **(+)**. Selector ini digunakan ketika kamu ingin memilih suatu elemen setelah elemen yang ada sebelumnya (hanya dapat memilih 1). Untuk lebih jelasnya kamu dapat melihat contoh berikut:

```html
<html>
<div class='class'>
    <h1>Tester Header 1</h1>
</div>
<h1>Tester Header 2</h1>
<div class='class'>
    <h1>Tester Header 3</h1>
</div>
<h1>Tester Header 3</h1>
<h1>Tester Header 5</h1>
 </html>
```


```css
.class + h1{
    background-color: #840618;
}
```

- `General Sibling Selector` untuk selector ini kamu menambahkan **(~)**. Ini memiliki sedikit karakteristik yang sama dengan `Adjacent Sibling Selector` bedanya dia memilih elemen yang sama (bisa lebih dari 1) setelah elemen sebelumnya. Untuk Lebih jelasnya kamu dapat melihat contoh berikut:


```html
<html>
<div class='class'>
    <h1>Tester Header 1</h1>
</div>
<h1>Tester Header 2</h1>
<h1>Tester Header 3</h1>
<div class='class'>
    <h1>Tester Header 4</h1>
</div>
<h1>Tester Header 5</h1>
<h1>Tester Header 6</h1>
</html>
```


```css
.class ~ h1{
    background-color: #840618;
}
```
