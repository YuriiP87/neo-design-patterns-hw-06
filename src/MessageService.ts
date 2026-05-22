import { IMessageService } from "./IMessageService";
import { uppercase, withTimestamp } from "./decorators";

export class MessageService implements IMessageService {
  @uppercase
  @withTimestamp
  send(message: string): void {
    console.log(message);
  }
}