## CSS object-fit

### Apa itu CSS object-fit?

Property CSS `object-fit` digunakan untuk menentukan bagaimana tag `<img>` atau `<video>` diubah ukurannya agar sesuai dengan wadah atau containernya.

Beberapa value dari `object-fit` diantaranya :

- `fill`
- `contain`
- `cover`
- `scale-down`
- `none`

### Studi kasus :

**Gambar yang akan digunakan :**

![Natures](natures.jpg)

### object-fit: cover;

Gambar akan mempertahankan aspek rasionya dan memenuhi dimensi yang diberikan, lalu gambar akan dipotong agar menyesuaikan wadah atau containernya :

### Sintaksis :

```html
<img class="cover" src="natures.jpg" alt="..." />
```

```css
img {
	width: 300px;
	height: 400px;
	border: 2px solid blue;
}

.cover {
	object-fit: cover;
}
```

![Cover](cover.png)

### object-fit: fill;

Gambar akan diubah ukurannya untuk memenuhi dimensi yang diberikan. Jika perlu, gambar akan direnggangkan agar menyesuaikan wadah atau containernya :

### Sintaksis :

```html
<img class="fill" src="natures.jpg" alt="..." />
```

```css
img {
	width: 300px;
	height: 400px;
	border: 2px solid blue;
}

.fill {
	object-fit: fill;
}
```

![Fill](fill.png)

### object-fit: contain;

Gambar akan mempertahankan aspek rasionya, tetapi diubah ukurannya agar sesuai dengan dimensi yang diberikan :

### Sintaksis :

```html
<img class="contain" src="natures.jpg" alt="..." />
```

```css
img {
	width: 300px;
	height: 400px;
	border: 2px solid blue;
}

.contain {
	object-fit: contain;
}
```

![Contain](contain.png)

### object-fit: scale-down;

Gambar akan diperkecil ke versi terkecil dari gambar tersebut :

### Sintaksis :

```html
<img class="scale-down" src="natures.jpg" alt="..." />
```

```css
img {
	width: 300px;
	height: 400px;
	border: 2px solid blue;
}

.scale-down {
	object-fit: scale-down;
}
```

![Scale-down](scale-down.png)

### object-fit: none;

Gambar tidak akan diubah ukurannya dan tetap dengan ukuran aslinya :

### Sintaksis :

```html
<img class="none" src="natures.jpg" alt="..." />
```

```css
img {
	width: 300px;
	height: 400px;
	border: 2px solid blue;
}

.none {
	object-fit: none;
}
```

![None](none.png)

### Referensi

Untuk referensi lengkapnya, kalian bisa mengunjungi website berikut:

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
- [W3Schools](https://www.w3schools.com/css/css3_object-fit.asp)
