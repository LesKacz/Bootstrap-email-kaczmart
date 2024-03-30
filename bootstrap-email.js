const mailbox = document.getElementById("mailbox");
const offcanvasPreviewElem = document.getElementById("offcanvas-preview");
const offcanvasPreview = new bootstrap.Offcanvas(offcanvasPreviewElem);

document.addEventListener('DOMContentLoaded', function () {
    // Get the "New Message" link
    var newMessageLink = document.querySelector('#menu .nav-link');

    // Get the modal
    var newMailModal = new bootstrap.Modal(document.getElementById('new-mail'));

   
    newMessageLink.addEventListener('click', function (event) {
     
        event.preventDefault();

   
        newMailModal.show();
    });


    const replyButton = document.createElement("button");
        replyButton.textContent = "Reply";
        replyButton.classList.add("btn", "btn-primary", " me-2");
        replyButton.addEventListener("click", () => {

            console.log("Reply clicked");
        });
});

mailbox.addEventListener("click", evnt => {
    console.log(evnt.target)
    const parent = evnt.target.parentNode;

    const sender = parent.querySelector(".sender").innerHTML;
    const subject = parent.querySelector(".subject").innerHTML;
    const message = parent.querySelector("p:nth-child(3)").innerHTML;

    offcanvasPreviewElem.querySelector(".sender").innerHTML = sender;
    offcanvasPreviewElem.querySelector(".subject").innerHTML = subject;
    offcanvasPreviewElem.querySelector("p:nth-child(3)").innerHTML = message;

    if(parent.classList.contains("email-message") && window.innerWidth <= 992){
        offcanvasPreview.show();
    }
});

function createInboxItem(email) {
    const template = document.getElementById("email-message-template");
    const newMailboxItem = template.content.firstElementChild.cloneNode(true);

    newMailboxItem.querySelector(".sender").innerHTML = email.sender;
    newMailboxItem.querySelector(".subject").innerHTML = email.subject;
    newMailboxItem.querySelector("p:nth-child(3)").innerHTML = email.message;

    mailbox.querySelector("div").append(newMailboxItem);
};

var inboxItems = [
    {
        sender:     "Matt Dillon",
        subject:    "The Hanging ",
        message:    "It didn't happen, the rope was to long."
    },
    {
        sender:     "Martyn",
        subject:    "Class",
        message:    "You are working my brain to much!! I am slow but I get finished"
    },
    { 
        sender:      "Joe Biden",
        subject:     "Walking ",
        message:     "Tell me how to walk again, one foot, two foot, FALL!!" 
    },
    {
        sender:     "John Doe",
        subject:    "Oh wait you died",
        message:    "You don't care anymore."
    },
    {
        sender:      "Verizon",
        subject:     "Phone ",
        message:     "I can RIP you off. Just sign up and see!!"  
    },
    {   sender:     "Alex Bell",
        subject:    "Phone",
        message:    "Can you hear me now?"
    },  
    {           
        sender:     "Duke",
        subject:    "Blackmail",
        message:    "Are you going to pay me with 50 pounds of dog food? or no slipper!"
    }
]
inboxItems.forEach(item => createInboxItem(item));
