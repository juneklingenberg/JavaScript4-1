
var btn= document.getElementById('btn');

btn.addEventListener('click', function(e){

  alert('Success');
  e.stopPropagation();
})
