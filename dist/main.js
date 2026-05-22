"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MessageService_1 = require("./MessageService");
const RateLimitProxy_1 = require("./RateLimitProxy");
const messageService = new MessageService_1.MessageService();
const service = (0, RateLimitProxy_1.createRateLimitProxy)(messageService, 1000);
console.log("Тестуємо систему анти-спаму:");
service.send("Привіт! Як справи?");
service.send("Чому не відповідаєш?");
setTimeout(() => {
    service.send("Це повідомлення вже пройде, бо ми почекали 1 секунду");
}, 1100);
