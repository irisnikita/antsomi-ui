// Libraries
import styled from 'styled-components';

// Constants
import { THEME } from 'src/constants';

export const SwitchWrapper = styled.div`
  .antsomi-switch {
    background-color: #ffffff;
    border: 1px solid ${THEME.token?.colorPrimary};

    &.antsomi-switch-checked {
      background-color: ${THEME.token?.colorPrimary};

      .antsomi-switch-handle {
        &::before {
          background-color: #ffffff;
        }
      }
    }

    .antsomi-switch-handle {
      top: 1px;

      &::before {
        background-color: ${THEME.token?.colorPrimary};
      }
    }
  }
`;
