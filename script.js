const productImg = document.getElementById("product-img");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", function(){
        productImg.src = this.dataset.img;
        buttons.forEach(btn => {
            btn.classList.remove("active");
        });
        this.classList.add("active");
    });
});