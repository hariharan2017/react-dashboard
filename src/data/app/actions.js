import * as types from './types';

export const changeToLightMode = () => ({
  type: types.CHANGE_TO_LIGHT_MODE
});

export const changeToDarkMode = () => ({
  type: types.CHANGE_TO_DARK_MODE
});

export const toggleTheme = () => ({
  type: types.TOGGLE_THEME
});

export const changeLanguage = (lang) => ({
  type: types.CHANGE_LANGUAGE,
  lang
});
