//my account dropdown
$(document).ready(function(){
    $(".drop").click(function(){
        $(".dropdown").toggle()
    });
});

// side dropdown
$(document).ready(function(){
    $(".side").click(function(){
        $(".side_dropdown").toggle()
    });
});

// Sample array of books
const books = [
    { title: "Textbook of Medical Physiology ", author: "Gk Pal", cut_price: 1896, price: 1289, paper: "paperback", image: "../images/medicine1.jpg" },
    { title: "Paniker's  Microbiology", author: "R Ananthanarayan|CK Jayaram Paniker",cut_price: 1250, price: 988, paper: "paperback", image: "../images/medicine2.jpg" },
    { title: "Biochemistry and Nutrition & Dietetics", author: "Harbans Lal", cut_price: 595, price: 422, paper: "paperback", image: "../images/medicine3.jpg" },
    { title: "The Washington Manual of Emergency Medicine SAE", author: "Praveen Aggarwal", cut_price: 1250, price: 1152, paper: "paperback", image: "../images/medicine4.jpg" },
    { title: "SHORT NOTES IN COMMUNITY MEDICINE", author: "SHETTY/KHAPRE", cut_price: 1150, price: 909, paper: "paperback", image: "../images/medicine5.jpg" },
    { title: "Pocket Emergency Medicine", author: "Richard D Zane|Joshua M. Kosowsky", cut_price: 494, price: 655, paper: "paperback", image: "../images/medicine6.jpg" },
    { title: "APPLIED SOCIOLOGY AND PSYCHOLOGY", author: "Prakash P", cut_price: 550, price: 396, paper: "paperback", image: "../images/medicine7.jpg" },
    { title: "Ophthalmic Pharmacology and Therapies", author: "Dr. R L Sharma", cut_price: 1250, price: 1050, paper: "paperback", image: "../images/medicine8.jpg" }
];

// Function to filter books based on price range
function filterBooks() {
    const minPrice = parseFloat(document.getElementById("min-price").value);
    const maxPrice = parseFloat(document.getElementById("max-price").value);

    const filteredBooks = books.filter(book => book.price >= minPrice && book.price <= maxPrice);

    displayBooks(filteredBooks);
}

// Function to display filtered books
function displayBooks(books) {
    const booksContainer = document.getElementById("books-container");
    booksContainer.innerHTML = "";

    if (books.length === 0) {
        booksContainer.innerHTML = "<p>No books found within the specified price range.</p>";
        return;
    }

    books.forEach(book => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");
        bookElement.innerHTML = `
        <div href="#" class="box">
            <img src="${book.image}" alt="${book.title}" class="image">
            <h2 class="name">${book.title}</h2>
            <h4 class="color"> ${book.author}</h4>
            <h3><span class="cut">₹${book.cut_price}</span>&nbsp;
            <span><strong>Price:</strong> ₹${book.price}</span></h3>
            <h4 class="color">${book.paper}</h4>
            <a href="#" class="last_cart">
                <h3>Add To Cart</h3>
                <div class="stars">
                    <svg class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    <svg class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    <svg class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    <svg class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    <svg class="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z"/></svg> 
                </div>
            </a>
        </div>

        `;
        booksContainer.appendChild(bookElement);
    });
}


// autocomplete search

$(document).ready(function() {
    var data = [
        {label: 'art & photography', value: 'art_&_photography'},
        {label: 'Biographies & Memoirs', value: 'Biographies_&_Memoirs'},
        {label: 'Dictionaries & Language', value: 'Dictionaries_&_Language'},
        {label: 'Fiction', value: 'Fiction'},
        {label: 'Society', value: 'Society'},
        {label: 'law', value: 'law'},
        {label: 'medicine', value: 'medicine'},
        {label: 'new arrivals', value: 'new_arrivals'},
        {label: 'box sets', value: 'box_sets'},
        {label: 'best seller', value: 'best_seller'},
        {label: 'fiction books', value: 'fiction_books'},
        {label: 'award winners', value: 'award_winning'},
        {label: 'featured authors', value: 'featured_authors'},
        {label: 'todays deals', value: 'todays_deals'}
    ];
    

    $("input#autocomplete").autocomplete({
        source: data,
        focus: function (event, ui) {
            $(event.target).val(ui.item.label);
            return false;
        },
        select: function (event, ui) {
            $(event.target).val(ui.item.label);
            var url = '/' + ui.item.value.replace(/ /g, '_');
            window.location.href = url;
            return false;
        }
    });
    $("#searchButton").on("click", function() {
        var searchValue = $("#autocomplete").val();
        var url = '/' + searchValue.replace(/ /g, '_');
        window.location.href = url;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var addToCartButtons = document.querySelectorAll(".last_cart");

    addToCartButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            var cartCountElement = document.querySelector(".cart_number");
            var currentCount = parseInt(cartCountElement.value) || 0;
            cartCountElement.value = currentCount + 1;
        });
    });
});


//cart

$(document).ready(function(){
    $(".cart").click(function(){
        $("#cartbox").toggle()
    });
});



$(document).ready(function(){
    // Function to update the total price
    function updateTotalPrice() {
        var totalPrice = 0;
        var itemCount = 0; // Initialize itemCount variable
        
        // Loop through each item in the cart
        $(".cartside").each(function() {
            var quantity = parseInt($(this).find('.cartquantity').val());
            var defaultPrice = parseFloat($(this).data('default-price'));
            // Calculate the total price for this item
            var totalItemPrice = defaultPrice * quantity; // Use the default price
            // Update the displayed price for this item
            $(this).find('.price').text('₹' + totalItemPrice.toFixed(2));
            // Add the total price for this item to the overall total
            totalPrice += totalItemPrice;
            itemCount += quantity; // Increment itemCount by quantity
        });
    
        // Update the total price in the cart
        $(".itemtotal").text('₹' + totalPrice.toFixed(2)); // Format the total price with two decimal places and add currency symbol
        // Update the cart count
        $(".cart_number").val(itemCount);
    }

    // Function to handle the click event on the "Add to Cart" button
    $(".last_cart").click(function(){
        // Find the closest parent element with class "box"
        var bookDetails = $(this).closest('.box');
        
        // Extract book details from the selected book element
        var bookName = bookDetails.find('.name').text();
        var bookAuthor = bookDetails.find('.authorname').text();
        var defaultPrice = parseFloat(bookDetails.find('h3 span:last-child').text().replace('₹', '')); // Get the default price
        var bookImage = bookDetails.find('.image').attr('src'); // Get the image source
        
        // Construct the HTML for the new book details
        var newBookHtml = `
            <div class="cartside" data-default-price="${defaultPrice}">
                <img src="${bookImage}"> <!-- Display the book image -->
                <div class="cartdetails">
                    <h3 class="bookname">${bookName}</h3>
                    <h4 class="bookauthor">${bookAuthor}</h4>
                    <div class="symbolside">
                        <button class="symbol add"><span class="material-symbols-outlined sym">add</span></button>
                        <input type="number" value="1" min="1" class="cartquantity">
                        <button class="symbol remove"><span class="material-symbols-outlined sym">remove</span></button>
                    </div>
                </div>
                <div>
                    <h2 class="price">₹${defaultPrice.toFixed(2)}</h2> <!-- Display the book price -->
                    <button class="cartdelete">DELETE</button>
                </div>
            </div>
        `;
        
        // Append the new book details to the cartbox
        $("#cartbox").append(newBookHtml);
        
        // Show the cartbox
        $("#cartbox").show();
        
        // Update the total price
        updateTotalPrice();
    });

    // Function to handle the click event on the "Delete" button for each book
    $(document).on('click', '.cartdelete', function(){
        // Find the closest parent element with class "cartside"
        $(this).closest('.cartside').remove();
        
        // Update the total price
        updateTotalPrice();
    });

    // Function to handle the click event on the "add" and "remove" buttons for each item
    $(document).on('click', '.symbol.add', function(){
        var quantityInput = $(this).closest('.cartside').find('.cartquantity');
        var currentQuantity = parseInt(quantityInput.val());
        quantityInput.val(currentQuantity + 1);
        updateTotalPrice(); // Update total price
    });

    $(document).on('click', '.symbol.remove', function(){
        var quantityInput = $(this).closest('.cartside').find('.cartquantity');
        var currentQuantity = parseInt(quantityInput.val());
        if (currentQuantity > 1) {
            quantityInput.val(currentQuantity - 1);
            updateTotalPrice(); // Update total price
        } else {
            // Remove the item if the quantity becomes 0
            $(this).closest('.cartside').remove();
            updateTotalPrice(); // Update total price
        }
    });
    
    $(document).on('change', '.cartquantity', function(){
        updateTotalPrice(); // Update total price
    });
});