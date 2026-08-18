// Product counter
let productCount = 1;


// ------------------------------------
// ADD PRODUCT FUNCTION
// ------------------------------------

function addProduct() {

    // Increase product number
    productCount++;

    // Get product container
    let container =
        document.getElementById("productContainer");


    // Create new product box
    let productBox =
        document.createElement("div");

    productBox.className = "product-box";


    // Create product HTML
    productBox.innerHTML = `

        <h3>Product ${productCount}</h3>

        <label>Product Name:</label>

        <input type="text"
               class="productName"
               placeholder="Enter product name">


        <label>Quantity:</label>

        <input type="number"
               class="quantity"
               min="1"
               value="1">


        <label>Unit Price (₹):</label>

        <input type="number"
               class="price"
               min="0"
               placeholder="Enter price">


        <button type="button"
                class="remove-btn"
                onclick="removeProduct(this)">

            Remove Product

        </button>

    `;


    // Add product to container
    container.appendChild(productBox);
}



// ------------------------------------
// REMOVE PRODUCT FUNCTION
// ------------------------------------

function removeProduct(button) {

    // Find product box
    let productBox =
        button.parentElement;

    // Remove product
    productBox.remove();
}



// ------------------------------------
// GENERATE BILL FUNCTION
// ------------------------------------

function generateBill() {

    // Get customer name
    let customerName =
        document.getElementById("customerName").value;


    // Get all product boxes
    let productBoxes =
        document.querySelectorAll(".product-box");


    // Check customer name
    if (customerName === "") {

        alert("Please enter customer name.");

        return;
    }


    // Array to store products
    let products = [];


    // Total bill
    let total = 0;


    // --------------------------------
    // ITERATION
    // --------------------------------

    productBoxes.forEach(function(box) {

        let productName =
            box.querySelector(".productName").value;

        let quantity =
            Number(
                box.querySelector(".quantity").value
            );

        let price =
            Number(
                box.querySelector(".price").value
            );


        // Validate product
        if (productName === "" || price <= 0) {

            return;
        }


        // Calculate product amount
        let amount =
            quantity * price;


        // Add amount to total
        total = total + amount;


        // Store product information
        products.push({

            name: productName,

            quantity: quantity,

            price: price,

            amount: amount

        });

    });


    // Check whether product exists
    if (products.length === 0) {

        alert("Please enter at least one product.");

        return;
    }


    // --------------------------------
    // DISCOUNT CALCULATION
    // --------------------------------

    let discount = 0;

    let discountRate = 0.10;


    // Selection statement
    if (total > 2000) {

        discount =
            total * discountRate;

    } else {

        discount = 0;
    }


    // Final payable amount
    let finalAmount =
        total - discount;


    // --------------------------------
    // STORE DATA
    // --------------------------------

    localStorage.setItem(
        "customerName",
        customerName
    );


    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );


    localStorage.setItem(
        "total",
        total
    );


    localStorage.setItem(
        "discount",
        discount
    );


    localStorage.setItem(
        "finalAmount",
        finalAmount
    );


    // Open bill page
    window.location.href = "bill.html";
}



// ------------------------------------
// DISPLAY BILL FUNCTION
// ------------------------------------

function displayBill() {

    // Get stored customer
    let customerName =
        localStorage.getItem("customerName");


    // Get stored products
    let products =
        JSON.parse(
            localStorage.getItem("products")
        );


    // Display customer
    document.getElementById(
        "displayCustomer"
    ).textContent = customerName;


    // Get table body
    let billItems =
        document.getElementById("billItems");


    // Clear table
    billItems.innerHTML = "";


    // --------------------------------
    // ITERATION
    // --------------------------------

    products.forEach(function(product, index) {

        let row =
            document.createElement("tr");


        row.innerHTML = `

            <td>${index + 1}</td>

            <td>${product.name}</td>

            <td>${product.quantity}</td>

            <td>₹${product.price.toFixed(2)}</td>

            <td>₹${product.amount.toFixed(2)}</td>

        `;


        billItems.appendChild(row);

    });


    // Get bill values
    let total =
        Number(
            localStorage.getItem("total")
        );


    let discount =
        Number(
            localStorage.getItem("discount")
        );


    let finalAmount =
        Number(
            localStorage.getItem("finalAmount")
        );


    // Display values
    document.getElementById(
        "displayTotal"
    ).textContent = total.toFixed(2);


    document.getElementById(
        "displayDiscount"
    ).textContent = discount.toFixed(2);


    document.getElementById(
        "displayFinal"
    ).textContent = finalAmount.toFixed(2);
}



// ------------------------------------
// RUN DISPLAY FUNCTION
// ------------------------------------

if (
    document.getElementById("billItems")
) {

    displayBill();

}