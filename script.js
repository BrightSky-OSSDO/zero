function search() {
    const searchQuery = document.getElementById("searchBox").value;
    const encodedText = encodeURIComponent(searchQuery);
    window.location.href = window.location.pathname + "?search=" + encodedText;
}

function search2() {
    const searchQuery2 = document.getElementById("search2").value;
    const encodedText2 = encodeURIComponent(searchQuery2);
    window.location.href = window.location.pathname + "?search=" + encodedText2;
}

function retrieveQuery() {
    const queryString = window.location.search;
    const urlParameters = new URLSearchParams(queryString);
    const decodedQuery = decodeURIComponent(queryString);
    console.log(decodedQuery.replace("?search=", ""));

    if (decodedQuery == "") {
        document.getElementById("view1").style.display = "block";
        document.getElementById("view2").style.display = "none";
    } else {
        document.getElementById("view1").style.display = "none";
        document.getElementById("view2").style.display = "block";
        document.getElementById("searchTerm").textContent = decodedQuery.replace("?search=", "");
        document.getElementById("search2").value = decodedQuery.replace("?search=", "");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    retrieveQuery();
});
