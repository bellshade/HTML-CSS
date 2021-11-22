# Panduan Berkontribusi

## Kontributor

Kami sangat senang anda telah ikut berkontribusi dalam implementasi algoritma, struktur data atau memperbaiki error.
Semua boleh ikut berkontribusi walaupun hal kecil dengan pengecualian sebagai berikut:

- Hasil pekerjaan kamu adalah buatan kamu sendiri dan tidak ada hak cipta dari orang lain.
  - Jika kami menemukan kesamaan maka kami tidak `merged`.
- Hasil kerja kamu akan berlisensi [MIT](LICENSE) ketika permintaan pull kamu sudah di merged.
- Hasil kerja kamu wajib mengikuti standar dan style koding dari kami.
- Penggunaan nama file bersifat `camelCase` dan berlaku juga untuk variable dan identifier.
- Menggunakan output `.html`.

# *Pull Request*

### ***Pull request* yang baik**

Informasi: gunakan [*issue*](https://github.com/bellshade/HTML-CSS/issues) apabila ingin menambahkan kode atau memperbaiki kode, dll (*basic*) agar tidak ada konflik dengan *pull request* lainnya.

- Lakukan penjelasan deskripsi perubahan yang anda lakukan pada repositori kami dengan membuat penjelasan di [*issue*](https://github.com/bellshade/HTML-CSS/issues).
- Setelah menjelaskan perubahan anda di [*issue*](https://github.com/bellshade/HTML-CSS/issues) kemudian lakukan *fork* pada repositori kami.
- Setelah melakukan *fork*, anda dibebaskan untuk mengubah atau menambah kode.
- Untuk *pull request* merubah atau memperbaiki, diusahakan kamu menerapkan kode yang lebih baik dan lebih mudah serta memeberikan penjelasan lebih detail alasan dari perubahaan tersebut lebih baik dari sebelumnya.
- Diusahakan untuk membuat branch baru setelah fork. Untuk membuat branch baru lihat tulisan kode dibawah ini :
  ```bash
  git checkout -b <branch_name>
  git add . # atau git add nama_perubahan_kamu
  git commit -m "feat: menambahkan kode html terbaru"
  ```
- Lakukan *push* ke *branch* kamu dan kemudian *open pull request*.

**Saran pesan commit**

- `feat:` untuk menambah algoritma atau tambahan lainnya;
- `fix:` untuk mengubah algoritma yang sudah ada atau memperbaiki;
- `docs:` untuk mengubah atau membuat dokumentasi;
- `add:` untuk menambah algoritma atau tambahan lainnya (opsional); 

Catatan: pesan commit harus menjelaskan perubahan secara singkat.

Contoh: 
- &#9746; feat: menambahkan kode html
- &#9745; feat: menambahkan kode html seperti ...

Lebih lengkapnya bisa dilihat di:
- [EN](https://www.conventionalcommits.org/en/v1.0.0/)
- [ID](https://www.conventionalcommits.org/id/v1.0.0/)

Pull request akan di-*merge* jika:

- mengikuti standar dan arahan dari `CONTRIBUTING.md`;
- lulus tes dan cek dari beberapa tes yang sudah kami siapkan.

### Pull request template
Untuk pull request template disarankan untuk menambahkan screenshot atau hasil dari template tersebut dengan menampilkannya pada deskripsi pada pull request.


**Tambahan**:

- Jika ada kendala atau masalah dalam *pull request*, kamu bisa laporkan masalahnya dalam [issue](https://github.com/bellshade/HTML-CSS/issues).
- Jika ada tes yang tidak lewat atau gagal, kami akan cek kembali perubahan anda.

Untuk *pull request*, disarankan untuk menjelaskan secara detail yang kamu ubah atau tambahkan, dan bersikap sopan serta selalu berterima kasih. Itu salah satu bentuk tata krama yang baik terhadap sesama *contributor* dan *programmer* lainnya.
