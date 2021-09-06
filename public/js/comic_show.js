//comic_show.js was created by geno7, with much needed assistance from Dannarchy

//this is the script that actually displays the comics, nav and comic title on the page. 

// below this point is more under-the-hood type stuff that we only encourage messing with if you're more familiar with js, 
// but it's still commented as extensively as possible anyway just in case

//SHOW COMIC PAGE, with clickable link
function writePageClickable(clickable) {
  if (!clickable) {
    document.write(`<div class="comicPage">${writePage()}</div>`); //display comic page without link
  } else if (pg < maxpg) {
    //check whether comic is on the last page
    document.write(
      `<div class="comicPage"><a href="?pg=${(pg + 1)}${navScrollTo}"/>${writePage()}</a></div>`
    ); //display comic page and make it so that clicking it will lead you to the next page
  } else {
    document.write(`<div class="comicPage">${writePage()}</div>`); //display comic page without link
  }
}

function writePageTitle(toggleNum,char) { //display title of current page
  if (toggleNum) { //toggle whether you want to display the page number
    return document.write(pgData[pg-1].pgNum + char + pgData[pg-1].title); //char denotes a separating character between the number and the title
  };
  return document.write(pgData[pg-1].title);
}

function writeAuthorNotes() { //display author notes
  return document.write(`
    <h2><span>` + pgData[pg - 1].title.toUpperCase() +`</span></h2>
    <h4><span>` + pgData[pg - 1].date +`</span></h4>
    <span>` + pgData[pg - 1].authorNotes + `</span>
    `);
}

//function used to split pages into multiple images if needed, and add alt text
function writePage() {
  let partExtension = ""; //part extension to add to the url if the image is split into multiple parts
  let altText = ""; //variable for alt text
  let path = (folder != "" ? folder + "/" : "") + image + pg + partExtension + "." + ext; //path for your comics made out of variables strung together
  let page = ``;

  if (pgData.length < pg) { //if the array is blank or not long enough to have an entry for this page
    //debug
    console.log("page code to insert - " + page);
    console.log("alt text to print - " + altText);
    //
    page = `<img alt="` + altText + `" title="` + altText + `" src="` + path + `" />`;
    return page;
  } else if (pgData.length >= pg) { //if the array is not blank, and if its at least long enough to have an entry for the current page

    altText = pgData[pg - 1].altText; //set alt text to the text defined in the array

    if (pgData[pg-1].imageFiles > 1) { //if theres more than one page segment
    for (let i = 1; i < pgData[pg-1].imageFiles+1; i++) { //for loop to put all the parts of the image on the webpage
      partExtension = imgPart + i.toString();
      path = (folder != "" ? folder + "/" : "") + image + pg + partExtension + "." + ext; //reinit path (there has to be a less dumb way to do this)
      if (i > 1) {page += `<br/>`} //add line break
      page += `<img alt="` + altText + `" title="` + altText + `" src="` + path + `" />`; //add page segment
      }
    } else {
      page = `<img alt="` + altText + `" title="` + altText + `" src="` + path + `" />`;
    }
    //debug
    console.log("page code to insert - " + page);
    console.log("alt text to print - " + altText);
    //
    return page;
  }
}

//debug
console.log("array blank/not long enough? " + (pgData.length < pg));
console.log("array length - " + pgData.length);
console.log("current page - " + pg);
console.log("number of page segments - " + pgData[pg-1].imageFiles);
console.log("alt text - " + `"` + pgData[pg - 1].altText + `"`);

console.log("nav text - " + navText);
console.log("nav image file extension - " + navExt);

function imgOrText(setImg,navTextSet) { //function that writes the indicated nav button as either an image or text

  if (setImg) { //if its an image
    return `
      <div class="switchimg">
        <img src="` + navFolder + `/nav_` + navText[navTextSet].toLowerCase() + `.` + navExt + `" alt="` + navText[navTextSet] + `"/>
        <img src="` + navFolder + `/nav_` + navText[navTextSet].toLowerCase() + `_pressed.` + navExt + `" alt="` + navText[navTextSet] + `" class="img-top"/>
      </div>`;
  } else {
    return navText[navTextSet];
  }
}

function writeNav(imageToggle) {
    //this is a function that writes both the top and bottom nav buttons
  
    document.write(`<div id="comicNav" class="justify-content-center position-absolute">`); //opening div tag, give nav a class so it can be easily styled.

    document.write(`<div  class="navBorder"><img src="` + navFolder + `/nav_borderl.png` + `"/></div>`); //insert leftnav button border (edge of tape recorder)

    document.write(
        `<a href="about.html">
    <div class="switchimg">
        <img src="` +
            navFolder +
            `/nav_meet.png"/>
        <img src="` +
            navFolder +
            `/nav_meet_pressed.png" class="img-top"/>
    </div></a>`
    );

    //FIRST BUTTON
    if (pg > 1) {
        //wait until page 2 to make button active
        document.write(`<a href="?pg=` + 1 + navScrollTo + `"/>` + imgOrText(imageToggle, 0) + `</a>`);
    } else {
        if (!imageToggle) {
            document.write(imgOrText(imageToggle, 0));
        }
    }

    if (!imageToggle) {
        document.write(` | `);
    } //divider

    //PREV BUTTON
    if (pg > 1) {
        //wait until page 2 to make button active
        document.write(`<a href="?pg=` + (pg - 1) + navScrollTo + `"/>` + imgOrText(imageToggle, 1) + `</a>`);
    } else {
        if (!imageToggle) {
            document.write(imgOrText(imageToggle, 1));
        }
    }

    if (!imageToggle) {
        document.write(` | `);
    } //divider

    //NEXT BUTTON
    if (pg < maxpg) {
        //only make active if not on the last page
        document.write(`<a href="?pg=` + (pg + 1) + navScrollTo + `"/>` + imgOrText(imageToggle, 2) + `</a>`);
    } else {
        if (!imageToggle) {
            document.write(imgOrText(imageToggle, 2));
        }
    }

    if (!imageToggle) {
        document.write(` | `);
    } //divider

    //LAST BUTTON
    if (pg < maxpg) {
        //only make active if not on last page
        document.write(`<a href="?pg=` + maxpg + navScrollTo + `"/>` + imgOrText(imageToggle, 3) + `</a>`);
    } else {
        if (!imageToggle) {
            document.write(imgOrText(imageToggle, 3));
        }
    }

    document.write(
    `<a href="archive.html">
    <div class="switchimg">
        <img src="` + navFolder + `/nav_archive.png" />
        <img src="` + navFolder + `/nav_archive_pressed.png" class="img-top"/>
    </div></a>`
    );

    document.write(`<div class="navBorder"><img src="` + navFolder + `/nav_borderr.png` + `"/></div>`); //insert right nav button border (edge of tape recorder)

    document.write(`</div>`); //closing div tag
}

//KEYBOARD NAVIGATION
function keyNav() {
  document.addEventListener("keydown", (e) => {
  if ((e.key == 'ArrowRight' || e.key.toLowerCase() == 'd') && pg < maxpg) { //right arrow or D goes to next page
    window.location.href = "?pg=" + (pg + 1) + navScrollTo;
  } else if ((e.key == "ArrowLeft" || e.key.toLowerCase() == "a") && pg > 1) { //left arrow or A goes to previous page
    window.location.href = "?pg=" + (pg - 1) + navScrollTo;
  } else if (e.key.toLowerCase() == "w") { //W scrolls up
    window.scrollBy({ top: -30 });
  } else if (e.key.toLowerCase() == "s") { //S scrolls down
    window.scrollBy({ top: 30 });
  }
});};