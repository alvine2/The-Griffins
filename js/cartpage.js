const product = [
    {
        id: 0,
        image: 'images/14-1.png',
        title: 'Iphone 14 Pro Max',
        // Example realistic UGX price
        price: 4125000, 
    },
    {
        id: 1,
        image: 'images/macAir.png',
        title: 'Macbook Air',
        // Example realistic UGX price
        price: 4500000,
    },
];

// This part seems redundant if you just want all products, but it works to process the array.
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;

// Render products to the root element
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>UGX ${price.toLocaleString('en-US')}</h2>`+ 
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    // Ensure the original price (number) is pushed
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;

    if(cart.length == 0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        // Display total as UGX 0
        document.getElementById("total").innerHTML = "UGX 0";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total = total + price;
            
            // Display total in UGX (formatted with commas)
            document.getElementById("total").innerHTML = "UGX " + total.toLocaleString('en-US');

            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>UGX ${price.toLocaleString('en-US')}</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}