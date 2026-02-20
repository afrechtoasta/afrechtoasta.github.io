function showFilter() {
    const filterForm = document.getElementById("filterContent");
    const newContentForm = document.getElementById("newContent");
    newContentForm.style.display = "none";
    if (filterForm.style.display === "none" || filterForm.style.display === "") {
        filterForm.style.display = "block";
    } else {
        filterForm.style.display = "none";
    }
}



function showAddNew() {
    const filterForm = document.getElementById("filterContent");
    const newContentForm = document.getElementById("newContent");
    filterForm.style.display = "none";
    if (newContentForm.style.display === "none" ||
        newContentForm.style.display === "") {
        newContentForm.style.display = "flex";
    } else {
        newContentForm.style.display = "none";
    }
}

function filterArticles() {
    const showOpinion = document.getElementById("opinionCheckbox").checked;
    const showRecipe = document.getElementById("recipeCheckbox").checked;
    const showUpdate = document.getElementById("updateCheckbox").checked;
    const articles = document.querySelectorAll("#articleList article");
    articles.forEach(function(article) {

        if (article.classList.contains("opinion")) {
            article.style.display = showOpinion ? "" : "none";
        } else if (article.classList.contains("recipe")) {
            article.style.display = showRecipe ? "" : "none";
        } else if (article.classList.contains("update")) {
            article.style.display = showUpdate ? "" : "none";
        }

    });
}

function addNewArticle() {
    const title = document.getElementById("inputHeader").value.trim();
    const text = document.getElementById("inputArticle").value.trim();
    let articleType = "";
    let markerLabel = "";
    if (document.getElementById("opinionRadio").checked) {
        articleType = "opinion";
        markerLabel = "Opinion";
    } else if (document.getElementById("recipeRadio").checked) {
        articleType = "recipe";
        markerLabel = "Recipe";
    } else if (document.getElementById("lifeRadio").checked) {
        articleType = "update";
        markerLabel = "Update";
    }
    const newArticle = document.createElement("article");
    newArticle.classList.add(articleType);

    const marker = document.createElement("span");
    marker.classList.add("marker");
    marker.textContent = markerLabel;

    const heading = document.createElement("h2");
    heading.textContent = title;

    const body = document.createElement("p");
    body.textContent = text;

    const readMore = document.createElement("p");
    const readMoreLink = document.createElement("a");
    readMoreLink.href = "moreDetails.html";
    readMoreLink.textContent = "Read more...";
    readMore.appendChild(readMoreLink);
    newArticle.appendChild(marker);
    newArticle.appendChild(heading);
    newArticle.appendChild(body);
    newArticle.appendChild(readMore);
    document.getElementById("articleList").appendChild(newArticle);
    filterArticles();
}