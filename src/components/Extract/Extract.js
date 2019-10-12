import React from 'react';
import './Extract.css';


const Extract = props => {
    const itemsTableTh = []

    //carrega a tabela com os valores do localstorage
    try {
        const elements = props.param.state.localStorageTransactions;
        if (elements) {
            for (const [index, value] of elements.entries()) {  //para cada element adiciona um tr na tabela
                itemsTableTh.push(
                    <tr key={index} className="table-extract-body">
                        <td><span>+</span>{value.description}</td>
                        <td>{value.price}</td>
                    </tr>
                )
            }
        }
    } catch (error) { console.log(error) };


    return (
        <div className="extract">
            <div className="title-extract">Extrato</div>
            <table className="table-extract">
                <thead  className="table-thead">
                    <tr>
                        <th >Valor</th>
                        <th>Lastname</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Carrega as tr na tabela */}
                    {itemsTableTh}
                </tbody>
                <tfoot className="table-tfoot">
                    <tr className="table-extract-total">
                        <th >Valor</th>
                        <th>Lastname</th>
                    </tr>
                </tfoot>
            </table>

        </div>
    );
}

export default Extract;