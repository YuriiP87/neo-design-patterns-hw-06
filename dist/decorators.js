"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withTimestamp = withTimestamp;
exports.uppercase = uppercase;
function formatDate(date) {
    const pad = (num) => String(num).padStart(2, "0");
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}
function withTimestamp(_target, _propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (message) {
        const messageWithTimestamp = `[${formatDate(new Date())}] ${message}`;
        originalMethod.call(this, messageWithTimestamp);
    };
    return descriptor;
}
function uppercase(_target, _propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (message) {
        originalMethod.call(this, message.toUpperCase());
    };
    return descriptor;
}
