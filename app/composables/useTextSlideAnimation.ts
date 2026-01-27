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

    const getElement = (ref: any): HTMLElement | null => {
        if (!ref) return null
        // Handle Vue component instances
        if (ref.$el) return ref.$el
        // Handle template refs that are components
        if (ref.value && ref.value.$el) return ref.value.$el
        // Handle direct DOM elements
        if (ref instanceof HTMLElement) return ref
        return ref
    }

    const setupAnimation = () => {
        const btnRef = buttonRef.value
        const btn = getElement(btnRef)

        const wrappers = Array.isArray(wrapperRefs)
            ? wrapperRefs.map(r => r.value).filter(Boolean)
            : [wrapperRefs.value].filter(Boolean)

        if (btn && wrappers.length > 0) {
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
        // Try with a small delay to ensure component is fully mounted
        setTimeout(() => {
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
                    { immediate: true }
                )
            }
        }, 100)
    })
}
