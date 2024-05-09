document.addEventListener("DOMContentLoaded", () => {
    const priceinput = document.getElementById("price_input");
    const errorDisplay = document.querySelector(".error");
    const priceDisplay = document.querySelector(".price-display");

    priceinput.addEventListener("focus", () => {
        priceinput.style.color = "";
        priceinput.style.borderColor = ""; 
    });

    const show_error = (message) => {
        errorDisplay.textContent = message;
        errorDisplay.hidden = false; 
        priceinput.style.borderColor = "red";
    };

    const showprice = (price) => {
        priceDisplay.innerHTML = `<span>Ціна: ${price}</span><button id="clear">X</button>`;
        priceDisplay.classList.add("border");
        priceDisplay.hidden = false; 
        priceinput.style.color = "green";
        errorDisplay.hidden = true; 
        document.getElementById("clear").addEventListener("click", clearPrice);
    };
    const clearPrice = () => {
        priceDisplay.innerHTML = "";
        priceDisplay.hidden = true; 
        // priceInput.value = "";
        priceDisplay.style.border = "none";
        // priceInput.style.color = "";
        errorDisplay.hidden = true; 
    };
    priceinput.addEventListener("blur", () => {
        const price = parseFloat(priceinput.value);
        if (price < 0 || isNaN(price)) {
            show_error("Введіть коректну ціну");
        } else {
            showprice(price);
        }
    });
    const initialPrice = parseFloat(priceinput.value);
    if (!isNaN(initialPrice) && initialPrice >= 0) {
        showprice(initialPrice);
    }
});