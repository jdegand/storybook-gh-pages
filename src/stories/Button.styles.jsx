import styled from "styled-components";

const buttonBackground = props => {
    let bg = "#e0e0e0";
    switch (props.background) {
        case "primary":
            bg = "#2962ff";
            break;
        case "secondary":
            bg = "#455a64";
            break;
        case "danger":
            bg = "#d32f2f";
            break;
        case "outline":
            bg = "#fff";
            break;
        case "text":
            bg = "#fff";
            break;
        case "default-hover":
            bg = "#aeaeae";
            break;
        case "hover-outline":
            bg = "#eaefff";
            break;
        case "hover-primary":
            bg = "#0039cb";
            break;
        case "hover-secondary":
            bg = "#1c313a";
            break;
        case "hover-danger":
            bg = "#9a0007";
            break;
        case "hover-text":
            bg = "#eaefff";
            break;
        default:
            bg = "#e0e0e0";
            break;
    }
    return bg;
}

const hoverBackground = props => {

    if (props.disabled || props.background === 'default-hover' || props.background === 'hover-primary' || props.background === 'hover-secondary' ||
        props.background === 'hover-danger' || props.background === 'hover-outline' || props.background === 'hover-text') return;

    let hoverBG = "#aeaeae";
    switch (props.background) {
        case "primary":
            hoverBG = "#0039cb";
            break;
        case "secondary":
            hoverBG = "#1c313a";
            break;
        case "danger":
            hoverBG = "#9a0007";
            break;
        case "outline":
            hoverBG = "#eaefff";
            break;
        case "text":
            hoverBG = "#eaefff";
            break;
        default:
            hoverBG = "#aeaeae";
            break;
    }
    return hoverBG;
}

const hoverColor = props => {

    if (props.disabled || props.background === 'default-hover' || props.background === 'hover-primary' || props.background === 'hover-secondary' ||
        props.background === 'hover-danger' || props.background === 'hover-outline' || props.background === 'hover-text') return;

    let hoverColor = "#4f4f4f";
    switch (props.background) {
        case "primary":
            hoverColor = "#cfdaf5";
            break;
        case "secondary":
            hoverColor = "#b9bfc2";
            break;
        case "danger":
            hoverColor = "#e2b8b9";
            break;
        case "outline":
            hoverColor = "#637bfe"
            break;
        case "text":
            hoverColor = "#637bfe"
            break;
        default:
            hoverColor = "#4f4f4f";
            break;
    }
    return hoverColor;
}

const buttonScale = props => {
    let scale = 1;
    switch (props.size) {
        case "small":
            scale = 0.75;
            break;
        case "medium":
            scale = 1;
            break;
        case "large":
            scale = 1.5;
            break;
        default:
            scale = 1;
            break;
    }
    return `${scale * 0.5}rem ${scale * 1}rem`;
}

/* color: ${props => props.color} might not be right -  adding parenthesis around props necessary ? */

export const StyledButton = styled.button`
    background-color: ${props => buttonBackground(props)};
    color: ${(props) => props.color};
    font-weight: bold;
    box-shadow: ${props => {
        if (props.background === 'outline' || props.background === 'text' || props.disableShadow) {
            return "0";
        } else {
            return "0 4px 8px -8px #222";
        }
    }};
    border: ${props => {
        if (props.background === 'outline' || props.background === 'hover-outline') {
            return "2px solid #2962ff";
        } else {
            return "none";
        }
    }};
    padding: ${props => buttonScale(props)};
    border-radius: 8px;
    cursor: ${props => {
        if (props.background === 'default-hover' || props.background === 'hover-primary' || props.background === 'hover-secondary' ||
            props.background === 'hover-danger' || props.background === 'hover-outline' || props.background === 'hover-text') {
            return 'not-allowed';
        } else {
            return 'pointer';
        }
    }};
    display: flex;
    align-items: center;
    &:hover, &:focus{
        background-color: ${props => hoverBackground(props)};
        color: ${props => hoverColor(props)};
    }

    &:disabled {
        background: ${props => {
        if (props.background === 'text') {
            return '#fff';
        } else {
            return '#e0e0e0';
        }
    }};
        cursor: not-allowed;
    }
`;