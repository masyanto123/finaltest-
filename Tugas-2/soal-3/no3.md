Strict Mode:
"use strict";: Mengaktifkan mode ketat di JavaScript, yang membantu mengidentifikasi kesalahan dan perilaku yang tidak aman dalam kode. Ini juga mencegah penggunaan variabel tanpa deklarasi.
"use strict";

Deklarasi Fungsi printTriangle:
Fungsi printTriangle menerima satu parameter height, yang menentukan tinggi segitiga yang akan dicetak.
function printTriangle(height) {
Loop Pertama (Untuk Baris Segitiga):

for (let i = 1; i <= height; i++): Loop ini berjalan dari 1 hingga height untuk membuat setiap baris segitiga.
    for (let i = 1; i <= height; i++) {
Deklarasi Variabel row:
let row = '';: Inisialisasi variabel row sebagai string kosong untuk menyimpan bintang pada setiap baris.

        let row = '';
Loop Kedua (Untuk Bintang di Setiap Baris):
for (let j = 1; j <= i; j++): Loop ini berjalan dari 1 hingga i untuk menambahkan bintang ke dalam row.

        for (let j = 1; j <= i; j++) {
Menambahkan Bintang ke row:
row += '*';: Menambahkan satu bintang ke dalam row pada setiap iterasi loop kedua.

            row += '*';
Mencetak Baris ke Konsol:
console.log(row);: Mencetak row ke konsol, sehingga setiap baris segitiga terlihat.

        console.log(row);
    }
}
Memanggil Fungsi printTriangle:
printTriangle(10);: Memanggil fungsi printTriangle dengan argumen 10, sehingga segitiga dengan tinggi 10 baris akan dicetak.

printTriangle(10);
Hasil:
Ketika Anda menjalankan kode ini, Anda akan melihat segitiga bintang dengan tinggi 10 baris yang dicetak ke konsol, seperti ini:


*
**
***
****
*****
******
*******
********
*********
**********
Rangkuman:
Kode ini mencetak segitiga bintang ke konsol dengan tinggi yang ditentukan oleh parameter height. Loop pertama mengontrol jumlah baris, sementara loop kedua menambahkan bintang ke setiap baris. Kode ini berguna untuk memahami dasar-dasar loop bersarang dan manipulasi string di JavaScript.
