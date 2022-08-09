## CSS Box Sizing

### Apa Itu CSS Box Sizing?

CSS Box Sizing adalah cara untuk menentukan bagaimana lebar dan tinggi suatu elemen dihitung.

Jika ```box-sizing``` tidak ditentukan nilainya, maka secara default lebar dan tinggi suatu elemen akan dihitung seperti berikut :

- lebar + padding + border = lebar asli dari elemen
- tinggi + padding + border = tinggi asli dari elemen

Ini berarti ketika kita menentukan lebar dan tinggi suatu elemen, maka seringkali elemen akan tampak lebih besar dari pada yang kita tentukan. Hal ini terjadi karena padding dan border juga dihitung ketika menentukan lebar atau tinggi elemen. 

### Properti Box Sizing
Properti ```box-sizing``` memiliki 4 nilai yang dapat digunakan untuk menentukan bagaimana lebar dan tinggi suatu elemen 
- ```box-sizing: content-box``` - nilai default dari properti ```box-sizing```. Lebar dan tinggi elemen hanya mencakup konten di dalamnya saja, padding dan border belum termasuk.
- ```box-sizing: border-box``` - Lebar dan tinggi elemen sudah mencakup konten, padding, dan border.
- ```box-sizing: initial``` - mengatur nilai properti ke nilai defaultnya.
- ```box-sizing: inherit``` - mengatur nilai properti menjadi sama dengan elemen induknya.

Contoh:
```css
/* 
    Lebar elemen .div1 hanya akan mencakup konten didalamnya saja, sehingga lebar sesungguhnya adalah:
    300 + (50 * 2) + (1 * 2) = 402px
*/
.div1 {
    width: 300px;
    height: 100px;
    padding: 50px;
    border: 1px solid blue;
    box-sizing: content-box;
}

/* 
    Lebar elemen .div2 sudah mencakup konten, padding, dan bordernya sehingga lebar sesungguhnya akan tetap 300px.
*/

.div2 {
    width: 300px;
    height: 100px;  
    padding: 50px;
    border: 1px solid red;
    box-sizing: border-box;
}
```

