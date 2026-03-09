import logger from "../../util/logger";
import { Book } from "../Book.model";

export class BookBuilder {

    private title!: string;
    private author!: string;
    private genre!: string;
    private language!: string;
    private publisher!: string;
    private publicationYear!: number;
    private isbn!: string;
    private numberOfPages!: number;
    private format!: string;
    private description!: string;

    public static newBuilder(): BookBuilder {
        return new BookBuilder();
    }

    setTitle(title: string): BookBuilder {
        this.title = title;
        return this;
    }

    setAuthor(author: string): BookBuilder {
        this.author = author;
        return this;
    }

    setGenre(genre: string): BookBuilder {
        this.genre = genre;
        return this;
    }

    setLanguage(language: string): BookBuilder {
        this.language = language;
        return this;
    }

    setPublisher(publisher: string): BookBuilder {
        this.publisher = publisher;
        return this;
    }

    setPublicationYear(publicationYear: number): BookBuilder {
        this.publicationYear = publicationYear;
        return this;
    }

    setIsbn(isbn: string): BookBuilder {
        this.isbn = isbn;
        return this;
    }

    setNumberOfPages(numberOfPages: number): BookBuilder {
        this.numberOfPages = numberOfPages;
        return this;
    }

    setFormat(format: string): BookBuilder {
        this.format = format;
        return this;
    }

    setDescription(description: string): BookBuilder {
        this.description = description;
        return this;
    }

    build(): Book {

        const requiredProperties = [
            this.title,
            this.author,
            this.genre,
            this.language,
            this.publisher,
            this.publicationYear,
            this.isbn,
            this.numberOfPages,
            this.format,
            this.description
        ];

        for (const property of requiredProperties) {
            if (property === undefined || property === null) {
                logger.error("Missing required properties, couldn't create a Book");
                throw new Error("Missing required properties");
            }
        }

        return new Book(
            this.title,
            this.author,
            this.genre,
            this.language,
            this.publisher,
            this.publicationYear,
            this.isbn,
            this.numberOfPages,
            this.format,
            this.description
        );
    }
}