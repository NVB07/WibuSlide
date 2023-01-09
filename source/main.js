const raiden = document.querySelector(".raiden .slider-fade");
const xiao = document.querySelector(".xiao .slider-fade");
const yea = document.querySelector(".YaeMiko .slider-fade");
const itto = document.querySelector(".itto .slider-fade");
const ningguang = document.querySelector(".ningguang .slider-fade");
const kazuha = document.querySelector(".kazuha .slider-fade");
const app = {
    raiden: [
        "https://i.pinimg.com/564x/f3/19/40/f3194017202a880688e3611185e884fe.jpg",
        "https://i.pinimg.com/564x/ea/9f/b3/ea9fb3687d99553034cf0d6e71bcbcd1.jpg",
        "https://i.pinimg.com/564x/f8/b1/ec/f8b1ec3d66826e85753168e8f01bf4e0.jpg",
        "https://i.pinimg.com/564x/cd/d4/2f/cdd42f07ecbf329e104451703350c24e.jpg",
        "https://i.pinimg.com/564x/c9/cd/64/c9cd646e1fd3b5bca7bfd3747176e311.jpg",
        "https://i.pinimg.com/564x/97/6a/e7/976ae7edea2914efcec1fa0f685b3f58.jpg",
    ],
    xiao:[
        "https://i.pinimg.com/564x/ca/d5/ec/cad5ec35a8a2ac648c0667d85277e8c2.jpg",
        "https://i.pinimg.com/564x/85/f6/3f/85f63f3ed2d9352c2d9d54dabe9d6a3e.jpg",
        "https://i.pinimg.com/564x/05/54/1f/05541f5160a9128496d048dda7c7345a.jpg",
        "https://i.pinimg.com/564x/68/ef/ff/68efff6b72866c93637b01b575d85fb4.jpg",
        "https://i.pinimg.com/564x/72/d1/25/72d125f0b0b9e62f1d94d84a51408f99.jpg",
        "https://i.pinimg.com/564x/a5/9e/ca/a59eca86ca5c9c52a2666558e0bf8933.jpg",
    ],
    kazuha:[
        "https://i.pinimg.com/564x/c4/71/ce/c471ced4c380e734326337d6bd84be39.jpg",
        "https://i.pinimg.com/564x/dd/84/57/dd8457090f4a72fbe13b0e6feb147dc7.jpg",
        "https://i.pinimg.com/736x/c8/59/52/c859520d09bfca54fed367c431dab7b5.jpg",
        "https://i.pinimg.com/564x/78/3d/4f/783d4f85dbff09234b86b6c2da49c76f.jpg",
        "https://i.pinimg.com/564x/e8/a8/a2/e8a8a260af00145684650f020e38fb69.jpg",
        "https://i.pinimg.com/564x/37/f4/b6/37f4b6cbc569131b1115aab2020a777e.jpg",
    ],
    yea:[
        "https://i.pinimg.com/564x/57/ee/88/57ee8826ed03044d9c2d59ce559ce791.jpg",
        "https://i.pinimg.com/564x/81/a0/d6/81a0d6124c7282b3bc7bb7024d8317cf.jpg",
        "https://i.pinimg.com/564x/16/76/65/167665879cd18b0e5080ac1b0905f33a.jpg",
        "https://i.pinimg.com/564x/ae/f0/0b/aef00bbffe9a4a25863588b08595cb28.jpg",
        "https://i.pinimg.com/564x/26/89/4a/26894a10395cc7ad40a18ca3dd8af698.jpg",
        "https://i.pinimg.com/564x/52/94/14/529414718f985d33a37727a67eec9888.jpg",
    ],
    itto:[
        "https://i.pinimg.com/564x/48/57/4b/48574b9b1cdfaeb9c70501863009b7c8.jpg",
        "https://i.pinimg.com/564x/83/1b/33/831b33c0aa978e8046978fbc4e2ae437.jpg",
        "https://i.pinimg.com/564x/88/59/d5/8859d5ac6876f4f566acabf293df2c82.jpg",
        "https://i.pinimg.com/564x/0b/a2/fe/0ba2fe2070a81bacb1a19ae3c7be8197.jpg",
        "https://i.pinimg.com/736x/9f/4e/c5/9f4ec5e5f3591cda7310a8bc718f6950.jpg",
        "https://i.pinimg.com/564x/ee/48/12/ee481239b5b0db6a7304ea317d1cf078.jpg",
    ],
    ningguang:[
        "https://i.pinimg.com/564x/0b/3a/1b/0b3a1ba83b7c7557f3063f60180761a8.jpg",
        "https://i.pinimg.com/564x/be/28/89/be2889313c92fc548e7495d67120e3e1.jpg",
        "https://i.pinimg.com/564x/32/17/be/3217be9d006e167b361d789d5cab6302.jpg",
        "https://i.pinimg.com/736x/29/51/6d/29516d1062a77921c06aa5a0c5f673c8.jpg",
        "https://i.pinimg.com/564x/2c/68/cb/2c68cb3ed22dd303911a8304186052bf.jpg",
        "https://i.pinimg.com/564x/12/c4/59/12c459b7ffd79d19254608a84508598f.jpg",
    ],
    render: function(){
        //raiden
        const imgRaiden = this.raiden.map((imgRaiden) => {
            return`
                    <img src="${imgRaiden}" alt="" class="item">
                `;
        });
        raiden.innerHTML = imgRaiden.join("");
        
        //xiao
        const imgXiao = this.xiao.map((imgXiao) => {
            return`
                    <img src="${imgXiao}" alt="" class="item">
                `;
        });
        xiao.innerHTML = imgXiao.join("");
        
        //kazuha
        const imgKazuha = this.kazuha.map((imgKazuha) => {
            return`
                    <img src="${imgKazuha}" alt="" class="item">
                `;
        });
        kazuha.innerHTML = imgKazuha.join("");

        //yea
        const imgYea = this.yea.map((imgYea) => {
            return`
                    <img src="${imgYea}" alt="" class="item">
                `;
        });
        yea.innerHTML = imgYea.join("");

        //itto
        const imgItto = this.itto.map((imgItto) => {
            return`
                    <img src="${imgItto}" alt="" class="item">
                `;
        });
        itto.innerHTML = imgItto.join("");

        //ningguang
        const imgNingguang = this.ningguang.map((imgNingguang) => {
            return`
                    <img src="${imgNingguang}" alt="" class="item">
                `;
        });
        ningguang.innerHTML = imgNingguang.join("");
    },
    start: function (){
        this.render();
    }
}
app.start();
$(document).ready(function(){
    $('.slider-fade').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
    
      ]
    });
  });