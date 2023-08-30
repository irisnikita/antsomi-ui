// Libraries
import styled from 'styled-components';

// Constants
import { THEME } from 'src/constants';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  .input__wrapper {
    width: 100%;
  }

  &:has(input:focus) {
    .__icon-search {
      background-color: ${THEME.token?.blue0};
      --tw-shadow: 0 1px 0 0 #1f7ac4;
      --tw-shadow-colored: 0 1px 0 0 var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
        var(--tw-shadow);
    }
  }

  &:has(input:hover) {
    .__icon-search {
      background-color: ${THEME.token?.blue0};
      --tw-shadow: 0 1px 0 0 #1f7ac4;
      --tw-shadow-colored: 0 1px 0 0 var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
        var(--tw-shadow);
    }
  }

  .__icon-search {
    height: 29px;
    padding-right: 4px;
    background-color: ${THEME.token?.bw0};
    cursor: pointer;
    color: ${THEME.token?.colorIcon};
    font-size: 24px;
    line-height: 32px;
    --tw-shadow: 0 1px 0 0 #b8cfe6;
    --tw-shadow-colored: 0 1px 0 0 var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
      var(--tw-shadow);
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

    &:hover {
      color: ${THEME.token?.colorPrimary};
    }
  }
`;
