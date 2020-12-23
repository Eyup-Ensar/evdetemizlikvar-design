//Çıktı Modülü
const UIcontroller = (function(){
    const select = {
        print: '.printResult',
        part1: '.part1',
        part2: '.part2',
        selectaddress: '.selectAddress',
        selectdate: '.selectDate',
        selectilce: '.selectIlce',
        selectsemt: '.selectSemt',
        selecttarih: '.selectTarih',
        selectsaat: '.selectSaat',
        howbighome: '.howBigHome',
        howmanyfloors: '.howManyFloors',
        onefloor: '.oneFloor',
        duplex: '.duplex',
        triplex: '.triplex',
        howtimes: '.howTimes',
        onceaweek: '.onceAweek',
        biweekly: '.biweekly',
        onetimes: '.oneTimes',
        additionalservices: '.additionalServices',
        removeanimals: '.removeAnimals',
        dog: '.dog',
        cat: '.cat',
        bird: '.bird',
        fish: '.fish',
        otheranimals: '.otherAnimals',
        cleaningmaterial: '.cleaningMaterial',
        removekey: '.removeKey',
        addkey: '.addKey'
    }
    return {
        getSelects: function(){
            return select
        },
        createProductList: function(){
            var html = '';
            html = `
                <table class="printResult">
                    <thead>
                        <tr>

                        </tr>
                        <tr>

                        </tr>
                        <tr>
                        
                        </tr>
                    </thead>    
                    <tbody>
                        <tr class="howManyPrint">
                            
                        </tr>
                    </tbody>
                    <tfoot>

                    </tfoot>
                </table> `;
            document.querySelector(select.part2).firstElementChild.innerHTML = html;
        },
        addTotal: function(total){
            var tfoot = document.querySelector(select.print).children[2];
            if(total!=0){
                tfoot.innerHTML=`
                <tr>
                    <td colspan="2"> <hr> </td> 
                </tr>
                <tr>
                    <td>Toplam</td>
                    <td>${total} TL</td>
                </tr>
                <tr>
                    <td colspan="2"><input type="button" value="Devam Et"></td>
                </tr>
                `;
            }else{  
                tfoot.innerHTML=null;
            }
        },
        addtittle: function(){
            document.querySelector(select.print).children[0].children[0].innerHTML = `
                <td colspan="2"><h2>Sipariş Özeti</h2></td>
            `;
        },
        addHrHead: function(){
            const tr = document.createElement("tr");
            tr.classList.add('createHRHead');
            const td = document.createElement("td");
            td.colSpan="2";
            const hr = document.createElement("hr");
            td.appendChild(hr);
            tr.appendChild(td);
            const thead = document.querySelector(select.print).children[0];
            if(!thead.lastElementChild.classList.contains('createHRHead')){
                thead.appendChild(tr);
            }else{ null }
        },
        addSelectAddress: function(ilce, semt){
            UIcontroller.addtittle();
            UIcontroller.addHrHead();
            var virgul;
            (!(ilce == "" || semt == "")) ? virgul = "," : virgul = "";       
            document.querySelector(select.print).children[0].children[1].innerHTML = `
                <td colspan="2">${ilce} ${virgul} ${semt}</td>
            `;
        },
        addSelectDate: function(tarih, saat){
            UIcontroller.addtittle();
            UIcontroller.addHrHead();
            var virgul;
            (!(tarih == "" || saat == "")) ? virgul = "," : virgul = "";
            document.querySelector(select.print).children[0].children[2].innerHTML = `
                <td colspan="2">${tarih} ${virgul} ${saat}</td>
            `;
        },
        removeHome: function(){
            var div = document.querySelector(select.howbighome);
            for(var i=0; i<div.children.length;i++){
                div.children[i].classList.remove('bigcontrol');
            }
        },
        printhowbig: function(HomeSizePrice){
            UIcontroller.addtittle();
            UIcontroller.addHrHead();
            var addTD = document.querySelectorAll('.howBigControl');
            if(addTD.length==0){
                const tr = document.querySelector(".howManyPrint");
                const td = document.createElement("td");
                td.colSpan="2";
                td.classList.add('howBigControl');
                const text = document.createTextNode(`${HomeSizePrice} TL`);
                td.appendChild(text); 
                tr.appendChild(td);
            }else{
                addTD.forEach(result => {
                    result.innerHTML=`${HomeSizePrice} TL`;
                });
            }
        },
        addHome_1_0: function(){
            UIcontroller.removeHome();
            document.querySelector(select.howbighome).children[0].classList.add('bigcontrol');
        },
        addHome_1_1: function(){
            UIcontroller.removeHome();
            document.querySelector(select.howbighome).children[1].classList.add('bigcontrol');
        },
        addHome_2_1: function(){
            UIcontroller.removeHome();
            document.querySelector(select.howbighome).children[2].classList.add('bigcontrol');
        },
        addHome_3_1: function(){
            UIcontroller.removeHome();
            document.querySelector(select.howbighome).children[3].classList.add('bigcontrol');
        },
        addHome_4_1: function(){
            UIcontroller.removeHome();
            document.querySelector(select.howbighome).children[4].classList.add('bigcontrol');
        },
        addHomeBig: function(){
            UIcontroller.removeHome();
            document.querySelector(select.howbighome).children[5].classList.add('bigcontrol');
        },
        removeHowManyFloors: function(){
            var div = document.querySelector(select.howmanyfloors);
            for(var i=0;i<div.children.length;i++){
                div.children[i].classList.remove('floorControl');
            }
        },
        addOneFloor: function(){
            UIcontroller.removeHowManyFloors();
            const btn = document.querySelector(select.onefloor);
            btn.classList.add('floorControl');
            const tbody = document.querySelector(select.print).children[1];
            const trDuplex = document.querySelector('.isThereDuplex');
            const trTriplex = document.querySelector('.isThereTriplex');
            if(trDuplex){
                tbody.removeChild(trDuplex);
            }else{ null }
            if(trTriplex){
                tbody.removeChild(trTriplex);
            }else{ null }
            
        },
        addDuplex: function(){
            UIcontroller.addtittle();
            UIcontroller.addHrHead();
            UIcontroller.removeHowManyFloors();
            document.querySelector(select.duplex).classList.add('floorControl');
            const trTriplex = document.querySelector('.isThereTriplex');
            const tbody = document.querySelector(select.print).children[1];
            const tr = document.createElement("tr");
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            const text1 = document.createTextNode("Dubleks");
            const text2 = document.createTextNode("50 TL");
            td1.appendChild(text1);
            td2.appendChild(text2);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.classList.add('isThereDuplex');
            var printDuplex = document.querySelectorAll('.isThereDuplex');
            if(printDuplex.length==0){
                tbody.insertBefore(tr, tbody.children[1]);
            }else{ null }
            if(trTriplex){
                tbody.removeChild(trTriplex);
            }else{ null }
        },
        addTriplex: function(){
            UIcontroller.addtittle();
            UIcontroller.addHrHead();
            UIcontroller.removeHowManyFloors();
            document.querySelector(select.triplex).classList.add('floorControl');
            const trDuplex = document.querySelector('.isThereDuplex');
            const tbody = document.querySelector(select.print).children[1];
            const tr = document.createElement("tr");
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            const text1 = document.createTextNode("Tripleks");
            const text2 = document.createTextNode("100 TL");
            td1.appendChild(text1);
            td2.appendChild(text2);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.classList.add('isThereTriplex');
            var printDuplex = document.querySelectorAll('.isThereTriplex');
            if(printDuplex.length==0){
                tbody.insertBefore(tr, tbody.children[1]);
            }else{ null }
            if(trDuplex){
                tbody.removeChild(trDuplex);
            }else{ null }
        },
        removeHowOften: function(){
            var div = document.querySelector(select.howtimes);
            for(var i=0;i<div.children.length;i++){
                div.children[i].classList.remove("howOften");
            }
        },
        addOnceAweek: function(){
            UIcontroller.removeHowOften();
            const onceaweek = document.querySelector(select.onceaweek);
            onceaweek.classList.add("howOften");
            const tr = document.querySelector(".howManyPrint");
            const td = document.createElement("td");
            td.classList.add('howManyTimes');
            const control = document.querySelectorAll(".howManyTimes");
            if(control.length==0){
                td.innerHTML="Haftada Bir";
                tr.insertBefore(td,tr.lastElementChild);
            }else{
                const td = document.querySelector(".howManyTimes");
                td.innerHTML="Haftada Bir";
            }
        },
        addBiweekly: function(){
            UIcontroller.removeHowOften();
            document.querySelector(select.biweekly).classList.add("howOften");
            const tr = document.querySelector(".howManyPrint");
            const td = document.createElement("td");
            td.classList.add('howManyTimes');
            const control = document.querySelectorAll(".howManyTimes");
            if(control.length==0){
                td.innerHTML="İki Haftada Bir"; 
                tr.insertBefore(td,tr.lastElementChild);
            }else{
                const td = document.querySelector(".howManyTimes");
                td.innerHTML="İki Haftada Bir";
            }
        },
        addOneTimes: function(){
            UIcontroller.removeHowOften();
            document.querySelector(select.onetimes).classList.add("howOften");
            const tr = document.querySelector(".howManyPrint");
            const td = document.createElement("td");
            td.classList.add('howManyTimes');
            const control = document.querySelectorAll(".howManyTimes");
            if(control.length==0){
                td.innerHTML="Tek Sefer"; 
                tr.insertBefore(td,tr.lastElementChild);
            }else{
                const td = document.querySelector(".howManyTimes");
                td.innerHTML="Tek Sefer";
            }
        },
        addRefrigeratorCleaning: function(price){
            UIcontroller.addtittle();
            UIcontroller.addHrHead();
            const btn = document.querySelector(select.additionalservices).children[0];
            const tbody = document.querySelector(select.print).children[1];
            const lastTR = tbody.lastElementChild;
            const removeTR = document.querySelector('.removeRefrigerator');
            const tr = document.createElement("tr");
            tr.classList.add('removeRefrigerator');
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            const text1 = document.createTextNode(`Buzdolabı Temizliği`);
            const text2 = document.createTextNode(`${price} TL`);
            td1.appendChild(text1);
            td2.appendChild(text2);
            tr.appendChild(td1);
            tr.appendChild(td2);
            if(!btn.classList.contains('addClass')){
                btn.classList.add('addClass');
                tbody.insertBefore(tr,lastTR);
            }else{ 
                btn.classList.remove('addClass');   
                tbody.removeChild(removeTR); 
            }
        },
        addClosetCleaning: function(price){
            UIcontroller.addtittle();
            UIcontroller.addHrHead();
            const btn = document.querySelector(select.additionalservices).children[1];
            const tbody = document.querySelector(select.print).children[1];
            const lastTR = tbody.lastElementChild;
            const removeTR = document.querySelector('.removecloset');
            const tr = document.createElement("tr");
            tr.classList.add('removecloset');
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            const text1 = document.createTextNode(`Dolap Temizliği`);
            const text2 = document.createTextNode(`${price} TL`);
            td1.appendChild(text1);
            td2.appendChild(text2);
            tr.appendChild(td1);
            tr.appendChild(td2);
            if(!btn.classList.contains('addClass')){
                btn.classList.add('addClass');
                tbody.insertBefore(tr,lastTR);
            }else{ 
                btn.classList.remove('addClass');   
                tbody.removeChild(removeTR); 
            }
        },
        addInteriorGlass: function(price){
            UIcontroller.addtittle();
            UIcontroller.addHrHead();
            const btn = document.querySelector(select.additionalservices).children[2];
            const tbody = document.querySelector(select.print).children[1];
            const lastTR = tbody.lastElementChild;
            const removeTR = document.querySelector('.removeInteriorGlass');
            const tr = document.createElement("tr");
            tr.classList.add('removeInteriorGlass');
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            const text1 = document.createTextNode(`İç Cam Temizliği`);
            const text2 = document.createTextNode(`${price} TL`);
            td1.appendChild(text1);
            td2.appendChild(text2);
            tr.appendChild(td1);
            tr.appendChild(td2);
            if(!btn.classList.contains('addClass')){
                btn.classList.add('addClass');
                tbody.insertBefore(tr,lastTR);
            }else{ 
                btn.classList.remove('addClass');   
                tbody.removeChild(removeTR); 
            }
        },
        addOvenCleaning: function(price){
            UIcontroller.addtittle();
            UIcontroller.addHrHead();
            const btn = document.querySelector(select.additionalservices).children[3];
            const tbody = document.querySelector(select.print).children[1];
            const lastTR = tbody.lastElementChild;
            const removeTR = document.querySelector('.removeOven');
            const tr = document.createElement("tr");
            tr.classList.add('removeOven');
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            const text1 = document.createTextNode(`Fırın Temizliği`);
            const text2 = document.createTextNode(`${price} TL`);
            td1.appendChild(text1);
            td2.appendChild(text2);
            tr.appendChild(td1);
            tr.appendChild(td2);
            if(!btn.classList.contains('addClass')){
                btn.classList.add('addClass');
                tbody.insertBefore(tr,lastTR);
            }else{ 
                btn.classList.remove('addClass');   
                tbody.removeChild(removeTR); 
            }
        },
        addIrons15: function(price){
            UIcontroller.addtittle();
            UIcontroller.addHrHead();
            const btn = document.querySelector(select.additionalservices).children[4];
            const tbody = document.querySelector(select.print).children[1];
            const lastTR = tbody.lastElementChild;
            const removeTR = document.querySelector('.removeIrons15');
            const tr = document.createElement("tr");
            tr.classList.add('removeIrons15');
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            const text1 = document.createTextNode(`15 Parça Ütü`);
            const text2 = document.createTextNode(`${price} TL`);
            td1.appendChild(text1);
            td2.appendChild(text2);
            tr.appendChild(td1);
            tr.appendChild(td2);
            if(!btn.classList.contains('addClass')){
                btn.classList.add('addClass');
                tbody.insertBefore(tr,lastTR);
            }else{ 
                btn.classList.remove('addClass');   
                tbody.removeChild(removeTR); 
            }
        },
        addIrons30: function(price){
            UIcontroller.addtittle();
            UIcontroller.addHrHead();
            const btn = document.querySelector(select.additionalservices).children[5];
            const tbody = document.querySelector(select.print).children[1];
            const lastTR = tbody.lastElementChild;
            const removeTR = document.querySelector('.removeIrons30');
            const tr = document.createElement("tr");
            tr.classList.add('removeIrons30');
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            const text1 = document.createTextNode(`30 Parça Ütü`);
            const text2 = document.createTextNode(`${price} TL`);
            td1.appendChild(text1);
            td2.appendChild(text2);
            tr.appendChild(td1);
            tr.appendChild(td2);
            if(!btn.classList.contains('addClass')){
                btn.classList.add('addClass');
                tbody.insertBefore(tr,lastTR);
            }else{ 
                btn.classList.remove('addClass');   
                tbody.removeChild(removeTR); 
            }
        },
        addTerraceCleaning: function(price){
            UIcontroller.addtittle();
            UIcontroller.addHrHead();
            const btn = document.querySelector(select.additionalservices).children[6];
            const tbody = document.querySelector(select.print).children[1];
            const lastTR = tbody.lastElementChild;
            const removeTR = document.querySelector('.terraceCleaning');
            const tr = document.createElement("tr");
            tr.classList.add('terraceCleaning');
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            const text1 = document.createTextNode(`Teras Temizliği`);
            const text2 = document.createTextNode(`${price} TL`);
            td1.appendChild(text1);
            td2.appendChild(text2);
            tr.appendChild(td1);
            tr.appendChild(td2);
            if(!btn.classList.contains('addClass')){
                btn.classList.add('addClass');
                tbody.insertBefore(tr,lastTR);
            }else{ 
                btn.classList.remove('addClass');   
                tbody.removeChild(removeTR); 
            }
        },
        RemoveAnimals: function(){
            var div = document.querySelector(select.part1).children[5].children[1];
            for(var i=0;i<div.children.length;i++){
                div.children[i].classList.remove('animals');
            }
            div.children[0].classList.add('animals');
            if(div.lastElementChild.children.length==1){
                div.lastElementChild.removeChild(div.lastElementChild.children[0]);
            }else{ null }
        },
        rAnimal: function(){
            document.querySelector(select.removeanimals).classList.remove('animals');
        },
        addDog: function(){
            document.querySelector(select.dog).classList.add('animals');
            UIcontroller.rAnimal();
        },
        addCat: function(){
            document.querySelector(select.cat).classList.add('animals');
            UIcontroller.rAnimal();
        },
        addBird: function(){
            document.querySelector(select.bird).classList.add('animals');
            UIcontroller.rAnimal();
        },
        addFish: function(){
            document.querySelector(select.fish).classList.add('animals');
            UIcontroller.rAnimal();
        },
        addOther: function(){
            var html = '';
            html = `
                <input type="text" placeholder="Lütfen evcil hayvanınızı yazınız..." >
            `;
            var other = document.querySelector(select.otheranimals);
            if(other.nextElementSibling.children.length==0){
                other.nextElementSibling.innerHTML+=html;
            }else{ null }
            other.classList.add(select.animals);
            UIcontroller.rAnimal();
        },   
        removeMaterial: function(){
            document.querySelector(select.cleaningmaterial).children[0].style.backgroundColor="white";
            document.querySelector(select.cleaningmaterial).children[1].style.backgroundColor="white";
        },
        addYesMaterial: function(){
            UIcontroller.removeMaterial();
            document.querySelector(select.cleaningmaterial).children[0].style.backgroundColor="rgb(255, 217, 0)";
        },
        addNoMaterial: function(){
            UIcontroller.removeMaterial();
            document.querySelector(select.cleaningmaterial).children[1].style.backgroundColor="rgb(255, 217, 0)";
        },
        addMaterialPrice: function(price){
            UIcontroller.addtittle();
            UIcontroller.addHrHead();
            const tbody = document.querySelector(select.print).children[1];
            const tr = document.createElement("tr");
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            const text1 = document.createTextNode("Temizlik Malzemesi");
            const text2 = document.createTextNode(`${price} TL`);
            td1.appendChild(text1);
            td2.appendChild(text2);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.classList.add('materialControl');
            const removeTR = document.querySelector('.materialControl'); 
            if(price==40){
                tbody.appendChild(tr);
            }else{
                tbody.removeChild(removeTR);
            }
        },
        addKey: function(){
            var html = '';
            html = `
                <input type="text" placeholder="Lütfen anahtarı bırakacağınız yeri yazınız...">
            `;
            var div1 = document.querySelector(select.part1).children[6].children[4];
            var div2 = div1.children[2];
            if(div2.children.length==0){
                div2.innerHTML+=html;
            }else{
                null
            }
            div1.children[1].classList.add('key');
            div1.children[0].classList.remove('key');
        },
        removeKey: function(){
            var div1 = document.querySelector(select.part1).children[6].children[4];
            var div2 = div1.children[2];
            if(div2.children.length == 1){
                div2.removeChild(div2.children[0]);        
            }else{ null }
            div1.children[1].classList.remove('key');
            div1.children[0].classList.add('key');
        }
    }
}())