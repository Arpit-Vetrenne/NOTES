showNotes()
let addBtn = document.getElementById('addtxt');
addBtn.addEventListener('click', function(e) {
    let addtxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }
    notesObj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj))
    addTxt.value = " ";
    // console.log(notesObj)
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)
    }
    let html = "";
    notesObj.forEach(function(element, index) {
        html += `
        <div class="card Card" style="width: 18rem;">
        <div class=" card-body  ">
            <h5 class="card-title"><u><b>Note ${ index +  1}</u></b></h5>
            <p class="card-text">${ element}</p>
            <button id=" $ { index } " class="noa boten"
            onclick='deleteNote(this.id) ' style="background-color: black;" >DELETE </button>
            </div>
            </div>
            `
            // if (document.getElementsByTagName("p").includes("h")) { alert("please Write Something in the Text Area") }
    });


    let notesElm = document.getElementById('notes')
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = ` Nothing to Show 
                                  Use Add Note Button to add your notes here         `
    }
}

function deleteNote(index) {
    // console.log(12)
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notesObj))
    showNotes();
}

function colorchange() {
    ABD = document.getElementsById("addtxt")
    ABD.style.backgroundColor = "red";
    console.log(12)

}
// let search = document.getElementById('searchTxt');
// search.addEventListener("input", function() {
//         let inputVal = search.value.toLowerCase()
//         let noteCards = document.getElementsByClassName('Card')
//         Array.from(noteCards).forEach(function(element) {
//             // let cardTxt = element.getElementsByClassName("card-text")[0].innerText;
//             let cardTxt = element.getElementsByTagName("p")[0].innerText;
//             if (cardTxt.includes(inputVal)) {
//                 element.style.display = "block";
//             } else {
//                 element.style.display = "none";
//             }
//         })
//     })
// let search = document.getElementById('searchTxt');
// search.addEventListener("input", function() {

//     let inputVal = search.value.toLowerCase();
//     console.log('Input event fired!', inputVal);
//     let noteCards = document.getElementsByClassName('noteCard');
//     Array.from(noteCards).forEach(function(element) {
//         let cardTxt = element.getElementsByTagName("p")[0].innerText;
//         if (cardTxt.includes(inputVal)) {
//             element.style.display = "block";
//         } else {
//             element.style.display = "none";
//         }
//         // console.log(cardTxt);
//     })

// })
// ABDC = document.getElementsByClassName("noa")

// ABDC.addEventListener("mouseover", function colorchange() {
//     ABD = document.getElementsByClassName("noa")
//     ABD.style.backgroundColor = "red";
//     console.log(12)
// });

// document.querySelector('.boten').addEventListener('mouseover', function(e) {
//     // console.log(e.offsetX)
//     var ABD = document.getElementsByClassName("boten")
//     ABD.style.backgroundColor = "red";
//