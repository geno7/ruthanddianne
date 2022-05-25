//comic_settings.js was created by geno7, with much needed assistance from Dannarchy

//this is the main file you'll be messing with to manage and update your comic. most (not all) of the toggle-able settings are here

let pg = Number(findGetParameter("pg")); //make "pg" mean the current page number (this line doesnt work unless I put it here, if you're inexperienced with js dont worry about it)

////////////////////////
//VARIABLES FOR TWEAKING
////////////////////////

//REALLY IMPORTANT ONES
const maxpg = 19; //the current number of pages your comic has in total. this DOESNT necessarily mean number of IMAGE FILES as it doesn't count pages split into multiple files. 
//MUST UPDATE NUMBER MANUALLY EVERY TIME YOU ADD A NEW PAGE or else it wont display the most recent page

// COMIC PAGE SETTINGS
const folder = "img/comics"; //directory of the folder where you keep all the comics
const image = "strip"; //what you'll name all your comic pages
const imgPart = " pg"; //special character(s) you put after the page number to subdivide pages into multiple image files (ie pg2_1, pg2_2, etc)
const ext = "png"; //file extension of your comic pages

const thumbFolder = "img/thumbs" //directory of the folder where you keep all the thumbnail images for the comics
const thumbExt = "png" //file extension of thumbnails
const thumbDefault = "default" //name of the default thumbnail that displays when no thumbnail is set, located in the directory you set thumbFolder to.


//NAVIGATION SETTINGS
const navText = ["First","Previous","Next","Last"]; //alt text for your nav images, or just the text that shows up if you're not using images
const navFolder = "img/comicnav"; //directory where nav images are stored
const navExt = "png" //file extension of nav images
const navScrollTo = "#showComic"; //id of the div you want the page to automatically scroll to when you click to the next comic. will turn off if you delete text between quotation marks

if (pg == 0) {pg = maxpg;} //display MOST RECENT COMIC when the webpage is loaded. if you want to instead have the FIRST COMIC displayed first, change maxpg to 1.

//pgData holds all the parameters for each of your pages. copypaste this and fill out accordingly:
/* 
    {
        pgNum: ,
        title: ,
        date: ,
        altText: ,
        imageFiles: ,
        authorNotes:
    },
*/
//Note: the formatting is important! The whole thing won't show up if you forget to include the commas or curly braces in the right place.
const pgData = [
    {
        pgNum: 1, //what page number it is
        title: "Starting A Band", //the title of the page (leaving this blank will default it to "Page X")
        date: "Apr 16, 2020", //the date on which the page was posted (mainly for the archive)
        altText: "", //the alt text (mouse over text) for this particular comic. put nothing inbetween the quotes for no alt text
        imageFiles: 3, //how many image files this page is split into
        authorNotes: `Sorry this is completely unreadable on mobile, this was before I knew what size to make text.`,
    },
    {
        pgNum: 2,
        title: "Showing Each Other Music",
        date: "Apr 16, 2020",
        altText: "",
        imageFiles: 1,
        authorNotes: `The Aoi Honoo influence starts to peek through`,
    },
    {
        pgNum: 3,
        title: "Naming Their Band",
        date: "Mar 18, 2020",
        altText: "",
        imageFiles: 2,
        authorNotes: `Thank god they didn't go with Atomic Shrine Maiden`,
    },
    {
        pgNum: 4,
        title: "Discovering New Music",
        date: "May 4, 2020",
        altText: "",
        imageFiles: 2,
        authorNotes: `Episode 1 of "awkwardly trying to convince people I'm not ableist and Reatards is just a real band that I like"`,
    },
    {
        pgNum: 5,
        title: "Recording Vocals",
        date: "May 11, 2020",
        altText: "",
        imageFiles: 1,
        authorNotes: `Is it starting to become obvious how much of a self insert Dianne is yet`,
    },
    {
        pgNum: 6,
        title: "Making a Short Song",
        date: "May 18, 2020",
        altText: "",
        imageFiles: 1,
        authorNotes: `My friend Ben helped me out with that third panel`,
    },
    {
        pgNum: 7,
        title: "Vs. Nardwuar (PART 1)",
        date: "May 25, 2020",
        altText: "",
        imageFiles: 2,
        authorNotes: `Doot doola doot doo ...`,
    },
    {
        pgNum: 8,
        title: "Vs. Nardwuar (PART 2)",
        date: "May 25, 2020",
        altText: "",
        imageFiles: 2,
        authorNotes: `caricatures are hard`,
    },
    {
        pgNum: 9,
        title: "Vs. Nardwuar (PART 3)",
        date: "Jun 8, 2020",
        altText: "",
        imageFiles: 1,
        authorNotes: `Id like to think Pharrell's hat continues offscreen infinitely like Doug Dimmadome`,
    },
    {
        pgNum: 10,
        title: "Vs. Nardwuar (PART 4)",
        date: "Jun 15, 2020",
        altText: "",
        imageFiles: 2,
        authorNotes: `Better than the Hot Ones dream`,
    },
    {
        pgNum: 11,
        title: "Posting on /mu/",
        date: "Jun 22, 2020",
        altText: "",
        imageFiles: 2,
        authorNotes: `Chuck`,
    },
    {
        pgNum: 12,
        title: "Watching Bohemian Rhapsody",
        date: "Jun 29, 2020",
        altText: "",
        imageFiles: 1,
        authorNotes: `Up until this strip I was actually doing the comic in MediBang Paint, this is the first one where I switched to Clip Studio`,
    },
    {
        pgNum: 13,
        title: "Learning Music Theory",
        date: "Jul 13, 2020",
        altText: "",
        imageFiles: 2,
        authorNotes: `The whole tone scale is like a cheat code to make me like a song at least a little bit and I kind of hate that`,
    },
    {
        pgNum: 14,
        title: "Learning Music Theory (Addendum)",
        date: "Jul 20, 2020",
        altText: "",
        imageFiles: 1,
        authorNotes: `good friends`,
    },
    {
        pgNum: 15,
        title: "Singing To God (PART 1)",
        date: "Aug 11, 2020",
        altText: "",
        imageFiles: 3,
        authorNotes: `And all the beauty tells him he is WORMS HERO</br>He is love and hatred`,
    },
    {
        pgNum: 16,
        title: "Singing To God (PART 2)",
        date: "Apr 26, 2021",
        altText: "",
        imageFiles: 3,
        authorNotes: `And all the beautiful thoughts they'll have collected over many long years vanished, and probably won't ever come back.`,
    },
    {
        pgNum: 17,
        title: "Singing To God (PART 3)",
        date: "May 3, 2021",
        altText: "",
        imageFiles: 2,
        authorNotes: `Oh my! We sang with strength to carry on</br>
        Encouraged him to sing along</br>
        We sang of all the world and praised him HOORAY!`,
    },
    {
        pgNum: 18,
        title: "Have A Great Idea",
        date: "May 16, 2022",
        altText: "",
        imageFiles: 1,
        authorNotes: `We are back to regular updates baby, if even only for a short while. We'll see when the backlog runs dry`,
    },
    {
        pgNum: 19,
        title: "Being Parodied By Weird Al (PART 1)",
        date: "May 24, 2022",
        altText: "",
        imageFiles: 1,
        authorNotes: `the start of a three part saga`,
    },
];

//below is a function you dont rly need to mess with but if you're more experienced with js you can

function findGetParameter(parameterName) { //function used to write a parameter to append to the url, to give each comic page its own unique url
    let result = null,
    tmp = []; 
    let items = location.search.substr(1).split("&");
    for (let index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}
