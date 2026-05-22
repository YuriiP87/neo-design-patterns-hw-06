import { Author } from './Author';
import { AbstractBook } from './AbstractBook';
import { Book } from './Book';
import { Copy } from './Copy';
import { Reader } from './Reader';

export class Library {
  private readonly authors: Author[] = [];
  private readonly books: AbstractBook[] = [];
  private readonly copies: Copy[] = [];
  private readonly readers: Reader[] = [];

  public addAuthor(author: Author): void {
    this.authors.push(author);
  }

  public addBook(book: AbstractBook): void {
    this.books.push(book);
  }

  public addCopy(copy: Copy): void {
    this.copies.push(copy);
  }

  public addReader(reader: Reader): void {
    this.readers.push(reader);
  }

  public getAvailableCopies(): Copy[] {
    return this.copies.filter((copy) => copy.isCopyAvailable());
  }

  public findBooksByAuthor(authorName: string): AbstractBook[] {
    return this.books.filter((book) => {
      if (book instanceof Book) {
        return book.getAuthor().getName() === authorName;
      }

      return false;
    });
  }
}