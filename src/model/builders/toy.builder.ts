import logger from "../../util/logger";
import { Toy } from "../Toy.model";

export class ToyBuilder {

    private name!: string;
    private brand!: string;
    private type!: string;
    private material!: string;
    private color!: string;
    private ageRecommendation!: string;
    private price!: number;
    private weight!: number;
    private batteryRequired!: boolean;
    private description!: string;

    public static newBuilder(): ToyBuilder {
        return new ToyBuilder();
    }

    setName(name: string): ToyBuilder {
        this.name = name;
        return this;
    }

    setBrand(brand: string): ToyBuilder {
        this.brand = brand;
        return this;
    }

    setType(type: string): ToyBuilder {
        this.type = type;
        return this;
    }

    setMaterial(material: string): ToyBuilder {
        this.material = material;
        return this;
    }

    setColor(color: string): ToyBuilder {
        this.color = color;
        return this;
    }

    setAgeRecommendation(ageRecommendation: string): ToyBuilder {
        this.ageRecommendation = ageRecommendation;
        return this;
    }

    setPrice(price: number): ToyBuilder {
        this.price = price;
        return this;
    }

    setWeight(weight: number): ToyBuilder {
        this.weight = weight;
        return this;
    }

    setBatteryRequired(batteryRequired: boolean): ToyBuilder {
        this.batteryRequired = batteryRequired;
        return this;
    }

    setDescription(description: string): ToyBuilder {
        this.description = description;
        return this;
    }

    build(): Toy {

        const requiredProperties = [
            this.name,
            this.brand,
            this.type,
            this.material,
            this.color,
            this.ageRecommendation,
            this.price,
            this.weight,
            this.batteryRequired,
            this.description
        ];

        for (const property of requiredProperties) {
            if (property === undefined || property === null) {
                logger.error("Missing required properties, couldn't create a Toy");
                throw new Error("Missing required properties");
            }
        }

        return new Toy(
            this.name,
            this.brand,
            this.type,
            this.material,
            this.color,
            this.ageRecommendation,
            this.price,
            this.weight,
            this.batteryRequired,
            this.description
        );
    }
}