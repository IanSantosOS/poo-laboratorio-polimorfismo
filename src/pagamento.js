const Transacao = require('./transacao');

class Pagamento extends Transacao {
    constructor(valor, descricao, data) {
        super(valor, descricao);
        this._data = data;
    }
    getData() {
        return this._data;
    }
    setData(data) {
        this._data = data;
    }
    informacao() {
        return `${super.informacao()}\nData: ${this.getData()}`;
    }
}

module.exports = Pagamento;