// Libraries
import React from 'react';
import { Global, css } from '@emotion/react';

// Constants
import { THEME } from 'src/constants';

interface GlobalStyleProps {}

export const GlobalStyle: React.FC<GlobalStyleProps> = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

      /* Button */
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

      .antsomi-btn-text:disabled,
      .antsomi-btn-link:disabled {
        color: ${THEME.token?.bw6} !important;
      }

      .antsomi-btn-primary:disabled,
      .antsomi-btn-default:disabled,
      .antsomi-btn-dashed:disabled,
      .antsomi-btn-disabled,
      .antsomi-btn-default.antsomi-btn-dangerous:disabled,
      .antsomi-btn-primary.antsomi-btn-dangerous:disabled {
        border-color: ${THEME.token?.bw4} !important;
      }

      .antsomi-btn-default:disabled,
      .antsomi-btn-dashed:disabled,
      .antsomi-btn-disabled,
      .antsomi-btn-default.antsomi-btn-dangerous:disabled {
        color: ${THEME.token?.bw6} !important;
        background-color: ${THEME.token?.bw2} !important;
      }

      /* Input */
      .antsomi-input,
      .antsomi-input-affix-wrapper {
        border-width: 0 0 1px 0 !important;
        box-shadow: none !important;

        &:hover {
          background-color: ${THEME.token?.blue};
        }
      }

      .antsomi-input {
        &:focus {
          background-color: ${THEME.token?.bw0};
        }
      }

      .antsomi-input-affix-wrapper {
        &:hover {
          > input.antsomi-input {
            background-color: ${THEME.token?.blue};
          }
        }

        &.antsomi-input-affix-wrapper-focused {
          background-color: ${THEME.token?.bw0};

          > input.antsomi-input {
            background-color: ${THEME.token?.bw0};
          }
        }
      }

      .antsomi-input-status-error:not(.antsomi-input-disabled):not(
          .antsomi-input-borderless
        ).antsomi-input {
        &:hover {
          background-color: ${THEME.token?.red};
        }
      }

      .antsomi-input-status-warning:not(.antsomi-input-disabled):not(
          .antsomi-input-borderless
        ).antsomi-input {
        &:hover {
          background-color: ${THEME.token?.gold1};
        }
      }

      .antsomi-input-affix-wrapper-status-error:not(.antsomi-input-affix-wrapper-disabled):not(
          .antsomi-input-affix-wrapper-borderless
        ).antsomi-input-affix-wrapper {
        &:hover,
        &:hover > input.antsomi-input {
          background-color: ${THEME.token?.red};
        }
      }

      .antsomi-input-affix-wrapper-status-warning:not(.antsomi-input-affix-wrapper-disabled):not(
          .antsomi-input-affix-wrapper-borderless
        ).antsomi-input-affix-wrapper {
        &:hover,
        &:hover > input.antsomi-input {
          background-color: ${THEME.token?.gold1};
        }
      }

      // Select
      .antsomi-select .antsomi-select-arrow {
        right: 5px !important;
      }

      .antsomi-select:not(.antsomi-select-disabled):not(.antsomi-select-customize-input):not(
          .antsomi-pagination-size-changer
        ):hover
        .antsomi-select-selector {
        border-color: ${THEME.token?.blue1} !important;
        background-color: ${THEME.token?.blue} !important;
      }

      .antsomi-select-disabled.antsomi-select:not(.antsomi-select-customize-input)
        .antsomi-select-selector {
        border-color: ${THEME.token?.bw4};
      }

      .antsomi-select-disabled.antsomi-select:not(.antsomi-select-customize-input) .antsomi-tag {
        background-color: ${THEME.token?.bw4} !important;
      }

      .antsomi-select-selector {
        border-width: 0 0 1px 0 !important;
        box-shadow: none !important;
      }

      .antsomi-select-dropdown {
        padding: 0 !important;
      }

      .antsomi-select-selection-overflow {
        gap: 5px;
      }

      // Input Number
      .antsomi-input-number {
        border-width: 0 0 1px 0 !important;
        box-shadow: none !important;

        &.--show-handler {
          .antsomi-input-number-handler-wrap {
            opacity: 1;
          }
        }
      }

      .antsomi-input-number:hover {
        background-color: ${THEME.token?.blue};

        .antsomi-input-number-handler {
          background-color: ${THEME.token?.blue};
        }
      }

      .antsomi-input-number:focus,
      .antsomi-input-number-focused {
        border-color: ${THEME.token?.colorPrimary} !important;
      }

      .antsomi-input-number-handler {
        border: none !important;

        &:hover i {
          color: ${THEME.token?.colorPrimary};
        }
      }

      // DatePicker
      .antsomi-picker {
        border-width: 0 0 1px 0 !important;
        box-shadow: none !important;
      }

      .antsomi-picker:hover,
      .antsomi-picker-focused {
        background-color: ${THEME.token?.blue};
      }

      .antsomi-picker:not(.antsomi-picker-status-error) .antsomi-picker-suffix {
        color: ${THEME.token?.bw10};
      }

      .antsomi-picker:not(.antsomi-picker-disabled).antsomi-picker-status-error:not(
          [disabled]
        ):hover {
        background-color: ${THEME.token?.red} !important;
      }

      // Custom
      .date-time-picker__popup-content {
        width: 230px !important;
      }

      .antsomi-picker-dropdown__advanced {
        > .antsomi-picker-panel-container > .antsomi-picker-panel-layout > .antsomi-picker-panel {
          flex-direction: column-reverse;
          padding-bottom: 60px;

          .antsomi-picker-date-panel {
            width: 280px !important;
          }
        }

        &.--error
          > .antsomi-picker-panel-container
          > .antsomi-picker-panel-layout
          > .antsomi-picker-panel {
          padding-bottom: 80px;
        }
      }
    `}
  />
);
