// Получение данных с помощью calback
/*function makeGetRequest(url, callback){
    var xhr;
    if (window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject){
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4){
            callback(xhr.responseText);
        }
    }
    xhr.open('GET', url, true);
    xhr.send();
}
*/
 // Получение данных с помощью promise
function makeGetRequest(url){
    return new Promise((resolve) => {
        var xhr;
        if (window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject){
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4){
            resolve(xhr.responseText);
            }
        }
        xhr.open('GET', url, true);
        xhr.send();
    })   
}

// function makeGetRequest(url){
//     return new Promise(function(resolve, reject){
//         var xhr;
//         if (window.XMLHttpRequest){
//         xhr = new XMLHttpRequest();
//         } else if (window.ActiveXObject){
//         xhr = new ActiveXObject("Microsoft.XMLHTTP");
//             }
//         xhr.open('GET', url, true);
//         xhr.onload = () => resolve(xhr.responseText);
//         xhr.onerror = () => reject(console.error('Ошибка загрузки скрипта'));
//         xhr.open('GET', url, true);
//         xhr.send();
//     })
// }

class GoodList{
    constructor(){
        this.goods = [];
    }
    fetchGoods(){
        const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
        makeGetRequest(`${API_URL}/catalogData.json`)
            .then((data) => {this.goods = JSON.parse(data);
            //this.render();
        });
    }
    // render(){
    //     let list = '';
    //     this.goods.forEach(el => {
    //         const item = new GoodsItem(el.product_name, el.price);
    //         list += item.render();
    //     })
    //     document.querySelector('.goods-list').innerHTML = list;
    // }
    render(){
        let list = '';
        this.goods.forEach(el => {
            const item = new GoodsItem(el.product_name, el.price);
            list += item.render();
        })
        document.querySelector('.goods-list').innerHTML = list;
    }
    totalCost(){
        let total = 0;
        this.goods.forEach(el => {
            total += el.price;
        })
        return total;
    }
}

class GoodsItem{
    constructor(title, price){
        this.name = title;
        this.price = price;
    }
    render(){
        return `<div class="goods-item"><h3>${this.name}</h3><p>${this.price}</p></div>`;
    }
}

class Cart{
    constructor(){

    }
    render(){

    }
}

class CartItem{
    constructor(){

    }
    render(){

    }
    putToCart(){

    }
    removeFromCart(){

    }
}
const List = new GoodList();
List.fetchGoods();
