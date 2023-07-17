    function kredihesapla(){
        var cekilentutar,vadesayisi;
        var ayliktaksit,odenecektoplamtutar;
        // burda değerleri cekiyoruz
        cekilentutar = document.getElementById("txtKrediTutari").value;
        var liste = document.getElementById("listevade");
        
        vadesayisi = liste.options[liste.selectedIndex].value;
        
        odenecektoplamtutar = cekilentutar*1.1;
        ayliktaksit = odenecektoplamtutar/vadesayisi; 

        //ekrandan labeli seçip yazdırma
        document.querySelector("#sonuc").innerHTML =" Geri Ödeme Toplamı :"+odenecektoplamtutar+"<br> Aylık Taksit Tutarı : "+ayliktaksit; 
    }
 
