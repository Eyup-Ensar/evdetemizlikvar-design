const App = (function(UIctrl) {
    // public
    const UIselectors = UIcontroller.getSelects();

    const LoadEventListeners = function(){

        const AnimalsElement = document.querySelector(UIselectors.part1).children[5].children[1];
        AnimalsElement.children[0].addEventListener('click', animalsBtn0);
        AnimalsElement.children[1].addEventListener('click', animalsBtn1);
        AnimalsElement.children[2].addEventListener('click', animalsBtn2);
        AnimalsElement.children[3].addEventListener('click', animalsBtn3);
        AnimalsElement.children[4].addEventListener('click', animalsBtn4);
        AnimalsElement.children[5].addEventListener('click', animalsBtn5);

        document.querySelector(UIselectors.part1).children[6].children[4].children[0].addEventListener('click', removeKeyBtn);
        document.querySelector(UIselectors.part1).children[6].children[4].children[1].addEventListener('click', createkeyBtn);      
    }

    const animalsBtn0 = function(){
        UIctrl.addAnimals0();
    }
    const animalsBtn1 = function(){
        UIctrl.addAnimals1();
    }
    const animalsBtn2 = function(){
        UIctrl.addAnimals2();
    }
    const animalsBtn3 = function(){
        UIctrl.addAnimals3();
    }
    const animalsBtn4 = function(){
        UIctrl.addAnimals4();
    }
    const animalsBtn5 = function(){
        UIctrl.addAnimals5();
    }
    

    const createkeyBtn = function(){
        UIctrl.addKey();
    }
    const removeKeyBtn = function(){
        UIctrl.removeKey();
    }

    return{

        init: function(){

            console.log('starting...');

            LoadEventListeners();

            const ilce_semt = document.querySelector(UIselectors.part1).children[0].children[0].children[2];

            const tarih_saat = document.querySelector(UIselectors.part1).children[0].children[0].children[4];

            const ilce = ilce_semt.children[0].children[0].value;

            const semt = ilce_semt.children[1].children[0].value;

            const tarih = tarih_saat.children[0].children[0].value;

            const saat = tarih_saat.children[1].children[0].value;

            UIctrl.createProductList(ilce, semt, tarih, saat);
        }
    }

})(UIcontroller)

App.init();