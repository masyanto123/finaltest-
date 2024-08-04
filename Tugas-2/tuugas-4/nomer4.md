Penjelasan Kode:
Fungsi getGrade:
Fungsi ini menerima parameter score bertipe number dan mengembalikan sebuah string yang menunjukkan nilai huruf berdasarkan rentang nilai.
Rentang nilai:
A untuk nilai antara 90 hingga 100.
B untuk nilai antara 80 hingga kurang dari 90.
C untuk nilai antara 70 hingga kurang dari 80.
D untuk nilai antara 60 hingga kurang dari 70.
E untuk nilai di bawah 60.
Fungsi ini menggunakan if statements untuk menentukan huruf nilai berdasarkan rentang nilai.

Fungsi calculateAverageAndGrade:
Fungsi ini menerima empat parameter (webProgramming, computerProgramming, statistics, dan databaseSystems) semuanya bertipe number.
Fungsi ini menghitung rata-rata dari keempat parameter tersebut.
Kemudian, menggunakan fungsi getGrade untuk menentukan nilai huruf berdasarkan rata-rata.
Fungsi ini mengembalikan sebuah objek yang berisi rata-rata dan nilai huruf.

Penggunaan Fungsi:
Variabel webProgramming, computerProgramming, statistics, dan databaseSystems diisi dengan nilai-nilai contoh.
Fungsi calculateAverageAndGrade dipanggil dengan nilai-nilai tersebut dan hasilnya disimpan dalam variabel result.
console.log digunakan untuk menampilkan rata-rata yang sudah diformat dengan dua desimal dan nilai huruf ke konsol.

Rangkuman:
Fungsi getGrade: Menghitung dan mengembalikan nilai huruf berdasarkan nilai input.
Fungsi calculateAverageAndGrade: Menghitung rata-rata dari empat nilai input dan menentukan nilai huruf berdasarkan rata-rata tersebut.
Penggunaan Fungsi: Menghitung rata-rata dan nilai huruf dari nilai-nilai contoh dan menampilkan hasilnya. Blok try dan catch digunakan untuk menangani potensi kesalahan, meskipun dalam contoh ini tidak ada operasi yang bisa melemparkan kesalahan.
Kode ini menunjukkan cara menghitung rata-rata nilai dan menentukan nilai huruf dengan TypeScript, serta cara menampilkan hasilnya dengan format yang sesuai.
