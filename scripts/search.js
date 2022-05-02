// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
let searchNews = async (value) => {
     try
     {
          //https://masai-mock-api.herokuapp.com/news?q=${value}
          //https://masai-mock-api.herokuapp.com/news?q={query} 
          let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`);
          let data= await res.json();
          return data;
     }
     catch(err)
     {
          console.log(err);
     }
};

// append the data
let append = (data,results) =>
{
     //{title, description ,url}
     data.forEach((el) => {
          let div = document.createElement("div");
          let img1 = document.createElement("img");
          img1.src=el.urlToImage;
          let title1=document.createElement("h4");
          title1.innerText=el.title;
          let description1=document.createElement("p");
          description1.innerText=el.description;
          img1.setAttribute("class","image1");
          div.append(img1,title1,description1);
          results.append(div);
     });
}
export { searchNews ,append };