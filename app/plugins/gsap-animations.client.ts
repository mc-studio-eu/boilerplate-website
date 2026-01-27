import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger)

    nuxtApp.hook('page:finish', () => {
        // Wait for DOM to be ready
        setTimeout(() => {
            const sectionTitles = document.querySelectorAll('.section-title')

            sectionTitles.forEach((el) => {
                // Set initial state
                gsap.set(el, {
                    opacity: 0,
                    filter: 'blur(20px)',
                    y: 20
                })

                // Animate when in view
                gsap.to(el, {
                    opacity: 1,
                    filter: 'blur(0px)',
                    y: 0,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                })
            })
        }, 100)
    })
})
