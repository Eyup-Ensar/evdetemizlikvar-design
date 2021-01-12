 //Ana Modül
 const App = (function(priceCtrl,UIctrl,httpctrl) {
    
    httpController.HTTP()
    .then(response => {
        UIctrl.addHttp(response);
    })
    .catch(error => {
        console.log("reject", error);
    }); 

    httpController.HTTPSC()
    .then(response => {
        UIctrl.addHttpSC(response);
    })
    .catch(error => {
        console.log("reject", error);
    }); 

    const UIselectors = UIcontroller.getSelects();

    const LoadEventListeners = function(){

        document.querySelector(UIselectors.selectaddress).addEventListener('change', selectAddress);

        document.querySelector(UIselectors.selectdate).addEventListener('change', selectDate);

        const howBig = document.querySelector(UIselectors.howbighome);

        howBig.children[0].addEventListener('click', home_1_0);

        howBig.children[1].addEventListener('click', home_1_1);

        howBig.children[2].addEventListener('click', home_2_1);

        howBig.children[3].addEventListener('click', home_3_1);

        howBig.children[4].addEventListener('click', home_4_1);

        howBig.children[5].addEventListener('click', homeBig);

        for(var i=0;i<howBig.children.length;i++){

            howBig.children[i].addEventListener('click', printhowbig);

        }

        document.querySelector(UIselectors.onefloor).addEventListener('click', onefloorBtn);

        document.querySelector(UIselectors.duplex).addEventListener('click', duplexBtn);
        
        document.querySelector(UIselectors.triplex).addEventListener('click', triplexBtn);

        const howmanyfloors = document.querySelector(UIselectors.howmanyfloors);

        for(var j=0;j<howmanyfloors.children.length;j++){

            howmanyfloors.children[j].addEventListener('click', howmanyfloorsBtn);

        }

        document.querySelector(UIselectors.onceaweek).addEventListener('click', onceAweekBtn);

        document.querySelector(UIselectors.biweekly).addEventListener('click', biweeklyBtn);

        document.querySelector(UIselectors.onetimes).addEventListener('click', oneTimesBtn);

        document.querySelector(UIselectors.additionalservices).children[0].addEventListener('click', refrigeratorCleaning);

        document.querySelector(UIselectors.additionalservices).children[1].addEventListener('click', closetCleaning);

        document.querySelector(UIselectors.additionalservices).children[2].addEventListener('click', interiorGlassCleaning);

        document.querySelector(UIselectors.additionalservices).children[3].addEventListener('click', ovenCleaning);
        
        document.querySelector(UIselectors.additionalservices).children[4].addEventListener('click', irons15);

        document.querySelector(UIselectors.additionalservices).children[5].addEventListener('click', irons30);

        document.querySelector(UIselectors.additionalservices).children[6].addEventListener('click', terraceCleaning);

        document.querySelector(UIselectors.removeanimals).addEventListener('click', animalsBtnRemove);

        document.querySelector(UIselectors.dog).addEventListener('click', animalsBtnDog);

        document.querySelector(UIselectors.cat).addEventListener('click', animalsBtnCat);

        document.querySelector(UIselectors.bird).addEventListener('click', animalsBtnBird);

        document.querySelector(UIselectors.fish).addEventListener('click', animalsBtnFish);

        document.querySelector(UIselectors.otheranimals).addEventListener('click', animalsBtnAdd);

        const material = document.querySelector(UIselectors.cleaningmaterial);

        material.children[0].addEventListener('click', materialYesBtn);

        material.children[1].addEventListener('click', materialNoBtn);

        for(var c=0;c<material.children.length;c++){

            material.children[c].addEventListener('click', materialPrice);

        }

        document.querySelector(UIselectors.removekey).addEventListener('click', removeKeyBtn);
        
        document.querySelector(UIselectors.addkey).addEventListener('click', createkeyBtn); 
        
        document.querySelector("*").addEventListener('click', createTotal);

    }

    const createTotal = function(){

        // price'dan döndürülen toplam değerini al ve ui modülüne gönder
        var total = priceCtrl.getTotal();

        UIctrl.addTotal(total);

        UIctrl.addStart(total);

    }

    // ilçe ve semt değerlerini addSelectAddress fonksiyonu üzerinden ui modülüne gönder
    const selectAddress = function(){

        var ilce = document.querySelector(UIselectors.selectilce).value;

        var semt = document.querySelector(UIselectors.selectsemt).value;

        UIctrl.addSelectAddress(ilce, semt);

    }

    // tarih ve saat değerlerini addSelectDate fonksiyonu üzerinden ui modülüne gönder
    const selectDate = function(){

        var tarih = document.querySelector(UIselectors.selecttarih).value;

        var saat = document.querySelector(UIselectors.selectsaat).value;

        UIctrl.addSelectDate(tarih, saat);

    }

    // Eviniz ne büyüklükte kısmında tüm butonlara tıklandığında çalışan printhowbig fonksiyonu üzerinden HomeSizePrice değerini ui modülüne gönder
    const printhowbig = function(){
        
        var HomeSizePrice = priceCtrl.printhowbig();

        UIctrl.printhowbig(HomeSizePrice);

    }

    const home_1_0 = function(){
        
        UIctrl.addHome_1_0();

        var a = UIcontroller.addHome_1_0();

        priceCtrl.home10(a);

    }

    const home_1_1 = function(){

        UIctrl.addHome_1_1()

        priceCtrl.home11();

    }

    const home_2_1 = function(){
        
        UIctrl.addHome_2_1()

        priceCtrl.home21();

    }

    const home_3_1 = function(){
        
        UIctrl.addHome_3_1()

        priceCtrl.home31();

    }

    const home_4_1 = function(){
        
        UIctrl.addHome_4_1()

        priceCtrl.home41();

    }

    const homeBig = function(){
        
        UIctrl.addHomeBig()

        priceCtrl.homeBig();

    }

    const howmanyfloorsBtn = function(){

        priceCtrl.getFloors();

    }

    const onefloorBtn = function(){

        priceCtrl.getOneFloor();

        UIctrl.addOneFloor();

    }

    const duplexBtn = function(){

        priceCtrl.getDuplex();

        UIctrl.addDuplex();

    }

    const triplexBtn = function(){

        priceCtrl.getTriplex();

        UIctrl.addTriplex();

    }

    const onceAweekBtn = function(){

        UIctrl.addOnceAweek();

    }

    const biweeklyBtn = function(){

        UIctrl.addBiweekly();

    }

    const oneTimesBtn = function(){

        UIctrl.addOneTimes();

    }
    // Ek hizmetler kısmında butonları ayrı ayrı fonksiyonlarda çalıştır ve butona ait bilgileri ui modulune gonder
    const refrigeratorCleaning = function(){

        var a = document.querySelector(UIselectors.additionalservices).children[0];

        var price = null;

        if(a.classList.contains('addClass')){

         price = priceCtrl.nullRefrigeratorCleaning();  

        }else{    

        price = priceCtrl.getRefrigeratorCleaning();  

        }

        UIctrl.addRefrigeratorCleaning(price);

    }
    
    const closetCleaning = function(){

        var a = document.querySelector(UIselectors.additionalservices).children[1];

        var price = null;

        if(a.classList.contains('addClass')){

        price = priceCtrl.nullClosetCleaning();

        }else{    

        price = priceCtrl.getClosetCleaning();  

        }

        UIctrl.addClosetCleaning(price);
        
    }

    const interiorGlassCleaning = function(){
        
        var a = document.querySelector(UIselectors.additionalservices).children[2];

        var price = null;

        if(a.classList.contains('addClass')){

        price = priceCtrl.nullInteriorGlass();

        }else{ 

        price = priceCtrl.getInteriorGlass();   

        }

        UIctrl.addInteriorGlass(price);
        
    }

    const ovenCleaning = function(){

        var a = document.querySelector(UIselectors.additionalservices).children[3];

        var price = null;

        if(a.classList.contains('addClass')){

        price = priceCtrl.nullOvenCleaning();

        }else{    

        price = priceCtrl.getOvenCleaning();   

        }

        UIctrl.addOvenCleaning(price);
        
    }

    const irons15 = function(){

        var a = document.querySelector(UIselectors.additionalservices).children[4];

        var price = null;

        if(a.classList.contains('addClass')){

        price = priceCtrl.nullIrons15();

        }else{    

        price = priceCtrl.getIrons15(); 

        }

        UIctrl.addIrons15(price);
        
    }

    const irons30 = function(){

        var a = document.querySelector(UIselectors.additionalservices).children[5];

        var price = null;

        if(a.classList.contains('addClass')){

        price = priceCtrl.nullIrons30();

        }else{    

        price = priceCtrl.getIrons30(); 

        }

        UIctrl.addIrons30(price);
        
    }

    const terraceCleaning = function(){

        var a = document.querySelector(UIselectors.additionalservices).children[6];

        var price = null;

        if(a.classList.contains('addClass')){

        price = priceCtrl.nullTerraceCleaning();

        }else{    

        price = priceCtrl.getTerraceCleaning();

        }

        UIctrl.addTerraceCleaning(price);
        
    }

    const materialPrice = function(){

        var price = priceCtrl.getMaterialPrice();

        UIctrl.addMaterialPrice(price);
    }

    const materialYesBtn = function(){

        priceCtrl.getYesMaterial();

        UIctrl.addYesMaterial();

    }

    const materialNoBtn = function(){

        priceCtrl.getNoMaterial();

        UIctrl.addNoMaterial();

    }

    const animalsBtnRemove = function(){

        UIctrl.RemoveAnimals();

    }

    const animalsBtnDog = function(){

        UIctrl.addDog();

    }

    const animalsBtnCat = function(){

        UIctrl.addCat();

    }

    const animalsBtnBird = function(){

        UIctrl.addBird();

    }

    const animalsBtnFish = function(){

        UIctrl.addFish();

    }

    const animalsBtnAdd = function(){

        UIctrl.addOther();

    }

    const createkeyBtn = function(){

        UIctrl.addKey();

    }

    const removeKeyBtn = function(){
        
        UIctrl.removeKey();

    }

    return{

        // projeyi başlat
        init: function(){

            console.log('starting...');

            LoadEventListeners();

            UIctrl.createProductList();

        }
        
    }

})(priceController, UIcontroller, httpController)

App.init();