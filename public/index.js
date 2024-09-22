document.getElementById('btn-about').addEventListener('click', function() {
    let about = document.getElementById('aboutId');
    if(about.style.display == "none") {
        about.style.display = "block";
        about.style.animation = "showLinks 3.5s";
    }else {
        about.style.display = "none";
    }
});

document.getElementById('btn-mailbox').addEventListener('click', function() {
    let mailbox = document.getElementById('mailboxId');
    if(mailbox.style.display == "none") {
        mailbox.style.display = "block";
        mailbox.style.animation = "showLinks 3.5s";
    }else {
        mailbox.style.display = "none";
    }
});