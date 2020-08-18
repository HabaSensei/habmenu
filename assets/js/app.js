// ************************************************
// Shopping Cart API
// ************************************************

var shoppingCart = (function() {
  // =============================
  // Private methods and propeties
  // =============================
  cart = [];
  
  // Constructor
  function Item(id, name, price, count, extras) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.count = count;
    this.extras = extras;
  }
  
  // Save cart
  function saveCart() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
     
  }
  
    // Load cart
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  }
  if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  }
  

  // =============================
  // Public methods and propeties
  // =============================
  var obj = {};
  
  // Add to cart
  obj.addItemToCart = function(id, name, price, count, extras) {
    for(var item in cart) {
      if(cart[item].name != name) {
        cart[item].count ++;
         
        
      }
    }
    var item = new Item(id, name, price, count, extras);
    cart.push(item);
    saveCart();
  }
  // Set count from item
  obj.setCountForItem = function(id,  name, count) {
    for(var i in cart) {
      if (cart[i].name === name) {
        cart[i].count = count;
        break;
      }
    }
  };
   
  // Remove item from cart
  obj.removeItemFromCart = function(name) {
      for(var item in cart) {
        if(cart[item].name === name) {
          cart[item].count --;
          if(cart[item].count === 0) {
            cart.splice(item, 1);
          }
          break;
        }
    }
    saveCart();
  }

  // Remove all items from cart
  obj.removeItemFromCartAll = function(name) {
    for(var item in cart) {
      if(cart[item].name === name) {
        cart.splice(item, 1);
        break;
      }
    }
    saveCart();
  }

  // Clear cart
  obj.clearCart = function() {
    cart = [];
    saveCart();
  }

  // Count cart 
  obj.totalCount = function() {
    var totalCount = 0;
    for(var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  }

  // Total cart
  obj.totalCart = function() {
    var totalCart = 0;
    for(var item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(2));
  }

  // List cart
  obj.listCart = function() {
    
    var cartCopy = [];
    for(i in cart) {
      item = cart[i];
      itemCopy = {};
      for(p in item) {
        itemCopy[p] = item[p];

      }
     
      itemCopy.total = Number(item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy)
       
    }
    return cartCopy;
  }

  // cart : Array
  // Item : Object/Class
  // addItemToCart : Function
  // removeItemFromCart : Function
  // removeItemFromCartAll : Function
  // clearCart : Function
  // countCart : Function
  // totalCart : Function
  // listCart : Function
  // saveCart : Function
  // loadCart : Function
  return obj;
})();


// *****************************************
// Triggers / Events
// ***************************************** 

 
  
//   $('#mySelect').change(function () {
//     var opt = $(this).find(':selected');
//     var sel = opt.text();
//     var og = opt.closest('optgroup').attr('label');
//     //alert(sel);
//     //alert(og);

//     $(this).blur().find(':selected').text(sel + '-' + og);
    
// });

 


function myFunction(element, event)
{
  
  
var select = document.getElementById('mySelect');

var selected = [...select.options]
                    .filter(option => option.selected)
                    .map(option => option.value);

var anchor = document.getElementById("extra_necio"); 
anchor.getAttribute( 'data-extras' );
 
anchor.dataset.extras = selected; 
 
  
}
  
 

// Add item
$('.add-to-cart').click(function(event) {
  event.preventDefault();
  var id = uuid.v4();
  var name = $(this).data('name');
  var price = Number($(this).data('price'));
  var extras = $(this).data('extras');
  // var anchor = document.getElementById("extra_necio"); 
  // anchor.getAttribute( 'data-extras' );
 
  //  var extras = anchor.dataset.extras;
 
  shoppingCart.addItemToCart(id, name, price, 1, extras);
  
  displayCart();

});

// Clear items
$('.clear-cart').click(function() {
  shoppingCart.clearCart();
  displayCart();
});


function displayCart() {
  var cartArray = shoppingCart.listCart();
   
  console.log(cartArray);


  var output = "";
  for(var i in cartArray) {
    output += "<li class='cart-list-product woocommerce-mini-cart-item mini_cart_item'>"
    + "<a href='javascript:' class='float-right remove-cart delete-item remove remove_from_cart_button' data-name=" + cartArray[i].name + "><i class='fa fa-close '></i></a>"
    + "<img width='220' height='160' class='attachment-woocommerce_thumbnail size-woocommerce_thumbnail' alt='' src='./assets/upload/menu/reinapepiada.jpg' >" 
    + "<h5>" + cartArray[i].name + "</h5>"        
    + "<ul class='collapsible' style='padding-left: 0px!important;'>"    
    + "<li>"
    + "<div class='collapsible-header'><i class='material-icons'>comment</i>Selecciona </div>" 
    + "<input type='hidden' name='id'  value='"+ cartArray[i].id +"' />"
    + "<div class='collapsible-body'>"
    + "<h6><span class='fa fa-check-circle'></span><strong> Cremas</strong></h6> " 
    + "<div style='display: inline-grid;'>"          
    + "<label>"
    + "<input name='mayo' type='checkbox' />"
    + "<span>Mayonesa</span>"
    + "</label>"
    + "<label>"
    + "<input name='ketchup' type='checkbox' />"
    + "<span>Ketchup</span>"
    + "</label>"
    + "<label>"
    + "<input name='mostaza' type='checkbox' />"
    + "<span>Mostaza</span>"
    + "</label>"
    + "<label>"
    + "<input name='ocopa' type='checkbox' />"
    + "<span>Ocopa</span>"
    + "</label>"
    + "</div>"
    + "<h6><span class='fa fa-check-circle'></span><strong> Papas</strong></h6> " 
    + "<div style='display: inline-grid;'>"          
    + "<label>"
    + "<input type='checkbox' />"
    + "<span>Papas Fritas</span>"
    + "</label>"
    + "<label>"
    + "<input type='checkbox' />"
    + "<span>Papas al Hilo</span>"
    + "</label>"
    + "<label>"
    + "<input type='checkbox' />"
    + "<span>Sin Papas</span>"
    + "</label>"
    + "<h6><span class='fa fa-check-circle'></span><strong> Ensalada</strong></h6> " 
    + "<div style='display: inline-grid;'>"          
    + "<label>"
    + "<input type='checkbox' />"
    + "<span>Lechuga</span>"
    + "</label>"
    + "<label>"
    + "<input type='checkbox' />"
    + "<span>Tomate</span>"
    + "</label>"
    + "<label>"
    + "<input type='checkbox' />"
    + "<span>Sin Ensalada</span>"
    + "</label>"
    + "</div>" 
    + "</div>"
    + "</li>"
    + "</ul>"              
    + "<p class='offer-price mb-0' style='font-weight: bold; font-size: 18px; line-height: 2;'>"                 
    + "<span class='quantity'>" + cartArray[i].count + " × <span class='woocommerce-Price-amount amount'>"                 
    + "<span class='woocommerce-Price-currencySymbol'>S/ </span>" + cartArray[i].total + "</span>"                   
    + "</span>"                   
    + "</p>" 
    + "<span>Piazza Resto Bar</span>"       
    + "</li>";
  }
  $('.show-cart').html(output);
  $('.total-cart').html(shoppingCart.totalCart());
  $('.total-count').html(shoppingCart.totalCount());
  $('.collapsible').collapsible();
  cartArray.push();
   
}

// Delete item button

$('.show-cart').on("click", ".delete-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.removeItemFromCartAll(name);
  displayCart();
})


// -1
$('.show-cart').on("click", ".minus-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.removeItemFromCart(name);
  displayCart();
})
// +1
$('.show-cart').on("click", ".plus-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.addItemToCart(name);
  displayCart();
})

// Item count input
$('.show-cart').on("change", ".item-count", function(event) {
   var name = $(this).data('name');
   
   var count = Number($(this).val());
  shoppingCart.setCountForItem(name, count);
  clearData(); 
  displayCart();
});

displayCart();


$('#btn-ingresar').click(function(){
  var cartArray = shoppingCart.listCart();

 
  var array = JSON.stringify(cartArray);
  alert(cartArray);
   //alert(array);
  var url = "controller/enviar_wa.php";
  $.ajax({                        
     type: "POST",                 
     url: url,                     
     data: { array  }, 
     success: function(data)             
     {
      //  alert(data);
       $('#resp').html(data);               
     }
 });
});