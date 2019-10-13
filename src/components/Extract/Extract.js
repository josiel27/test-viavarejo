import React from 'react';
import './Extract.css';


const Extract = props => {
    const itemsTableTh = []
    let valueTotal = 0;

    //Converte um numero para moeda
    function formatPrice(params) {
        return params.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });//COM R$
    }

    //carrega a tabela com os valores do localstorage
    try {
        const elements = props.param.state.localStorageTransactions;
        if (elements) {
            for (const [index, value] of elements.entries()) {  //para cada element adiciona um tr na tabela
                itemsTableTh.push(
                    <tr key={index} className="table-extract-body">
                        <td className="grid-row">
                            {(value.transaction === 'Venda') ? <span className="grid-col-1">+</span> : null}
                            {(value.transaction === 'Compra') ? <span className="grid-col-1">-</span> : null}
                            <div className="grid-col-8 desc-style">
                                {value.description}
                            </div>
                        </td>
                        <td>{formatPrice(parseFloat(value.price))}</td>
                    </tr>
                )
                switch (value.transaction) { //Faz o teste e verifica se a transacao foi de compra ou venda e depois subtrai ou soma ao valor
                    case 'Venda': valueTotal += parseFloat(value.price); break;
                    case 'Compra': valueTotal -= parseFloat(value.price); break;
                }
            }

        }
    } catch (error) { console.log(error) };

    return (
        <div className="extract">
            <div className="title-extract">Extrato</div>
            {itemsTableTh.length > 0?
                <table className="table-extract">
                    <thead>
                        <tr>
                            <th>Mercadoria</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Carrega as tr na tabela */}
                        {itemsTableTh}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total</th>
                            <th>{formatPrice(valueTotal)}</th>
                        </tr>
                    </tfoot>
                </table>
                : <div className="no-extract">SEM EXTRATO - Adicione uma nova transação</div>}

        </div>
    );
}

export default Extract;