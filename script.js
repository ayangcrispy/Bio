document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});	

function scrollToUserDesk() {
    const userDesk = document.getElementById('userDesk');
    userDesk.scrollIntoView({ behavior: 'smooth' });
}