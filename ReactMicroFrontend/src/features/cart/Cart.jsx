import React from 'react'
import { useState } from 'react'

const Cart = () => {
    const [cart, setCart] = useState({});

    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
    ];

    const addToCart = (product) => {
        setCart(prevCart => {
            return {
                ...prevCart,
                [product.id]: (prevCart[product.id] || 0) + 1,
            };
        });
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => {
            const newCart = { ...prevCart };
            if (newCart[productId] > 1) {
                newCart[productId] -= 1;
            } else {
                delete newCart[productId];
            }
            return newCart;
        });
    };

    return (
        <div style={{ margin: '0 auto', width: '50%' }}>
            <h1>Product List</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '24px' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <button onClick={() => addToCart(product)}>Add to Cart</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h1>Shopping Cart</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(cart).map(([productId, quantity]) => {
                        const product = products.find(prod => prod.id === parseInt(productId));
                        return (
                            <tr key={productId}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{quantity}</td>
                                <td>
                                    <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Cart