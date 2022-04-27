import styled from "styled-components";

const inputBackground = props => {
    let bg = "#fff";
    switch(props.background){
        case "primary": 
            bg = "#2962ff";
            break;
        default:
            bg = "#fff";
            break;
    }
    return bg;
}

const inputScale = props => {
    let scale = 1;
    switch(props.size){
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

export const StyledInput = styled.input`
    background-color: ${props => inputBackground(props)};
    color: #6c6c6c;
    padding: ${props => inputScale(props)};
    margin-block: 5px;
    position: relative;
    border-radius: 8px;
    width: ${props => {
        if(props.fullWidth) {
            return "100vw";
        } else {
            return "200px";
        }
    }};
    display: flex;
    align-items: center;
    background-image: url(${props => props.endIcon});
    background-repeat: no-repeat;
    background-position: center right;
    background-size: contain;
    border: ${props => {
         if(props.blackBorder){
            return "2px solid #a5a5a5";
        } else if(props.error){
            return "2px solid #d32f2f";
        } else {
            return "2px solid #c0c0c0";
        }
    }};
    &:hover {
        border: 2px solid #a5a5a5;
    }

    &:focus {
        border:2px solid #fff;
        outline: ${props => {
            if(props.error){
                return "2px solid #d32f2f"
            } else {
                return "2px solid #2962ff";
            }
        }};
        
    }

    &:disabled {
        background: ${props => {
            if(props.variant === 'text'){
                return '#fff';
            } else {
                return '#e0e0e0';
            }
        }};
        color: #6c6c6c;
        cursor: not-allowed;
    }
`;

export const StyledTextArea = styled(StyledInput).attrs({
    as: "textarea"
  })`
    resize: none;
    height: auto; 
    rows: ${props => props.row};
    background-size: auto;
    background-position: top right;
  `;