const storageKey = 'theme-preference';

const onClick = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    setPreference();
};

const getColorPreference = () => {
    if (localStorage.getItem(storageKey)) {
        return localStorage.getItem(storageKey);
    } else {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
};

const setPreference = () => {
    localStorage.setItem(storageKey, theme.value);
    reflectPreference();
};

const reflectPreference = () => {
    document.firstElementChild.setAttribute('data-theme', theme.value);

    const themeToggle = document.querySelector("#theme-toggle");
    if (themeToggle) {
        const themeValue = theme.value;
        const spanElement = themeToggle.querySelector("span");
        spanElement.textContent = themeValue === "dark" ? "Dark" : "Light";
        themeToggle.setAttribute("aria-label", themeValue);
        themeToggle.setAttribute("data-theme", themeValue);
        document.documentElement.setAttribute("data-theme", themeValue);
    }
};

const theme = {
    value: getColorPreference(),
};

const themetoggle = () => {
    reflectPreference();

    document.querySelector('#theme-toggle').addEventListener('click', onClick);

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches: isDark }) => {
        theme.value = isDark ? 'dark' : 'light';
        setPreference();
    });
};

export { themetoggle };
