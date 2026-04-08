import { useConfig } from '../hooks';

export const useThemeColors = () => {
  const isDarkMode = useConfig((state) => state.isDarkMode);

  const theme = {
    bg: isDarkMode ? '#121212' : '#f5f5f5',
    card: isDarkMode ? '#1E1E1E' : '#FFF',
    text: isDarkMode ? 'white' : 'black',
    sub: isDarkMode ? '#A1A1A1' : '#6C6C70',
    border: isDarkMode ? '#333' : '#C6C6C8',
    greenText: isDarkMode ? 'lightgreen' : '#16976c',
    greenBg: isDarkMode ? 'darkgreen' : 'green',
    input: isDarkMode ? 'lightgray' : 'white',
    inputBorder: isDarkMode ? 'white' : '#ccc',
    loadingBg: isDarkMode ? '#1D2124' : '#35985B',
    button: isDarkMode ? 'steelblue' : '#007BFF',
    whiteBg: isDarkMode ? 'whitesmoke' : '#fff',
  };

  return theme;
};
