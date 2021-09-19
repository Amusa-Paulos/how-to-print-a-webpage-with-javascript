let printPageBtn = document.querySelector(".print-page");
let printDivBtn = document.querySelector(".print-div")

printPageBtn.addEventListener("click", (event) => {
    window.print()
})

printDivBtn.addEventListener("click", (event) => {
    let print_window = window.open("", "_blank")
    print_window.document.write(event.target.parentElement.parentElement.innerHTML)
    print_window.window.print()
    print_window.close()
})