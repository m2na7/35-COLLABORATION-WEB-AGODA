import styled from "@emotion/styled";

export const HighlightsWrapper = styled.div`
  margin: 16px 0;
`;

export const TitleStyle = styled.h3`
  ${({ theme }) => theme.font.title4_b_16};
  color: ${({ theme }) => theme.color.gray800};
  margin-top: 10px;
  margin-left: 16px;
  margin-bottom: 10px;
`;

export const HighlightsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 6px;
`;

export const HighlightListStyle = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    ${({ theme }) => theme.font.body2_m_14};
    color: ${({ theme }) => theme.color.gray700};
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    &::before {
      content: "✔";
      margin-right: 8px;
      color: ${({ theme }) => theme.color.agoda_green};
      font-size: 1.4rem;
    }
  }
`;

export const ServiceLinkStyle = styled.a`
  ${({ theme }) => theme.font.body3_sb_12};
  color: ${({ theme }) => theme.color.blue300};
  display: block;
  margin-top: 8px;
  text-align: right;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
