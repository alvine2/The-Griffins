let products = [
    {
        name: 'MacBook Air 2023',
        image1: './images/macAir.png',
        image2: './images/goc-1.png',
        // UGX prices
        old_price: '5,000,000',
        curr_price: '4,500,000'
    },
    {
        name: 'JBL Reflect Flow TWS Headphone',
        image1: './images/jbl-1.webp',
        image2: './images/jbl-2.png',
        // UGX prices
        old_price: '500,000',
        curr_price: '375,000'
    },
    {
        name: 'JBL TUNE 750BTNC',
        image1: './images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png',
        image2: './images/JBL_E55BT_KEY_RED_6063_FS_x1-1605x1605px.webp',
        // UGX prices
        old_price: '700,000',
        curr_price: '560,000'
    },
    {
        name: 'Iphone 14 Pro Max',
        image1: './images/14-1.png',
        image2: './images/14-p.png',
        // UGX prices
        old_price: '4,500,000',
        curr_price: '4,125,000'
    },
    {
        name: 'JBL Tune 220TWS',
        image1: './images/JBL_TUNE220TWS_ProductImage_Pink_ChargingCaseOpen.png',
        image2: './images/JBL_TUNE220TWS_ProductImage_Pink_Back.png',
        // UGX prices
        old_price: '350,000',
        curr_price: '300,000'
    },
    {
        name: 'Iphone X',
        image1: './images/x.png',
        image2: './images/canh-x.png',
        // UGX prices
        old_price: '2,000,000',
        curr_price: '1,500,000'
    },
    {
        name: 'Iphone 14',
        image1: './images/ip14-1.png',
        image2: './images/ip14.png',
        // UGX prices
        old_price: '3,500,000',
        curr_price: '3,000,000'
    },
    {
        name: 'JBL Quatum 400',
        image1: './images/JBL_Quantum_400_Product Image_Hero 02.png',
        image2: './images/JBL_Quantum_400_Product Image_Hero Mic Up.webp',
        // UGX prices
        old_price: '450,000',
        curr_price: '350,000'
    },
]

let product_list = document.querySelector('#products')

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
        product_list.insertAdjacentHTML("beforeend", prod)
    })
}

// Call renderProducts twice (as in your original code)
renderProducts(products)
renderProducts(products)

let filter_col = document.querySelector('#filter-col')

document.querySelector('#filter-toggle').addEventListener('click', () => filter_col.classList.toggle('active'))

document.querySelector('#filter-close').addEventListener('click', () => filter_col.classList.toggle('active'))