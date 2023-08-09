  var productCount = document.getElementById("productCount");
        var addBtnPry = document.querySelectorAll(".a-addBtnPry");
        var removeBtnPry = document.querySelectorAll(".a-remvPry");
        var counter = 0;
        console.log("counter outside:", counter)


        addBtnPry.forEach((userCart) => {
            userCart.addEventListener('click', function(){
                counter += 1;
                console.log("counter:", counter)
                localStorage.setItem("cart", counter)
            })
        })
        

        removeBtnPry.forEach((userCart) => {
            userCart.addEventListener('click', function(){
                counter -= 1;
                localStorage.setItem("cart", counter)
            })
        })
        // console.log("productCount.innerHTML", productCount.innerHTML)

        // productCount.innerHTML = localStorage.getItem('cart');
        

        // let data2 = JSON.parse(window.localStorage.getItem('cart'));
        // console.log("cart:", data2);
        // // productCount.style.display = "block";
        // productCount.innerHTML = data2;

        async function logProductItem() {
            const response = await fetch("https://dummyjson.com/products");
            const productItem = await response.json();
            console.log("productItem.produtc", productItem.products[0].description);

            var currentProd = productItem.products[0];

            var decs = document.getElementById("desc");
            var disOff = document.getElementById("disOff");
            var price = document.getElementById("price");
            var carouselImgId = document.getElementById("carouselImgId");

            decs.innerHTML = currentProd.description;
            disOff.innerHTML = currentProd.discountPercentage;
            price.innerHTML = currentProd.price;

            var images = "";
            var dotsImg = "";
            var dotsIndex = 0;
            var productCarousel = document.getElementById("productCarousel");
            var productDot = document.getElementById("productDot");

            for(var image of currentProd.images){
                console.log(image, "o=iamge")
                images += `<amp-img src="${image}" width="360" height="480" layout="intrinsic"></amp-img>`;
                dotsImg += `<div option="${dotsIndex}" ${dotsIndex == 0 ?"selected"  : ""}><span class="a-dot"></span></div>`;
                dotsIndex ++; 
            }

            console.log(currentProd.images[0], "vyhujiokl");
            productCarousel.innerHTML = images[0];
            // carouselImgId.innerHTML = `
            // <div class="a-prdCrlS">
            //         <amp-carousel class="a-prdCrl" id="productCarousel" width="360" height="300" layout="intrinsic" type="slides" controls loop on="slideChange:productDot.toggle(index=event.index, value=true)">
            //             ${images} </amp-carousel>
            //     </div>
            //     <div>
            //         <amp-selector layout="container" class="a-prdCrl-Dot" id="productDot" on="select:productCarousel.goToSlide(index=event.targetOption)">
            //             ${dotsImg}
            //         </amp-selector>
            //     </div>
            
            // `
        



        }

        logProductItem();

        
