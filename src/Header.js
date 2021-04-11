import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <Container>
            <HeaderLogo>
                <img src={"https://i.imgur.com/7I9Was5.png"} alt="Amazon_logo" />
            </HeaderLogo>

            <HeaderOptionAdress>
                <OptionLineOne>Hello,</OptionLineOne>
                <OptionLineTwo>Select your address</OptionLineTwo>
            </HeaderOptionAdress>
        </Container>
    )
}

export default Header

const Container = styled.div`
    height: 60px;
    background-color: #0F1111;
    display: flex;
    align-items: center;
`;

const HeaderLogo = styled.div`
    img {
        width: 100px;
        object-fit: content;
    }
`;

const HeaderOptionAdress = styled.div`

`;

const OptionLineOne = styled.div``;

const OptionLineTwo = styled.div``;

