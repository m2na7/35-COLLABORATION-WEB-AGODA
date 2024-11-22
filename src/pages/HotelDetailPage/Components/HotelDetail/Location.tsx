import {
    LocationWrapper,
    Header,
    Title,
    Address,
    ContentWrapper,
    MapContainer,
    MapImage,
    NearbyContainer,
    NearbyList,
    NearbyItem,
    NearbyLink,
    IconWrapper,
  } from "./Location.style";
  import locationImg from "@assets/img/location.png";
  import { IcHead2 } from "@assets/svg";
  
  const Location = () => {
    const rating = 8.8;
    const address = "송파대로 111, 송파, 서울, 서울, 대한민국, 05837";
    const nearbyPlaces = [
      { name: "롯데 월드", distance: "3.96 km" },
      { name: "국립 중앙 박물관", distance: "13.48 km" },
      { name: "N서울타워", distance: "14.23 km" },
      { name: "석촌호수공원", distance: "15.21 km" },
    ];
  
    return (
      <LocationWrapper>
        <Header>
          <Title>위치 평가 - {rating}, 최고</Title>
          <Address>{address}</Address>
        </Header>
        <ContentWrapper>
          <MapContainer>
            <MapImage src={locationImg} alt="지도 이미지" />
          </MapContainer>
          <NearbyContainer>
            <NearbyList>
              {nearbyPlaces.map((place, index) => (
                <NearbyItem key={index}>
                  <IconWrapper>
                    <IcHead2 />
                  </IconWrapper>
                  <span>{place.name}</span>
                  <span>{place.distance}</span>
                </NearbyItem>
              ))}
            </NearbyList>
            <NearbyLink>근처 보기</NearbyLink>
          </NearbyContainer>
        </ContentWrapper>
      </LocationWrapper>
    );
  };
  
  export default Location;
  