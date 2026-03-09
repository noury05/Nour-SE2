import { BookBuilder } from "./model/builders/book.builder";
import {CakeBuilder} from "./model/builders/cake.builder"
import { ToyBuilder } from "./model/builders/toy.builder";

async function main(){
    const cakeBuilder = new CakeBuilder()
    const cake = cakeBuilder.setType("type")
                            .setFlavor("flavor")
                            .setFilling("filling")
                            .setSize(10)
                            .setLayers(2)
                            .setFrostingType("frostingType")
                            .setFrostingFlavor("frostingFlavor")
                            .setDecorationType("decorationType")
                            .setDecorationColor("decorationColor")
                            .setCustomMessage("customMessage")
                            .setShape("shape")
                            .setAllergies("allergies")
                            .setSpecialIngredients("specialIngredients")
                            .setPackagingType("packagingType")
                            .build();


    console.log("Cake:", cake);

    const toyBuilder = new ToyBuilder();
    const toy = toyBuilder.setName("Name")
                          .setBrand("Brand")
                          .setType("Type")
                          .setMaterial("Material")
                          .setColor("Color")
                          .setAgeRecommendation("Recommendation")
                          .setPrice(25)
                          .setWeight(1.2)
                          .setBatteryRequired(true)
                          .setDescription("Description")
                          .build();

    console.log("Toy:", toy);



    const bookBuilder = new BookBuilder();
    const book = bookBuilder.setTitle(" Title")
                            .setAuthor("Author")
                            .setGenre("Genre")
                            .setLanguage("Language")
                            .setPublisher("Publisher")
                            .setPublicationYear(2009)
                            .setIsbn("ISBN")
                            .setNumberOfPages(464)
                            .setFormat("Format")
                            .setDescription("Description")
                            .build();

    console.log("Book:", book);
}
main();