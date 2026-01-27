import gsap from 'gsap'
import type { Ref } from 'vue'

export interface TextSlideOptions {
    duration?: number
    ease?: string
    stagger?: number
}

export function useTextSlideAnimation(
    buttonRef: Ref<HTMLElement | { $el: HTMLElement } | null>,
    wrapperRefs: Ref<HTMLElement | null>[] | Ref<HTMLElement | null>,
    options: TextSlideOptions = {}
) {
    const { duration = 0.35, ease = 'power2.inOut', stagger = 0.05 } = options

    const setupAnimation = () => {
        // Handle both DOM elements and Vue component instances (like NuxtLink)
        const btnRef = buttonRef.value
        const btn = btnRef && '$el' in btnRef ? btnRef.$el : btnRef

        const wrappers = Array.isArray(wrapperRefs)
            ? wrapperRefs.map(r => r.value).filter(Boolean)
            : [wrapperRefs.value].filter(Boolean)

        if (btn && wrappers.length > 0) {
            // Remove existing listeners to avoid duplicates
            const enterHandler = () => {
                gsap.to(wrappers, {
                    yPercent: -50,
                    duration,
                    ease,
                    stagger: wrappers.length > 1 ? stagger : 0
                })
            }

            const leaveHandler = () => {
                gsap.to(wrappers, {
                    yPercent: 0,
                    duration,
                    ease,
                    stagger: wrappers.length > 1 ? stagger : 0
                })
            }

            btn.addEventListener('mouseenter', enterHandler)
            btn.addEventListener('mouseleave', leaveHandler)

            return true
        }
        return false
    }

    onMounted(() => {
        // Try immediately
        if (!setupAnimation()) {
            // If not ready, watch for changes
            const stopWatch = watch(
                () => buttonRef.value,
                () => {
                    nextTick(() => {
                        if (setupAnimation()) {
                            stopWatch()
                        }
                    })
                },
                { immediate: false }
            )
        }
    })
}
