"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
const axios_1 = require("axios");
class Wallet {
    constructor(node, identity) {
        this.node = node;
        this.identity = identity;
    }
    async sendDesoRequest(request, options) {
        const endpoint = 'send-deso';
        const apiResponse = (await axios_1.default.post(`${this.node.getUri()}/${endpoint}`, request)).data;
        return await this.identity
            .submitTransaction(apiResponse.TransactionHex, options)
            .then(() => apiResponse)
            .catch(() => {
            throw Error('something went wrong while signing');
        });
    }
    async buyOrSellCreatorCoin(request, options) {
        const endpoint = 'buy-or-sell-creator-coin';
        const apiResponse = (await axios_1.default.post(`${this.node.getUri()}/${endpoint}`, request)).data;
        return await this.identity
            .submitTransaction(apiResponse.TransactionHex, options)
            .then(() => apiResponse)
            .catch(() => {
            throw Error('something went wrong while signing');
        });
    }
    async transferCreatorCoin(request, options) {
        const endpoint = 'transfer-creator-coin';
        const apiResponse = (await axios_1.default.post(`${this.node.getUri()}/${endpoint}`, request)).data;
        return await this.identity
            .submitTransaction(apiResponse.TransactionHex, options)
            .then(() => apiResponse)
            .catch(() => {
            throw Error('something went wrong while signing');
        });
    }
}
exports.Wallet = Wallet;
//# sourceMappingURL=Wallet.js.map