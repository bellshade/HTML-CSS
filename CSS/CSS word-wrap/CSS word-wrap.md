## CSS WORD-WRAP
### Apa itu CSS word-wrap ?

CSS word-wrap adalah properti yang bertujuan untuk mengatur elemen tulisan dalam elemen parent-nya.

**CSS word-wrap ada 4 jenis**
- ```normal```
- ```break-word```
- ```initial```
- ```inherit```

### Word-wrap normal

Sebuah elemen dengan ```word-wrap: normal;``` hanya akan bisa mengatur tulisan pada titik yang mengizinkan untuk diatur (spasi).
#### Contoh

**HTML**
```html
<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fuga reprehenderit earum natus cupiditate delenitirationeperspiciatisrepudiandaelaudantium vero. Reiciendis molestias ut exercitationem quasi rerum a quaerat sit! Assumenda!</div>
```
**CSS**
```css
div{
  width: 50px
  border: 1px solid black;
  word-wrap: normal;
}
```
### Word-wrap break-word

Sebuah elemen dengan ```word-wrap: break-word;``` mengizinkan tulisan untuk diatur.
#### Contoh

**HTML** 
```html
<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fuga reprehenderit earum natus cupiditate deleniti ratione perspiciatis repudiandae laudantium vero. Reiciendis molestias ut exercitationem quasi rerum a quaerat sit! Assumenda!</div>
```
**CSS**
```css
div{
  width: 50px
  border: 1px solid black;
  word-wrap: break-word;
}
```

### Word Wrap Initial

sebuah elemen dengan ```word-wrap: initial;``` memiliki nilai default word-wrap dari elemen itu sendiri.
#### Contoh

**HTML**
```html
<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fuga reprehenderit earum natus cupiditate delenitirationeperspiciatisrepudiandaelaudantiumvero. Reiciendis molestias ut exercitationem quasi rerum a quaerat sit! Assumenda!</div>
```
**CSS**
```css
div{
  width: 50px
  border: 1px solid black;
  word-wrap: initial;
}
```
### Word-Wrap inherit
Sebuah elemen dengan ```word-wrap: inherit;``` memiliki nilai word-wrap yang diwariskan dari elemen parent-nya.
#### Contoh

**HTML**
```html
<div class="judul">
      <div class="isi">
          <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantiumaliasinmodienimmolestiaebeataeadveniamanimi!Nesciunt dolorum doloremque reprehenderit suscipit necessitatibus sunt explicabo autem rem quis quibusdam!</li>
              <li>A sunt saepe assumenda tempore, repudiandae tenetur nostrum natus! Dolor tempora fugit, repudiandae a, fugiat voluptate explicabo excepturi deleniti in deserunt, nesciunt eius quasi officiis sunt. Rerum sint ducimus adipisci.</li>
              <li>Molestias, aut consequuntur quia adipisci, corrupti fuga animi cupiditate hic reprehenderit nulla, est quam porro iste? Nemo assumenda consequuntur, sed quae, molestiae ratione, soluta optio dignissimos similique reprehenderit sunt ex?</li>
              <li>Ea possimus est tenetur assumenda cumque soluta quasi asperiores eum, veniam enim quisquam, adipisci, voluptatum dolor et! Dolorum quidem omnis perspiciatis consequatur ad! Praesentium laborum, magnam odit vero nisi aut!</li>
              <li>Quam ea veniam eligendi. Nemo dolore alias atque iusto dolorem vitae et maxime expedita obcaecati? Libero, ex unde eum quos aut quis culpa adipisci, repellat architecto inventore ipsam ea dolore?</li>
         </ul>
      </div>
</div>
```
**CSS**
```css
.judul{
    width: 150px;
    border: 5px solid blue;
}
.isi{
    word-wrap: inherit;
}
```
   
Referensi: https://www.w3schools.com/cssref/css3_pr_word-wrap.asp   
