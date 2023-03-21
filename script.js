const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const navElement = document.getElementById('nav-ul');

const navTabs = ["HOME", "ABOUT", "SKILLS", "PROJECTS", "CONTACT"]
let navItems = []
for (let i = 0; i < navTabs.length; i++) {
    let liElement = document.createElement("li")
    liElement.id = `nav-${i + 1}`
    navElement.append(liElement)
    let aElement = document.createElement("a")
    liElement.append(aElement)
    aElement.innerHTML = navTabs[i]
    aElement.href = `#${navTabs[i]}`.toLowerCase()
    navItems.push(aElement)
    // liElement.classList.add(`slide-out-${i+1}`)

}


function navAnimation(direction1, direction2) {
    navItems.forEach((nav, i) => {
        console.log(nav);
        nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`)
    });
}

function toggleNav() {
    menuBars.classList.toggle('change');
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        navAnimation('out', 'in');

    } else {
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        navAnimation('in', 'out');
    }
}

menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    console.log(nav);
    nav.addEventListener('click', toggleNav);
});




