//This program takes input from the user as checkbox or text and then searches on google (because I used google.com as url). 

document.addEventListener('DOMContentLoaded', () => {
    var url = "https://www.google.com/"
    document.querySelector('#submit').onclick = () => {
        document.querySelectorAll('.checkbox').forEach(checkbox => {
            if (checkbox.checked){
                url += checkbox.dataset.value;
            }
        });
        window.open(url);
    }
});