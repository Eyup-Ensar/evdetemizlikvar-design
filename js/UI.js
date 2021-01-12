//Çıktı Modülü
const UIcontroller = (function(){
    //tüm class'ları bir objeye ata.
    const select = {
        print: '.printResult',
        part1: '.part1',
        part2: '.part2',
        startControl: '.startControl',
        selectControl: '.selectControl',
        selectaddress: '.selectAddress',
        selectdate: '.selectDate',
        selectilce: '.selectIlce',
        selectsemt: '.selectSemt',
        selecttarih: '.selectTarih',
        selectsaat: '.selectSaat',
        howbighome: '.howBigHome',
        howmanyprint: '.howManyPrint',
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

                        <tr class="selectControl">

                        </tr>

                        <tr class="selectControl">
                        
                        </tr>
                    </thead>    
                    <tbody>
                        <tr class="startControl">

                            <td colspan=2 align="center"><h2> Lütfen yandaki formu doldurun... </h2></td>

                        </tr>

                        <tr class="howManyPrint">
                            
                        </tr
                    </tbody>
                    <tfoot>

                    </tfoot>
                </table> `;
            document.querySelector(select.part2).firstElementChild.innerHTML = html;
        },
        addHttp: function(response){
            //size
            const howbig = document.querySelector(select.howbighome).children;
            const size = response.size.options;
            for(let i = 0;i < 4; i++){
                howbig[i].innerHTML = size[i].name;
            }
            //times
            const howtimes = document.querySelector(select.howtimes).children;
            const requrring = response.productFrequencies; 
            for(let i = 0;i < 3; i++){
                howtimes[i].innerHTML = requrring[i].name;
            }
            //extra
            const extra = document.querySelector(select.additionalservices);
            for(let i = 0; i < 5; i++){
                let h3 = extra.children[i].querySelector("h3");
                let p = extra.children[i].querySelector("p");
                let obj = response.extra.options[i];
                h3.innerHTML = `${obj.price} TL`;
                p.innerHTML = obj.name;
            }
        },
        addHttpSC: function(response){
            response.forEach(element => {
                const select = document.querySelector(".selectIlce");
                select.innerHTML+=`
                <option value="${element.name}">
                    ${element.name}
                </option>
                `;
              });
        },
        // toplam değeri 0'a eşit değilse footer kısmını yazdır.
        addTotal: function(total){
            const tfoot = document.querySelector(select.print).children[2];
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
        // form boş olduğunda bildiri yazısını yazdır.
        addStart: function(total){
            const tbody = document.querySelector(select.print).children[1];
            const tittle = document.querySelector(select.print).children[0].firstElementChild;
            const startcontrol = document.querySelector(select.startControl);
            if(total!=0 || tittle.children.length==1){
                if(startcontrol){
                    tbody.removeChild(startcontrol);
                }
            }else{  
                if(!startcontrol){
                    const tr = document.createElement("tr");
                    tr.classList.add('startControl');
                    const td = document.createElement("td");
                    td.colSpan="2";
                    td.align="center";
                    const h2 = document.createElement("h2");
                    const text = document.createTextNode("Lütfen yandaki formu doldurun...");
                    h2.appendChild(text);
                    td.appendChild(h2);
                    tr.appendChild(td);
                    tbody.insertBefore(tr, tbody.children[0]);
                }
            }
        },
        addtittle: function(){
            // select değerleri girilmişse başlık ve hr'yi ekle
            const thead = document.querySelector(select.print).children[0];
            const control1 = document.querySelectorAll(select.selectControl)[0];
            const control2 = document.querySelectorAll(select.selectControl)[1];
            if(control1.children.length==1 || control2.children.length==1){
                // başlık
                document.querySelector(select.print).children[0].children[0].innerHTML = `
                    <td colspan="2" class="tittleControl"><h2>Sipariş Özeti</h2></td>
                `;
                // hr 
                const tr = document.createElement("tr");
                tr.classList.add('createHRHead');
                const td = document.createElement("td");
                td.colSpan="2";
                const hr = document.createElement("hr");
                td.appendChild(hr);
                tr.appendChild(td);
                if(!thead.lastElementChild.classList.contains('createHRHead')){
                    thead.appendChild(tr);
                }else{ null }
            }else{
                document.querySelector(select.print).children[0].children[0].innerHTML = null;
                const tr = document.querySelector(".createHRHead");
                thead.removeChild(tr);
            }
        },
        
        // ilçe ve semt değerleri girilmişse yazdır.
        addSelectAddress: function(ilce, semt){
            let virgul;
            (!(ilce == "" || semt == "")) ? virgul = "," : virgul = "";       
            if(ilce == "" && semt == ""){
                document.querySelector(select.print).children[0].children[1].innerHTML = null;
            }else{
                document.querySelector(select.print).children[0].children[1].innerHTML = `
                    <td colspan="2">${ilce} ${virgul} ${semt}</td>
                `;
            }
            UIcontroller.addtittle();
        },
        // tarih ve saat değerleri girilmişse yazdır.
        addSelectDate: function(tarih, saat){
            let virgul;
            (!(tarih == "" || saat == "")) ? virgul = "," : virgul = "";

            if(tarih == "" && saat == ""){
                document.querySelector(select.print).children[0].children[2].innerHTML = null;
            }else{
                document.querySelector(select.print).children[0].children[2].innerHTML = `
                <td colspan="2">${tarih} ${virgul} ${saat}</td>
            `;
            }
            UIcontroller.addtittle();
        },  
        removeHome: function(){
            var div = document.querySelector(select.howbighome);
            for(var i=0; i<div.children.length;i++){
                div.children[i].classList.remove('bigcontrol');
            }
        },
        // eviniz ne büyüklükte kısmında seçili olan değeri yazdır.
        printhowbig: function(HomeSizePrice){
            var addTD = document.querySelectorAll('.howBigControl');
            if(addTD.length==0){
                const tr = document.querySelector(select.howmanyprint);
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
        // eviniz kaç katlı kısmında tek sefer butonuna tıklandığında, yazdırılan dubleks ve tripleks değerlerini sil.
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
        // eviniz kaç katlı kısmında dubleks butonuna tıklandığında, tr oluşturup gerekii değerleri yazdır.
        addDuplex: function(){
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
        // eviniz kaç katlı kısmında tripleks butonuna tıklandığında, tr oluşturup gerekii değerleri yazdır.
        addTriplex: function(){
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
        // hangi sıklıkla gelelim kısmında haftada bir butonuna tıklandığında, tr oluşturup gerekii değerleri yazdır.
        addOnceAweek: function(){
            UIcontroller.removeHowOften();
            const onceaweek = document.querySelector(select.onceaweek);
            onceaweek.classList.add("howOften");
            const tr = document.querySelector(select.howmanyprint);
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
        // hangi sıklıkla gelelim kısmında iki haftada bir butonuna tıklandığında, tr oluşturup gerekii değerleri yazdır.
        addBiweekly: function(){
            UIcontroller.removeHowOften();
            document.querySelector(select.biweekly).classList.add("howOften");
            const tr = document.querySelector(select.howmanyprint);
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
        // hangi sıklıkla gelelim kısmında tek sefer butonuna tıklandığında, tr oluşturup gerekii değerleri yazdır.
        addOneTimes: function(){
            UIcontroller.removeHowOften();
            document.querySelector(select.onetimes).classList.add("howOften");
            const tr = document.querySelector(select.howmanyprint);
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
        // Ek hizmetler kısmında butonlara tıklandığında tr oluşturup o butona ait bilgileri yazdır.
        // buzdolabı temizliği
        addRefrigeratorCleaning: function(price){
            const btn = document.querySelector(select.additionalservices).children[0];
            const tbody = document.querySelector(select.print).children[1];
            const lastTR = tbody.children[2];
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
            // butonda 'addClass' class'ı yoksa butona ait bilgileri yazdır, yoksa sil.  
            if(!btn.classList.contains('addClass')){
                // butona 'addClass' class'ını ekle
                btn.classList.add('addClass');
                tbody.insertBefore(tr,lastTR);
            }else{ 
                // 'addClass' class'ını sil
                btn.classList.remove('addClass');   
                tbody.removeChild(removeTR); 
            }
        },
        // dolap temizliği
        addClosetCleaning: function(price){
            const btn = document.querySelector(select.additionalservices).children[1];
            const tbody = document.querySelector(select.print).children[1];
            const lastTR = tbody.children[2];
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
        // iç cam temizliği
        addInteriorGlass: function(price){
            const btn = document.querySelector(select.additionalservices).children[2];
            const tbody = document.querySelector(select.print).children[1];
            const lastTR = tbody.children[2];
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
        // fırın temizliği
        addOvenCleaning: function(price){
            const btn = document.querySelector(select.additionalservices).children[3];
            const tbody = document.querySelector(select.print).children[1];
            const lastTR = tbody.children[2];
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
        // 15 parça ütü
        addIrons15: function(price){
            const btn = document.querySelector(select.additionalservices).children[4];
            const tbody = document.querySelector(select.print).children[1];
            const lastTR = tbody.children[2];
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
        // 30 parça ütü
        addIrons30: function(price){
            const btn = document.querySelector(select.additionalservices).children[5];
            const tbody = document.querySelector(select.print).children[1];
            const lastTR = tbody.children[2];
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
        // teras temizliği
        addTerraceCleaning: function(price){
            const btn = document.querySelector(select.additionalservices).children[6];
            const tbody = document.querySelector(select.print).children[1];
            const lastTR = tbody.children[2];
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
        // hayır butonuna basıldığında, diğer butonların renklerini beyaz yap ve input-text kısmını sil
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
        // köpek, kedi, kuş ve balık butonlarına tıklandığında 'animals' class'ını ekle
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
        // diğer butonuna basıldığında input-text ekle
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
        // Temizlik malzemelerimizi yanımızda getirelim mi kısmında evet butonuna basıldığında gerekli bilgileri ekrana yazdır
        // hayır butonuna basıldığında yazdırılan bilgileri sil
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
        // Temizlik personeli evinize nasıl girebilir kısmında anahtarı bırakacağım butonuna basıldığında inpt-text ekle
        // evde olacağım butonuna basıldığında input-texti sil
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