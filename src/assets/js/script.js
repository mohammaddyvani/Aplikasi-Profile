$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar-port').addClass("sticky");
        } else {
            $('.navbar-port').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({
            scrollTop: 0
        });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar-port .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar-port .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["College Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["College Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

function threeD() {
    const canvas3D = document.getElementById('threeDimension');
    console.log(canvas3D)
    const scene3D = new THREE.Scene();
    const camera3D = new THREE.PerspectiveCamera(20, 500 / 500, 0.1, 10);
    const renderer3D = new THREE.WebGLRenderer({
        antialias: true
    });

    renderer3D.setSize(450, 450);
    renderer3D.setClearColor('white');
    canvas3D.appendChild(renderer3D.domElement);

    camera3D.position.z = 5;

    const geometry = new THREE.BoxGeometry(1, 1, 1);

    const image = new THREE.TextureLoader().load('https://i.ibb.co/9qSxqYH/img2.jpg');
    const image2 = new THREE.TextureLoader().load('https://i.ibb.co/bPbMkMd/Logo-Biru.jpg');

    const matArray = [
        new THREE.MeshBasicMaterial({
            map: image2
        }), //Kanan
        new THREE.MeshBasicMaterial({
            map: image2
        }), //Kiri
        new THREE.MeshBasicMaterial({
            map: image2
        }), //Atas
        new THREE.MeshBasicMaterial({
            map: image
        }), //Bawah
        new THREE.MeshBasicMaterial({
            map: image
        }), //Depan
        new THREE.MeshBasicMaterial({
            map: image
        }), //Belakang
    ];

    let mesh = new THREE.Mesh(geometry, matArray);
    scene3D.add(mesh);

    window.addEventListener('resize', function () {
        renderer3D.setSize(400, 400);
        camera3D.aspect = 400 / 400;
        camera3D.updateProjectionMatrix();
    });

    function update() {
        mesh.rotation.y += 0.01;

        requestAnimationFrame(update);
        renderer3D.render(scene3D, camera3D);
    }

    update();
}

function twoD() {
    var canvas2D = document.getElementById('twoDimension');
    canvas2D.width = 500;
    canvas2D.height = 500;
    var ctx = canvas2D.getContext('2d');

    //Pembuatan Kepala
    function drawHead() {
        ctx.save()
        ctx.beginPath()
        ctx.ellipse(canvas2D.width / 2, canvas2D.height / 2, 165, 140, 0, 0, 2 * Math.PI, false)
        ctx.fillStyle = '#D1D1D1'
        ctx.fill()
        ctx.closePath()

        ctx.globalCompositeOperation = 'source-atop'

        ctx.beginPath()
        ctx.ellipse(canvas2D.width / 2, 130, 20, 45, 0, 0, 2 * Math.PI, false)
        ctx.fillStyle = "#C0A080"
        ctx.fill()
        ctx.closePath()

        ctx.globalCompositeOperation = 'source-atop'

        ctx.beginPath()
        ctx.ellipse(205, 130, 15, 40, 0, 0, 2 * Math.PI, false)
        ctx.fillStyle = "#C0A080"
        ctx.fill()
        ctx.closePath()

        ctx.globalCompositeOperation = 'source-atop'

        ctx.beginPath()
        ctx.ellipse(295, 130, 15, 40, 0, 0, 2 * Math.PI, false)
        ctx.fillStyle = "#C0A080"
        ctx.fill()
        ctx.closePath()

        ctx.globalCompositeOperation = 'source-atop'

        ctx.beginPath()
        ctx.ellipse(410, canvas2D.height / 2, 40, 15, 0, 0, 2 * Math.PI, false)
        ctx.fillStyle = "#C0A080"
        ctx.fill()
        ctx.closePath()

        ctx.globalCompositeOperation = 'source-atop'

        ctx.beginPath()
        ctx.ellipse(410, 300, 70, 15, 0, 0, 2 * Math.PI, false)
        ctx.fillStyle = "#C0A080"
        ctx.fill()
        ctx.closePath()

        ctx.globalCompositeOperation = 'source-atop'

        ctx.beginPath()
        ctx.ellipse(100, 270, 70, 18, 0, 0, 2 * Math.PI, false)
        ctx.fillStyle = "#C0A080"
        ctx.fill()
        ctx.closePath()

        ctx.globalCompositeOperation = 'source-atop'

        ctx.beginPath()
        ctx.ellipse(100, 350, 70, 25, 0, 0, 2 * Math.PI, false)
        ctx.fillStyle = "#C0A080"
        ctx.fill()
        ctx.closePath()
    }


    //Pembuatan Telinga
    function drawEar() {
        ctx.save()
        ctx.beginPath()
        ctx.moveTo(110, 180)
        ctx.quadraticCurveTo(115, 10, 200, 150)
        ctx.fillStyle = "#D1D1D1"
        ctx.fill()
        ctx.closePath()

        ctx.save()
        ctx.scale(0.75, 0.7)
        ctx.translate(20, 30)
        ctx.beginPath()
        ctx.moveTo(155, 196)
        ctx.quadraticCurveTo(150, 90, 200, 155)
        ctx.fillStyle = "#C0A080"
        ctx.fill()
        ctx.closePath()
        ctx.restore()


        ctx.translate(540, -25)
        ctx.scale(-1, 1)
        ctx.beginPath()
        ctx.moveTo(160, 220)
        ctx.quadraticCurveTo(130, 50, 220, 150)
        ctx.fillStyle = "#D1D1D1"
        ctx.fill()
        ctx.closePath()

        ctx.save()
        ctx.scale(0.75, 0.7)
        ctx.translate(70, 70)
        ctx.beginPath()
        ctx.moveTo(160, 196)
        ctx.quadraticCurveTo(145, 85, 200, 150)
        ctx.fillStyle = "#C0A080"
        ctx.fill()
        ctx.closePath()
        ctx.restore()
        ctx.restore()
    }

    //Pembuatan Mata
    function drawEyes() {
        ctx.save()
        ctx.beginPath()
        ctx.arc(205, 250, 13, 0, 2 * Math.PI, false)
        ctx.fillStyle = "black"
        ctx.fill()
        ctx.closePath()

        ctx.save()
        ctx.beginPath()
        ctx.arc(208, 250, 3, 0, 2 * Math.PI, false)
        ctx.fillStyle = "#ffffff"
        ctx.fill()
        ctx.restore()

        ctx.translate(90, 0)
        ctx.beginPath()
        ctx.arc(210, 250, 13, 0, 2 * Math.PI, false)
        ctx.fillStyle = "black"
        ctx.fill()
        ctx.closePath()

        ctx.beginPath()
        ctx.arc(208, 250, 3, 0, 2 * Math.PI, false)
        ctx.fillStyle = "#ffffff"
        ctx.fill()
    }


    //Pembuatan Hidung
    function drawNose() {
        ctx.save()
        ctx.beginPath()
        ctx.arc(160, 280, 20, 0, Math.PI, false)
        ctx.fillStyle = '#B20600'
        ctx.fill()
        ctx.closePath()
    }


    //Pembuatan Mulut
    function drawMouth() {
        ctx.lineWidth = 3
        ctx.strokeStyle = 'black'
        ctx.beginPath()
        ctx.moveTo(160, 300)
        ctx.lineTo(160, 320)
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(180, 320, 20, 0, Math.PI, false)
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(140, 320, 20, 0, Math.PI, false)
        ctx.stroke()
    }
    drawEar()
    drawHead()
    drawEyes()
    drawNose()
    drawMouth()
}

function twoDC() {
    var canvas2D = document.getElementById('twoDimensionB');
    canvas2D.width = 560;
    canvas2D.height = 80;
    var ctx = canvas2D.getContext('2d');

    function bouncingCircle(x, y, r, color, right, left, top, bottom) {
        this.x = x, this.y = y, this.r = r, this.color = color, this.right = right, this.left = left, this.top = top, this.bottom = bottom;

        this.build = function () {
            ctx.fillStyle = this.color
            ctx.beginPath()
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
            ctx.fill()

            if (this.right) {
                this.x++
            }
            if (this.left) {
                this.x--
            }
            if (this.top) {
                this.y--
            }
            if (this.bottom) {
                this.y++
            }

            if (this.x + this.r > canvas2D.width) {
                this.right = false
                this.left = true
            } else if (this.x - this.r < 0) {
                this.right = true
                this.left = false
            }

            if (this.y + this.r > canvas2D.height) {
                this.top = true
                this.bottom = false
            } else if (this.y - this.r < 0) {
                this.top = false
                this.bottom = true
            }
        }
    }


    let circle1 = new bouncingCircle(100, 20, 20, 'gold', true, false, false, true)
    let circle2 = new bouncingCircle(530, 60, 20, 'red', true, false, true, false)
    let circle3 = new bouncingCircle(200, 40, 20, 'blue', false, true, false, true)
    let circle4 = new bouncingCircle(350, 10, 20, 'green', false, true, true, false)
    let circle5 = new bouncingCircle(300, 70, 20, 'black', true, false, true, false)
    let circle6 = new bouncingCircle(400, 20, 20, 'cyan', false, true, false, true)
    let circle7 = new bouncingCircle(100, 60, 25, 'purple', false, true, true, false)


    function animation() {
        ctx.save()
        ctx.clearRect(0, 0, canvas2D.width, canvas2D.height)
        ctx.globalAlpha = 0.5
        circle1.build()
        circle2.build()
        circle3.build()
        circle4.build()
        circle5.build()
        circle6.build()
        circle7.build()
        ctx.restore()
    }

    setInterval(animation, 5)
}

threeD();
twoD();
twoDC();