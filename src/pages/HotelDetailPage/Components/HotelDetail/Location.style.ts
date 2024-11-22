import styled from "@emotion/styled";

export const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 2rem;
  background-color: #fff;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  margin-bottom: 1rem;
`;

export const Title = styled.h3`
  ${({ theme }) => theme.font.title5_b_16};
  color: ${({ theme }) => theme.color.black};
`;

export const Address = styled.p`
  ${({ theme }) => theme.font.detail5_m_10};
  color: ${({ theme }) => theme.color.gray600};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

export const MapContainer = styled.div`
  position: relative;
  width: 7.5rem;
  height: 7.5rem;
`;

export const MapImage = styled.img`
  border: 1px solid ${({ theme }) => theme.color.gray200};
  border-radius: 0.625rem;
  object-fit: cover;
`;

export const NearbyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const NearbyList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const NearbyItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  ${({ theme }) => theme.font.body4_m_12};
  color: ${({ theme }) => theme.color.black};

  span:first-of-type {
    font-weight: bold;
    width: 106px;
    white-space: nowrap;
  }

  span:last-of-type {
    width: 72px;
    text-align: right;
  }
`;

export const IconWrapper = styled.div`
  width: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const NearbyLink = styled.a`
  ${({ theme }) => theme.font.body3_sb_12};
  color: ${({ theme }) => theme.color.blue300};
  text-align: right;
`;
