document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.slide-intro', {
        // spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    var isPaused = false
    var pauseButton = document.createElement('button')
    pauseButton.className = 'swiper-button-pause'
    pauseButton.textContent = 'Pause'
    document.querySelector('.slide-intro').appendChild(pauseButton)

    pauseButton.addEventListener('click', function () {
        if (isPaused) {
            swiper.autoplay.start()
            pauseButton.textContent = 'Pause'
        } else {
            swiper.autoplay.stop()
            pauseButton.textContent = 'Play'
        }
        isPaused = !isPaused
    })

    var swiper = new Swiper('.slide-eft .swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
        },
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.content')
    const speed = 200 // 애니메이션 속도 조정 (높을수록 느려짐)

    const updateCount = (counter) => {
        const target = +counter.getAttribute('data-target')
        const count = +counter.innerText

        const increment = target / speed

        if (count < target) {
            counter.innerText = Math.ceil(count + increment)
            setTimeout(() => updateCount(counter), 1)
        } else {
            counter.innerText = target
        }
    }

    const resetCounters = () => {
        counters.forEach((counter) => {
            counter.innerText = '0'
        })
    }

    const animateCounters = () => {
        counters.forEach((counter) => {
            updateCount(counter)
        })
    }

    const secEft = document.querySelector('#sec-eft')
    const observerOptions = {
        root: null,
        threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                resetCounters()
                animateCounters()
            }
        })
    }, observerOptions)

    observer.observe(secEft)
})

document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger)

    // sec-head 배경 색상 변화
    gsap.to('.sec-head', {
        backgroundColor: '#01B2FF',
        scrollTrigger: {
            trigger: '.sec-head',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            onEnter: () => gsap.to('.sec-head', { backgroundColor: '#01B2FF' }),
            onLeaveBack: () => gsap.to('.sec-head', { backgroundColor: '#000000' }),
        },
    })

    gsap.to('.sec-head', {
        backgroundColor: '#333333',
        scrollTrigger: {
            trigger: '.sec-body',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
        },
    })

    // sec-body 배경 색상 변화
    gsap.to('.sec-body', {
        backgroundColor: '#FACE5B',
        scrollTrigger: {
            trigger: '.sec-body',
            start: 'top top',
            end: '20% top',
            scrub: true,
        },
    })

    gsap.to('.sec-body', {
        backgroundColor: '#08347D',
        scrollTrigger: {
            trigger: '.sec-body',
            start: '20% top',
            end: '40% top',
            scrub: true,
        },
    })

    gsap.to('.sec-body', {
        backgroundColor: '#FF7833',
        scrollTrigger: {
            trigger: '.sec-body',
            start: '40% top',
            end: '60% top',
            scrub: true,
        },
    })

    gsap.to('.sec-body', {
        backgroundColor: '#A12568',
        scrollTrigger: {
            trigger: '.sec-body',
            start: '58% top',
            end: 'bottom top',
            scrub: true,
        },
    })
})

document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger)

    // obj-airplane 요소 나타나기 설정
    gsap.from('.obj-airplane', {
        opacity: 0,
        y: 100, // 시작 위치
        duration: 1, // 애니메이션 지속 시간
        ease: 'power2.inOut', // 이징 함수 설정
        scrollTrigger: {
            trigger: '.sec-type2',
            start: 'top 80%', // 애니메이션 시작 위치
            end: 'top 50%', // 애니메이션 종료 위치
            scrub: true, // 스크롤에 따라 부드럽게 조정
            repeat: -1, // 무한 반복 설정
            onRepeat: function () {
                gsap.fromTo(
                    '.obj-airplane',
                    { opacity: 0, y: 100 },
                    { opacity: 1, y: 0, duration: 1, ease: 'power2.inOut' },
                )
            },
        },
    })

    // obj-airplane 요소 사라지기 설정
    gsap.to('.obj-airplane', {
        opacity: 0,
        y: -100, // 사라질 위치
        duration: 1, // 애니메이션 지속 시간
        ease: 'power2.inOut', // 이징 함수 설정
        scrollTrigger: {
            trigger: '.sec-type2',
            start: 'bottom 80%', // 애니메이션 시작 위치
            end: 'bottom 50%', // 애니메이션 종료 위치
            scrub: true, // 스크롤에 따라 부드럽게 조정
            repeat: -1, // 무한 반복 설정
            onRepeat: function () {
                gsap.fromTo(
                    '.obj-airplane',
                    { opacity: 1, y: 0 },
                    { opacity: 0, y: -100, duration: 1, ease: 'power2.inOut' },
                )
            },
        },
    })

    // picture 요소 스케일 애니메이션 설정
    const dataItems = gsap.utils.toArray('.data-item')
    dataItems.forEach((item, index) => {
        gsap.to(item.querySelector('.picture'), {
            scale: 1.8, // 확대할 스케일 값
            scrollTrigger: {
                trigger: item,
                start: 'top 80%', // 애니메이션 시작 위치
                end: 'top 70%', // 애니메이션 종료 위치
                scrub: true, // 스크롤에 따라 부드럽게 조정
                onEnter: () => {
                    gsap.to(item.querySelector('.picture'), {
                        scale: 1.8,
                        duration: 0.5,
                        ease: 'power2.inOut',
                    })
                },
                onLeaveBack: () => {
                    gsap.to(item.querySelector('.picture'), {
                        scale: 1,
                        duration: 0.5,
                        ease: 'power2.inOut',
                    })
                },
            },
        })
    })
})
