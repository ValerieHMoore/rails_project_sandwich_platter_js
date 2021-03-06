$(function() {
    listenForClickAllSandwiches();
    listenForClickMySandwiches();
    listenForClickShowSandwich();
    listenForClickCreateSandwich();
    listenForClickSubmitSandwich();
})

class Sandwich {
	constructor(attr) {
        this.id = attr.id
        this.fillings = attr.fillings
        this.sandwich_fillings = attr.sandwich_fillings
        this.sandwich_name = attr.sandwich_name
        this.bread_name = attr.bread_name
        this.grill = attr.grill
        this.open_face = attr.open_face
        this.user_id = attr.user_id
    }
}

function listenForClickAllSandwiches() {
    let doc = document.getElementById('all-sandwiches')
    doc.addEventListener('click', function (event) {
        event.preventDefault()
        getAllSandwiches()
    })
}

// <%= form_tag search_path, :method => :post, :id => "SearchForm" do %>
//     <%= text_field_tag :search, params[:search], placeholder: 'Search your favourite products or brands', :autocomplete => :off, :id => 'SearchSearch'  %> 
//     <%= image_submit_tag('nav_bar/search.png', title: 'Search', class: 'search_submit', data: { "placement" => "bottom" }) %>
// <% end %>   

function getAllSandwiches() {
    $.get("/sandwiches.json", function(data){
        let sandwiches = data
        let emptystring = `<form id="search-box" action="/#" method="post">
        Search: <input type="text" name="sandwich_name"><br>
        <input type="submit" value="Submit">
        <br>
        <br>
      </form>`
        sandwiches.forEach((sandwich) => {
            emptystring += '<li>' + sandwich["sandwich_name"] + '</li>';
        });
        $("#ajax-content").html(emptystring)
        let form = document.getElementById("search-box")
        form.addEventListener('submit', function(event) {
            event.preventDefault()
            let searchresults = this.sandwich_name.value
            let filtered = sandwiches.filter(sandwich => sandwich.sandwich_name.toLowerCase().includes(searchresults.toLowerCase()))
            emptystring = ""
            filtered.forEach((sandwich) => {
                emptystring += '<li>' + sandwich["sandwich_name"] + '</li>';
            });
            $("#ajax-content").html(emptystring)
        })
})
}

function listenForClickMySandwiches() {
    let doc = document.getElementById('my-sandwiches')
    doc.addEventListener('click', function (event) {
        event.preventDefault()
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
        const url = this.href
        getOneSandwich(url)
    });
    }
}

function getOneSandwich(url) {
    $.get(url + ".json", function(data){
    let sandwich = new Sandwich(data)            
    $("#ajax-content").html(sandwich.construct())
    })
}

Sandwich.prototype.construct = function() {
    let html = `
    <h2>${this.sandwich_name}</h2>
    <h4>${this.bread_name} Bread</h4>
    `
    for (let i = 0; i < this.sandwich_fillings.length; i++) {
        html += `<li>${this.fillings[i].filling_name} ${this.sandwich_fillings[i].quantity}</li>`
    }
    return html
}

function listenForClickCreateSandwich() {
    let doc = document.getElementById("create-new-sandwich")
    doc.addEventListener('click', function (event) {
        event.preventDefault()
        const url = this.attributes.href.textContent;
        getBlankSandwichForm(url)
    })
}

function getBlankSandwichForm(url) {
    const fullUrl = url + "?layout=false"
    $.get(fullUrl).done(function(resp){
        $("#ajax-content").html(resp)
       listenForClickSubmitSandwich()
    })
}

function listenForClickSubmitSandwich() {
    let form = document.getElementById("new_sandwich")
    form.addEventListener('submit', function (event) {
        event.preventDefault()
        let data = $(this).serialize();
        let url = this.action;
        postSandwichData(url, data)
    })
}

function postSandwichData(url, data) {
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: response => {
          const mySandwich = new Sandwich(response);
          document.getElementById("ajax-content").innerHTML = mySandwich.construct();      
        },
        error: response => {
          const customMessage = `<h1>Error:</h1>
          <h2>A sandwich must have a name and a bread!</h2>`
          document.getElementById("ajax-content").innerHTML = customMessage;
        }
    })
}

    
