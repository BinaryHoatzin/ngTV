// Your jQuery code
$(document).ready(function () {
    $('#CarouselControlsNumberOne').carousel();
});















/*
document.addEventListener('DOMContentLoaded', function () {

    const WatchingForUserToClickOnThirdCarouselItem = document.getElementById("Third");

    WatchingForUserToClickOnThirdCarouselItem.addEventListener('click', function () {
        console.log("Third Clicked");

        const GettingTheSecondCarouselItem = document.getElementById("Second");

        if (GettingTheSecondCarouselItem) {
            GettingTheSecondCarouselItem.src = "Pics/CarouselPics/RhinocerosBeetle.jpg"; // Adjust the path accordingly
            console.log("Rino Switch");

            const ObserveChangesInImageSource = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    if (mutation.type === "attributes" && mutation.attributeName === "src") {
                        console.log("The image source has been changed");
                    }
                });
            });

            const config = { attributes: true };
            ObserveChangesInImageSource.observe(GettingTheSecondCarouselItem, config);
        } else {
            console.error("Second carousel item not found");
        }
    });
});

*/