import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  color: ${cores.branca};

  p {
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 22px;
  }

  h3 {
    margin-bottom: 16px;
    font-size: 16px;
  }

  .spaceBetween {
    display: flex;
    gap: 40px;

    input {
      width: 100%;
    }
  }

  .marginTop {
    margin-top: 16px;
  }

  .displayFlex {
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }

  .maxWidth {
    max-width: 95px;
    width: 100%;
  }
`

export const InputGroup = styled.div`
  input {
    width: 100%;
    padding: 8px;
    margin: 8px 0;
    border: 1px solid ${cores.branca};
    background-color: ${cores.branca};
  }

  label {
    display: block;
    color: ${cores.branca};
    font-size: 14px;
    font-weight: bold;
    width: 100%;
  }

  .error {
    border: 2px solid red;
  }
`

export const ButtonEntrega = styled.button`
  border: none;
  background-color: ${cores.branca};
  color: ${cores.rosa};
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  width: 100%;
  cursor: pointer;
  margin-bottom: 8px;
`
