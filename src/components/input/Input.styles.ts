import styled from 'styled-components';

const Input = styled.input`
  width: 22em;
  border-radius: .125em;
  border: none;
  font-size: 2em;
  margin: .125em;
  color: #ffffff;

  font-size: calc(8px + (32 - 8) * ((100vw - 320px) / (1600 - 320)));
`;

export const InputText = styled(Input).attrs({ type: 'test'})`
  background-color: #ababab;
  outline: none;
  text-indent: .4em;

  :focus {
    box-shadow: 0 0 5px #1976d3;
  }
`;

export const InputSubmit = styled(Input).attrs({ type: 'submit'})`
  background-color: #1976d3;

  :link, :visited, :focus {
    background-color: #1976d3;
  }

  :hover {
    background-color: #1871ca;
  }
    
  :active {
    background-color: #1871ca;
  }

  :disabled {
    background-color: #ababab;
  }
`;