function writeSubpageNav() {
document.querySelector(".subPageNav").innerHTML = `
            <div class="subPageNavItems text-center">
                <span>
                    | <a href="index.html">COMICS</a> |
                    <a href="characters.html">MEET THE BAND</a> |
                    <a href="archive.html">ARCHIVE</a> |
                    
                </span>
            </div>`;
}

writeSubpageNav();