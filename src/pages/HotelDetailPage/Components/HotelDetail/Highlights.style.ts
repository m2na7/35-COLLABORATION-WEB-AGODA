import styled from "@emotion/styled";

export const HighlightsWrapper = styled.div`
  margin: 16px 0;
`;

export const HighlightsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleStyle = styled.h3`
  ${({ theme }) => theme.font.title5_b_16};
  color: ${({ theme }) => theme.color.black};
  padding: 16px 37px;
`;

export const ServiceStyle = styled.a`
  ${({ theme }) => theme.font.title6_b_14};
  color: ${({ theme }) => theme.color.gray600};
  text-decoration: none;
  cursor: pointer;
  padding: 17px;
`;

export const HighlightsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 37px;
  gap: 6px;
`;

export const LeftListStyle = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 16px 0 0;

  li {
    ${({ theme }) => theme.font.body2_m_14};
    color: ${({ theme }) => theme.color.black};
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    svg {
      margin-right: 8px;
    }
  }
`;

export const RightListStyle = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    ${({ theme }) => theme.font.body2_m_14};
    color: ${({ theme }) => theme.color.black};
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    svg {
      margin-right: 8px;
    }
  }
`;
