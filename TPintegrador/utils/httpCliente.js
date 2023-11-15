const API = "https://api.themoviedb.org/3/"

export const get =(path)=>{
    return fetch(API+path,{
        headers:{
            Authorization : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjlmYzRkMTkyYzU2YzY0NmJiOTBkYjM2MDI3NWI2YyIsInN1YiI6IjY1MDI0ZDIyZmZjOWRlMGVkZjYxOTJjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TTkWtoh8M6-gk4aVvGMLPrVZwkwmP1MaJsXwNX7rCmo",
            "Content-Type": "applicarion/json,charset=utf-8"
        }
    }).then((results)=>results.json())
}