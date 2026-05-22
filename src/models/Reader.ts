import { Copy } from './Copy';

export class Reader {
  private readonly id: string;
  private readonly name: string;
  private readonly borrowedCopies: Copy[] = [];

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public borrowCopy(copy: Copy): void {
    this.borrowedCopies.push(copy);
  }

  public returnCopy(copy: Copy): void {
    const index = this.borrowedCopies.indexOf(copy);

    if (index !== -1) {
      this.borrowedCopies.splice(index, 1);
    }
  }

  public getBorrowedCopies(): Copy[] {
    return [...this.borrowedCopies];
  }
}