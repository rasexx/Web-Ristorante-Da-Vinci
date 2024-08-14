function showMenu(menuType) {
    document.getElementById('menuTitle').innerText = menuType;
    document.getElementById('menuImage').src = 'images/menu/' + menuType.toLowerCase().replace(' ', '_') + '.jpg';
    document.getElementById('menuModal').style.display = 'block';
    setTimeout(() => {
        document.getElementById('menuModal').classList.add('show');
    }, 10);
}

function closeMenu() {
    document.getElementById('menuModal').classList.remove('show');
    setTimeout(() => {
        document.getElementById('menuModal').style.display = 'none';
    }, 300);
}