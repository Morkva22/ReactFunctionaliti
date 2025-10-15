import React, { Component } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import ContactForm from './components/ContactForm';

class App extends Component {
    state = {
        minPrice: 0,
        maxPrice: 1000,
        sortOrder: 'asc',
        itemsPerPage: 2,
        currentPage: 1,
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleResetFilters = () => {
        this.setState({
            minPrice: 0,
            maxPrice: 1000,
            sortOrder: 'asc',
            currentPage: 1,
        });
    };

    handleSortChange = (e) => {
        this.setState({ sortOrder: e.target.value, currentPage: 1 });
    };

    handleItemsPerPageChange = (e) => {
        this.setState({ itemsPerPage: parseInt(e.target.value), currentPage: 1 });
    };

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    };

    render() {
        return (
            <div className="App">
                <h1 className="app-title">React Task Page</h1>
                <ProductList
                    minPrice={this.state.minPrice}
                    maxPrice={this.state.maxPrice}
                    sortOrder={this.state.sortOrder}
                    itemsPerPage={this.state.itemsPerPage}
                    currentPage={this.state.currentPage}
                    onInputChange={this.handleInputChange}
                    onResetFilters={this.handleResetFilters}
                    onSortChange={this.handleSortChange}
                    onItemsPerPageChange={this.handleItemsPerPageChange}
                    onPageChange={this.handlePageChange}
                />
                <hr className="divider" />
                <ContactForm />
            </div>
        );
    }
}

export default App;