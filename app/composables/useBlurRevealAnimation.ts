import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export interface BlurRevealOptions {
    blur?: number
    y?: number
    duration?: number
    delay?: number
    ease?: string
}

export function useBlurRevealAnimation(
    selector: string,
    options: BlurRevealOptions = {}
) {
    const {
        blur = 20,
        y = 20,
        duration = 1,
        delay = 0,
        ease = 'power2.out'
    } = options

    onMounted(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger)

        const elements = document.querySelectorAll(selector)

        elements.forEach((el) => {
            gsap.fromTo(el,
                {
                    opacity: 0,
                    filter: `blur(${blur}px)`,
                    y: y
                },
                {
                    opacity: 1,
                    filter: 'blur(0px)',
                    y: 0,
                    duration,
                    delay,
                    ease,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                }
            )
        })
    })
}
