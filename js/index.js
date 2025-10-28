let slide_index = 0
let slide_play = true
let slides = document.querySelectorAll('.slide')

hideAllSlides = () => {
    slides.forEach(element => {
        element.classList.remove('active')
    })
}

showSlide = () => {
    hideAllSlides()
    slides[slide_index].classList.add('active')
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1

prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1

document.querySelector('.slider').addEventListener('mouseover', () => slide_play = false)


document.querySelector('.slider').addEventListener('mouseleave', () => slide_play = true)


document.querySelector('.slide-next').addEventListener('click', () => {
    nextSlide()
    showSlide()
})

document.querySelector('.slide-prev').addEventListener('click', () => {
    prevSlide()
    showSlide()
})


// The variable 'e' in 'slides.forEach(e => { ... })' was changed to 'element' for clearer English readability,
// although 'e' is a common convention for 'element' or 'event'.
// Also changed 'e' to 'product' in 'products.forEach(e => { ... })' for clarity.

let products = [
    {
        name: 'Iphone 14',
        image1: './images/ip14-1.png',
        image2: './images/ip14.png',
        // UGX prices
        old_price: '3,500,000',
        curr_price: '3,000,000'
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
        name: 'Iphone 14 Pro max',
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
        name: 'MacBook Air 2023',
        image1: './images/macAir.png',
        image2: './images/angle-1.png', // Replaced 'goc-1.png'
        // UGX prices
        old_price: '5,000,000',
        curr_price: '4,500,000'
    },
    {
        name: 'Iphone X ',
        image1: './images/x.png',
        image2: './images/side-x.png', // Replaced 'canh-x.png'
        // UGX prices
        old_price: '2,000,000',
        curr_price: '1,500,000'
    },
    
]

let product_list = document.querySelector('#latest-products')
let best_product_list = document.querySelector('#best-products')

products.forEach(product => {
    let prod = `
        <div class="col-3 col-md-6 col-sm-12">
            <div class="product-card">
                <div class="product-card-img">
                    <img src="${product.image1}" alt="">
                    <img src="${product.image2}" alt="">
                </div>
                <div class="product-card-info">
                    <div class="product-btn">
                        <button class="btn-flat btn-hover btn-shop-now">shop now</button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-cart-add'></i>
                        </button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-heart'></i>
                        </button>
                    </div>
                    <div class="product-card-name">
                        ${product.name}
                    </div>
                    <div class="product-card-price">
                        <span><del>UGX ${product.old_price}</del></span>
                        <span class="curr-price">UGX ${product.curr_price}</span>
                    </div>
                </div>
            </div>
        </div>
    `

    product_list.insertAdjacentHTML("beforeend", prod)
    best_product_list.insertAdjacentHTML("afterbegin", prod)
})