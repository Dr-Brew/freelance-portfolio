const btnDarkMode = document.querySelector(".dark-mode-btn");

// check theme in localStorage
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active")
    const isDark = document.body.classList.add("dark")

}

// check theme in system

if (window.matchMedia && window.matchMedia("(preferse-color-scheme: dark)").matches) {
    btnDarkMode.classList.add("dark-mode-btn--active")
    document.body.classList.add("dark")
}

// 

window.matchMedia("(preferse-color-scheme: dark)").addEventListener('change', (event) => {
    const newColorSheme = event.matches ? "dark" : "light";

    alert("Change!!!!!")

    if (newColorSheme === "dark") {
        btnDarkMode.classList.add("dark-mode-btn--active")
        document.body.classList.add("dark")
    }else {
        btnDarkMode.classList.remove("dark-mode-btn--active")
        document.classList.remove("dark")
    }
})


// on night mode
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active")
    const isDark = document.body.classList.toggle("dark")

    if (isDark) {
        localStorage.setItem("darkMode", "dark")
    } else {
        localStorage.setItem("darkMode", "light")
    }

}


