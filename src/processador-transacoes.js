class ProcessadorTransacoes {
    constructor(valor, descricao, totalDespesasDoMes) {
        super(valor, descricao);
        this._totalDespesasDoMes = totalDespesasDoMes;
    }
    getTotalDespesasDoMes() {
        return this._totalDespesasDoMes;
    }
    processar(transacao) {
        transacao.informacao();
        this._totalDespesaDoMes += transacao.getValor();
    }
}

module.exports = ProcessadorTransacoes;