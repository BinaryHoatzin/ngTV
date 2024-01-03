document.getElementById("ThisIsTheLogoHere").addEventListener('click', function () {

    this.classList.add('clicked');

})


function TheLinkToTheLoadingPage() {
    window.location.href = '/LoadingPage';

}


function RedirectUserToLoadingPage() {

    setTimeout(TheLinkToTheLoadingPage, 1100);

}