// =====================================================
// MARKET UPDATE HARGA CABAI
// SLIDER + CATEGORY + DOT PAGINATION
// =====================================================


function initMarketSliderCabe() {


    const slider =
        document.getElementById("marketSliderCabe");


    const dotsContainer =
        document.getElementById("marketDotsCabe");


    const categoryButtons =
        document.querySelectorAll(
            ".market-category button[data-category-cabe]"
        );



    if (!slider || !dotsContainer) {

        return;

    }




    let allCards = [
        ...slider.querySelectorAll(".market-item")
    ];



    let activeCards = [
        ...allCards
    ];






    // =====================================================
    // BUAT DOT PAGINATION
    // =====================================================


    function createDots() {


        dotsContainer.innerHTML = "";


        let totalPages =
            Math.ceil(
                activeCards.length / 3
            );



        for (let i = 0; i < totalPages; i++) {


            let dot =
                document.createElement("span");



            dot.classList.add(
                "market-dot"
            );



            if (i === 0) {


                dot.classList.add(
                    "active"
                );


            }



            dot.addEventListener(
                "click",
                () => {


                    slider.scrollTo({

                        left:
                            i * slider.clientWidth,

                        behavior:
                            "smooth"

                    });


                    updateDots(i);


                }
            );



            dotsContainer.appendChild(dot);


        }


    }









    // =====================================================
    // UPDATE DOT AKTIF
    // =====================================================


    function updateDots(index) {


        const dots =
            dotsContainer.querySelectorAll(
                ".market-dot"
            );



        dots.forEach(dot => {


            dot.classList.remove(
                "active"
            );


        });



        if (dots[index]) {


            dots[index].classList.add(
                "active"
            );


        }


    }








    // =====================================================
    // SAAT SLIDER BERGESER
    // =====================================================


    slider.addEventListener(
        "scroll",
        () => {


            let page =
                Math.round(

                    slider.scrollLeft /
                    slider.clientWidth

                );



            updateDots(page);



        }
    );










    // =====================================================
    // FILTER CATEGORY CABAI
    // =====================================================


    categoryButtons.forEach(button => {


        button.addEventListener(
            "click",
            () => {


                categoryButtons.forEach(btn => {


                    btn.classList.remove(
                        "active"
                    );


                });




                button.classList.add(
                    "active"
                );




                let category =
                    button.dataset.categoryCabe;




                activeCards = [];





                allCards.forEach(card => {


                    if (
                        category === "all" ||
                        card.classList.contains(category)

                    ) {


                        card.style.display =
                            "flex";


                        activeCards.push(
                            card
                        );


                    }


                    else {


                        card.style.display =
                            "none";


                    }


                });





                slider.scrollLeft = 0;



                createDots();



            }
        );


    });










    // =====================================================
    // DRAG MOUSE DESKTOP
    // =====================================================


    let isDown = false;

    let startX;

    let scrollLeft;



    slider.addEventListener(
        "mousedown",
        (e) => {


            isDown = true;


            slider.style.cursor =
                "grabbing";



            startX =
                e.pageX -
                slider.offsetLeft;



            scrollLeft =
                slider.scrollLeft;


        }
    );






    slider.addEventListener(
        "mouseup",
        () => {


            isDown = false;


            slider.style.cursor =
                "grab";


        }
    );





    slider.addEventListener(
        "mouseleave",
        () => {


            isDown = false;


        }
    );






    slider.addEventListener(
        "mousemove",
        (e) => {


            if (!isDown)
                return;



            e.preventDefault();



            let x =
                e.pageX -
                slider.offsetLeft;



            let walk =
                (x - startX) * 1.5;



            slider.scrollLeft =
                scrollLeft - walk;



        }
    );









    // =====================================================
    // SWIPE MOBILE
    // =====================================================


    let touchStart = 0;



    slider.addEventListener(
        "touchstart",
        (e) => {


            touchStart =
                e.touches[0].clientX;



        },
        {
            passive: true
        }
    );





    slider.addEventListener(
        "touchend",
        (e) => {


            let touchEnd =
                e.changedTouches[0].clientX;



            let distance =
                touchStart - touchEnd;




            if (distance > 50) {


                slider.scrollBy({

                    left: 300,

                    behavior: "smooth"

                });


            }





            if (distance < -50) {


                slider.scrollBy({

                    left: -300,

                    behavior: "smooth"

                });


            }



        }
    );








    // jalankan awal

    createDots();



}






// =====================================================
// AKTIF SETELAH INCLUDE.HTML SELESAI
// =====================================================


document.addEventListener(
    "componentsLoaded",
    () => {


        if (window.initMarketSliderCabe) {


            initMarketSliderCabe();


        }


    }
);



window.initMarketSliderCabe =
    initMarketSliderCabe;