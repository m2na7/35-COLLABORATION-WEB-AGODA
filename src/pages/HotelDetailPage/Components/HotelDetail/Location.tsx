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
import { useTheme } from "@emotion/react";
import locationImg from "@assets/img/location.png";
import { IcHead2 } from "@assets/svg";

const Location = () => {
  const theme = useTheme();

  const rating = 8.8;
  const address = "송파대로 111, 송파, 서울, 서울, 대한민국, 05837";
  const nearbyPlaces = [
    { name: "롯데 월드", distance: "3.96 km" },
    { name: "국립 중앙 박물관", distance: "13.48 km" },
    { name: "N서울타워", distance: "14.23 km" },
    { name: "석촌호수공원", distance: "15.21 km" },
  ];

  return (
    <div css={LocationWrapper}>
      <div css={Header}>
        <h3 css={Title(theme)}>위치 평가 - {rating}, 최고</h3>
        <p css={Address(theme)}>{address}</p>
      </div>
      <div css={ContentWrapper}>
        <div css={MapContainer}>
          <img css={MapImage(theme)} src={locationImg} />
        </div>
        <div css={NearbyContainer}>
          <ul css={NearbyList}>
            {nearbyPlaces.map((place, index) => (
              <li css={NearbyItem(theme)} key={index}>
                <div css={IconWrapper}>
                  <IcHead2 />
                </div>
                <span>{place.name}</span>
                <span>{place.distance}</span>
              </li>
            ))}
          </ul>
          <a css={NearbyLink(theme)}>근처 보기</a>
        </div>
      </div>
    </div>
  );
};

export default Location;
