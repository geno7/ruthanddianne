function writeFooter() {
    document.querySelector(".writeFooter").innerHTML = `
            <div class="container-fluid py-2">
                <div class="row d-flex-justify-content-center text-center lh-1">
                    <div class="col-12">
                        <p class="mb-0"><span><strong>&#169 2021</strong></span></p>
                        <p class="mb-0"><span><strong>"Ruth and Dianne are Starting a Band" is by Geno7, site also designed and coded by Geno7</strong></span></p>
                    </div>
                    <div class="col-12 px-0 mb-2">
                    <a href="https://geno7.neocities.org" class="geno7Banner imglink"><img alt="Geno7's Cool Webpage!" src="https://geno7.neocities.org/images/linkme/banner-sm.gif" /></a>
                    </div>
                    <div class="col-12 mb-2">
                        <h5 class="mb-0"><span>POWERED BY</span></h5>
                        <p><a href="https://rarebit.neocities.org" class="imglink"><img src="img/rarebitlogo_small.png" height = "30"/></a></p>
                        <a href="https://neocities.org/site/ruthanddianne" class=" geno7Banner imglink"><img src="img/neocities_button.gif" height = "30"/></a>
                    </div>
                </div>
            </div>
    `;
}

writeFooter();