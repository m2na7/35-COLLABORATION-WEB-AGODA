import { css } from "@emotion/react";

const AppleSDGothicFont = css`
  font-family:
    "Apple SD Gothic Neo",
    -apple-system,
    BlinkMacSystemFont,
    system-ui,
    Roboto,
    "Helvetica Neue",
    "Segoe UI",
    "Apple SD Gothic Neo",
    "Noto Sans KR",
    "Malgun Gothic",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    sans-serif;
`;

const theme = {
  color: {
    // Grayscale Colors
    white: "#FFFFFF",
    gray100: "#F6F7F9",
    gray200: "#EFF0F4",
    gray300: "#DBDADF",
    gray400: "#9B9B9D",
    gray500: "#939097",
    gray600: "#878586",
    gray700: "#484848",
    gray800: "#3C3B43",
    black: "#1F2427",

    // Branding Colors
    agoda_red: "#C63941",
    agoda_yellow: "#EEB037",
    agoda_green: "#61AC59",
    agoda_purple: "#8B4B9A",
    agoda_blue: "#61A0E3",

    // Sub Colors
    red100: "#FEF2F2",
    red200: "#E02E30",
    red300: "#C63727",
    red400: "#B42424",

    yellow100: "#F0C13F",
    yellow200: "#FCA703",

    green100: "#F2F9F2",
    green200: "#5E8D49",
    green300: "#178D37",
    green400: "#00612C",

    blue100: "#ECF0FC",
    blue200: "#506CE7",
    blue300: "#406CEA",
    blue400: "#1B67D7",

    bluegreen100: "#365D7A",
    bluegreen200: "#1B3041",

    purple100: "#C12C66",
    purple200: "#865FC9",
  },

  font: {
    title1_sb_26: css`
      ${AppleSDGothicFont};
      font-size: 2.6rem;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: 0%;
    `,
    title2_sb_20: css`
      font-family: "Apple SD Gothic Neo";
      font-size: 2rem;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: 0%;
    `,
    title3_sb_18: css`
      font-family: "Apple SD Gothic Neo";
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: 0%;
    `,
    title4_b_16: css`
      font-family: "Apple SD Gothic Neo";
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: 2%;
    `,
    title5_b_16: css`
      font-family: "Apple SD Gothic Neo";
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: 0%;
    `,
    title6_b_14: css`
      font-family: "Apple SD Gothic Neo";
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: 0%;
    `,
    body1_b_14: css`
      font-family: "Apple SD Gothic Neo";
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: 0%;
    `,
    body2_m_14: css`
      font-family: "Apple SD Gothic Neo";
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 0%;
    `,
    body3_sb_12: css`
      font-family: "Apple SD Gothic Neo";
      font-size: 1.2rem;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: 0%;
    `,
    body4_m_12: css`
      font-family: "Apple SD Gothic Neo";
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: -1%;
    `,
    button1_m_14: css`
      font-family: "Apple SD Gothic Neo";
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 2%;
    `,
    button2_eb_12: css`
      font-family: "Apple SD Gothic Neo";
      font-size: 1.2rem;
      font-weight: 800;
      line-height: 20px;
      letter-spacing: 0%;
    `,
    button3_sb_12: css`
      font-family: "Apple SD Gothic Neo";
      font-size: 1.2rem;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: 0%;
    `,
    button4_m_12: css`
      font-family: "Apple SD Gothic Neo";
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: -1%;
    `,
    detail1_m_14: css`
      font-family: "Apple SD Gothic Neo";
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: -1%;
    `,
    detail2_b_12: css`
      font-family: "Apple SD Gothic Neo";
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: 0%;
    `,
    detail3_m_12: css`
      font-family: "Apple SD Gothic Neo";
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 21px;
      letter-spacing: 3%;
    `,
    detail4_m_12: css`
      font-family: "Apple SD Gothic Neo";
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 21px;
      letter-spacing: -1%;
    `,
    detail5_m_10: css`
      font-family: "Apple SD Gothic Neo";
      font-size: 1rem;
      font-weight: 500;
      line-height: 21px;
      letter-spacing: 2%;
    `,
  },
};

export type ColorType = typeof theme.color;
export type FontType = typeof theme.font;

export interface ThemeType {
  color: ColorType;
  font: FontType;
}

export default theme;
