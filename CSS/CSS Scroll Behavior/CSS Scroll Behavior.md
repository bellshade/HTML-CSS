# CSS Scroll Behavior

## Apa CSS Scroll Behavior
Properti `scroll-behavior` adalah properti untuk menentukan apakah scroll menjadi halus atau tidak. Ketika user mengklik suatu link yang mengarahkan pada elemen tertentu, tampilan user akan langsung berpindah secara instan ke elemen yang dituju. Sedangkan jika properti `scroll-behavior` di atur, maka user akan berpindah secara halus ke elemen yang dituju.

## Properti Scroll Behavior
Properti ```scroll-behavior``` memiliki 4 nilai yang dapat digunakan untuk menentukan bagaimana perilaku scroll.
- ```scroll-behavior: auto``` - Membuat scroll berpindah secara instan dari satu elemen ke elemen lain. Nilai ini adalah nilai default.
- ```scroll-behavior: smooth``` - Membuat scroll berpindah secara halus dari satu elemen ke elemen lain.
- ```scroll-behavior: initial``` - Mengatur nilai properti ke nilai defaultnya.
- ```scroll-behavior: inherit``` - Mewarisi nilai properti dari elemen induknya.

## Contoh
```css
html {
    scroll-behavior: smooth;
}
```

## Referensi
* [CSS scroll-behavior Property](https://www.w3schools.com/cssref/pr_scroll-behavior.asp)
