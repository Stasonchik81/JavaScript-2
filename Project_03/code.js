const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
  ];
  
class GoodList{
    constructor(){
        this.goods = [];
    }
    fetchGoods(){
        this.goods = goods;
    }
    render(){
        let list = '';
        this.goods.forEach(el => {
            const item = new GoodsItem(el.title, el.price);
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
List.render();
console.log(List.totalCost());
