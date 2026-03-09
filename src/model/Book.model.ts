import { IItem, ItemCategory } from "./IItem";

export class Book implements IItem {
    getCategory(): ItemCategory {
        return ItemCategory.BOOK;
    }

    private title: string;
    private author: string;
    private genre: string;
    private language: string;
    private publisher: string;
    private publicationYear: number;
    private isbn: string;
    private numberOfPages: number;
    private format: string; 
    private description: string;

    constructor(
        title: string,
        author: string,
        genre: string,
        language: string,
        publisher: string,
        publicationYear: number,
        isbn: string,
        numberOfPages: number,
        format: string,
        description: string
    ) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.language = language;
        this.publisher = publisher;
        this.publicationYear = publicationYear;
        this.isbn = isbn;
        this.numberOfPages = numberOfPages;
        this.format = format;
        this.description = description;
    }

    getTitle(): string { 
        return this.title; 
    }
    getAuthor(): string {
         return this.author; 
        }
    getGenre(): string {
         return this.genre; 
        }
    getLanguage(): string {
         return this.language; 
        }
    getPublisher(): string {
         return this.publisher; 
        }
    getPublicationYear(): number {
         return this.publicationYear; 
        }
    getIsbn(): string {
         return this.isbn; 
        }
    getNumberOfPages(): number {
         return this.numberOfPages; 
        }
    getFormat(): string {
         return this.format; 
        }
    getDescription(): string {
         return this.description; 
        }
}
