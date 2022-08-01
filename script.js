let nav=document.createElement('nav');
nav.innerHTML=`<nav class="navbar navbar-light bg-secondary">
<div class="container">
  <a class="navbar-brand fst-italic text-white">English Random Word</a>
  <form class="d-flex">
   <button type="button" class="btn btn-outline-info" onclick="juliee()">clickMe I will display random Word</button>
  </form>
</div>
</nav>`;
document.body.append(nav);
       
let mainDiv=document.createElement('div');    
mainDiv.setAttribute('class','container mt-5 ');     
mainDiv.innerHTML=`<div id='active1'></div>   
<div id='active2'></div>
<div id='active3'></div>`
mainDiv.style.textAlign="center"              
document.body.append(mainDiv);  

function juliee(){
  
    async function foo(){        
        // let input=document.getElementById('input');     
        let res=await fetch("https://random-words-api.vercel.app/word/");
        // console.log(res);                                                  
        let res1=await res.json()           
        // console.log(res1);              

        let a=res1[0].word;     
        console.log(a);         
        let b=res1[0].definition;   
        console.log(b);           
        let c=res1[0].pronunciation;   
        console.log(c);       
      let div1=document.getElementById('active1');
      div1.innerHTML=`<b>WORD</b>: ${a}`   
      let div2=document.getElementById('active2');
      div2.innerHTML=`<b>DEFINITION</b>: ${b} `       
      let div3=document.getElementById('active3');     
      div3.innerHTML=`<b>PRONUNCIATION</b>: ${c}`
}
foo()
}





