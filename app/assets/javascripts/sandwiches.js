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
	$.ajax({
		url: 'http://localhost:3000/sandwiches',
		method: 'get',
		dataType: 'json'
	}).done(function (data) {
        console.log("the data is: ", data)

	})
}
