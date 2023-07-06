 // Document write  ile çıktı alma
/*
 document.write("Yusuf GÜNER");
 console.log("Hell yyusuf");

 let a=5 , b=20;
 console.log("İki Sayını toplamı :", a+b); */
/*
 let not = 65;
 if(not>50){
    console.log("Geçtiniz  notunuz : "+not);
 }
 else{
    console.log("Kaldınız notunuz : "+not);
 }*/

 //? vize1 %30 vize2 %30 fianl%40
/*
 var vize1 = Number(prompt("1. Vizeizi girin "));
 var vize2 = Number(prompt("2. Vizeizi girin "));
 var final1 = Number(prompt("1. final girin "));
 var ort = ((vize1*3)/10)+((vize2*3)/10)+((final1*40/10));
 if(ort <= 40){
    alert("Kaldın");
 }
 else{
    alert("Geçtin");
 }
 */

 //?çarpım tablosu
 /*
for(let b=1;b<=10;b++){
    for(let i =1;i<=10;i++){
        console.log(" ",b," x ",i," = ",b*i);
    }
    console.log("------------------------");

}
*/

//? Asal sayı bulma yöntemi
/*
let b= 0;
let i;
console.log(1 ,"-");
for(let a =3;a<100;a++){
    for( i = 2 ; i<=100;i++){
        if(a/i==true){
            b++;
            
            console.log(i ,"-");
        }   
    }
    if(b==1){
        console.log(i ,"-");
    }
}*/

//? 28 
/*
let a =0;
let deger = prompt("Değer Giriniz");
for(let i =1;i<=deger;i++){
    if(deger%i==0){
        console.log(" "+i);
        a+=i;
    }

}
if(deger*2==a){
    console.log("Mükemmel Sayı");
}
*/
//? 10 luk dan 2 lik sayı sistemine çevirme
let kalan;
let a;
let sayi= prompt("Çevirmek İstediğiniz Sayıyı Giriniz");
onlukdanikiliksayiyacevirme(sayi)
function onlukdanikiliksayiyacevirme(sayii){
    do{
        sayii%2==kalan;
        console.log(kalan);
        sayii= sayii/2
    }
    while(kalan == 1 && kalan == 0){
        
    }

}


