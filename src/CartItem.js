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

const Container = styled.div``;

const ImageContainer = styled.div``;

const CartItemInfo = styled.div``;

const CartItemInfoTop = styled.div``;

const CartItemInfoBottom = styled.div``;

const CartItemQuantityContainer = styled.div``;

const CartItemDeleteContainer = styled.div``;

const CartItemPrice = styled.div``;