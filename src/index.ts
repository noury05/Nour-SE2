import {  CSVCakeMapper } from "./mapper/Cake.mapper";
import { readCSVFile } from "./util/parser";
import logger from "./util/logger";
import { CSVOrderMapper } from "./mapper/Order.mapper";

async function main() {
const data = await readCSVFile("src/data/cake orders.csv");
const cakeMapper=new  CSVCakeMapper();
const orderMapper = new CSVOrderMapper(cakeMapper);
const orders = data.map(orderMapper.map.bind(orderMapper));

logger.info("List of orders:\n %o", orders);

}

main();