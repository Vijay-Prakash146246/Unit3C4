// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

//let value =`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${}`
let url="https://masai-mock-api.herokuapp.com/news?q=tesla";
import { navbar } from "../components/navbar.js";
let navbar1 = document.getElementById("navbar");
navbar1.innerHTML = navbar();



//importing the fetch
import { searchNews ,append } from "./search.js";
let search = async (event) => {
     if(event.key==="Enter")
     {
          let value=document.getElementById("search_input").value;
          let data = await searchNews(value);
          console.log(data);
          let results = document.getElementById("results");
          results.innerHTML=null;
          append(data.results,results);
     }
};

//error is here 




document.getElementById("search_input").addEventListener("keydown",search);


let sidebar = document.getElementById("sidebar").children;
//console.log(sidebar);
let value =`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${sidebar}`;
function cSearch()
{ 
     searchNews(value,this.id).then((data) => {
          console.log(data);
          let results=document.getElementById("results");
          results.innerHTML=null;
          append(data.results,results);
     });
}
for(let el of sidebar)
{
     el.addEventListener("click",cSearch);
}