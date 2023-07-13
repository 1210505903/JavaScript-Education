    function kredihesapla(){
        var cekilentutar,vadesayisi;
        var aylıktaksit,odenecektoplamtutar;
        // burda değerleri cekiyoruz
        cekilentutar = document.getElementById("txtkreditutari").value;
        var liste = document.getElementById("listvade");

        vadesayisi = liste.options[liste.selectedIndex].value;
        odenecektoplamtutar = cekilentutar*1.1;
        aylıktaksit = odenecektoplamtutar/vadesayisi; 

        //ekrandan labeli seçip yazdırma
        document.querySelector("#sonuc").innerHTML =" Geri Ödeme Toplamı :"+odenecektoplamtutar+"<br> Aylık Taksit Tutarı : "+aylıktaksit; 
    }
 
