//comic_archive.js was created by geno7

//for writing archives
writeArchive("2021", 16, maxpg, 0, true);
writeArchive(
    "2020", //name of the div inside which the function is being called
    1, //earliest page to list
    15, //latest page to list. setting to maxpg will make it automatically update with the latest page
    0, //if set to 0, list is displayed "latest first". if set to -1, list is displayed chronologically
    true //whether to use thumbnails or not
);

function writeArchive(divId,min,max,reverseOrder,useThumbs) {
    //create a table to put the archive data
    let archiveTable = document.createElement("TABLE");
    archiveTable.setAttribute("class", "archiveTable table table-responsive table-borderless"); //set class to archiveTable for css styling
    let getDiv = document.getElementById(divId);
    getDiv.appendChild(archiveTable);
    //make the table from the currently available comics
    for (i = min; i <= max; i++) {
        let row = archiveTable.insertRow(reverseOrder); //if reverseOrder is set to 0 it'll reverse the order, otherwise it'll display it in regular order

        //insert table cells
        let cellThumb = row.insertCell();
        let cellTitle = row.insertCell();
        let cellDate = row.insertCell();

        //default values when you don't have page data set
        let pgTitle = "Page " + i;
        let pgDate = "";

        //url of thumbnail
        let pgThumb = thumbFolder + "/" + image + i + "." + thumbExt;
        //url of default thumbnail
        let pgThumbDefault = thumbFolder + "/" + thumbDefault + "." + thumbExt;

        if (pgData.length >= i) {
            //set values to the values indicated in the pgData object if available
            if (pgData[i - 1].title) {
                pgTitle = pgData[i - 1].title;
            }
            if (pgData[i - 1].date) {
                pgDate = pgData[i - 1].date;
            }
        }

        //make the whole row a clickable link to the corresponding comic
        row.setAttribute("class", `archiveRow`);

        let linkToComic = `${indexPage}?pg=${i + navScrollTo}`

        row.addEventListener("click", () => {
            window.location.href = linkToComic;
        });
        
        if (useThumbs) {
            cellThumb.innerHTML = `<img alt="${pgTitle}" title="${pgTitle}" src="${pgThumb}" onerror="javascript:this.src='${pgThumbDefault}'"/>`;
            cellThumb.setAttribute("class", "archiveCellThumb lh-1 py-2 align-middle");
        }
        cellTitle.innerHTML = `<span><strong>${pgTitle}</strong></span>`;
        cellTitle.setAttribute("class", "archiveCellTitle lh-1 py-2 text-center align-middle");
        cellDate.innerHTML = "<span> " + pgDate + " </span>";
        cellDate.setAttribute("class", "archiveCellDate lh-1 py-2 text-end align-middle");
        console.log(i + `created row - ${pgTitle} - ${linkToComic}`);
    };
}