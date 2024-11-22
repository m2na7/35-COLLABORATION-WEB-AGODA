import styled from "@emotion/styled";

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.color.gray300};
  margin: 1.5rem 0;
`;
