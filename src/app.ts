
import logger from "./util/logger";
export interface Order{
    id:number,
    price:number,
    item:string
}

export class orderManegment {
    private orders : Order[] = [];
    constructor(private validator :IValidator , private calculator: ICalculator){
        logger.debug("OrderManager instance created");
    }
    getOrders(){
        return this.orders;
    }
    addOrder(item:string , price:number){
        try{
        const order:Order= {id:this.orders.length +1 ,item ,price};
        this.validator.validate(order);
        this.orders.push(order);   
        }catch(error:any){
            throw new Error("[OrderManagaer]Error adding order: " + error.message);
        }
    }
    getOrder(id:number){
        const order = this.getOrders().find(orders => orders.id === id);
        if(!order){
            logger.warn(`Order with id ${id} not found`);
        }
        return order;
    }
    getTolataRevenue(){
        return this.calculator.getRevenue(this.orders)
    }
    getBuyPower(){
        return this.calculator.getAverageBuyPower(this.orders);
    }
}
    class PrempiumOrderManager extends orderManegment{
        getOrder(id: number):Order |undefined{
            console.log("ALERT: Premium order being fetches")
            return super.getOrder(id);
        }
    }

interface IValidator{
    validate(order:Order):void ;
}

export class Validator implements IValidator{
    constructor(private rules :IValidator[] = []){

    }
    validate(order: Order): void {
        this.rules.forEach(rules => rules.validate(order));
    }
}

export class ItemValidator implements IValidator{
    private static possibleItems = [
    "Sponge",
    "Chocolate",
    "Fruit",
    "Red Velvet",
    "Birthday",
    "Carrot",
    "Marble",
    "Coffee",
    ];
    validate(order:Order){
        if(!ItemValidator.possibleItems.includes(order.item)){
            throw new Error(`Invalid item. Must be one of ${ItemValidator.possibleItems.join(", ")}`)
        }
    }
}
export class PriceValidator implements IValidator{
    validate(order:Order){
        if(order.price<=0){
            logger.error(`Price is negative : ${order.item}`);
            throw new Error("Price must be greater than zero")
        }
    }
}
export class MaxPriceValidator implements IValidator{
    validate(order:Order){
        if(order.price > 100){
            throw new Error("Price must be less than 100")
        }
    }
}

interface ICalculator{
    getRevenue(orders :Order[]):number;
    getAverageBuyPower(orders:Order[]):number;
}

export class FinanceCalculator implements ICalculator{
    // calculate total revenue and average buy power
    public getRevenue(orders:Order[]){
        return orders.reduce((total , order) => total + order.price , 0);
    }
    public getAverageBuyPower(orders:Order[]){
        return  orders.length === 0 ? 0 : this.getRevenue(orders) / orders.length;
    }
}


