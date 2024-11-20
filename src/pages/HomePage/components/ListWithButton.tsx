import { useState } from "react";
import Card from "@pages/HomePage/components/Card";
import Button from "@components/Button/Button";
import { titleStyle, listStyle } from './ListWithButton.style';

interface ListItem {
  imageUrl: string;
  title: string;
  count: number;
}

interface ListWithToggleProps {
  title: string;
  items: ListItem[];
}

const ListWithToggle = ({ title, items }: ListWithToggleProps) => {
  const [visibleCount, setVisibleCount] = useState(5);  // 처음 5개만 보이도록 설정

  const toggleVisibility = () => {
    if (visibleCount === 5) {
      setVisibleCount(items.length);  // 더보기 클릭 시 모든 항목 보이게
    } else {
      setVisibleCount(5);  // 접기 클릭 시 5개 항목만 보이게
    }
  };

  return (
    <div css={listStyle}>
      <h2 css={titleStyle}>{title}</h2>
      {items.slice(0, visibleCount).map((item, index) => (
        <Card key={index} imageUrl={item.imageUrl} title={item.title} count={item.count} />
      ))}
      <Button variant="outlined" onClick={toggleVisibility}>
        {visibleCount === items.length ? "접기" : "더보기"}
      </Button>
    </div>
  );
};

export default ListWithToggle;
