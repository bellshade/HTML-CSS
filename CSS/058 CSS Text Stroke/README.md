# TEXT STROKE
## Apa itu Text Stroke

Yaitu properti eksperimental yang menyediakan opsi dekorasi teks yang serupa dengan yang ditemukan di Adobe Illustrator atau aplikasi menggambar vektor lainnya, untuk menampilkan border pada text.
`text-stroke` kompetibel di semua browser, kecuali internet explorer [info](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-stroke)
<br>
```css
div {
  -webkit-text-stroke: 2px red;
}
/* atau */
div {
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: red;
}
```
Properti `text-stroke` sebetulnya adalah gabungan dari dua properti lainnya: 
1. **text-stroke-width**, nilai satuan (1px, 0.125em, 4in, dan sebagainya) dan menjelaskan ketebalan efek stroke. 
<br>```-webkit-text-stroke-width: 1px;```
3. **text-stroke-color**, nilai warna (hex, rgb/rgba, hsl/hsla, dan sebagainya).
<br>```-webkit-text-stroke-color: #000000;``` 

`text-stoke` jika ingin diberi warna pada text bisa dengan ```-webkit-text-fill-color: red;``` atau ```color: red;```

## Langsung saja ke demonya
![screenshot-jsfiddle net-2021 11 06-21_12_40](https://user-images.githubusercontent.com/9263047/140612837-71a849e3-a6d8-4dae-a70b-7f09936d15cf.png)

```css
div {
  font-size: 60px;
  font-weight: bold;
  -webkit-text-stroke-width:2px;
  -webkit-text-stroke-color:red;
  -webkit-text-fill-color: cyan;
}
```
## Referensi [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-stroke)
