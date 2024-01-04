// const addBtn= document.querySelector("#addBtn")
// const main=document.querySelector("#main")

addBtn.addEventListener(
    "click",
    function () {
        addNote()
    }
)


const addNote = () => {
    const notee = document.createElement("div");
    notee.classList.add("note")
    notee.innerHTML = `
    <div class="tool">
                <i class=" save fa-solid fa-floppy-disk"></i>
                <i class="trash fa-solid fa-trash"></i>
    </div>
    <textarea></textarea>
    `;

    notee.querySelector(".trash").addEventListener(
        "click",
        function () {
            notee.remove()
        }
    )
    main.appendChild(notee);
}
