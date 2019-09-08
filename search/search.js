function search() {
    let query = document.getElementById("query").value;
    window.open('https://www.google.com/search?q=' + query + ' site:junqiwu02.github.io');
    return false;
}