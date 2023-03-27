// Types
import { ThemeConfig } from 'antd';

type TTheme = {
  token?: ThemeConfig['token'] & { [key: string]: any },
  components?: ThemeConfig['components'],
  algorithm?: ThemeConfig['algorithm'],
  hashed?: ThemeConfig['hashed'],
  inherit?: ThemeConfig['inherit']
};

export const THEME: TTheme = {
  token: {
    colorError: '#CF1825',
    colorPrimary: '#005fb8',
    colorLink: '#005fb8',
    colorLinkHover: '#1B76CD',
    borderRadius: 3,
    fontFamily: 'Roboto',
    fontSize: 12,
    controlHeight: 30,
    blue: '#F2F9FF',
    blue1: '#CAE5FE',
    blue2: '#A6D1FA',
    blue3: '#81BCF4',
    blue4: '#5DA6EB',
    blue5: '#3B8FDE',
    blue6: '#1B76CD',
    blue7: '#005EB8',
    blue8: '#004F9B',
    blue9: '#003F7B',
    blue10: '#002E59',
    red: '#FFF2F3',
    red2: '#FFB8BE',
    red3: '#FF989F',
    red6: '#EF3340',
    red7: '#CF1825',
    bw0: '#FFFFFF',
    bw2: '#F0F0F0',
    bw3: '#E5E5E5',
    bw4: '#D4D4D4',
    bw5: '#BEBEBE',
    bw6: '#A2A2A2',
    bw7: '#7F7F7F',
    bw8: '#595959',
    bw9: '#2D2D2D',
  },
};

THEME.components = {
  Button: {
    paddingContentHorizontal: 10,
    colorBorder: '#B8CFE6',
    colorText: '#005fb8',
    colorBgTextHover: THEME.token?.blue,
    colorBgContainerDisabled: THEME.token?.bw6,
    colorTextDisabled: THEME.token?.bw0,
  },
};
