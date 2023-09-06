import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const ListItem = styled.li`
  width: 500px;
  display: flex;
  padding: 20px;
  gap: 20px;
  border: 2px #ccc solid;
  border-radius: 10px;
`;

export const Office = styled.span`
  text-transform: uppercase;
  font-weight: 500;
`;
