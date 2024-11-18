import { css } from "@emotion/react";

export const carouselContainer = css`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 10px;
`;

export const imageSlider = css`
  width: 100%;
  overflow: hidden;
`;

export const imageTrack = (currentIndex: number, length: number) => css`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-${currentIndex * 100}%);

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

export const dots = css`
  display: flex;
  justify-content: center;
  gap: 8px;
  position: absolute;
  bottom: 10px;
  width: 100%;
`;

export const dot = (isActive: boolean) => css`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${isActive ? "white" : "rgba(255, 255, 255, 0.5)"};
  transition: background-color 0.3s ease;
`;
