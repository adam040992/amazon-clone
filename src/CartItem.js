import React from 'react';
import styled from 'styled-components';

function CartItem() {
    return (
        <Container>
            <ImageContainer>
                <img src={"https://res-1.cloudinary.com/grover/image/upload/e_trim/c_limit,f_auto,fl_png8.lossy,h_1280,q_auto,w_1280/v1585126619/tk8sr569tsqiwypredd7.png"} />
            </ImageContainer>

            <CartItemInfo>
                <CartItemInfoTop>
                    <h2>New Apple IPad Pro</h2>
                </CartItemInfoTop>

                <CartItemInfoBottom>
                    <CartItemQuantityContainer>
                        5
                    </CartItemQuantityContainer>
                    
                    <CartItemDeleteContainer>
                        Delete
                    </CartItemDeleteContainer>
                </CartItemInfoBottom>
            </CartItemInfo>

            <CartItemPrice>
                $1449
            </CartItemPrice>
        </Container>
    )
}

export default CartItem

const Container = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex;
`;

const ImageContainer = styled.div`
    width: 180px;
    height: 180px;
    flex-shrink: 0;
    flex-grow: 0;
    margin-right: 16px;

    img {
        object-fit: contain;
        height: 100%;
        width: 100%;
    }
`;

const CartItemInfo = styled.div``;

const CartItemInfoTop = styled.div`
    color: #007185;

    h2 {
        font-size: 18px;
    }
`;

const CartItemInfoBottom = styled.div`
    display: flex;
    margin-top: 4px;
`;

const CartItemQuantityContainer = styled.div``;

const CartItemDeleteContainer = styled.div`
    color: #007185;
    margin-left: 16px;
    cursor: pointer;
`;

const CartItemPrice = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-left: 16px;
`;