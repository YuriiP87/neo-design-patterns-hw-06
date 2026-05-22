import { Reader } from '../models/Reader';
import { Copy } from '../models/Copy';

export class BorrowService {
  public borrow(reader: Reader, copy: Copy): boolean {
    const isBorrowed = copy.borrow();

    if (!isBorrowed) {
      return false;
    }

    reader.borrowCopy(copy);
    return true;
  }

  public returnBook(reader: Reader, copy: Copy): void {
    copy.returnCopy();
    reader.returnCopy(copy);
  }
}