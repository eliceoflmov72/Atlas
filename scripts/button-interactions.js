export function toggleLightMode() {
    const root = document.documentElement;
    var lightColor = getComputedStyle(root).getPropertyValue('--light');
    var darkColor = getComputedStyle(root).getPropertyValue('--dark');

    var colorScheme = getComputedStyle(root).getPropertyValue('--final-background-color');
    if (colorScheme === lightColor) {
        root.style.setProperty('--final-background-color', darkColor);
        root.style.setProperty('--initial-background-color', lightColor);
    } else {
        root.style.setProperty('--final-background-color', lightColor);
        root.style.setProperty('--initial-background-color', darkColor);
    }

}
