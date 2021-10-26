## CSS Comments

### Apa Itu CSS Comments ? 
CSS Comments berfungsi untuk membantu menjelaskan serta mendokumentasikan style anda.

Anda dapat menggunakan Comments pada CSS dengan bentuk penulisan style internal, external hingga inline style

```CSS
/* ini adalah penggunaan comments menggunakan satu baris */
div{
    background-color : red;
}

/*  ini adalah 
    penggunaan 
    comments menggunakan
    lebih dari satu baris 
*/
p{
    color : blue
}
```

### Contoh Penerapan Comment pada CSS

***Comment Biasa*** 
```CSS
/* ini adalah comment biasa */
```

***Comment pada property selector***
```CSS
div{
    position : relative;
    height : 100vh;
    /* background-color : salmon */
}
```
***Comment pada internal style HTML***
```HTML
<style>
div{
    position : relative;
    height : 100vh;
    /* background-color : salmon */
}
</style>
```

***Comment pada inline style***
```HTML
<p style="/* color: blue; */ /* text-align: center; */">Hello World</p>
```

