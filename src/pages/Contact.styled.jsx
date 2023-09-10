import styled from 'styled-components';

export const ContactsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > h2 {
    margin-top: 20px;
    text-shadow: -2px -2px 5px ${p => p.theme.colors.whiteColor},
      2px 2px 5px ${p => p.theme.colors.accentDark};
  }
`;
