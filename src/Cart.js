import React from 'react';
import styled from 'styled-components';
import CartItems from './CartItems';
import CartTotal from './CartTotal';

function Cart({ cartItems }) {

    const getTotalPrice = () => {
        let total = 0;

        cartItems.forEach((item) => {
            total += (item.product.quantity * item.product.price);
        });
        return total;
    }

    const getTotalCount = () => {
        let count = 0;

        console.log(cartItems);

        cartItems.forEach((item) => {
            count += item.product.quantity;
        });

        return count;
    }

    return (
        <Container>
            <CartItems 
                cartItems={cartItems} 
            />
            <CartTotal 
                getTotalPrice={getTotalPrice} 
                getTotalCount={getTotalCount} 
            />
        </Container>
    )
}

export default Cart

const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    display: flex;
    padding: 14px 18px 0 18px; 
    align-items: flex-start;
`;
