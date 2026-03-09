import { IItem, ItemCategory } from "./IItem";

export class Toy implements IItem {
    getCategory(): ItemCategory {
        return ItemCategory.TOY;
    }

    private name: string;
    private brand: string;
    private type: string;
    private material: string;
    private color: string;
    private ageRecommendation: string;
    private price: number;
    private weight: number;
    private batteryRequired: boolean;
    private description: string;

    constructor(
        name: string,
        brand: string,
        type: string,
        material: string,
        color: string,
        ageRecommendation: string,
        price: number,
        weight: number,
        batteryRequired: boolean,
        description: string
    ) {
        this.name = name;
        this.brand = brand;
        this.type = type;
        this.material = material;
        this.color = color;
        this.ageRecommendation = ageRecommendation;
        this.price = price;
        this.weight = weight;
        this.batteryRequired = batteryRequired;
        this.description = description;
    }

    getName(): string {
         return this.name; 
        }
    getBrand(): string {
         return this.brand; 
        }
    getType(): string {
         return this.type; 
        }
    getMaterial(): string {
         return this.material; 
        }
    getColor(): string {
         return this.color; 
        }
    getAgeRecommendation(): string {
         return this.ageRecommendation; 
        }
    getPrice(): number {
         return this.price; 
        }
    getWeight(): number {
         return this.weight; 
        }
    isBatteryRequired(): boolean {
         return this.batteryRequired; 
        }
    getDescription(): string {
         return this.description; 
        }
}
