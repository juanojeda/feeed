import find from 'lodash/find';
import random from 'lodash/random';
import colourThemes from '../data/khroma.json';

function getThemeKeys(themes) {
  const keys = themes.map((theme) => {
    const {id} = theme;
    return id;
  });
  return keys;
}

export function getColourTheme(themeId, isInverse = false) {
  const themes = colourThemes.favorites;
  const theme = find(themes, (themeIt) => {
    return themeIt.id === themeId
  });

  if (!theme) {
    return undefined;
  }

  const colours = {
    id: '',
    type: '',
    colourBg: '',
    colourFore: '',
  };

  colours.type = theme.type;
  colours.id = theme.id;

  if (isInverse) {
    colours.colourBg = theme.colors[0][0];
    colours.colourFore = theme.colors[1][0];
  } else {
    colours.colourBg = theme.colors[1][0];
    colours.colourFore = theme.colors[0][0];
  }

  return colours;
}

export function getRandomColourTheme(isInverse = false) {

  const allThemeKeys = getThemeKeys(colourThemes.favorites);
  const themeIndex = random(0, allThemeKeys.length - 1);
  const themeKey = allThemeKeys[themeIndex];

  return getColourTheme(themeKey, isInverse);
}

