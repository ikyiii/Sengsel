const btn = document.getElementById('btn');

function classAdd(){
 const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}
 btn.addEventListener('click', classAdd);

$(document).ready(function () {
    $("a").on("click", function (event) {
        if (this.hash !== "500") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function () {
                    window.location.hash = hash;
                }
            );
        }
    });
});


// window.addEventListener("focus", () => {
//     document.title = docTitle;
// })

