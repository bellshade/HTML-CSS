# Panduan Berkontribusi

## Kontributor

Kami sangat senang anda telah ikut berkontribusi dalam implementasi algortima, struktur data atau memperbaiki error.
Semua boleh ikut berkontribusi walaupun hal kecil dengan pengecualian sebagai berikut:

- Hasil pekerjaan kamu adalah buatan kamu sendiri dan tidak ada hak cipta dari orang lain.
  - Jika kami menemukan kesamaan maka kami tidak `merged`.
- Hasil kerja kamu akan berlisensi [MIT](LICENSE) ketika permintaan pull kamu sudah di merged.
- Hasil kerja kamu wajib mengikuti standar dan style koding dari kami.
- Penggunaan nama file bersifat `camelCase` dan berlaku juga untuk variable dan identifier.
- Menggunakan output `.html`.

## Apa Itu Algoritma?

Algoritma adalah langkah-langkah untuk menyelesaikan suatu pekerjaan dimana terdiri dari 3 bagian utama, yaitu:

- Input/masukan, sebelum menjalankan sebuah algoritma maka hal yang pertama harus dilakukan adalah menerima masukan, input dapat berasal dari pengguna ataupun dari langkah sebelumnya.
- Proses, bagian utama dari algoritma yang melakukan pengolahan input yang akan menghasilkan output.
- Output/keluaran, output adalah hasil dari bagian proses, output ini juga bisa digunakan untuk langkah selanjutnya (jika masih ada).

Algoritma harus dikemas sedemikian rupa sehingga memudahkan pembaca untuk memasukkannya ke dalam program yang lebih besar.

Algoritma harus memiliki:

- Memiliki nama kelas dan fungsi intuitif yang memperjelas tujuannya bagi pembaca
- Menggunakan konvensi penamaan Javascript dan nama variabel intuitif untuk memudahkan pemahaman
- Fleksibel untuk mengambil nilai input yang berbeda
- Memiliki docstrings dengan penjelasan yang jelas dan/atau URL ke materi sumber
- Berisi doctests yang menguji nilai input yang valid dan salah
- Kembalikan semua hasil perhitungan alih-alih mencetak atau memplotnya

# *Pull Request*

### ***Pull request* yang baik**

Informasi: gunakan [*issue*](https://github.com/bellshade/Python/issues) apabila ingin menambahkan kode atau implementasi algoritma, dll (*basic*) agar tidak ada konflik dengan *pull request* lainnya.

- Lakukan penjelasan deskripsi perubahan yang anda lakukan pada repositori kami dengan membuat penjelasan di [*issue*](https://github.com/bellshade/Python/issues).
- Setelah menjelaskan perubahan anda di [*issue*](https://github.com/bellshade/Python/issues) kemudian lakukan *fork* pada repositori kami.
- Setelah melakukan *fork*, anda dibebaskan untuk mengubah atau menambah algoritma.
  - Untuk *pull request* merubah atau memperbaiki, diusahakan kamu menerapkan algoritma yang lebih baik dan lebih mudah serta memeberikan penjelasan lebih detail alasan dari perubahaan tersebut lebih baik dari sebelumnya.
- Lakukan tes dengan menggunakan ``pytest`` dan ``flake8`` secara lokal.
- Setelah merubah-rubah atau menambahkan algoritma serta melakukan tes lokal kode kamu, usahakan kamu membuat *local branch* baru:
  ```bash
  git checkout -b <branch_name>
  git add . # atau git add nama_perubahan_kamu.py
  git commit -m "feat: menambahkan algoritma terbaru"
  ```
- Lakukan *push* ke *branch* kamu dan kemudian *open pull request*.

**Saran pesan commit**

- `feat:` untuk menambah algoritma atau tambahan lainnya;
- `fix:` untuk mengubah algoritma yang sudah ada atau memperbaiki;
- `docs:` untuk mengubah atau membuat dokumentasi;
- `add:` untuk menambah algoritma atau tambahan lainnya (opsional); 

Catatan: pesan commit harus menjelaskan perubahan secara singkat.

Contoh: 
- &#9746; feat: test_x.py
- &#9745; feat: tambah unittest untuk algoritma x

Lebih lengkapnya bisa dilihat di:
- [EN](https://www.conventionalcommits.org/en/v1.0.0/)
- [ID](https://www.conventionalcommits.org/id/v1.0.0/)

Pull request akan di-*merge* jika:

- mengikuti standar dan arahan dari `CONTRIBUTING.md`;
- lulus tes dan cek dari beberapa tes yang sudah kami siapkan.

**Tambahan**:

- Jika ada kendala atau masalah dalam *pull request*, kamu bisa laporkan masalahnya dalam [issue](https://github.com/bellshade/PythonAlgorithm/issues).
- Jika ada tes yang tidak lewat atau gagal, kami akan cek kembali perubahan anda.

Untuk *pull request*, disarankan untuk menjelaskan secara detail yang kamu ubah atau tambahkan, dan bersikap sopan serta selalu berterima kasih. Itu salah satu bentuk tata krama yang baik terhadap sesama *contributor* dan *programmer* lainnya.
