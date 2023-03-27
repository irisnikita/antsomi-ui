// Libraries
import React from 'react';
import { Global, css } from '@emotion/react';

// Constants
import { THEME } from 'src/constants';

interface GlobalStyleProps {}

export const GlobalStyle: React.FC<GlobalStyleProps> = () => (
  <Global styles={css`
  .antsomi-btn {
    font-weight: 700 !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 5px !important;

    i {
      font-size: 20px;
    }
  }

  .antsomi-btn-default {
    &:not(:disabled):hover {
      border-color: ${THEME.token?.blue3} !important;
      background-color: ${THEME.token?.blue} !important;
    }

    &.antsomi-btn-dangerous {
      border-color: ${THEME.token?.red2} !important;

      &:not(:disabled):hover {
        border-color: ${THEME.token?.red3} !important;
        background-color: ${THEME.token?.red} !important;
      }
    }
  }

  .antsomi-btn-text:disabled, .antsomi-btn-link:disabled {
  color: ${THEME.token?.bw6} !important;
  }

  .antsomi-btn-primary:disabled, 
  .antsomi-btn-default:disabled, 
  .antsomi-btn-dashed:disabled, 
  .antsomi-btn-disabled, 
  .antsomi-btn-default.antsomi-btn-dangerous:disabled,
  .antsomi-btn-primary.antsomi-btn-dangerous:disabled 
  {
    border-color: ${THEME.token?.bw4} !important;
  }

  .antsomi-btn-default:disabled, 
  .antsomi-btn-dashed:disabled, 
  .antsomi-btn-disabled, 
  .antsomi-btn-default.antsomi-btn-dangerous:disabled { 
    color: ${THEME.token?.bw6} !important;
    background-color: ${THEME.token?.bw2} !important;
  }

  .antsomi-input, .antsomi-input-affix-wrapper {
    border-width: 0 !important;
    box-shadow: 0 1px 0 0 #b8cfe6;

    &:hover {
      background-color: ${THEME.token?.blue};
    }
  }

  .antsomi-input {
    &:focus {
      background-color: ${THEME.token?.bw0};
      box-shadow: 0 1px 0 0 ${THEME.token?.blue7} !important;
    }

    &:disabled {
      box-shadow: 0 1px 0 0 ${THEME.token?.bw4} !important;
    }
  }

  .antsomi-input-affix-wrapper {
    border-width: 0 !important;
    box-shadow: 0 1px 0 0 #b8cfe6;

    > input.antsomi-input {
      box-shadow: none !important;
    }

    &:hover {
      > input.antsomi-input {
        background-color: ${THEME.token?.blue};
      }
    }

    &.antsomi-input-affix-wrapper-focused {
      background-color: ${THEME.token?.bw0};
      box-shadow: 0 1px 0 0 ${THEME.token?.blue7} !important;

      > input.antsomi-input {
        background-color: ${THEME.token?.bw0};
      }
    }

    &:disabled {
      box-shadow: 0 1px 0 0 ${THEME.token?.bw4} !important;
    }
  }

  .antsomi-input-status-error:not(.antsomi-input-disabled):not(.antsomi-input-borderless).antsomi-input {
    box-shadow: 0 1px 0 0 ${THEME.token?.red7} !important;

    &:hover {
      background-color: ${THEME.token?.red};
    }
  }

  .antsomi-input-status-warning:not(.antsomi-input-disabled):not(.antsomi-input-borderless).antsomi-input {
    box-shadow: 0 1px 0 0 ${THEME.token?.gold6} !important;

    &:hover {
      background-color: ${THEME.token?.gold1};
    }
  }


  .antsomi-input-affix-wrapper-status-error:not(.antsomi-input-affix-wrapper-disabled):not(.antsomi-input-affix-wrapper-borderless).antsomi-input-affix-wrapper {
    box-shadow: 0 1px 0 0 ${THEME.token?.red7} !important;

    > input.antsomi-input {
      box-shadow: none !important;
    }

    &:hover, &:hover > input.antsomi-input {
      background-color: ${THEME.token?.red};
    }
  }

  .antsomi-input-affix-wrapper-status-warning:not(.antsomi-input-affix-wrapper-disabled):not(.antsomi-input-affix-wrapper-borderless).antsomi-input-affix-wrapper  {
    box-shadow: 0 1px 0 0 ${THEME.token?.gold6} !important;

    > input.antsomi-input {
      box-shadow: none !important;
    }

    &:hover, &:hover > input.antsomi-input {
      background-color: ${THEME.token?.gold1};
    }
  }
  `}
  />
);
