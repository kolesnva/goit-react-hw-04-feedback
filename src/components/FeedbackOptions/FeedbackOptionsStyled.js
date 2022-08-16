import styled from 'styled-components';

export const ControlsWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: ${p => p.theme.space[4]}px;
`;
export const Button = styled.button`
  display: block;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.lg};

  color: ${p => p.theme.colors.black};
  :hover {
    color: ${p => p.theme.colors.text};
    background-color: ${p => p.theme.colors.secondary};
  }
`;
