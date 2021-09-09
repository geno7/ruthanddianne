//the header of the site would be handled in this javascript file, so you don't have to copypaste it onto every page.
//There are much better methods of handling the header out there but you can stick with this one if you want
document.write(`
    <header align="center position-absolute">
        <div class="container-fluid">
            <div class="row d-flex justify-content-center text-center" id="headerLogo">
                <div class="col-3 d-flex align-items-center justify-content-center" id="headerRuth">
                    <div class="switchimg">
                        <img src="./img/header/ruth.png"/>
                        <img src="./img/header/ruth_pressed.png" class="img-top"/>
                    </div>
                </div>
                <div class="col-6 d-flex align-items-center justify-content-center" id="headerLogo"><a href="index.html" class="imglink"><img src="./img/header/logo.png" alt="You're reading it!"/></a></div>

                <div class="col-3 d-flex align-items-center justify-content-center" id="headerDianne">
                    <div class="switchimg">
                        <img src="./img/header/dianne.png"/>
                        <img src="./img/header/dianne_pressed.png"class="img-top"/>
                    </div>
                </div>
            <div>
            
            <div class="row">
                <div id="nav">
                </div>
            <div>
        </div>
    </header>
`);