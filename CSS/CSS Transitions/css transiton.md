# CSS TRANSITIONS

CSS transition itu apa sih ? CSS transition adalah format CSS yang memberikan efek smooth pada suatu elemennt  

### Property apa aja sih yang ada di CSS Transition  ?

di CSS Transitions beberapa property yaitu

- transition-delay
- transiton-duration
- transtion-property
- transtion-timing-function

**Semua property ini bisa digabung menjadi satu yaitu dengan**

```css
transition: {(property) (duration) (delay) (timing-function)}
```

## Pembahasan Property CSS Transition

- transition-delay
  tujuan: menunda element saat akan melakukan transisi
  **Contoh Penggunaan**

```css
div {
  transition-delay: 1.2s;
  /* Penggunaan waktu delay sesuai kebutuhan  */
}
```

- transtion-duration
  tujuan: untuk mengatur waktu suatu element
  **Contoh Penggunaan**

```css
div {
  transition-duration: 3s;
  /* Penggunaan durasi bebas sesuai kebutuhan  */
}
```

- transition-property
  tujuan: untuk mengatur animasi css
  **Contoh Penggunaan**

```css
div {
  /* Yang sering digunakan */
  /* Pilih salah satu  */
  transition-property: all;
  transition-property: none;
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
  transition-timing-function: ease-in-out;

  /* (cubic-bezier(n,n,n,n)) kecepatan bisa diatur sendiri sesuai kubutuhan */
  transition-timing-function: cubic-bezier(n, n, n, n);
}
```

**Referensi : (https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp), (https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property)**
