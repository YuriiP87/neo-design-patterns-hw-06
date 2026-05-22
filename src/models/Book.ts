import { AbstractBook } from './AbstractBook';
import { Author } from './Author';

export class Book extends AbstractBook {
  private readonly author: Author;

  constructor(title: string, year: number, author: Author) {
    super(title, year);
    this.author = author;
    this.author.addBook(this);
  }

  public getAuthor(): Author {
    return this.author;
  }

  public getDescription(): string {
    return `Physical book "${this.getTitle()}" by ${this.author.getName()} (${this.getYear()})`;
  }
}