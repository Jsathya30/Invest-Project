const aboutContainer = document.querySelector('.tcs-about');

aboutContainer.addEventListener('click', event => {
    const about = event.target;

    const isAboutMoreBtn = about.className.includes('abt-read-more-btn')

    if(!isAboutMoreBtn) return;

    const aboutText = event.target.parentNode.querySelector('.abt-read-more-text');

    aboutText.classList.toggle('abt-read-more-text--show');
})


const parentContainer = document.querySelector('.doc-card');

parentContainer.addEventListener('click', event => {
    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";
})