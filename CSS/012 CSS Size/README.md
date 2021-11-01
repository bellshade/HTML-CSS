# CSS SIZE

## Apa itu CSS size?

CSS size adalah property CSS yang digunakan untuk mengatur ukuran pada suatu element

Ada beberapa property size yaitu

- width
- height
- max-width
- min-width
- max-height
- min-height

## Langsung ke kodenya

---

## width

```css
div {
  /* Penjelasan */
  /* property width : digunakan untuk mengatur lebar */
  /* Satuan yang biasa digunakan px atau % */
  width: 100px;
}
```

Contoh memakai persentase (%)

```css
div {
  width: 100%;
}
```

---

## height

```css
div {
  /* Penjelasan */
  /* Property height : digunakan untuk mengatur tinggi  */
  /* Satuan yang biasa digunakan px atau % */
  height: 50px;
}
```

Contoh memakai persentase (%)

```css
div {
  height: 50%;
}
```

---

## max-width

```css
div {
  max-width: 200px;
}
```

### Cara Kerja

Jadi ketika layar lebih dari besar `200px` maka, element di dalamnya akan secara otomatis mengubah tinggi element.

### Referensi https://www.w3schools.com/css/css_max-width.asp

---

## min-width

```css
div {
  min-width: 500px;
}
```

### Cara kerja

Jadi ketika layar kurang dari `500px` maka, element di dalamnya akan menyesuaikan ke bawah.
Jika lebih dari `500px`, maka`min-width` tidak bekerja.

### Referensi https://www.w3schools.com/cssref/pr_dim_min-width.asp

---

## max-height

```css
div {
  max-height: 60px;
}
```

### Cara kerja

Jadi ketika konten/element lebih besar dari `60px`, maka element/konten akan menyesuaikan layarnya. biasanya property ini digunakan bersama dengan property overflow agar terlihat lebih bagus.

### Referensi https://www.w3schools.com/cssref/pr_dim_max-height.asp

---

## min-height

```css
div {
  min-height: 200px;
}
```

### Cara kerja

Jadi ketika element lebih kecil dari `200px`, maka element akan menyesuaikan ke bawah.

### Referensi https://www.w3schools.com/cssref/pr_dim_min-height.asp
