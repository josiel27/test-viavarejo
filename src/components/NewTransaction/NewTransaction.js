import React from 'react';
import './NewTransaction.css';



const NewTransaction = (props) => {
    //Preenche o select com os tipos de transacoes
    function getOptionsTransactionType() {
        let listTransactionType = [];
        props.param.state.listTransactionType.forEach(element => {
            listTransactionType.push(<option key={element} value={element}>{element}</option>)
        });
        return listTransactionType;
    };


    return (
        <div className="transaction">
            <div className="transaction-title">Nova transação</div>

            <form className="grid-row" onSubmit={(e) => { props.param.change.handleSubmit(e) }}>

                <div className="grid-col-12 type-transaction">
                    <div className="grid-row" >
                        <label className="grid-col-12">Tipo de transação</label>
                        <select className="grid-col-12 input-style" value={props.param.state.transaction} onChange={props.param.change.handleChangeTransaction} required>
                            {getOptionsTransactionType()}
                        </select>
                    </div>
                </div>

                <div className="grid-col-12 merchandise-name">
                    <div className="grid-row" >
                        <label className="grid-col-12 ">Nome da mercadoria</label>
                        <input className="grid-col-12 input-style"
                            value={props.param.state.transaction.description}
                            onChange={props.param.change.handleChangeDescription}
                            placeholder="Input"
                            required />
                    </div>
                </div>

                <div className="grid-col-12 price-value">
                    <div className="grid-row" >
                        <label className="grid-col-12">Valor</label>
                        <input className="grid-col-12 input-style"
                            value={props.param.state.transaction.price}
                            onChange={props.param.change.handleChangePrice}
                            placeholder="R$ 0,00"
                            type="number"
                            required />
                    </div>
                </div>

                <button type="submit" className="grid-col-12 input-style submit-style">Adicionar Transação</button>

            </form>

        </div>
    );
}

export default NewTransaction;