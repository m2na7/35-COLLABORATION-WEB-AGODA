import { Theme } from "@emotion/react";
import { css } from "@emotion/react";

export const headerLayout = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  width: 100%;
  height: 6.4rem;
  padding: 1.3rem 1rem;

  border-bottom: 1px solid ${theme.color.gray300};
`;

export const headerCenterSectionWrapper = css`
  display: flex;
  justify-content: center;
`;

export const headerLeftSectionWrapper = css`
  display: flex;
`;

export const headerRightSectionWrapper = css`
  display: flex;
  justify-content: end;
  gap: 3.2rem;
`;

export const headerLeftIconStyle = css`
  width: 2.4rem;
  height: 2.4rem;
  padding: 0.2rem;
`;

export const headerRightIconStyle = css`
  width: 2.4rem;
  height: 2.4rem;
`;

export const headerLogoStyle = css`
  width: 7.2rem;
  height: 3.8rem;
`;
