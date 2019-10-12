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

                <select className="grid-col-12" value={props.param.state.transaction} onChange={props.param.change.handleChangeTransaction} required>
                    {getOptionsTransactionType()}
                </select>

                <input className="grid-col-12"
                    value={props.param.state.transaction.description}
                    onChange={props.param.change.handleChangeDescription}
                    placeholder="Input"
                    required />

                <input className="grid-col-12"
                    value={props.param.state.transaction.price}
                    onChange={props.param.change.handleChangePrice}
                    placeholder="R$ 0,00"
                    required />

                <button type="submit" className="">Adicionar Transação</button>

            </form>

        </div>
    );
}

export default NewTransaction;


            // for (const key in props.param.state) {
            //     localStorage.setItem(`@test-viavarejo/${key}`, JSON.stringify(props.param.state[key]));
            // }