import styled from 'styled-components';

const getColor = props => (props.isOnline ? 'red' : 'green');

export const Marker = styled.span`
  width: 12px;
  height: 12px;
  background-color: ${getColor};
  border-radius: 50%;
`;
