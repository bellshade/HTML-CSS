# CSS transitions

CSS Transition Itu Apa Sih? CSS Transition Adalah format css Yang Memberikan Efek Smooth
pada suatu Element.

### Property Apa Aja Sih Yang Ada Di CSS Transitions ?

di CSS Transitions beberapa property yaitu

- transition-delay
- transiton-duration
- transtion-property
- transtion-timing-function

**semua property ini bisa digabung menjadi satu yaitu dengan**

```css
transition: {(property) (duration) (delay) (timing-function)}
```

## Pembahasan Property CSS Transition

- transiton-delay
  tujuan: menunda element saat akan melakukan transisi
  **Contoh Penggunaan**

```css
div {
  transition-delay: 1.2s;
  /* Penggunaan Waktu Delay Bebas Sesuai Kebutuhan */
}
```

- transtion-duration
  tujuan: untuk mengatur Waktu Suatu Element
  **Contoh Penggunaan**

```css
div {
  transition-duration: 3s;
  /* Penggunaan Durasi Bebas Sesuai Kebutuhan */
}
```

- transition-property
  tujuan: untuk mengatur animasi css
  **Contoh Penggunaan**

```css
div {
  /* Yang Sering Di Gunakan */
  /* Pilih Salah Satu */
  transition-property: all;
  transiton-property: none;
  transition-property: margin-left;
  transition-property: margin-right;
}
```

- transition-timing-function
  tujuan: menentukan kurva kecepatan efek transisi
  **Contoh Penggunaan**

```css
div {
  /* 1. (ease) Merupakan timing Defaul */
  transition-timing-function: ease;

  /* 2.(linear) kecepatan sama dari awal hingga akhir */
  transition-timing-function: linear;

  /* 3. (ease-in) kecepatan lambat di awal */
  transiton-timing-function: ease-in;

  /* 4. (ease-out) merupakan kebalikan dari (ease-in). (ease-out) kecepatan lambat di akhir */
  transiton-timing-function: ease-out;

  /* 5. (ease-in-out) merupakan gabungan dari (ease-in) dan (ease-out).(ease-in-out) kecepatan awal dak akhir lambat */
  transiton-timing-function: ease-in-out;

  /* (cubic-bezier(n,n,n,n)) kecepatan bisa diatur sendiri sesuai kubutuhan */
  transiton-timing-function: cubic-bezier(n, n, n, n);
}
```

**Referensi : (https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp), (https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property)**
