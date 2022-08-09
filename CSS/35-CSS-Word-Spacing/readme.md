## CSS WORD-SPACING

### Apa itu CSS word-spacing ?

Properti `word-spacing` pada CSS mengatur jarak spasi antara kata dalam suatu elemen.

**CSS word-spacing memiliki beberapa value** -`normal` -`length` -`initial` -`inherit`

### word-spacing: normal;

Sebuah elemen dengan `word-spacing: normal;` memiliki spasi dengan jarak normal antar kata (0.25em). ini adalah nilai default.

#### Contoh

**HTML**

```html
<div>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fuga reprehenderit earum natus cupiditate deleniti ratione perspiciatis repudiandae laudantium vero. Reiciendis molestias ut exercitationem quasi rerum a quaerat sit!
  Assumenda!
</div>
```

**CSS**

```css
div {
  word-spacing: normal;
}
```

### word-spacing: length;

Sebuah elemen dengan `word-spacing: length;` memiliki jarak antar kata atau spasi yang bisa diatur length ada beberapa satuan (px, pt, cm, em, dll). Selain itu boleh juga menggunakan angka negatif untuk memberi jarak.

#### Contoh

**HTML**

```html
<div>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fuga reprehenderit earum natus cupiditate deleniti ratione perspiciatis repudiandae laudantium vero. Reiciendis molestias ut exercitationem quasi rerum a quaerat sit!
  Assumenda!
</div>
```

**CSS**

```css
div {
  word-spacing: 30px;
}
```

### word-spacing: initial;

Sebuah elemen dengan `word-spacing: initial;` memiliki jarak antar kata atau spasinya akan diatur ke nilai default spasinya.

#### Contoh

**HTML**

```html
<div>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fuga reprehenderit earum natus cupiditate deleniti ratione perspiciatis repudiandae laudantium vero. Reiciendis molestias ut exercitationem quasi rerum a quaerat sit!
  Assumenda!
</div>
```

**CSS**

```css
div {
  word-spacing: initial;
}
```

### Selain itu bisa juga digunakan sebagai animasi

#### Contoh

**HTML**

```html
<div id="tulisan">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
  ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
  luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus
  legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.
</div>
```

**CSS**

```css
#tulisan {
  border: 1px solid black;
  animation: mymove 5s infinite;
}

@keyframes mymove {
  50% {
    word-spacing: 50px;
  }
}
```

Referensi: https://www.w3schools.com/cssref/pr_text_word-spacing.asp
