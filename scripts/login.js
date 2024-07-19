document.querySelector('.submit').addEventListener('click',changePage);


function changePage()
{   var type = document.querySelector('.type').value;
    if(type)    document.location.href = `${type}.html`;
}