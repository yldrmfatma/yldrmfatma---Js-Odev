//Soruların yanıtlarını consel bölümünde görüntüleyebilirsiniz.
/* 
1- Belirlediğimiz sayı aralığında rasgele sayı üreten fonksiyonu yazınız
örnek :  console.log(rasgele(1,10)) -> 1 ile 10 arasında rasgele sayı üretir.*/
function randFunction(min, max) {
  
    return Math.floor(Math.random() * (max - min)) + min;
    //Math.random() rastgele sayı üreten method
    //Math.floor() sayıyı tam sayıya yuvarlayan method
}
console.log("1-10 arasında rastgele üretilen sayı değeri: ",randFunction(1,10));
/*
2- Elimizdeki people dizisiyle people2 yi oluşturalım.
let people = ["Greg", "Mary", "Devon", "James"];
İstenilen Sonuç:
console.log(people2)  -> ["Greg", "Elizabeth", "Mary", "Artie", "James"]*/
  
let people = ["Greg", "Mary", "Devon", "James"];
let people2 = [...people.slice(0, 1), "Elizabeth", ...people.slice(1, 2), "Artie", ...people.slice(3)];

console.log("Yenni dizi değerleri: ",people2);

//spread (...) operatörü ile dizinin kopyası oluştururken slice () ile aralık belirlenmiştir ve dizinin kopyasına belirtilen aralıklara elemanlar eklenmiştir.

/* 3- 
function dönüştürücü(text1) text1= mustafa_selman@gmail.com -> Mustafa Selman
function dönüştürücü(text2) text1= mehmet_colak@hotmail.com -> Mehmet Colak
function dönüştürücü(text3) text1= yasin_sezer@yandex.com -> Yasir Sezer
bu üç veriyi de yanda yazılan çıktılara dönüştüren fonksiyonu yazın. (üç ayrı fonksiyon değil tek fonksiyon istiyoruz.) */

function emailToName(email) {
    const fullName = email.split("@")[0];
    const isimler = fullName.split("_").map((isim) => isim[0].toUpperCase() + isim.slice(1)).join(" ");
    return isimler;
  }
//split(seperator) [0]-> seperatör değerinden öncesi [1]-> seperatör değerinden sonrasını temsil eder.
//split() ile mail adresi '@' karakterinden bölünür ve yeni bir değişkene atanır   
  console.log("'mustafa_selman@gmail.com' mail adresinin sahibi: ",emailToName("mustafa_selman@gmail.com")); // Mustafa Selman
  console.log("'mehmet_colak@hotmail.com' mail adresinin sahibi: ",emailToName("mehmet_colak@hotmail.com")); // Mehmet Colak
  console.log("'yasin_sezer@yandex.com' mail adresinin sahibi: ",emailToName("yasin_sezer@yandex.com")); // Yasin Sezer

  /*
  4- let sayilar = [12,34,2,3,67,66,5,24]
  function maxSecond(sayilar) -> elimizdeki dizinin en büyük ikinci değerini veren fonksiyon
  function minSecond(sayilar) -> elimizdeki dizinin en küçük ikinci değerini veren fonksiyon
  yukarıdaki fonksiyonları oluşturunuz.
  tüm soruların cevabını tek proje olarak github a yükleyip paylaşmanızı istiyorum.
   */
let sayilar = [12, 34, 2, 3, 67, 66, 5, 24];
console.log("Dizi Değerleri: ",sayilar)

function maxSecond(sayilar) {
  let sorted = sayilar.sort((a, b) => b - a);
  console.log("Dizinin büyükten küçüğe sıralanmış hali: ",sorted)
  return sorted[1];
  
}
console.log("Dizinin En Büyük İkinci Değeri: ", maxSecond(sayilar)); // Çıktı: 66
function minSecond(sayilar) {
  let sorted = sayilar.sort((a, b) => a - b);
  console.log("Dizinin küçükten büyüğe sıralanmış hali: ",sorted)
  return sorted[1];
}
console.log("Dizinin En Küçük İkinci Değeri: ",minSecond(sayilar)); // Çıktı: 3
