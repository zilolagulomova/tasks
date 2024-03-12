const span = document.querySelector(".span");
const plusBtn = document.querySelector(".plusBtn");
const table = document.querySelector(".table");
const modalka = document.querySelector(".modal");
const closeBtn = document.querySelector(".close_btn");
const commentDiv = document.querySelector(".commentDiv");
const commentBtn = document.querySelector(".comment");
const commentContent = document.querySelector(".commentContent");
const taskBtn = document.querySelector(".task");
const history = document.querySelector(".history");

taskBtn.addEventListener("click", () => {
    taskBtn.setAttribute("class", "cursor-pointer font-semibold text-sm text-dark")
    commentBtn.setAttribute("class", "font-medium text-sm text-gray-300 cursor-pointer")
    history.classList.remove("hidden");
    commentContent.classList.add("hidden")
})
commentBtn.addEventListener("click", () => {
    taskBtn.setAttribute("class", "font-medium text-sm text-gray-300 cursor-pointer")
    commentBtn.setAttribute("class", "font-semibold text-sm text-dark cursor-pointer")
    history.classList.add("hidden");
    commentContent.classList.remove("hidden")
})

plusBtn.addEventListener("click", showFunction);
closeBtn.addEventListener("click", closeFunction);
span.addEventListener("click", closeFunction)
document.addEventListener("keydown", (e) => {
    if(e.which === 27) {
        closeFunction();
    }
})
function showFunction() {
    modalka.classList.remove("hidden")
    span.classList.remove("hidden")
}

function closeFunction() {
    modalka.classList.add("hidden")
    span.classList.add("hidden")
}