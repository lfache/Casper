function SetColorTheme() {

    //local storage is used to override OS theme settings
    if (localStorage.getItem("theme")) {
        if (localStorage.getItem("theme") == "dark") {
            document.documentElement.setAttribute("data-theme", "dark");
            $('.DarkModeToggle__MoonIconWrapper').toggleClass("close");
            $('.DarkModeToggle__SunIconWrapper').toggleClass("open");
        } else { document.documentElement.setAttribute("data-theme", "light") }

    }
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        //OS theme setting detected as dark
        document.documentElement.setAttribute("data-theme", "dark");
        $('.DarkModeToggle__MoonIconWrapper').toggleClass("close");
        $('.DarkModeToggle__SunIconWrapper').toggleClass("open");
    }
    else {
        document.documentElement.setAttribute("data-theme", "light");
    }
}

SetColorTheme();

$('.DarkModeToggle__Button').click(function () {
    if (document.documentElement.getAttribute("data-theme") == "light") {
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
        $('.DarkModeToggle__MoonIconWrapper').toggleClass("close");
        $('.DarkModeToggle__SunIconWrapper').toggleClass("open");
    } else {
        localStorage.setItem('theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');
        $('.DarkModeToggle__MoonIconWrapper').removeClass("close");
        $('.DarkModeToggle__SunIconWrapper').removeClass("open");
    }

});