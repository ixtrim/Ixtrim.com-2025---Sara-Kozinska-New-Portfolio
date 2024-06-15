import styled from '@emotion/styled';
import theme from '@/theme';

export const CubeButtonWrapper = styled.a`
  width: 170px;
  height: 50px;
  margin: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  perspective: 500px;
  margin: 0;
  padding: 0;
  display: inline-block;
  position: relative;

  div {
    height: 100%;
    transform-style: preserve-3d;
    transition: 0.25s;

    span {
      width: 100%;
      height: 100%;
      position: absolute;
      box-sizing: border-box;
      border: 2px solid ${theme.colors.grey};
      line-height: 50px;
      font-size: 17pt;
      font-family: ${theme.fonts.heading};
      text-align: center;
      text-transform: uppercase;
      transition: all 0.3s ease-in-out;

      &:nth-child(1) {
        color: ${theme.colors.white};
        transform: translate3d(0, 0, 30px);
      }

      &:nth-child(2) {
        border: 2px solid ${theme.colors.orange};
        background: ${theme.colors.orange};
        color: ${theme.colors.white};
        transform: rotateX(90deg) translate3d(0, 0, 30px);
        opacity: 0;
      }
    }
  }

  &:hover {
    div {
      transform: rotateX(-90deg);
    }

    span:nth-child(2) {
      opacity: 1;
    }
  }

  &.btn--standard {
    div {
      span {
        border: 2px solid ${theme.colors.grey};
        color: ${theme.colors.white};

        &:nth-child(2) {
          border: 2px solid ${theme.colors.orange};
          background: ${theme.colors.orange};
          color: ${theme.colors.white};
        }
      }
    }
  }

  &.btn--reversed {
    div {
      span {
        border: 2px solid ${theme.colors.grey};
        color: ${theme.colors.orange};

        &:nth-child(2) {
          border: 2px solid ${theme.colors.white};
          background: ${theme.colors.white};
          color: ${theme.colors.orange};
        }
      }
    }
  }

  &.btn--full {
    div {
      span {
        border: 2px solid ${theme.colors.grey};
        background: ${theme.colors.grey};
        color: ${theme.colors.white};

        &:nth-child(2) {
          border: 2px solid ${theme.colors.white};
          background: ${theme.colors.white};
          color: ${theme.colors.orange};
        }
      }
    }
  }
`;
