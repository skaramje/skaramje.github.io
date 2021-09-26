function highlightLinkedin(){
    document.getElementById('linkedin').className = "fa fa-linkedin fa-2x" + " socialMediared";
    setTimeout(()=> document.getElementById('linkedin').className = "fa fa-linkedin fa-2x", 1000);
}
setInterval(highlightLinkedin, 2000);

function highlightGithub(){
    document.getElementById('github').className = "fa fa-github fa-2x" + " socialMediared";
    setTimeout(()=> document.getElementById('github').className = "fa fa-github fa-2x", 1000);
}
setInterval(highlightGithub, 2000);