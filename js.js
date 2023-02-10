// {/* <div id="joke">joke is loading</div>
// <button id="btn" >New Joke</button> */}

let jokes=document.getElementById('joke')
let jokebtn=document.getElementById('btn')


generatejoke=()=>{

    const header={
        headers:{
            Accept:"application/json"
        }
    }

    
fetch('https://icanhazdadjoke.com/',header)
.then((res)=>res.json())
.then((res)=>{
    jokes.innerHTML=res.joke;
    console.log(res.joke)
})
.catch((error)=>{
    console.log(error);
})

}
generatejoke();
jokebtn.addEventListener('click',generatejoke);