//first we need to get the data/promise from the server

async function getdatafromWeb(){
const response= await fetch("https://dog.ceo/api/breeds/list/all");
const data= await response.json()
showData(data.message);

}
getdatafromWeb()


function showData(breedname){
    
document.getElementById("breed").innerHTML=`
<select onchange="loadByBreed(this.value)">
<option>Choose from the name below</option>
${Object.keys(breedname).map(function (breedparameter){
   return `<option>${breedparameter}</option>`
}).join('')}

</select>
`

}

////////////////////////////////////



///load by breed
async function loadByBreed(breedz){
if(breedz!= "Choose from the name below"){
  /// we wil be using the fetch method one more time to get the information from the server
  const response=await fetch(`https://dog.ceo/api/breed/${breedz}/images`);
  const data =await response.json();
  console.log(data);
}
}



