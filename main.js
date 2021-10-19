// function getMovies(){
//     fetch('https://api4.thetvdb.com/v4/movies?limit=10' , {
//     "method": "GET",
//     "headers": {Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOiIiLCJhcGlrZXkiOiJlMTkwNjdiMi02MWNjLTRjZDAtOTQzYi1iMWUzNTQxMDhlYTYiLCJjb21tdW5pdHlfc3VwcG9ydGVkIjp0cnVlLCJleHAiOjE2MzcwOTU0NDMsImdlbmRlciI6IiIsImlkIjoiMjAwMDEwIiwiaXNfbW9kIjpmYWxzZSwiaXNfc3lzdGVtX2tleSI6ZmFsc2UsInBpbiI6IkRNUEVLTFVCIiwidXVpZCI6IiJ9.N0l_V1Pt2pePLBjrLMqn_bW018OXe3dC0OX76KzluAmnQeAx-A3tTeY2TozxIxIN5X_lGsZFWN2O3qhaD7NlbksLQY3nl_jatxTdhz4IGE7zRZzlKDNM_KrxeOZdGJVgsPe9fhRtwFinnpH9EI7HBnd-gF9JaDY1WTmPXQzOHFu_gJAYzQfCjvfmFYPV1hkv8gIg-4u98VfQpeKv5Ng-ii_IU0mpVQI1yU9_rq_EKnzSX9X9PlWZLbsk0vIl0SryS06u6b50Ffh7FnPxO9HKsnbmiJ6h3l6AdLMCJSMYw9DsncXgO7PAAA8N7xoGdYHjzhHDNSxIggdZVfw3OkGuXL95ZusZDt-jKfuxytZiauCoON4214_gW2s_a2MwRjv06dVGqdCiR1dnjoO1ZzQpGabPG_65PVChBfvxUVYVvaJ4lS2qLdaRMKzxEa2BHquNA9vO3GvsDlUm8rMe7LIUynybUB6xMBSNGvaEvI2q0yL9DtkiChEGYxZfhbAtc5W2roxxphtp34xLzyGtYdVtzf2AnaUzQCKbu0czhhPWB-l1k558Bky9UMzsjRy137uIg1RelC2VFDNBQhVikZBPWLyLJ5_kbkyrtUJrLKXbPdCJIRliVu_RwRQxC3MbXTMsa2dvwWQvRgKjgGcK-VgyYk53q_tiBBQlj_FgpFYjAzQ"}
// }).then((response) => {
//     console.log("resolve", response)
//     return response.json();
// }).then(
//     results => {
            
//             const data = results.data
//             // Carousel
//             const img = data[0].image;
//             let slide = document.querySelector('.carousel-inner')
           
//         console.log(results.data[0])

//     }
// ).catch((err) => {
//     console.log('rejected', err)
// });

// }
// getMovies()


function getMovieCard(){
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=0c961ffcf84c2043d100edeeab29551a' , {
    "method": "GET",
}).then((response) => {
    console.log("resolve", response)
    return response.json();
}).then(
    results => {
            // const data = results.data
            // console.log(results.results)
            let movieCard = document.querySelector(".movie"); 

            for(let i=0 ; i< 6 ;i++){
                const title = results.results[i].title;
                const img = results.results[i].poster_path;
                const desc = results.results[i].overview;
                let id = results.results[i].id;
                console.log("id =" + id)
                movieCard.innerHTML +=`
                
                <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
                    <div class="card">   
                        <div class="card-header">
                            <img class="card-img" src="https://image.tmdb.org/t/p/w500/${img}" alt="Card image">
                        </div>  
                        <div class="card-body">
                        <!--    <h3 class="card-title btn" onClick="href='details.html'">${title}</h3> -->
                            <a class="card-title btn" id="${id}" onClick="movieSelected(${id})">${title}</a>
                            <div class="container">
                                <div class="row">
                                    <div class="col-4 metadata">
                                    <i class="fa fa-star" aria-hidden="true"></i> 
                                    <p>9.5/10</p>
                                    </div>
                                    <div class="col-8 metadata">Adventure. Sci-Fi</div>
                                </div>
                            </div>      
                            <p class="card-text">${desc}</p>
                            <a class="trailer-preview" href="https://youtu.be/ePbKGoIGAXY" target="new">
                                <i class="fa fa-play" aria-hidden="true"></i>
                                </a>
                        </div>
                    </div>
                </div>
                `
            }
        // console.log(results.data[0])

    }
).catch((err) => {
    console.log('rejected', err)
});

}
getMovieCard()


function getPeople(){
    fetch('https://api.themoviedb.org/3/person/popular?api_key=0c961ffcf84c2043d100edeeab29551a' , {
    "method": "GET",
}).then((response) => {
    console.log("resolve", response)
    return response.json();
}).then(
    data => {
        console.log("People "+ data.results[0].gender);
        // let peopleCard = document.querySelector(".people");
        // let name = data.name;
        // let img = data.profile_path;

        for(let i=0; i< data.results.length-2; i++){
            if(data.results[i].gender == 2){
                
                    let peopleCard = document.querySelector(".people");
        
                    let name = data.results[i].name;
                    let img = data.results[i].profile_path
                    peopleCard.innerHTML += `
                    <div class="col-md-6 col-lg-2 d-flex align-items-stretch justify-content-center" >
                            <div class="card people-card" style="margin-bottom:20px">   
                                    <div class="card-header">
                                        <img class="card-img" src="https://image.tmdb.org/t/p/w500/${img}" alt="Card image">
                                    </div>  
                                    <div class="card-body">
                                        <a class="card-title">${name}</a>
                                    </div>      
                            </div>
                    </div>
                `
            }
        }    
    }
).catch((err) => {
    console.log('rejected', err)
});
}

getPeople();

function movieSelected(id){
    sessionStorage.setItem('movieId',id);
    window.location = "details.html";
    return false;
}


function getMovieDetail(){
    id = sessionStorage.getItem('movieId');
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0c961ffcf84c2043d100edeeab29551a` , {
        "method": "GET",
    }).then((response) => {
        console.log("resolve", response)
        return response.json();
    }).then(
        results => {
            
            let movieDetails = document.querySelector(".container"); 
            let title = results.original_title;
            let img = results.backdrop_path;
            img = `https://image.tmdb.org/t/p/original/${img}`
            let desc = results.overview;
            let genres = results.genres;
            // console.log("gener ==" + genres[0].name);


            let background = document.getElementById('mainContainer');
            background.setAttribute('style',"background-image: url("+ img +");");

            let cover = document.querySelector('.container');
            cover.setAttribute('style',"background-image: url("+ img +");");

            

            movieDetails.innerHTML +=`
                <div id="left">
                    <h1>SPECTRE</h1>
                    <div id="info">
                        <ul id="menu">
                        <li>2015</li>
                        <li>148 min</li>
                        <li>${genres[0].name}&nbsp;&nbsp;&nbsp;|</li>
                        <li>Adventure&nbsp;&nbsp;&nbsp;|</li>
                        <li>Thriller</li>
                        </ul>
                    </div>
                    <div id="rating">
                        <h3>IMDb Rating:</h3>
                        <div id="container"></div>
                    </div>
                </div>
                <div id="right">
                ${desc}
                <div id="trailer">
                    <i class="fa fa-play" aria-hidden="true"></i>
                    <h4>WATCH TRAILER<h4>
                </div>
                 </div>

            
             
             `
            //  <img class="card-img" src="https://image.tmdb.org/t/p/w500/${img}" alt="Card image">
                
                // const data = results.data
                console.log("details "+results.original_title)
    
    
            // console.log(results.data[0])
    
        }
    ).catch((err) => {
        console.log('rejected', err)
    });
}
getMovieDetail();

// movie details 

var bar = new ProgressBar.Circle(container, {
    strokeWidth: 10,
    easing: 'easeInOut',
    duration: 1400,
    color: '#f92b1e',
    trailColor: '#BDC3C7',
    trailWidth: 5,
    svgStyle: null
  });
  
  bar.setText('6.8');
  bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar.text.style.fontSize = '0.9rem';
  bar.text.style.color='#ECF0F1';
  bar.animate(0.68);  // Number from 0.0 to 1.0

//   movie details end 


// <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
//                 <div class="card">   
//                     <div class="card-header">
//                         <img class="card-img" src="https://image.tmdb.org/t/p/w500/${img}" alt="Card image">
//                     </div>  
//                     <div class="card-body">
//                     <!--    <h3 class="card-title btn" onClick="href='movie.html'">${title}</h3> -->
//                         <a class="card-title btn" id="m${0}" onClick="href='movie.html'">${title}</a>
//                         <div class="container">
//                             <div class="row">
//                                 <div class="col-4 metadata">
//                                 <i class="fa fa-star" aria-hidden="true"></i> 
//                                 <p>9.5/10</p>
//                                 </div>
//                                 <div class="col-8 metadata">Adventure. Sci-Fi</div>
//                             </div>
//                         </div>      
//                         <p class="card-text">${desc}</p>
//                         <a class="trailer-preview" href="https://youtu.be/ePbKGoIGAXY" target="new">
//                             <i class="fa fa-play" aria-hidden="true"></i>
//                             </a>
//                     </div>
//                 </div>
//             </div>