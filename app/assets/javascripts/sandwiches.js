$(function() {
    // console.log("Yes, my code is working!");
    listenForClickAllSandwiches();
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
        sandwiches.forEach((sandwich, index) => {
            emptystring += '<li>' + sandwich["sandwich_name"] + '</li>';
            emptystring += '<li ><href="sandwiches/' + sandwich["id"] + '">' + sandwich["sandwich_name"] + `</a>
         <div id="${index}"` + recipe["description"] + '</div> </li>';
        });

        $("#get-sandwiches").html(emptystring)
    })
}
