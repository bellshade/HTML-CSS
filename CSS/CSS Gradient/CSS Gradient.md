## CSS Gradients

### Apa itu CSS Gradient?

CSS Gradient adalah properti yang dapat kamu buat untuk 2 warna atau lebih namun hasilnya tidak monoton.

CSS Gradient sendiri memiliki beberapa properti didalam-nya yaitu:

- `Linear-Gradient` - Untuk membuat linear berdasarkan atas, kanan, bawah, kiri serta berbentuk derajat. Oiya guys untuk linear gradient ini defauklnya ke arah bawah yaa.
- `Radial-Gradient` - Untuk membuat linear yang membentuk bulat ke tengah.

###  Penggunaan Linear - Gradient

syntax yang digunakan :

```css
.claas{
    background-image: linear-gradient(arah atau nominal derajat, warna mulai, warna akhir);
}
```


## Contoh `Linear-Gradient` - membuat linear gradient dengan penggunaan arah

- contoh penggunaan `Linear-Gradient` ke Kanan


```css
.claas{
    background-image: linear-gradient(to right, red, yellow);
}
```
 
-contoh penggunaan `Linear-Gradient` dengan Diagonal

dengan menggunakan ini kita dapat mendapatkan grandient yang lebih spesifik untuk horizontal dan vertikalnya.


```css
.claas{
    background-image: linear-gradient(to top right, red, yellow);
}
```

## Contoh `Linear-Gradient` - membuat linear gradient dengan penggunaan derajat

Untuk benar-benar mendapatkan arah dari grandient yang lebih tepat dan spesifik kamu dapat menggunakan derajat. Default nilai dari derajat ini adalah 0deg akan mengarah ke atas, 90deg mengarah ke kanan 180deg mengarah 


- contoh penggunaan `Linear-Gradient` 90deg


```css
.claas{
    background-image: linear-gradient(90deg, red, yellow);
}
```

### Penggunaan `Radial-Gradient`

syntax yang digunakanan :

```css
.claas{
    background-image: radial-gradient((ukuran/bentuk/posisi), warna mulai, warna akhir);
}
```

### Penggunaan `Radial-Gradient`

```css
.claas{
    background-image: radial-gradient(circle, red, green);
}
```
