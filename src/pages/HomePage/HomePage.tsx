import Header from "@components/Header/Header";
import HomeHeader from "./components/HomeHeader";
import ListWithButton from "./components/ListWithButton";
import Spacing from "./components/Spacing";

const bestDestinations = [
  { imageUrl: "https://via.placeholder.com/150", title: "대한민국", count: 60775 },
  { imageUrl: "https://via.placeholder.com/150", title: "베트남", count: 93095 },
  { imageUrl: "https://via.placeholder.com/150", title: "일본", count: 118033 },
  { imageUrl: "https://via.placeholder.com/150", title: "태국", count: 998033 },
  { imageUrl: "https://via.placeholder.com/150", title: "미국", count: 364310 },
  { imageUrl: "https://via.placeholder.com/150", title: "영국", count: 85000 },
  { imageUrl: "https://via.placeholder.com/150", title: "프랑스", count: 74200 },
  { imageUrl: "https://via.placeholder.com/150", title: "호주", count: 89200 },
  { imageUrl: "https://via.placeholder.com/150", title: "독일", count: 67000 },
  { imageUrl: "https://via.placeholder.com/150", title: "이탈리아", count: 52300 }
];

const popularCities = [
  { imageUrl: "https://via.placeholder.com/150", title: "서울", count: 30775 },
  { imageUrl: "https://via.placeholder.com/150", title: "호치민", count: 53095 },
  { imageUrl: "https://via.placeholder.com/150", title: "도쿄", count: 58033 },
  { imageUrl: "https://via.placeholder.com/150", title: "방콕", count: 78033 },
  { imageUrl: "https://via.placeholder.com/150", title: "로스앤젤레스", count: 964310 },
  { imageUrl: "https://via.placeholder.com/150", title: "런던", count: 70500 },
  { imageUrl: "https://via.placeholder.com/150", title: "파리", count: 82000 },
  { imageUrl: "https://via.placeholder.com/150", title: "시드니", count: 63000 },
  { imageUrl: "https://via.placeholder.com/150", title: "베를린", count: 45000 },
  { imageUrl: "https://via.placeholder.com/150", title: "로마", count: 34200 }
];

const HomePage = () => {
  return (
    <>
      <Header />
      <HomeHeader />
      
      <ListWithButton title="베스트 여행지" items={bestDestinations} />
      <Spacing width={0} height={8} />
      <ListWithButton title="인기 도시" items={popularCities} />
      <Spacing width={0} height={18} />
    </>
  );
};

export default HomePage;
