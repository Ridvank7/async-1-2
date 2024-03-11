//*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ------------------------------------------------

// const bekle = (time) => {
//   const startTime = new Date().getTime();
//   while (new Date().getTime() < startTime + time) {}
// };

// console.log("Hello");
// // alert("Hi"); //! blocking code
// console.time("timer");
// bekle(3000); //! blocking code
// console.timeEnd("timer");
// console.log("Eypes");

//* Asenkron (setTimeout)
//* ------------------------------------------------

// console.log("timeout");

// setTimeout(() => {
//   //! non-blocking
//   console.log("Hi");
// }, 2000);

// setTimeout(() => {
//   console.log("EYPES");
// }, 3000);

// console.log("timeout bitti");

//* Asenkron (setInterval, clearInterval)
//* ------------------------------------------------

// console.log("Timer Started");
// let counter = 0;

// const xyz = setInterval(() => {
//   console.log(++counter);
//   if (counter > 4) {
//     clearInterval(xyz);
//     console.log("Timer Stopped");
//   }
// }, 1000);

//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakat bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.

setTimeout(() => {
  console.log("john:Hi");
  setTimeout(() => {
    console.log("Sarah: Hello");
    setTimeout(() => {
      console.log("John: How Are you?");
      setTimeout(() => {
        console.log("Sarah:Fine and you?");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

//? COZUMLER:
//?----------------------------------------------------
//* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise,
//! 3- Fetch API (Promise'in basitlestirilmis hali),
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)
