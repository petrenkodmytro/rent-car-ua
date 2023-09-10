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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 20px;
  border: 2px #ccc solid;
  border-radius: 10px;
  font-size: 10px;
  @media screen and (min-width: 425px) {
    padding: 20px;
    font-size: 14px;
  }
  @media screen and (min-width: 767px) {
    width: 500px;
    flex-direction: row;
    font-size: 14px;
  }
`;

export const ListInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: 15px;
  padding-bottom: 15px;
  & > li {
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 767px) {
      flex-direction: row;
      justify-content: space-between;
    }
    & > span,
    & > a {
      display: inline-block;
    }
  }
`;

export const Office = styled.span`
  text-transform: uppercase;
  font-weight: 500;
`;
