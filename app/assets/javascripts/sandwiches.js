$(function() {
    // console.log("Yes, my code is working!");
    listenForClickAllSandwiches();
    listenForClickMySandwiches();
})

class Sandwich {
	constructor(obj) {
		this.id = obj.id
		this.sandwich_name = obj.sandwich_name
        this.bread_name = obj.bread_name
        this.grill = obj.grill
        this.open_face = obj.open_face
        this.filling_name = obj.filling_name
        this.quantity = obj.quantity
    }
}

function listenForClickAllSandwiches() {
    let doc = document.getElementById('all-sandwiches')
    doc.addEventListener('click', function (event) {
        event.preventDefault()
        console.log("My button works")
        getAllSandwiches()
    })
}

function getAllSandwiches() {
    $.get("/sandwiches.json", function(data){
        let sandwiches = data
        // console.log(sandwiches)
        let emptystring = ""
        sandwiches.forEach((sandwich) => {
            emptystring += '<li>' + sandwich["sandwich_name"] + '</li>';
        });
        $("#ajax-content").html(emptystring)
    })
}

function listenForClickMySandwiches() {
    let doc = document.getElementById('my-sandwiches')
    doc.addEventListener('click', function (event) {
        event.preventDefault()
        // console.log("MySandwiches button works")
        getMySandwiches()
    })
}

function getMySandwiches() {
    $.get(`/users/1/sandwiches.json`, function(data){
        let mysandwiches = data
        let emptystring = ""
        mysandwiches.forEach((sandwich) => {
            emptystring += '<li>' + '<a href="#">' + sandwich["sandwich_name"] + '</a>' + '</li>';
        });
        $("#ajax-content").html(emptystring)
    })
}

// function listenForClickShowSandwich() {
//     let doc = document.getElementById('show-sandwich')
//     doc.addEventListener('click', function (event) {
//         event.preventDefault()
//         console.log("MySandwiches button works")
//         // getOneSandwich()
//     })
// }