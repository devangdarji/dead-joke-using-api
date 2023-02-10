/* <div id="joke">joke is loading</div>
<button id="btn" >New Joke</button> */

// async await 

let jokbtn=document.getElementById('btn');
let jokespan=document.getElementById('joke');



const fetchjoke = async ()=>{
    const header={
        headers:{
            Accept:"application/json"
        }
    }

 try{
    let data = await fetch('https://icanhazdadjoke.com/',header)
    let actudata=await data.json();
    jokespan.innerHTML=actudata.joke;
    console.log(actudata.joke)

 }catch(error)
 {
    console.log(error);
 }
}

jokbtn.addEventListener('click',fetchjoke);
fetchjoke();