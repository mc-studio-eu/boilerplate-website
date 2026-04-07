export const useTitleReveal = (options?: { start?: string }) => {
  const containerRef = ref<HTMLElement | null>(null)
  const eyebrowRef = ref<HTMLElement | null>(null)
  const titleRef = ref<HTMLElement | null>(null)
  const descriptionRef = ref<HTMLElement | null>(null)
  let tween: { kill: () => void; scrollTrigger?: { kill: () => void } } | null = null

  onMounted(async () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger')
    ])

    gsap.registerPlugin(ScrollTrigger)

    const items = [eyebrowRef.value, titleRef.value, descriptionRef.value].filter(Boolean)
    if (!items.length) return

    gsap.set(items, {
      opacity: 0,
      y: 28,
      filter: 'blur(10px)'
    })

    tween = gsap.to(items, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1.05,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.value || titleRef.value,
        start: options?.start || 'top 84%',
        once: true
      }
    })

  })

  onUnmounted(() => {
    tween?.scrollTrigger?.kill()
    tween?.kill()
  })

  return {
    containerRef,
    eyebrowRef,
    titleRef,
    descriptionRef
  }
}
