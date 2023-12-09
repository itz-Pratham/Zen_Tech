  var select=document.getElementById("describe");
    var image=document.getElementById("plus");

    plus.addEventListener('click', function(){
        var isClicked = true;
        if (select.style.display === "none") {
            select.style.display="block";
         
          }
          else{
            select.style.display="none";
           
          }
    
         
    });
    var select1=document.getElementById("describe1");
    var image1=document.getElementById("plus1");

    plus1.addEventListener('click', function(){
        var isClicked = true;
        if (select1.style.display === "none") {
            select1.style.display="block";
         
          }
          else{
            select1.style.display="none";
           
          }
    
         
    });

    fetch('./js/data.json')
    .then(response => response.json())
    .then(data => {
  
      const cardContainer = document.getElementById('cards');
  
      data.forEach(item => {
       
        const card = document.createElement('div');
        card.classList.add('card');
  
        // Populate the card with data from JSON, using an image instead of a title
        card.innerHTML = `
          <img src="${item.image}">
          <p>${item.description}</p>
          `;
          card.style.backgroundColor ="white";
          card.style.padding="20px";
          card.style.borderRadius="10px";
          
          
          
  
        // Append the card to the container
        cardContainer.appendChild(card);
      });
    })
    .catch(error => console.error('Error fetching data:', error));