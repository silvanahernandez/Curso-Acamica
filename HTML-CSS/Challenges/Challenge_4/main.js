const btntema = document.querySelector('#tema');

btntema.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btntema.classList.toggle('active');
});