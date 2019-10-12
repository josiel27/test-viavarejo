import React, { Component } from 'react';
import Toolbar from '../SideMenu/Toolbar/Toolbar';
import SideDrawer from '../SideMenu/SideDrawer/SideDrawer';
import Container from '../Container/Container';
import './App.css'

class App extends Component {

  state = {
    sideDrawerOpen: false,
    listTransactionType: ['Compra', 'Venda'],
    transaction: 'Compra',
    description: '',
    price: '',
    localStorageTransactions: []
  };

  //Carrega lista de transacoes no local storage
  componentDidMount = () => {
    const itemsTableTh = []
    try {
      const elements = JSON.parse(localStorage.getItem(`@test-viavarejo/transactions`));
      if (elements) {
        for (const [index, value] of elements.entries()) {
          itemsTableTh.push(value)
        }
        this.setState({ localStorageTransactions: itemsTableTh })
      }
    } catch (error) { console.log(error) };
  }

  //Funcao para abrir e fechar menu lateral
  drawerToggleClickHandle = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    });
  }

  //Converte um numero para moeda
  formatPrice = (params) => {
    let value = parseInt(params.replace(/[\D]+/g, ''));
    let formattedValue = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });//COM R$
    // let formattedValue = value.toLocaleString('pt-BR', { minimumFractionDigits: 2 });; //SEM R$
    return formattedValue;
  }

  //Seta no state a o tipo de transacao
  handleChangeTransaction = (event) => {
    this.setState({ transaction: event.target.value })
  }

  //Seta no state a descriçao
  handleChangeDescription = (event) => {
    this.setState({ description: event.target.value })
  }


  //Seta no state o valor da transação
  handleChangePrice = (event) => {
    this.setState({ price: event.target.value });
  }


  //salva as informacoes no local storage e state
  handleSubmit = (event) => {
    event.preventDefault();// Prevent submit from reloading the page
    try {
      this.state.localStorageTransactions.push(
        {
          transaction: this.state.transaction,
          description: this.state.description,
          price: this.state.price,
        }
      )
      this.setState({ localStorageTransactions: this.state.localStorageTransactions });
      localStorage.setItem(`@test-viavarejo/transactions`, JSON.stringify(this.state.localStorageTransactions))
    } catch (error) { alert(`Erro: ${error}`) };
  }



  render() {
    //salva as funções para passar no change para o component
    let changeStateHandler = {
      handleChangeTransaction: this.handleChangeTransaction,
      handleChangeDescription: this.handleChangeDescription,
      handleChangePrice: this.handleChangePrice,
      handleSubmit: this.handleSubmit
    }

    return (
      <div className="App">
        <header className="header">
          <Toolbar drawerClickHandle={this.drawerToggleClickHandle} />
          <SideDrawer show={this.state.sideDrawerOpen} drawerClickHandle={this.drawerToggleClickHandle} />
        </header>
        <main className="main">
          <Container change={changeStateHandler} state={this.state} />
        </main>
      </div>
    )
  }
}

export default App;
