
function addTime(){
    var timeEl = document.getElementById("time-el")
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    timeEl.innerText = dateTime
}

function appear(){
    var numberEl = document.getElementById("number")
    var numberEl2 = document.getElementById("number2")
    numberEl.style.display ='block';
    numberEl2.style.display ='block';
}

function disappear(){
    var numberEl = document.getElementById("number")
    var numberEl2 = document.getElementById("number2")
    numberEl.style.display ='none';
    numberEl2.style.display ='none';
}

let postsArray = []
const titleInput = document.getElementById("post-title")
const bodyInput = document.getElementById("post-body")
const form = document.getElementById("new-post")

function renderPosts() {
    let html = ""
    for (let post of postsArray) {
        html += `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text">${post.body}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        `
    }
    document.getElementById("blog-list").innerHTML = html
}


form.addEventListener("submit", function(e) {
    e.preventDefault()
    const postTitle = titleInput.value
    const postBody = bodyInput.value
    const data = {
        title: postTitle,
        body: postBody
    }
    
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }
    
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(res => res.json())
        .then(post => {
            postsArray.unshift(post)
            renderPosts()
            titleInput.value = ""
            bodyInput.value = ""
        })
})

function input(){
    alert("Please input an artist using the form to see result");
}


function lastItem(){
    var arr = ['Courbet','Fantin-Latour','Manet','Chintreuil'];
    console.log(arr);
    var last = arr.sort();
	document.getElementById("last").innerText = "The original array: " + arr + "\n"
                                                + "The item that is last alphabetically: "+ last[last.length-1]
} 

function evalNumber(){
    var inputValue = parseInt(prompt("Enter any five-digit number without commas"))
    if (inputValue % 2 ==0){
        alert(inputValue + " is an even numbers.")
    } else{
        alert(inputValue + " is an odd number.")
    }
}




