$(function() {
    // console.log("Yes, my code is working!");
    listenForClickAllSandwiches();
    getAllSandwiches();
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
    $('button#all-sandwiches').on('click', function (event) {
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
        });
        $("#get-sandwiches").html(emptystring)
        // getOneSandwich()
    })
}
