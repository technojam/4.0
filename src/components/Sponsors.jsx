// Sponsors.jsx
import React from "react";
import styled, { keyframes, css } from "styled-components";

const Sponsors = () => {
  const row1 = [
    "https://media.geeksforgeeks.org/wp-content/uploads/20210511160813/g4g.jpg",
    "https://p.kindpng.com/picc/s/150-1508990_coding-blocks-logo-png-transparent-png.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
  ];

  const row2 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
  ];

  return (
    <SponsorsContainer id="sponsors">
      <SponsorsWrapper>
        <SponsorsText>Our Sponsors</SponsorsText>
        <SponsorsMarquee>
          <SponsorsMarqueeGroup>
            {row1.map((el, index) => (
              <SponsorsImageGroup key={index}>
                <SponsorsImage src={el} />
              </SponsorsImageGroup>
            ))}
          </SponsorsMarqueeGroup>
          <SponsorsMarqueeGroup>
            {row2.map((el, index) => (
              <SponsorsImageGroup key={index}>
                <SponsorsImage src={el} />
              </SponsorsImageGroup>
            ))}
          </SponsorsMarqueeGroup>
        </SponsorsMarquee>
        <SponsorsMarquee>
          <SponsorsMarqueeGroup>
            {row1.map((el, index) => (
              <SponsorsImageGroup key={index}>
                <SponsorsImage src={el} />
              </SponsorsImageGroup>
            ))}
          </SponsorsMarqueeGroup>
          <SponsorsMarqueeGroup>
            {row2.map((el, index) => (
              <SponsorsImageGroup key={index}>
                <SponsorsImage src={el} />
              </SponsorsImageGroup>
            ))}
          </SponsorsMarqueeGroup>
        </SponsorsMarquee>
      </SponsorsWrapper>
    </SponsorsContainer>
  );
};

export default Sponsors;

const SponsorsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SponsorsWrapper = styled.div`
  width: 100%;
  // max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SponsorsText = styled.div`
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #daa520;
`;

const SponsorsMarquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const SponsorsMarqueeGroup = styled.div`
  ${common}
`;

const SponsorsImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
  
  &:hover {
    transform: scale(1.1); /* Add hover effect */
  }
`;

const SponsorsImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 60/40;
  padding: 8px 25px;
  box-shadow: rgba(243, 240, 240, 0.895) 0px 2px 8px 0px;
  transition: transform 0.2s ease; /* Add transition for smooth scaling */
`;