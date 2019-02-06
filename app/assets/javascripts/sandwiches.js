$(function() {
    // console.log("Yes, my code is working!");
    listenForClickAllSandwiches();
    listenForClickMySandwiches();
    listenForClickShowSandwich();
})

class Sandwich {
	constructor(attr) {
        this.id = attr.id
        this.fillings = attr.fillings
        this.sandwich_fillings = attr.sandwich_fillings
		this.sandwich_name = attr.sandwich_name
        // this.bread_name = attr.bread_name
        // this.grill = attr.grill
        // this.open_face = attr.open_face
        // this.filling_name = attr.filling_name
        // this.quantity = attr.quantity
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
            emptystring += '<li>' + '<a class="show-one-sandwich" href="sandwiches/' + sandwich.id + '">' + sandwich["sandwich_name"] + '</a>' + '</li>';
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
        // console.log(this)
        const url = this.href
        getOneSandwich(url)
    });
    }
}

function getOneSandwich(url) {
    $.get(url + ".json", function(data){
        debugger
    let sandwich = new Sandwich(data)            
    $("#ajax-content").html(sandwich.construct())
    })
}

Sandwich.prototype.construct = function() {
    let html = `<h1>${this.sandwich_name}</h1>`
    for (let i = 0; i < this.sandwich_fillings.length; i++) {
        html += `<li>${this.fillings[i].filling_name} ${this.sandwich_fillings[i].quantity}</li>`
    }
    return html
}


