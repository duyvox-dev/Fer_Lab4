const LOCAL_THEME = "site_theme";
const localTheme = {
    getTheme: () => {
        const theme = localStorage.getItem(LOCAL_THEME);
        if (theme) return JSON.parse(theme);
        return null;
    },
    setTheme: (theme) => {
        localStorage.setItem(LOCAL_THEME, JSON.stringify(theme));
    },
};
export { localTheme };
