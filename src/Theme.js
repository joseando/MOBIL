import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import merge from 'deepmerge';
import { DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

export const LightTheme = {
  ...CombinedDefaultTheme,
  roundness: 2,
  colors: {
    ...CombinedDefaultTheme.colors,
    // background: '#ebebeb',
    background: '#fff',
    border: '#436B34',
    accent: '#c57e49',
    surface: '#f5f5f5',
    onSurface: '#fff',
    primary: '#436B34',
    primaryLight: '#69A951',
    primaryDark: '#243F1E',
    accentColor: '#4B4E97',
    // textPrimary: '#fff',
    // textSecondary: '#436B34',
    divider: 'rgba(0, 0, 0, 0.4)',
    selected: 'rgba(0, 0, 0, 0.2)',
    statusBarColor: '#436B34',
    // statusBarColor: '#243F1E',
    text: '#636363',
    textLight: '#436B34',
    textDark: '#243F1E',
    textGrey: '#8c8c8c',
    drawerText: '#636363',
    textGreyLight: '#8c8c8c',
    // disabled: '#436B34',
    placeholder: '#8c8c8c',
    // backdrop: '#436B34',
    notification: '#436B34',
    leaves: 'rgba(41, 50, 57, 0.05)',
    // borderColor: 'rgba(0,0,0,0.08)',
    borderColor: '#e0e0e0',
    tabNavigator: '#436B34',
    tabNavigatorText: '#f5f5f5',
    jellyBarText: '#424242',
    drawerSelected: '#436B34',
  },
};

export const DarkTheme = {
  ...CombinedDarkTheme,
  roundness: 2,
  colors: {
    ...CombinedDarkTheme.colors,
    background: '#212428',
    // text: '#ffffff',
    text: '#ffffff',
    textLight: '#61914e',
    textDark: '#243F1E',
    textGrey: '#bababa',
    drawerText: '#bababa',
    textGreyLight: '#8c8c8c',
    accentColor: '#f5f5f5',
    surface: '#212428',
    accent: '#c57e49',
    onSurface: '#33373d',
    primary: '#436B34',
    primaryLight: '#588746',
    primaryDark: '#243F1E',
    statusBarColor: '#243F1E',
    leaves: 'rgba(245, 245, 245, 0.07)',
    divider: 'rgba(255, 255, 255, 0.2)',
    selected: 'rgba(255, 255, 255, 0.2)',
    // disabled: '#f5f5f5',
    placeholder: '#bababa',
    enabled: 'pink',
    // backdrop: '#f5f5f5',
    notification: '#f5f5f5',
    borderColor: 'rgba(0,0,0,0.05)',
    tabNavigator: '#436B34',
    tabNavigatorText: '#f5f5f5',
    jellyBarText: '#f5f5f5',
    drawerSelected: '#61914e',
  },
};
