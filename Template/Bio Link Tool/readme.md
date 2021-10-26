## Panduan Penggunaan Template Bio Link Tool


1. Ganti elemen dibawah pada file [index.html](index.html) dengan namamu sendiri.
  ```HTML
  <title>@Your Username</title>
  ```
2. Ubah foto dari avatar dan username pada file [index.html](index.html) dengan avatar juga username milikmu.
  ```HTML
    <div class="header">
        <div class="avatar">
          <img src="https://www.blexar.com/avatar.png" alt="" />
        </div>
        <div class="username">
          <h3>@Your Username</h3>
        </div>
    </div>
  ```

3. Sesuaikan penggunaan long button dengan kebutuhan pada file [index.html](index.html)
  ```HTML
  <div class="long-button">
      <a
        href=""
        target="_blank"
        class="long-btn"
      >
      Content Long Button
      </a>
    </div>
  ```

4. Gunakan social button dengan syntaks:
  ```HTML
    <li class="instagram">
      <a href="" 
      target="_blank"
      class="fab fa-twitch"
      ></a>
    </li>
  ```
  Tukar class li dengan nama social media juga a class mengikuti syntaks `fab fa-(nama social media)`

  untuk hasil yang responsive, penggunaan social button maksimal 8 Item.

  Warna social media yang tersedia bisa dilihat pada file [Sbutton.css](Style/Sbutton.css)
  dapat ditambahkan dengan syntaks:
  ```CSS
  .circle ul li .fa-(nama social media):hover {
  color: #(warna social media);
  }
  ```
