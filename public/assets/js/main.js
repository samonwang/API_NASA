
// Search button for interaction
let searchButton = document.querySelector("#search-btn")

searchButton.addEventListener("click",()=>{
    console.log("button pressed")
    requestApi()
})


// request the data from NASA by date
async function requestApi() {
    try {
            const input_date = document.getElementById("dateinput").value;
            
            const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=dbeKKL45ENakIuOy0TbxC5LVkpfmt0cThKaUuAfg&date=${input_date}`);
            const data = await response.json();
            console.log(data);
 
            document.getElementById("date").innerHTML = "Date: " + data.date;
            document.getElementById("title").innerHTML = data.title;
            document.getElementById("copyright").innerHTML = "Credit and Copyright: " + data.copyright;
            document.getElementById("caption").innerHTML = data.explanation;

            // to get the video or image for the date
            const type = document.getElementById("daypic");
            if (data.media_type === 'video') {
                type.innerHTML = `<iframe class="embed-responsive-item" src=${data.url} style="width:640px; height:360px" allowfullscreen></iframe>`;
            } else {
                type.innerHTML = `<img src=${data.url} class="img-roundeds" alt="pictureoftheday" style="width:100%">`;
            }

    } catch (error) {
        console.log(`🤕 ${error}`);
        
    }
}
requestApi();

