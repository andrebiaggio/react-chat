import styled from '@emotion/styled'

export const Button = styled.button`
  padding: 32px;
  background-color: white;
  font-size: 1.7rem;
  border-radius: 4px;
  color: #4086f4;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: .2s;

  img {
    width: 1.7rem;
    height: 1.7rem;
    margin-left: .5rem;
  }

  &:hover {
    color: #2163cb;
  }
`