document.addEventListener("DOMContentLoaded", () => {
    const priceinput = document.getElementById("priceInput");
    const errorDisplay = document.querySelector(".error");
    const priceDisplay = document.querySelector(".price-display");

    priceinput.addEventListener("focus", () => {
        priceinput.style.color = "";
        priceDisplay.hidden = true; 
    });

    const show_error = (message) => {
        errorDisplay.textContent = message;
        errorDisplay.hidden = false; 
        priceInput.style.borderColor = "red";
    };

    priceinput.addEventListener("blur", () => {
        const price = parseFloat(priceInput.value);
        if (price < 0 || isNaN(price)) {
            show_error("Введіть коректну ціну");
        } else {
            priceInput.style.borderColor = "";
        }
    });

    window.showPrice = () => {
        const price = parseFloat(priceinput.value);
        if (price < 0 || isNaN(price)) {
            show_error("Введіть коректну ціну");
        } else {
            showPriceDisplay(price);
        }
    };

    const showPriceDisplay = (price) => {
        priceDisplay.innerHTML = `<span>Ціна: ${price}</span><button onclick="clearPrice()">X</button>`;
        priceDisplay.classList.add("border");
        priceDisplay.hidden = false; 
        priceinput.style.color = "green";
        errorDisplay.hidden = true; 
    };

    window.clearPrice = () => {
        priceDisplay.innerHTML = "";
        priceDisplay.hidden = true; 
        priceinput.value = "";
        priceDisplay.style.border = "none";
        priceinput.style.color = "";
        errorDisplay.hidden = true; 
    };
});