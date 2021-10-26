## CSS Pseudo-classes

### Apa Itu CSS Pseudo-classes?
Pseudo-classes berguna untuk mendefinisikan suatu keadaan khusus dari suatu elemen.

Biasa pseudo-classes digunakan untuk;
- Mengubah gaya elemen saat pengguna mengarahkan mouse ke elemennya.
- Mengubah gaya tautan yang dikunjungi dan yang belum dikunjungi secara berbeda.
- Mengubah gaya saat elemen tersebut dihover.

Syntaks Pseudo-classes
```CSS
selector:pseudo-class {
  property: value;
}
```

### Contoh Penggunaan Pseudo-classes

**1. Anchor Pseudo-classes**

Links dapat ditampilkan dengan gaya yang berbeda:
```CSS
/* unvisited link */
a:link {
  color: #DDE2C6;
}

/* visited link */
a:visited {
  color: #E40066;
}

/* mouse over link */
a:hover {
  color: #03CEA4;
}

/* selected link */
a:active {
  color: #090C02;
}
```

**2. Pseudo-classes dan elemen HTML**

Pseudo-classes dapat juga digabungkan dengan elemen HTML
```CSS
div.cardA:hover {
  color: #ff0000;
}
```

**3. `:first-child` Pseudo-classes**

Pseudo-classes `:first-child` menargetkan anak pertama dari elemen yang ditargetkan.

```CSS
li:first-child {
  color: blue;
}
```

Daftar seluruh elemen Pseudo-classes: 

https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes