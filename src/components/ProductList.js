import React from 'react';

const ProductList = ({
                         minPrice,
                         maxPrice,
                         sortOrder,
                         itemsPerPage,
                         currentPage,
                         onInputChange,
                         onResetFilters,
                         onSortChange,
                         onItemsPerPageChange,
                         onPageChange,
                     }) => {
    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 150 },
        { id: 3, name: 'Product 3', price: 200 },
        { id: 4, name: 'Product 4', price: 50 },
    ];

    const getFilteredProducts = () => {
        return products.filter(product =>
            product.price >= minPrice && product.price <= maxPrice
        );
    };

    const getSortedProducts = (products) => {
        return [...products].sort((a, b) =>
            sortOrder === 'asc' ? a.price - b.price : b.price - a.price
        );
    };

    const getPaginatedProducts = (products) => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return products.slice(startIndex, startIndex + itemsPerPage);
    };

    const filteredProducts = getFilteredProducts();
    const sortedProducts = getSortedProducts(filteredProducts);
    const paginatedProducts = getPaginatedProducts(sortedProducts);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    return (
        <div className="product-section">
            <h2>Product Management</h2>
            <div className="filter-controls">
                <label>
                    Min Price: <input type="number" name="minPrice" value={minPrice} onChange={onInputChange} />
                </label>
                <label>
                    Max Price: <input type="number" name="maxPrice" value={maxPrice} onChange={onInputChange} />
                </label>
                <label>
                    Sort by Price:
                    <select value={sortOrder} onChange={onSortChange}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </label>
                <label>
                    Items per Page:
                    <select value={itemsPerPage} onChange={onItemsPerPageChange}>
                        <option value={2}>2</option>
                        <option value={4}>4</option>
                        <option value={6}>6</option>
                    </select>
                </label>
                <button onClick={onResetFilters}>Reset Filters</button>
            </div>

            <ul className="product-list">
                {paginatedProducts.map(product => (
                    <li key={product.id} className="product-item">
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>

            <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button key={page} onClick={() => onPageChange(page)} disabled={currentPage === page}>
                        {page}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductList;