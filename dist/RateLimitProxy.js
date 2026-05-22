"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimitProxy = void 0;
exports.createRateLimitProxy = createRateLimitProxy;
class RateLimitProxy {
    constructor(wrappee, intervalMs) {
        this.wrappee = wrappee;
        this.intervalMs = intervalMs;
        this.lastCallTime = 0;
    }
    send(message) {
        const now = Date.now();
        if (now - this.lastCallTime < this.intervalMs) {
            console.log("[RateLimit] skipped");
            return;
        }
        this.lastCallTime = now;
        this.wrappee.send(message);
    }
}
exports.RateLimitProxy = RateLimitProxy;
function createRateLimitProxy(wrappee, intervalMs) {
    return new RateLimitProxy(wrappee, intervalMs);
}
