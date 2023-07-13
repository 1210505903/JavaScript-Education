class migrosBase{
    indirimorani=20;

    constructor(isim,soyisim,kartVarmi,uruneler){
        this.isim=isim;
        this.soyisim=soyisim;
        this.kartVarmi=kartVarmi;
        this.uruneler=uruneler;
    }

    hesapla(){
        let odenecektutar=0;

        if(this.uruneleriKontrolEt(this.uruneler)){
            //sepetim dolu
            this.uruneler.forEach(urun => {
                odenecektutar +=(urun.fiyat*(100-this.indirimorani)/100); 
            });
        }
        else{
            alert("En az Bir ürün alamalısınız ")
        }
        return odenecektutar;
    }

    uruneleriKontrolEt(uruneler){
        if(uruneler != null && uruneler.length>0){
            return true;
        }
        return false;
    }
}
