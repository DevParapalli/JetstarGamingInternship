"use strict";

const content_div = document.getElementById("content");

const customer_details_content = document.querySelector("#customer-details").innerHTML;
const payment_details_content = document.querySelector("#payment-details").innerHTML;
const card_details_content = document.querySelector("#card-details").innerHTML;
const upi_details_content = document.querySelector("#upi-details").innerHTML;
const cod_details_content = document.querySelector("#cod-details").innerHTML;


const next_button = document.getElementById("next-btn");
const prev_button = document.getElementById("previous-btn");


let payment_form;


let state = 0;

function update_state() {
    switch (state) {
        case 0:
            next_button.style.display = 'block';
            prev_button.style.display = 'none';
            prev_button.setAttribute('disabled', "");
            next_button.removeAttribute('disabled')
            break;
        case 1:
            next_button.style.display = 'block';
            prev_button.style.display = 'block';
            prev_button.removeAttribute("disabled");
            next_button.removeAttribute("disabled");
            break;
        case 2:
            next_button.style.display = 'none';
            prev_button.style.display = 'block';
            prev_button.removeAttribute('disabled')
            payment_form = document.getElementById("payment-form");
            if (payment_form) {
                payment_form.querySelectorAll("input").forEach((input) => {
                    input.addEventListener("change", () => {

                    });
                });
            }
        default:
            break;
    }
}

let product_content = "";


function next() {
    switch (state) {
        case 0:
            state = 1;
            update_state();
            product_content = content_div.innerHTML;
            content_div.innerHTML = customer_details_content;
            break;
        case 1:
            state = 2;
            update_state();
            content_div.innerHTML = payment_details_content;
        default:
            break;
    }
}


function previous() {
    switch (state) {
        case 1:
            state = 0;
            update_state();
            // product_content = content_div.innerHTML;
            content_div.innerHTML = product_content;
            break;
        case 2:
            state = 1;
            update_state();
            content_div.innerHTML = customer_details_content;
            setTimeout(() => {

            })
        default:
            break;
    }
}

next_button.addEventListener("click", next);
prev_button.addEventListener("click", previous);


window.onload = () => {
    if (document.location.hash == "#1") {
        next();
    }
    else if (document.location.hash == "#2") {
        next();
        next();
    }
    update_state();
}