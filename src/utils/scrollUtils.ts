export const calculateScrollIndex = (
  container: HTMLElement | null
): number | undefined => {
  if (!container) return;

  const scrollPosition = container.scrollLeft;
  const firstCard = container.firstChild as HTMLElement;
  if (!firstCard) return;

  const cardWidth = firstCard.offsetWidth; // 카드 너비
  const cardGap = parseFloat(window.getComputedStyle(container).gap) || 0; // 카드 간격
  const cardOffset = cardWidth / 2 + cardGap; // 카드 너비 / 2 + 카드 간격 => dot 활성화 기준

  // 인덱스가 반올림되어 변경되면 => 다음 dot 활성화
  return Math.round(scrollPosition / cardOffset);
};
