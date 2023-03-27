// Libraries
import React from 'react';
import { Global, css } from '@emotion/react';

// Constants
import { THEME } from 'src/constants';

interface GlobalStyleProps {}

export const GlobalStyle: React.FC<GlobalStyleProps> = () => (
  <Global styles={css`
  .ant-btn {
    font-weight: 700 !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 5px !important;

    i {
      font-size: 20px;
    }
  }

  .ant-btn-default {
    &:not(:disabled):hover {
      border-color: ${THEME.token?.blue3} !important;
      background-color: ${THEME.token?.blue} !important;
    }

    &.ant-btn-dangerous {
      border-color: ${THEME.token?.red2} !important;

      &:not(:disabled):hover {
        border-color: ${THEME.token?.red3} !important;
        background-color: ${THEME.token?.red} !important;
      }
    }
  }

  .ant-btn-text:disabled, .ant-btn-link:disabled {
  color: ${THEME.token?.bw6} !important;
  }

  .ant-btn-primary:disabled, 
  .ant-btn-default:disabled, 
  .ant-btn-dashed:disabled, 
  .ant-btn-disabled, 
  .ant-btn-default.ant-btn-dangerous:disabled,
  .ant-btn-primary.ant-btn-dangerous:disabled 
  {
    border-color: ${THEME.token?.bw4} !important;
  }

  .ant-btn-default:disabled, 
  .ant-btn-dashed:disabled, 
  .ant-btn-disabled, 
  .ant-btn-default.ant-btn-dangerous:disabled { 
    color: ${THEME.token?.bw6} !important;
    background-color: ${THEME.token?.bw2} !important;
  }
  `}
  />
);
