## CSS Pseudo Element

### Apa itu Pseudo Element?

Pseudo element adalah element semu atau element palsu. Element semu? sebenarnya setiap kita membuat element
pada HTML, ada element semu yang bisa kita beri style. Pseudo element ditulis menggunakan 2 tanda titik dua (::)
setelah selector seperti ini.

```
selector::pseudo-element {
  property: value;
}
```

> catatan : Pada CSS1 dan CSS2, pseudo element ditulis menggunakan 1 tanda titik dua (:). Tujuan utama
> perubahan penulisan pseudo element adalah untuk mempermudah membedakan antara pseudo element dan pseudo
> class. Jangan heran apabila kalian menemukan penulisan pseudo element menggunakan 1 tanda titik dua (:).

### Macam-macam pseudo element

#### ::first-line
 
  Digunakan untuk menambahkan style pada baris pertama dalam sebuah text.

  contoh :

  ```css
  p::first-line {
    color: lightblue;
  }

  /*  
    baris pertama pada p
    akan berwarna biru muda
  */
  ```

#### ::first-letter

  Digunakan untuk menambahkan style pada huruf pertama dalam sebuah text.

  contoh :

  ```css
  h1::first-letter {
    color: lightgreen;
    font-size: 200%;
  }

  /*  
    huruf pertama pada h1 akan berwarna hijau muda
    dan berukuran lebih besar
  */
  ```

#### ::before
   
  Digunakan untuk menambahkan beberapa konten dan style di belakang/sebelum element. Pseudo element
  ini termasuk yang paling sering digunakan karena fungsinya yang cukup unik yaitu bisa menambahkan sesuatu
  pada element kita, bahkan kita bisa memasukkan icon pada pseudo element ini.

  contoh :

  ```css
  h1::before {
    content: "Before";
    background-color: blue;
  }

  /*
    Akan muncul tulisan "Before" yang memiliki background color berwarna biru
    di belakang element h1
  */
  ```

#### ::after
   
  Pseudo element ini kebalikan dari ::before, digunakan untuk menambahkan beberapa
  konten dan style di depan/setelah element. Pseudo element ini juga cukup sering digunakan.

  Contoh :

  ```css
  h1::after {
    content: "After";
    background-color: green;
  }

  /*
    Akan muncul tulisan "After" yang memiliki background color berwarna biru
    di depan element h1
  */
  ```

#### ::marker
  Pseudo element ini hanya bisa digunakan pada `list-item`, fungsinya untuk memberi style pada penanda dalam list.

  Contoh :

  ```css
  ul li::marker {
    color: orange;
  }

  /*
    Warna enanda dalam li akan berubah menjadi warna orange.
  */
  ```

#### ::selection
  Digunakan untuk memberi style pada saat user menyorot suatu element seperti
  meng-klik dan menyeret teks.

  ```css
  p::selection {
    color: green;
    background-color: lightblue;
  }

  /*
    Warna background dan warna font akan berubah saat user menyorot element p.
  */
  ```
