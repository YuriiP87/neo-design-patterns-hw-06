import { Book } from './Book';

export class Copy {
  private readonly book: Book;
  private isAvailable: boolean = true;

  constructor(book: Book) {
    this.book = book;
  }

  public getBook(): Book {
    return this.book;
  }

  public isCopyAvailable(): boolean {
    return this.isAvailable;
  }

  public borrow(): boolean {
    if (!this.isAvailable) {
      return false;
    }

    this.isAvailable = false;
    return true;
  }

  public returnCopy(): void {
    this.isAvailable = true;
  }
}