import { css } from "@emotion/react";

interface HighlightsProps {
  highlights: string[];
}

const Highlights = ({ highlights }: HighlightsProps) => {
  return (
    <ul
      css={css`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        list-style: none;
        padding: 0;
      `}
    >
      {highlights.map((highlight, index) => (
        <li
          key={index}
          css={css`
            background: #f1f1f1;
            padding: 8px 12px;
            border-radius: 4px;
            font-size: 0.8rem;
          `}
        >
          {highlight}
        </li>
      ))}
    </ul>
  );
};

export default Highlights;
