export abstract class AbstractBook {
  private readonly title: string;
  private readonly year: number;

  constructor(title: string, year: number) {
    this.title = title;
    this.year = year;
  }

  public getTitle(): string {
    return this.title;
  }

  public getYear(): number {
    return this.year;
  }

  public abstract getDescription(): string;
}