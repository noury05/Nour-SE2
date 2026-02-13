import { PriceValidator, ItemValidator, MaxPriceValidator, orderManegment, Validator, FinanceCalculator } from "./app";
import logger from "./util/logger";

const orders = [
  { id: 1, item: "Sponge", price: 15 },
  { id: 2, item: "Chocolate", price: 20 },
  { id: 3, item: "Fruit", price: 18 },
  { id: 4, item: "Red Velvet", price: 25 },
  { id: 5, item: "Coffee", price: 8 },
];
const rules=[
        new PriceValidator(),
        new ItemValidator(),
        new MaxPriceValidator()
]

const orderManeger = new orderManegment(new Validator(rules), new FinanceCalculator());
// const orderManeger = new PrempiumOrderManager(); ==> optional we can skip it since 
                                                    // now it doesnt contain mathmatical calculations
for(const order of orders){
    orderManeger.addOrder(order.item,order.price)
}
const newItem = "Marble";
const newPrice = 22;
orderManeger.addOrder(newItem,newPrice);

logger.info("Orders after adding new order: %o"  , orderManeger.getOrders())
logger.info("Total Revenue"  + orderManeger.getTolataRevenue())
logger.info("Average Buy Power: "+orderManeger.getBuyPower())

// fetching an order directly
const fetchID = 2;
const ferchOrder = orderManeger.getOrder(fetchID);
logger.info("Order with id 2 %o", ferchOrder);  //splat allows me to write the number in the terminal we add here %0 (object) for numbers %d (decimal) and for strings %s

// attempt to fetch a non-existent order
const nonExistentID = 10;
const nonExistentOrder = orderManeger.getOrder(nonExistentID);
logger.info("Order with id 10 not exixtent " + nonExistentOrder)