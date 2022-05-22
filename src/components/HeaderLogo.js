import React from 'react';
import styled from "styled-components"
<style>
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Quicksand:wght@300&family=Roboto:wght@300&display=swap');
</style>

function HeaderLogo() {
    return (
        <Wrapper>
            <Link>Tripo Games</Link>
        </Wrapper>
    );
}


export const Wrapper = styled.div`
  border: 3px solid green;
  background-image: ('C:\inetpub\wwwroot\Github\tripo-games\public\img\bg.jpg');

`

export const Link = styled.a`
  border: 3px solid yellow;
  font-family: 'Dancing Script', cursive;
`

export default HeaderLogo;