function closeNav() {
    // $("#list").css("left", "-100%");
    $("#check").prop("checked", false);
}

// document.addEventListener("DOMContentLoaded", function() {
//     const items = document.querySelectorAll(".accordion-item");

//     items.forEach(item => {
//         const question = item.querySelector(".question");

//         question.addEventListener("click", function() {
//             item.classList.toggle("active");

//             const answer = item.querySelector(".answer");
//             if (item.classList.contains("active")) {
//                 answer.style.maxHeight = answer.scrollHeight + "px";
//             } else {
//                 answer.style.maxHeight = null;
//             }
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".accordion-item");

    items.forEach(item => {
        const question = item.querySelector(".question");

        question.addEventListener("click", function() {
            // Close all accordion items except the one that was clicked
            items.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                    otherItem.querySelector(".answer").style.maxHeight = null;
                }
            });

            // Toggle the active class for the clicked item
            item.classList.toggle("active");

            // Expand or collapse the answer section based on the active class
            const answer = item.querySelector(".answer");
            if (item.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null;
            }
        });
    });
});


// function sendEmail(event) {
//     // event.preventDefault();
//     // console.log("hell000");
//     // window.alert("Form Submitted Broo");
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "yugasandeep.t@gmail.com",
//         Password : "@sandeep@",
//         To : 'yugasandeep.t@gmail.com',
//         From : $("#email").val(),
//         Subject : "Email from portfolio",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }