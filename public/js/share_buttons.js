//this is a script that loads all the share buttons for various sites. I could have used ShareThis but I need to do this the manual way to account for the url appending - so that linking to the index page wont just link to the latest comic, it'll link to the specific one you want to share

//Facebook SDK
document.write(`<div id="fb-root"></div>
<script>(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>`);

function writeShareButtons() {
//facebook
return document.write(`<div class="fb-share-button" 
data-href="${shareUrl}" 
data-layout="button_count">
</div>`);
}