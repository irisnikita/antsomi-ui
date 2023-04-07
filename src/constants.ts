// Types
import { theme, ThemeConfig } from 'antd';

// Variables
const { defaultAlgorithm, defaultSeed } = theme;
const mapToken = defaultAlgorithm(defaultSeed);
const { gold1, gold6 } = mapToken;

type TTheme = {
  token?: ThemeConfig['token'] & { [key: string]: any },
  components?: ThemeConfig['components'],
  algorithm?: ThemeConfig['algorithm'],
  hashed?: ThemeConfig['hashed'],
  inherit?: ThemeConfig['inherit']
};

export const THEME: TTheme = {
  token: {
    colorText: '#000000',
    colorTextPlaceholder: '#BEBEBE',
    colorError: '#CF1825',
    colorPrimary: '#005fb8',
    colorLink: '#005fb8',
    colorLinkHover: '#1B76CD',
    borderRadius: 3,
    fontFamily: 'Roboto',
    fontSize: 12,
    controlHeight: 30,
    blue: '#F2F9FF',
    blue1: '#B8CFE6',
    blue2: '#CAE5FE',
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
    bw10: '#000000',
    gold1,
    gold6,
  },
};

THEME.components = {
  Button: {
    paddingContentHorizontal: 10,
    colorBorder: THEME.token?.blue1,
    colorText: THEME.token?.colorPrimary,
    colorBgTextHover: THEME.token?.blue,
    colorBgContainerDisabled: THEME.token?.bw6,
    colorTextDisabled: THEME.token?.bw0,
  },
  Input: {
    controlHeight: 32,
    colorBgContainerDisabled: THEME.token?.bw2,
    colorTextDisabled: THEME.token?.bw10,
    borderRadius: 0,
    borderRadiusLG: 0,
    borderRadiusSM: 0,
    borderRadiusOuter: 0,
    borderRadiusXS: 0,
  },
  Select: {
    borderRadius: 0,
    borderRadiusLG: 0,
    borderRadiusSM: 0,
    borderRadiusOuter: 0,
    borderRadiusXS: 0,
    colorBorder: THEME.token?.blue1,
    controlItemBgActive: '#E0EBF7',
    colorBgContainerDisabled: THEME.token?.bw2,
    fontSizeIcon: 14,
  },
  Tag: {
    colorBgContainer: 'red',
  },
  InputNumber: {
    borderRadius: 0,
    borderRadiusLG: 0,
    borderRadiusSM: 0,
    borderRadiusOuter: 0,
    borderRadiusXS: 0,
    colorBorder: THEME.token?.blue1,
    controlItemBgActive: '#E0EBF7',
    colorBgContainerDisabled: THEME.token?.bw2,
    // fontSizeIcon: 14,
  },
  DatePicker: {
    borderRadius: 0,
    borderRadiusLG: 0,
    borderRadiusSM: 0,
    borderRadiusOuter: 0,
    borderRadiusXS: 0,
    colorBorder: THEME.token?.blue1,
    controlItemBgActive: '#E0EBF7',
    colorBgContainerDisabled: THEME.token?.bw2,
    fontSizeIcon: 14,
    controlHeight: 31,
  },
  Divider: {
    marginLG: 10,
  },
};
