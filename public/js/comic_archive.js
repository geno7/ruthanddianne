//comic_archive.js was created by geno7

//again, this is stuff you don't really need to pay attention to if you're not super familiar with JS 

function writeArchive(divId,min,max,reverseOrder) {
    //create a table to put the archive data
    let archiveTable = document.createElement("TABLE");
    archiveTable.setAttribute("class", "archiveTable table table-responsive table-borderless"); //set class to archiveTable for css styling
    let getDiv = document.getElementById(divId);
    getDiv.appendChild(archiveTable);
    //make the table from the currently available comics
    for (i = min; i <= max; i++) {
        let row = archiveTable.insertRow(reverseOrder); //if reverseOrder is set to 0 it'll reverse the order, otherwise it'll display it in regular order
        let cellTitle = row.insertCell();
        let cellDate = row.insertCell();

        let pgTitle = "Page " + i;
        let pgDate = "";
        if (pgData.length >= i) {
            if (pgData[i-1].title) {pgTitle = pgData[i-1].title;}
            if (pgData[i-1].date) {pgDate = pgData[i-1].date;}
        }

        cellTitle.innerHTML = `<span> <a href="`+ indexPage + `?pg=` + i + navScrollTo + `"><strong>` + pgTitle +`</strong></a> </span>`;
        cellTitle.setAttribute("class", "archiveCellTitle lh-1 py-2");
        cellDate.innerHTML = "<span> " + pgDate + " </span>";
        cellDate.setAttribute("class", "archiveCellDate lh-1 py-2 text-end");
        console.log(i + " created row - " + pgTitle);
        
    };

}