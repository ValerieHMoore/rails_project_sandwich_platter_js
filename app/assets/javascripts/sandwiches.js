$(function() {
    console.log("Yes, my code is working!");
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
	$('button#all-sandwiches').on('click', function (event) {
		event.preventDefault()
		// getAllSandwiches()
	})
}
