const UIcontroller = (function(){
    const select = {
        part1: '.part1',
        part2: '.part2',
        animals: 'animals',
        animalsControl: '.animalsControl',
        key: 'key',
    }
    return {
        getSelects: function(){
            return select
        },
        createProductList: function(ilce, semt, tarih, saat){
            var html = '';
            html = `
                <table>
                    <tr>
                        <td colspan="2"><h2>Sipariş Özeti</h2></td>
                    </tr>
                    <tr>
                        <td colspan="2">${ilce}, ${semt}</td>
                    </tr>
                    <tr>
                        <td colspan="2">${tarih}, ${saat}</td>
                    </tr>
                    <tr>
                        <td colspan="2"><hr></td>
                    </tr>
                    <tr>
                        <td>Haftada Bir</td>
                        <td>232 TL</td>
                    </tr>
                    <tr>
                        <td>Buzdolabı Temizliği</td>
                        <td>5 TL</td>
                    </tr>
                    <tr>
                        <td>Temizlik Malzemeleri</td>
                        <td>40 TL</td>
                    </tr>
                    <tr>
                        <td colspan="2"><hr></td>
                    </tr>
                    <tr>
                        <td>Toplam</td>
                        <td>282 TL</td>
                    </tr>
                    <tr>
                        <td colspan="2"><input type="button" value="Devam Et"></td>
                    </tr>
                </table> `;
            document.querySelector(select.part2).firstElementChild.innerHTML = html;
            console.log(document.querySelector(select.part2).firstElementChild)
        },
        addAnimals0: function(){
            var div = document.querySelector(select.part1).children[5].children[1];
            div.children[1].classList.remove(select.animals);
            div.children[2].classList.remove(select.animals);
            div.children[3].classList.remove(select.animals);
            div.children[4].classList.remove(select.animals);
            div.children[5].classList.remove(select.animals);
            div.children[0].classList.add(select.animals);
            if(div.lastElementChild.children.length==1){
                div.lastElementChild.removeChild(div.lastElementChild.children[0]);
            }else{ null }
        },
        addAnimals1: function(){
            var div = document.querySelector(select.part1).children[5].children[1];
            div.children[1].classList.add(select.animals);
            div.children[0].classList.remove(select.animals);
        },
        addAnimals2: function(){
            var div = document.querySelector(select.part1).children[5].children[1];
            div.children[2].classList.add(select.animals);
            div.children[0].classList.remove(select.animals);
        },
        addAnimals3: function(){
            var div = document.querySelector(select.part1).children[5].children[1];
            div.children[3].classList.add(select.animals);
            div.children[0].classList.remove(select.animals);
        },
        addAnimals4: function(){
            var div = document.querySelector(select.part1).children[5].children[1];
            div.children[4].classList.add(select.animals);
            div.children[0].classList.remove(select.animals);
        },
        addAnimals5: function(){
            var html = '';
            html = `
                <input type="text" placeholder="Lütfen evcil hayvanınızı yazınız..." >
            `;
            var div = document.querySelector(select.part1).children[5].children[1];
            if(div.lastElementChild.children.length==0){
                div.lastElementChild.innerHTML+=html;
            }else{ null }
            div.children[5].classList.add(select.animals);
            div.children[0].classList.remove(select.animals);
        },      
        addAnimalsControl: function(){
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
            div1.children[1].classList.add(select.key);
            div1.children[0].classList.remove(select.key);
        },
        removeKey: function(){
            var div1 = document.querySelector(select.part1).children[6].children[4];
            var div2 = div1.children[2];
            if(div2.children.length==1){
                div2.removeChild(div2.children[0]);        
            }else{ null }
            div1.children[1].classList.remove(select.key);
            div1.children[0].classList.add(select.key);
        }
    }

}())