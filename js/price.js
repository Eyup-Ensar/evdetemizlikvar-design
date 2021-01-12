//Hesap Modülü
const priceController = (function(){
    // ücret bilgilerini taşıyacak data objesini oluştur
    const data = {
        homeSize: 0,
        homeFloor: 0,
        cleaningMaterial: 0,
        additionelPrice: {
            refrigeratorPrice: 0,
            closetPrice: 0,
            interiorGlassPrice: 0,
            ovenPrice: 0,
            irons15Price: 0,
            irons30Price: 0,
            terracePrice: 0
        }
    }
    // app modülünde oluşturulan butonlara tıklandığında ücret bilgilerini data objesine ata
    return{
        httpPrice: function(price){
        },
        home10: function(){
            console.log(this.httpPrice());
            data.homeSize = 150;
        },
        home11: function(){
            data.homeSize = 200;
        },
        home21: function(){
            data.homeSize = 250;
        },
        home31: function(){
            data.homeSize = 300;
        },
        home41: function(){
            data.homeSize = 350;
        },
        homeBig: function(){
            data.homeSize = 400;
        },
        printhowbig: function(){
            return data.homeSize;
        },
        getOneFloor: function(){
            data.homeFloor = 0;
        },
        getDuplex: function(){
            data.homeFloor = 50;
        },
        getTriplex: function(){
            data.homeFloor = 100;
        },
        getFloors: function(){
            return data.homeFloor;
        },
        getRefrigeratorCleaning: function(){
            return data.additionelPrice.refrigeratorPrice = 5;
        },
        nullRefrigeratorCleaning: function(){
            return data.additionelPrice.refrigeratorPrice = 0;
        },
        getClosetCleaning: function(){
            return data.additionelPrice.closetPrice = 25;
        },
        nullClosetCleaning: function(){
            return data.additionelPrice.closetPrice = 0;
        },
        getInteriorGlass: function(){
            return data.additionelPrice.interiorGlassPrice = 25;
        },
        nullInteriorGlass: function(){
            return data.additionelPrice.interiorGlassPrice = 0;
        },
        getOvenCleaning: function(){
            return data.additionelPrice.ovenPrice = 5;
        },
        nullOvenCleaning: function(){
            return data.additionelPrice.ovenPrice = 0;
        },
        getIrons15: function(){
            return data.additionelPrice.irons15Price = 25;
        },
        nullIrons15: function(){
            return data.additionelPrice.irons15Price = 0;
        },
        getIrons30: function(){
            return data.additionelPrice.irons30Price = 25;
        },
        nullIrons30: function(){
            return data.additionelPrice.irons30Price = 0;
        },
        getTerraceCleaning: function(){
            return data.additionelPrice.terracePrice = 5;
        },
        nullTerraceCleaning: function(){
            return data.additionelPrice.terracePrice = 0;
        },
        getYesMaterial: function(){
            data.cleaningMaterial = 40;
        },
        getNoMaterial: function(){
            data.cleaningMaterial = 0;
        },
        getMaterialPrice: function(){
            return data.cleaningMaterial;
        },
        // data objesindeki ücret bilgilerini topla ve app modülüne gönder
        getTotal: function(){
            var total;
            var ap = data.additionelPrice;
            total = data.homeSize + data.homeFloor + data.cleaningMaterial + ap.refrigeratorPrice + ap.closetPrice +
            ap.interiorGlassPrice + ap.ovenPrice + ap.irons15Price + ap.irons30Price + ap.terracePrice;
            return total;
        }
    }
}())
