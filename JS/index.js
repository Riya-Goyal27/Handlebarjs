let p_data = await fetch('./js/petdata.json').then((resolve)=>{
  return resolve.json()
}).then(value=>{return value}).catch(value=>console.log(value))
 
  const rawTemplate = document.getElementById("petsTemplate").innerHTML;
  const compiledTemplate = Handlebars.compile(rawTemplate);
  const ourGeneratedHTML = compiledTemplate(p_data);
  const petsContainer = document.getElementById("pets-container");
  petsContainer.innerHTML = ourGeneratedHTML;


