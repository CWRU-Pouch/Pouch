$("#other_submit").on("click", function(){
    //    console.log("This is clicking")
       var oprice = Number($("#other_price").val().trim());
       var other_data = {
           category: "Other",
           notes: $("#other_description").val().trim(),
           price: oprice
       };


       console.log(other_data);
   });
    $("#entertainment_submit").on("click", function(){
    //    console.log("This is clicking")

       var eprice = Number($("#entertainment_price").val().trim()); 
       var entertainment_data = {
           category: "Entertainment",
            notes: $("#entertainment_description").val().trim(),
            price: eprice
       };

       console.log(entertainment_data);
   });

    $("#clothes_submit").on("click", function(){
    //    console.log("This is clicking")

       var cprice = Number($("#clothes_price").val().trim()); 
       var clothes_data = {
           category: "Clothes",
            notes: $("#clothes_description").val().trim(),
            price: cprice
       };

       console.log(clothes_data)
   });

    $("#food_submit").on("click", function(){
    //    console.log("This is clicking")

       var fprice = Number($("#food_price").val().trim()); 
       var food_data = {
           category: "Food",
            notes: $("#food_description").val().trim(),
            price: fprice
       };

       console.log(food_data)
   });

    $("#rent_submit").on("click", function(){
    //    console.log("This is clicking")

       var rprice = Number($("#rent_price").val().trim()); 
       var rent_data = {
           category: "Rent",
            notes: $("#rent_description").val().trim(),
            price: rprice
       };

       console.log(rent_data)
   });