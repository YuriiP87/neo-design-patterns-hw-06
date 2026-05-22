import { AbstractBook } from './AbstractBook';
import { Author } from './Author';

export class EBook extends AbstractBook {
  private readonly author: Author;
  private readonly url: string;

  constructor(title: string, year: number, author: Author, url: string) {
    super(title, year);
    this.author = author;
    this.url = url;
    this.author.addBook(this);
  }

  public getAuthor(): Author {
    return this.author;
  }

  public getUrl(): string {
    return this.url;
  }

  public getDescription(): string {
    return `E-book "${this.getTitle()}" by ${this.author.getName()} (${this.getYear()}) - Available at: ${this.url}`;
  }
}