
$("#submit-btn").on("click", function(event) {
    event.preventDefault();


    var newCustomer = {
        customer_name: $("#customer_name").val().trim(),
        password: $("#password").val().trim(),
        email: $("#email").val().trim(),
        street: $("#street").val().trim(),
        city: $("#city").val().trim(),
        state: $("#state").val().trim(),
        zip: $("#zip").val().trim(),
        pet_name: $("#pet_name").val().trim(),
        breed: $("#breed").val().trim(),
        comments: $("#textarea1").val().trim()

    };
    $.post("api/customer", newCustomer).then(function(data) {
        console.log(data); 
        console.log(newCustomer);
    });

    //Empty each input box

    // $("#customer_name").val("");
    // $("#password").val("");
    // $("#email").val("");
    // $("#street").val("");
    // $("#city").val("");
    // $("#state").val("");
    // $("#zip").val("");
    // $("#pet_name").val("");
    // $("#breed").val("");
    // $("#textarea1").val("");
});




// "customer_name": "danielle",
//     "password": "pass",
//     "email": "dees@email.com",
//     "street": "main st",
//     "city": "newark",
//     "state": "nj",
//     "zip": "08807",
//     "pet_name": "cammie",
//     "breed": "boxer",
 
//     "comments": "na"