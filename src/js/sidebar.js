let sidebarOpened = false
let button = document.querySelector('#menu')

button.addEventListener('click', function(e) {
    e.stopPropagation()
    e.preventDefault()
    document.body.classList.toggle('has-sidebar')
    button.classList.add('open')
    sidebarOpened = true
});

document.body.addEventListener('click', function() {
    if (sidebarOpened) {
        document.body.classList.remove('has-sidebar')
    }
});