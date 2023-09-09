import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
`;

export const ListItem = styled.li`
  width: 500px;
  display: flex;
  padding: 20px;
  gap: 20px;
  border: 2px #ccc solid;
  border-radius: 10px;
`;

export const ListInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: 15px;
  padding-bottom: 15px;
  & > li {
    display: flex;
    justify-content: space-between;
    & > span,
    & > a {
      /* color: ${p => p.theme.colors.mainColor}; */
      display: inline-block;

    }
  }
`;

export const Office = styled.span`
  text-transform: uppercase;
  font-weight: 500;
`;
