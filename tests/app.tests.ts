import {Validator, FinanceCalculator ,  orderManegment , Order} from "../src/app";

describe("orderManagement",()=> {
    // before all, new validator and new calculator
    // before each, new order management
    let validator: Validator;
    let calc: FinanceCalculator;
    let orderManager: orderManegment;   
    let baseValidator:(order: Order)=> void;
    beforeAll(() => {
        validator = new Validator();
        calc = new FinanceCalculator();
    });  
    beforeEach(() => {
        baseValidator = validator.validate;
        validator.validate = jest.fn();
        orderManager = new orderManegment(validator,calc);
    });
    afterEach(() => {
        validator.validate=baseValidator ;
    });

    it("should add an order",() => {
        // Arrange
        const item = "Sponge";
        const price = 15;

        // Act
        orderManager.addOrder(item,price);

        // Assest
        expect(orderManager.getOrders()).toEqual([{id:1,item,price}]);
    });

    it("should add an order",() => {
        // Arrange
        const item = "Sponge";
        const price = 15;
        orderManager.addOrder(item,price);
        // Act
        const order = orderManager.getOrder(1);
        // Assest
        expect(order).toEqual({id:1,item,price});
    });

    it("should call finance calculator getRevenue",() => {
        const item = "Sponge";
        const price = 15;
        orderManager.addOrder(item,price);
        const spy = jest.spyOn(calc,"getRevenue");
        // Act
        orderManager.getTolataRevenue();
        // Assest
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith(orderManager.getOrders());
        expect(spy).toHaveReturnedWith(15);
    });
    it("should throw additional exception if validator does not pass",() => {
        // Arrange
        const item = "Sponge";
        const price = 10;
        (validator.validate as jest.Mock).mockImplementation(() => {
            throw new Error("Invalid order");
        });
        // Act & Assert
        expect(() => orderManager.addOrder(item,price)).toThrow("[OrderManagaer]Error adding order: Invalid order");
    });
});

describe("Finance Calculator",() => {
        it("should calculate total revenue",() => {
            // Arrange  
            const calc = new FinanceCalculator();
            const orders = [
                {id:1,item:"Sponge",price:15},
                {id:2,item:"Chocolate",price:20},
                {id:3,item:"Fruit",price:10},
            ];
            // Act
            const revenue = calc.getRevenue(orders);
            // Assest
            expect(revenue).toEqual(45);
    });

     it("should get average buy power",() => {
            // Arrange  
            const calc = new FinanceCalculator();
            const orders = [
                {id:1,item:"Sponge",price:15},
                {id:2,item:"Chocolate",price:20},
                {id:3,item:"Fruit",price:10},
            ];
            // Act
            const buyPower = calc.getAverageBuyPower(orders);
            // Assest
            expect(buyPower).toBeCloseTo(15,0);
    });
});