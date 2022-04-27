import styled from "styled-components";

export const StyledSidebar = styled.div`
    height: 100vh;
    width: 33vw; 
    position: fixed;
    top: 0;
    left: 0;
    color: ${(props) => props.color };
    background: ${(props) => props.background};
    padding: 10px;
    margin: 0;
    line-height: 4;

    div {
        color: #000;
        font-weight: bold;
    }

    span {
        color: #f45832;
    }

    ul {
        line-height: 2;
        list-style-type: none;
    }

    .active {
        font-weight: bold;
    }

    @media(min-width: 700px){
        width: 20vw;
    }

    @media(min-width: 900px) {
        width: 10vw;
    }

    @media(min-width: 1500px) {
        width: 8vw;
    }

  `;