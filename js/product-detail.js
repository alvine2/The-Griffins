// Functionality for changing the main product image when a thumbnail is clicked
document.querySelectorAll('.product-img-item').forEach(e => {
    e.addEventListener('click', () => {
        let img = e.querySelector('img').getAttribute('src')
        document.querySelector('#product-img > img').setAttribute('src', img)
    })
})

// Functionality for toggling 'view all/view less' on the product description
document.querySelector('#view-all-description').addEventListener('click', () => {
    let content = document.querySelector('.product-detail-description-content')
    content.classList.toggle('active')
    document.querySelector('#view-all-description').innerHTML = content.classList.contains('active') ? 'view less' : 'view all'
})

// Product Data Array with realistic UGX prices (using commas as thousands separators)
let products = [
    {
        name: 'Iphone 14',
        image1: './images/ip14-1.png',
        image2: './images/ip14.png',
        // Example UGX prices
        old_price: '3,500,000',
        curr_price: '3,000,000'
    },
    {
        name: 'JBL Reflect Flow TWS Headphone',
        image1: './images/jbl-1.webp',
        image2: './images/jbl-2.png',
        // Example UGX prices
        old_price: '500,000',
        curr_price: '375,000'
    },
    {
        name: 'JBL TUNE 750BTNC',
        image1: './images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png',
        image2: './images/JBL_E55BT_KEY_RED_6063_FS_x1-1605x1605px.webp',
        // Example UGX prices
        old_price: '700,000',
        curr_price: '560,000'
    },
    {
        name: 'Iphone 14 Pro max',
        image1: './images/14-1.png',
        image2: './images/14-p.png',
        // Example UGX prices
        old_price: '4,500,000',
        curr_price: '4,125,000'
    },
    {
        name: 'JBL Tune 220TWS',
        image1: './images/JBL_TUNE220TWS_ProductImage_Pink_ChargingCaseOpen.png',
        image2: './images/JBL_TUNE220TWS_ProductImage_Pink_Back.png',
        // Example UGX prices
        old_price: '350,000',
        curr_price: '300,000'
    },
    {
        name: 'MacBook Air 2023',
        image1: './images/macAir.png',
        image2: './images/goc-1.png',
        // Example UGX prices
        old_price: '5,000,000',
        curr_price: '4,500,000'
    },
]

// Get the container where the products will be displayed
let product_list = document.querySelector('#related-products')

// Function to render products into the HTML
renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
            <div class="col-4 col-md-6 col-sm-12">
                <div class="product-card">
                    <div class="product-card-img">
                        <img src="${e.image1}" alt="">
                        <img src="${e.image2}" alt="">
                    </div>
                    <div class="product-card-info">
                        <div class="product-btn">
                            <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">shop now</a>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-cart-add'></i>
                            </button>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-heart'></i>
                            </button>
                        </div>
                        <div class="product-card-name">
                            ${e.name}
                        </div>
                        <div class="product-card-price">
                            <span><del>UGX ${e.old_price}</del></span>
                            <span class="curr-price">UGX ${e.curr_price}</span>
                        </div>
                    </div>
                </div>
            </div>
        `
        // Insert the product HTML into the container
        product_list.insertAdjacentHTML("beforeend", prod)
    })
}

// Call the function to render the products on page load
renderProducts(products)