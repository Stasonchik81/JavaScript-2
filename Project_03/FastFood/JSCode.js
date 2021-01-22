class Param{
    constructor(element){
        this.name = element.name;
        this.price = +element.dataset['price'];
        this.calories = +element.dataset['calories'];
    }
}

class Hamburger{
    constructor(size, stuffing, topping){
        this.size = new Param(this.select(size));
        this.stuffing = this.getAdds(stuffing);
        this.topping = this.getAdds(topping);

    }
    
    getAdds(name){
        let result = [];
        this.selectAll(name).forEach(el => {
            result.push(new Param(el))
        })
        return result;
    }

    select(name){
        return document.querySelector(`input[name ="${name}"]:checked`);
    }
    selectAll(name){
        return [...document.querySelectorAll(`input[name = ${name}]:checked`)];

    }
    calculatePrice(){
        let result = this.size.price; 
        this.stuffing.forEach(el => result +=el.price);
        this.topping.forEach(el => result += el.price);
        return result;
    }
    calculateCalories(){
        let result = this.size.calories; 
        this.stuffing.forEach(el => result +=el.calories);
        this.topping.forEach(el => result += el.calories);
        return result;
    }
    showSum(price, calories){
        document.querySelector(price).textContent = this.calculatePrice();
        document.querySelector(calories).textContent = this.calculateCalories();
    }
    resetSum(price, calories){
        document.querySelector(price).textContent = 0;
        document.querySelector(calories).textContent = 0;
    }
}
