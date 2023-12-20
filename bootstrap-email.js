const mailbox = document.getElementById("mailbox");
const offcanvasPreviewElem = document.getElementById("offcanvas-preview");
const offcanvasPreview = new bootstrap.Offcanvas(offcanvasPreviewElem);

document.addEventListener('DOMContentLoaded', function () {
    // Get the "New Message" link
    var newMessageLink = document.querySelector('#menu .nav-link');

    // Get the modal
    var newMailModal = new bootstrap.Modal(document.getElementById('new-mail'));

    // Attach a click event listener to the "New Message" link
    newMessageLink.addEventListener('click', function (event) {
        // Prevent the default link behavior
        event.preventDefault();

        // Show the modal
        newMailModal.show();
    });

    // Add additional JavaScript logic as needed
    const replyButton = document.createElement("button");
        replyButton.textContent = "Reply";
        replyButton.classList.add("btn", "btn-primary", "me-2");
        replyButton.addEventListener("click", () => {
            // Add logic for handling reply action
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
        sender:     "Abraham Lincoln",
        subject:    "Civil War ",
        message:    "I think the war will be starting soon but do not be afraid."
    },
    {
        sender:     "Alex Bell",
        subject:    "Phone",
        message:    "Can you hear me now?"
    },
    {
        sender:     "Martyn",
        subject:    "Class",
        message:    "I am slow but I get there!"
    },
    {
        sender:     "John Doe",
        subject:    "Oh wait you died",
        message:    "You don't care anymore."
    },
    {
        sender:     "Duke Kacz",
        subject:    "Blackmail?",
        message:    "You owe me a million!"
    },
    {
        sender:     "Oscar Martinez",
        subject:    "The real crime",
        message:    "Well, this is what happened. Ryan’s big project was the website, which wasn’t doing so well. So Ryan, to give the impression of sales, recorded them twice. Once as office sales and once in the website sales, which is what we refer to in the business as 'misleading the shareholders.' Another good term is 'fraud.' The real crime, I think, was the beard"
    }
    
]

inboxItems.forEach(item => createInboxItem(item));
