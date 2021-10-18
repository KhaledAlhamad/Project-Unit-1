function getMovies(){
    fetch('https://api4.thetvdb.com/v4/movies?limit=10' , {
    "method": "GET",
    "headers": {Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOiIiLCJhcGlrZXkiOiJlMTkwNjdiMi02MWNjLTRjZDAtOTQzYi1iMWUzNTQxMDhlYTYiLCJjb21tdW5pdHlfc3VwcG9ydGVkIjp0cnVlLCJleHAiOjE2MzcwOTU0NDMsImdlbmRlciI6IiIsImlkIjoiMjAwMDEwIiwiaXNfbW9kIjpmYWxzZSwiaXNfc3lzdGVtX2tleSI6ZmFsc2UsInBpbiI6IkRNUEVLTFVCIiwidXVpZCI6IiJ9.N0l_V1Pt2pePLBjrLMqn_bW018OXe3dC0OX76KzluAmnQeAx-A3tTeY2TozxIxIN5X_lGsZFWN2O3qhaD7NlbksLQY3nl_jatxTdhz4IGE7zRZzlKDNM_KrxeOZdGJVgsPe9fhRtwFinnpH9EI7HBnd-gF9JaDY1WTmPXQzOHFu_gJAYzQfCjvfmFYPV1hkv8gIg-4u98VfQpeKv5Ng-ii_IU0mpVQI1yU9_rq_EKnzSX9X9PlWZLbsk0vIl0SryS06u6b50Ffh7FnPxO9HKsnbmiJ6h3l6AdLMCJSMYw9DsncXgO7PAAA8N7xoGdYHjzhHDNSxIggdZVfw3OkGuXL95ZusZDt-jKfuxytZiauCoON4214_gW2s_a2MwRjv06dVGqdCiR1dnjoO1ZzQpGabPG_65PVChBfvxUVYVvaJ4lS2qLdaRMKzxEa2BHquNA9vO3GvsDlUm8rMe7LIUynybUB6xMBSNGvaEvI2q0yL9DtkiChEGYxZfhbAtc5W2roxxphtp34xLzyGtYdVtzf2AnaUzQCKbu0czhhPWB-l1k558Bky9UMzsjRy137uIg1RelC2VFDNBQhVikZBPWLyLJ5_kbkyrtUJrLKXbPdCJIRliVu_RwRQxC3MbXTMsa2dvwWQvRgKjgGcK-VgyYk53q_tiBBQlj_FgpFYjAzQ"}
}).then((response) => {
    console.log("resolve", response)
    return response.json();
}).then(
    results => {
            
            const data = results.data
            console.log(data)


            // Carousel
            const img = data[0].image;
            let slide = document.querySelector('.carousel-inner')
                
                // slide.innerHTML = `
                // <div class="carousel-item active">
                //     <img src="https://artworks.thetvdb.com${img}"  class="d-block w-100" alt="...">
                //     <div class="carousel-caption d-none d-md-block">
                //     ${img}
                //     </div>
                // </div>` 

            // for (let i = 1; i < 3; i++) {
            //     const img = data[i].image;
            //     let slide = document.querySelector('.carousel-inner')
                
            //     slide.innerHTML += `
            //     <div class="carousel-item">
            //         <img src="https://artworks.thetvdb.com${img}"  class="d-block w-100" alt="...">
            //         <div class="carousel-caption d-none d-md-block">
            //         ${img}
            //         </div>
            //     </div>`                            
            // }

            // // Movie card 
            // let movieCard = document.querySelector("#movies");
            // for(let i=4 ; i< 20 ;i++){
            //     movieCard.innerHTML +=`
                
            //         <div class="card" style="width: 18rem;">
            //             <img src="https://artworks.thetvdb.com${data[i].image}" class="card-img-top" alt="...">
            //             <div class="card-body">
            //                 <h5 class="card-title">${data[i].name}</h5>
            //                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            //                 <a href="#" class="btn btn-primary">Go somewhere</a>
            //             </div>
            //         </div>
               
            //     `
            // }

           
        
        console.log(results.data[0])

    }
).catch((err) => {
    console.log('rejected', err)
});

}
getMovies()


function getMovieCard(){
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=0c961ffcf84c2043d100edeeab29551a' , {
    "method": "GET",
    "headers": {Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOiIiLCJhcGlrZXkiOiJlMTkwNjdiMi02MWNjLTRjZDAtOTQzYi1iMWUzNTQxMDhlYTYiLCJjb21tdW5pdHlfc3VwcG9ydGVkIjp0cnVlLCJleHAiOjE2MzcwOTU0NDMsImdlbmRlciI6IiIsImlkIjoiMjAwMDEwIiwiaXNfbW9kIjpmYWxzZSwiaXNfc3lzdGVtX2tleSI6ZmFsc2UsInBpbiI6IkRNUEVLTFVCIiwidXVpZCI6IiJ9.N0l_V1Pt2pePLBjrLMqn_bW018OXe3dC0OX76KzluAmnQeAx-A3tTeY2TozxIxIN5X_lGsZFWN2O3qhaD7NlbksLQY3nl_jatxTdhz4IGE7zRZzlKDNM_KrxeOZdGJVgsPe9fhRtwFinnpH9EI7HBnd-gF9JaDY1WTmPXQzOHFu_gJAYzQfCjvfmFYPV1hkv8gIg-4u98VfQpeKv5Ng-ii_IU0mpVQI1yU9_rq_EKnzSX9X9PlWZLbsk0vIl0SryS06u6b50Ffh7FnPxO9HKsnbmiJ6h3l6AdLMCJSMYw9DsncXgO7PAAA8N7xoGdYHjzhHDNSxIggdZVfw3OkGuXL95ZusZDt-jKfuxytZiauCoON4214_gW2s_a2MwRjv06dVGqdCiR1dnjoO1ZzQpGabPG_65PVChBfvxUVYVvaJ4lS2qLdaRMKzxEa2BHquNA9vO3GvsDlUm8rMe7LIUynybUB6xMBSNGvaEvI2q0yL9DtkiChEGYxZfhbAtc5W2roxxphtp34xLzyGtYdVtzf2AnaUzQCKbu0czhhPWB-l1k558Bky9UMzsjRy137uIg1RelC2VFDNBQhVikZBPWLyLJ5_kbkyrtUJrLKXbPdCJIRliVu_RwRQxC3MbXTMsa2dvwWQvRgKjgGcK-VgyYk53q_tiBBQlj_FgpFYjAzQ"}
}).then((response) => {
    console.log("resolve", response)
    return response.json();
}).then(
    results => {
            
            // const data = results.data
            console.log(results.results)

            // const img = results.results[0].poster_path;
            // let slide = document.querySelector('.carousel-inner')
                
                // slide.innerHTML = `
                // <div class="carousel-item active">
                //     <img src="https://image.tmdb.org/t/p/w500/${img}"  class="d-block w-100" alt="...">
                //     <div class="carousel-caption d-none d-md-block">
                //     ${img}
                //     </div>
                // </div>` 
            
            // for (let i = 1; i < 3; i++) {
            //     const img = data[i].image;
            //     let slide = document.querySelector('.carousel-inner')
                
            //     slide.innerHTML += `
            //     <div class="carousel-item">
            //         <img src="https://artworks.thetvdb.com${img}"  class="d-block w-100" alt="...">
            //         <div class="carousel-caption d-none d-md-block">
            //         ${img}
            //         </div>
            //     </div>`                            
            // }

            let movieCard = document.querySelector(".movie");

            // for(let i=0 ; i< 20 ;i++){
            //     const img = results.results[i].poster_path;
            //     movieCard.innerHTML +=`
                
            //         <div class="card" style="width: 18rem;">
            //             <img src="https://image.tmdb.org/t/p/w500/${img}" class="card-img-top" alt="...">
            //             <div class="card-body">
            //                 <h5 class="card-title"></h5>
            //                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            //                 <a href="#" class="btn btn-primary">Go somewhere</a>
            //             </div>
            //         </div>
            //     `
            // }

            for(let i=0 ; i< 8 ;i++){
                const title = results.results[i].title;
                const img = results.results[i].poster_path;
                const desc = results.results[i].overview;
                movieCard.innerHTML +=`
                
                <div class="col-md-6 col-lg-4 d-flex align-items-stretch">
                <div class="card">   
                   <div class="card-header">
                      <img class="card-img" src="https://image.tmdb.org/t/p/w500/${img}" alt="Card image">
                   </div>  
                   <div class="card-body">
                      <h3 class="card-title">${title}</h3>
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
    fetch('https://api4.thetvdb.com/v4/search?q="the shawshank"' , {
    "method": "GET",
    "headers": {Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOiIiLCJhcGlrZXkiOiJlMTkwNjdiMi02MWNjLTRjZDAtOTQzYi1iMWUzNTQxMDhlYTYiLCJjb21tdW5pdHlfc3VwcG9ydGVkIjp0cnVlLCJleHAiOjE2MzcwOTU0NDMsImdlbmRlciI6IiIsImlkIjoiMjAwMDEwIiwiaXNfbW9kIjpmYWxzZSwiaXNfc3lzdGVtX2tleSI6ZmFsc2UsInBpbiI6IkRNUEVLTFVCIiwidXVpZCI6IiJ9.N0l_V1Pt2pePLBjrLMqn_bW018OXe3dC0OX76KzluAmnQeAx-A3tTeY2TozxIxIN5X_lGsZFWN2O3qhaD7NlbksLQY3nl_jatxTdhz4IGE7zRZzlKDNM_KrxeOZdGJVgsPe9fhRtwFinnpH9EI7HBnd-gF9JaDY1WTmPXQzOHFu_gJAYzQfCjvfmFYPV1hkv8gIg-4u98VfQpeKv5Ng-ii_IU0mpVQI1yU9_rq_EKnzSX9X9PlWZLbsk0vIl0SryS06u6b50Ffh7FnPxO9HKsnbmiJ6h3l6AdLMCJSMYw9DsncXgO7PAAA8N7xoGdYHjzhHDNSxIggdZVfw3OkGuXL95ZusZDt-jKfuxytZiauCoON4214_gW2s_a2MwRjv06dVGqdCiR1dnjoO1ZzQpGabPG_65PVChBfvxUVYVvaJ4lS2qLdaRMKzxEa2BHquNA9vO3GvsDlUm8rMe7LIUynybUB6xMBSNGvaEvI2q0yL9DtkiChEGYxZfhbAtc5W2roxxphtp34xLzyGtYdVtzf2AnaUzQCKbu0czhhPWB-l1k558Bky9UMzsjRy137uIg1RelC2VFDNBQhVikZBPWLyLJ5_kbkyrtUJrLKXbPdCJIRliVu_RwRQxC3MbXTMsa2dvwWQvRgKjgGcK-VgyYk53q_tiBBQlj_FgpFYjAzQ"}
}).then((response) => {
    console.log("resolve", response)
    return response.json();
}).then(
    data => {
        // data.results.map(character => {
        //     let div = document.createElement('div');
        //     div.classList.add('single-character');
        //     div.innerHTML = `${data}`
        //     document.getElementById('movie').append(div);
            
        // })
        console.log(data.data[0].name);
    }
).catch((err) => {
    console.log('rejected', err)
});
}


getPeople();


 //         var div = document.createElement('div')
    //         div.classList.add('single-movie')
    //         div.innerHTML = `<img src="https://artworks.thetvdb.com${movie.image}" alt=${movie.name} /><h3>${movie.name}</h3>`
    //         document.getElementById('movies').append(div)
            
            // var div = document.createElement('div')
            // div.classList.add('carousel-item')


            // let movie = document.createElement(div,'carousel-item');
            

            // var div = document.createElement('div')
            // div.classList.add('single-movie')
            // div.innerHTML = `<img src="https://artworks.thetvdb.com${results.data[0].image}" alt=${results.data[0].name} /><h3>${results.data[0].name}</h3>`
            // document.getElementById('movies').append(div)


    
            // results.data.map(movie => {
   

            //     // let slide = document.querySelector('.carousel-inner')
            //     // let img = movie.image
            //     // console.log(img)
    
            
    
            // })