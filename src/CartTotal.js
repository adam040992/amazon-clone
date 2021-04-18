import React from 'react';
import styled from 'styled-components';

function CartTotal() {
    return (
        <Container>
            Cart Total
        </Container>
    )
}

export default CartTotal

const Container = styled.div`
    flex: 0.2;
    height: 200px;
    background-color: white;
    padding: 20px;
`;