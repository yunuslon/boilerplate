# Boilerplate React Native

Proyek Boilerplate React Native yang siap digunakan untuk memulai pengembangan aplikasi seluler. Proyek ini telah dikonfigurasi dengan beberapa alat dan fitur umum yang umum digunakan dalam pengembangan aplikasi React Native.

## Fitur Utama

- **Navigasi:** Terintegrasi dengan React Navigation untuk manajemen navigasi yang mudah.
- **State Management:** Menggunakan Redux dan Redux Toolkit untuk manajemen state aplikasi.
- **Komponen UI:** Menggunakan komponen UI dari React Native Elements untuk antarmuka yang menarik.
- **API Requests:** Menerapkan manajemen permintaan HTTP menggunakan axios.
- **Redux Flipper:** Integrasi dengan Redux Flipper untuk memantau state Redux di alat Flipper.
- **Linting & Formatting:** Konfigurasi ESLint dan Prettier untuk kode yang konsisten.

## Persiapan

Pastikan Anda telah menginstal Node.js dan Yarn di sistem Anda sebelum memulai.

## Step 1: Panduan Instalasi

1. **Clone Repositori:** Salin repositori ini ke komputer Anda menggunakan 

```bash
git clone https://github.com/yunuslon/boilerplate
cd boilerplate
```
2. **Instal Dependensi:** Pasang semua dependensi proyek menggunakan
 ```bash
 yarn install
 ```
 3. **Pada IOS:**
 ```bash
 npx pod-install
 ```
 
 ##  Step 2: Start Aplikasi
 
Biarkan Metro Bundler berjalan di terminalnya sendiri. Buka terminal baru dari root proyek React Native Anda. Jalankan perintah berikut untuk memulai aplikasi Android atau iOS Anda:
###  For Android
```bash
# using npm
npm  run  android
# OR using Yarn
yarn  android
```
###  For iOS
```bash
# using npm
npm  run  ios
# OR using Yarn
```
 ##  Step 3: Rename Project
 Rename react-native app with just one command

![react-native-rename](https://cloud.githubusercontent.com/assets/5106887/24444940/cbcb0a58-149a-11e7-9714-2c7bf5254b0d.gif)
  
**Note:** This package does not attempt to properly rename build artifacts such as `ios/build` or Cocoa Pod installation targets. After renaming your project you should clean, build, and reinstall third party dependencies to get it running properly with the new name.
### Penggunaan
##### Then, Rename your app
```bash
npx react-native-rename "TravelApp"
```
With custom Bundle Identifier
```bash
npx react-native-rename "TravelApp" -b "com.junedomingo.travelapp"
```