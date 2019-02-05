$(function() {
    // console.log("Yes, my code is working!");
    listenForClickAllSandwiches();
    listenForClickMySandwiches();
    listenForClickShowSandwich();
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
        // console.log("My button works")
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
        // console.log(this.href)
        const url = this.href
        getMySandwiches(url)
    })
}

function getMySandwiches(url) {
    $.get(url + `.json`, function(data){
        let mysandwiches = data
        let emptystring = ""
        mysandwiches.forEach((sandwich) => {
            emptystring += '<li>' + '<a href="#" class="show-one-sandwich">' + sandwich["sandwich_name"] + '</a>' + '</li>';
        });
        $("#ajax-content").html(emptystring)
        listenForClickShowSandwich()
    })
}

function listenForClickShowSandwich() {
    let doc = document.getElementsByClassName('show-one-sandwich')
    for (let i=0; i<doc.length; i++) {
        doc[i].addEventListener('click', function (event) {
        event.preventDefault()
        console.log("Show me a sandwich!")
        getOneSandwich()
    });
    }
}

function getOneSandwich() {
    $.get(url + ".json", function(data){
    let sandwich = new Sandwich(data)            
    $("#ajax-content").html(sandwich.construct())
    })
}
