<script setup lang="ts">
const isMenuOpen = ref(false)
const isScrolled = ref(false)

// Detect scroll position
onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 200
  }
  
  window.addEventListener('scroll', handleScroll)
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <!-- Header (Top Navbar - visible in hero) -->
  <header class="navbar">
    <!-- Logo -->
    <div class="logo-block">
      <NuxtLink to="/" class="flex items-center">
        <NuxtImg src="/img/main/logo.svg" alt="MC Studio" class="logo-img" />
      </NuxtLink>
      <span class="logo-text">Studio</span>
    </div>

    <!-- Nav desktop -->
    <nav class="nav-links desktop-only">
      <NuxtLink class="nav-link" to="/#projets">Projets</NuxtLink>
      <NuxtLink class="nav-link" to="/#services">Services</NuxtLink>
      <NuxtLink class="nav-link" to="/#process">Process</NuxtLink>
      <NuxtLink class="nav-link" to="/#avis">Avis</NuxtLink>
      <NuxtLink class="nav-link" to="/#faq">FAQ</NuxtLink>
    </nav>

    <!-- FR / EN + CTA (Desktop) -->
    <div class="cta-block desktop-only">
      <button class="lang-btn">
        FR
      </button>
      <button class="cta-btn">
        Réserver un call
      </button>
    </div>

    <!-- Mobile Menu Button -->
    <button class="menu-toggle mobile-only" @click="toggleMenu" aria-label="Menu">
      <span class="hamburger" :class="{ 'open': isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>

    <!-- Mobile Menu Overlay -->
    <Transition name="fade">
      <div v-if="isMenuOpen" class="mobile-overlay" @click="closeMenu"></div>
    </Transition>

    <!-- Mobile Menu -->
    <Transition name="slide">
      <nav v-if="isMenuOpen" class="mobile-menu">
        <NuxtLink class="mobile-link" to="/#projets" @click="closeMenu">Projets</NuxtLink>
        <NuxtLink class="mobile-link" to="/#services" @click="closeMenu">Services</NuxtLink>
        <NuxtLink class="mobile-link" to="/#process" @click="closeMenu">Process</NuxtLink>
        <NuxtLink class="mobile-link" to="/#avis" @click="closeMenu">Avis</NuxtLink>
        <NuxtLink class="mobile-link" to="/#faq" @click="closeMenu">FAQ</NuxtLink>
        
        <div class="mobile-cta">
          <button class="lang-btn">FR</button>
          <button class="cta-btn mobile-cta-btn">Réserver un call</button>
        </div>
      </nav>
    </Transition>
  </header>

  <!-- Floating Bottom Navbar (appears on scroll) -->
  <Transition name="float-up">
    <nav v-if="isScrolled" class="floating-navbar">
      <div class="floating-inner">
        <!-- Logo Icon -->
        <NuxtLink to="/" class="floating-logo">
          <NuxtImg src="/img/main/logo.svg" alt="MC Studio" class="floating-logo-img" />
        </NuxtLink>

        <!-- Navigation Links -->
        <div class="floating-links">
          <NuxtLink class="floating-link" to="/#projets">Projets</NuxtLink>
          <NuxtLink class="floating-link" to="/#services">Services</NuxtLink>
          <NuxtLink class="floating-link" to="/#process">Process</NuxtLink>
          <NuxtLink class="floating-link" to="/#avis">Avis</NuxtLink>
          <NuxtLink class="floating-link" to="/#faq">FAQ</NuxtLink>
        </div>

        <!-- CTA Button with avatar -->
        <button class="floating-cta">
          <div class="floating-cta-avatar">
            <span>MC</span>
          </div>
          <div class="floating-cta-text">
            <span class="floating-cta-title">Réserver un call</span>
            <span class="floating-cta-subtitle">Discussion gratuite</span>
          </div>
        </button>
      </div>
    </nav>
  </Transition>
</template>

<style scoped>
@reference "@/assets/css/main.css";

.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  padding-top: 50px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  max-width: 782px;
  margin: 0 auto;
}

/* Logo Block */
.logo-block {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.logo-img {
  width: 50px;
  height: 48px;
  object-fit: contain;
}

.logo-text {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 18px;
  background: linear-gradient(to left, #f0bf6c 67.308%, white);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Navigation Links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 26px;
}

.nav-link {
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 1;
  color: white;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #f0bf6c;
}

/* CTA Block */
.cta-block {
  display: flex;
  align-items: center;
  gap: 11px;
  flex-shrink: 0;
}

.lang-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 53px;
  height: 30px;
  background: #010201;
  border: 1px solid #f0bf6c;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: #f0eadb;
  cursor: pointer;
  backdrop-filter: blur(12px);
  box-shadow: 
    0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    0px 9.736px 9.736px 0px rgba(11, 32, 103, 0.05),
    0px 1.391px 2.782px 0px rgba(11, 32, 103, 0.14),
    0px 36.247px 48.329px 0px rgba(0, 0, 0, 0.03);
  transition: all 0.2s ease;
}

.lang-btn:hover {
  background: #1a1a1a;
}

.cta-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 164px;
  height: 30px;
  background: linear-gradient(to left, #f0bf6c 67.308%, white);
  border: none;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #0f0f0f;
  cursor: pointer;
  backdrop-filter: blur(12px);
  box-shadow: 
    0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    0px 9.736px 9.736px 0px rgba(11, 32, 103, 0.05),
    0px 1.391px 2.782px 0px rgba(11, 32, 103, 0.14),
    0px 36.247px 48.329px 0px rgba(0, 0, 0, 0.03);
  transition: all 0.2s ease;
}

.cta-btn:hover {
  filter: brightness(1.05);
}

/* ==================== FLOATING BOTTOM NAVBAR ==================== */

.floating-navbar {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  padding: 0 24px;
  width: 100%;
  max-width: 800px;
  pointer-events: none;
}

.floating-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 100px;
  padding: 8px 8px 8px 16px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.12),
    0 2px 8px rgba(0, 0, 0, 0.08),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  pointer-events: auto;
}

.floating-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.floating-logo-img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.floating-links {
  display: flex;
  align-items: center;
  gap: 28px;
}

.floating-link {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #1a1a1a;
  text-decoration: none;
  transition: color 0.2s ease;
  white-space: nowrap;
}

.floating-link:hover {
  color: #f0bf6c;
}

.floating-cta {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #1a1a1a;
  border: none;
  border-radius: 100px;
  padding: 6px 16px 6px 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.floating-cta:hover {
  background: #2a2a2a;
  transform: scale(1.02);
}

.floating-cta-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f0bf6c 0%, #e8a84c 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 11px;
  color: #0f0f0f;
}

.floating-cta-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;
}

.floating-cta-title {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: white;
  line-height: 1.2;
}

.floating-cta-subtitle {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.2;
}

/* Floating Navbar Animation */
.float-up-enter-active,
.float-up-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.float-up-enter-from {
  opacity: 0;
  transform: translateX(-50%) translateY(100px);
}

.float-up-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(100px);
}

/* Mobile Menu Toggle */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 60;
}

.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 24px;
}

.hamburger span {
  display: block;
  height: 2px;
  background: white;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile Overlay */
.mobile-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 40;
  backdrop-filter: blur(4px);
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background: #0a0a0a;
  border-left: 1px solid rgba(240, 191, 108, 0.2);
  z-index: 50;
  display: flex;
  flex-direction: column;
  padding: 100px 30px 40px;
  gap: 0;
}

.mobile-link {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: white;
  text-decoration: none;
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: color 0.2s ease;
}

.mobile-link:hover {
  color: #f0bf6c;
}

.mobile-cta {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;
  padding-top: 30px;
}

.mobile-cta-btn {
  width: 100%;
}

/* Visibility Classes */
.desktop-only {
  display: flex;
}

.mobile-only {
  display: none;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

/* ==================== RESPONSIVE ==================== */

/* Tablet (768px - 1024px) */
@media (max-width: 1024px) {
  .navbar {
    gap: 40px;
    max-width: 100%;
  }

  .nav-links {
    gap: 16px;
  }

  .nav-link {
    font-size: 14px;
  }

  .cta-btn {
    width: 140px;
    font-size: 14px;
  }

  .floating-links {
    gap: 16px;
  }

  .floating-link {
    font-size: 13px;
  }
}

/* Mobile (< 768px) */
@media (max-width: 768px) {
  .navbar {
    justify-content: space-between;
    gap: 0;
    padding-top: 30px;
    padding-left: 24px;
    padding-right: 24px;
  }

  .desktop-only {
    display: none;
  }

  .mobile-only {
    display: flex;
  }

  .logo-img {
    width: 40px;
    height: 38px;
  }

  .logo-text {
    font-size: 16px;
  }

  /* Floating Navbar Mobile */
  .floating-navbar {
    bottom: 16px;
    padding: 0 16px;
  }

  .floating-inner {
    padding: 6px 6px 6px 12px;
    gap: 12px;
  }

  .floating-logo-img {
    width: 32px;
    height: 32px;
  }

  .floating-links {
    display: none;
  }

  .floating-cta {
    padding: 5px 12px 5px 5px;
  }

  .floating-cta-avatar {
    width: 28px;
    height: 28px;
    font-size: 10px;
  }

  .floating-cta-title {
    font-size: 12px;
  }

  .floating-cta-subtitle {
    font-size: 9px;
  }
}

/* Small Mobile (< 480px) */
@media (max-width: 480px) {
  .navbar {
    padding-top: 24px;
    padding-left: 16px;
    padding-right: 16px;
  }

  .mobile-menu {
    width: 100%;
  }

  .logo-img {
    width: 36px;
    height: 34px;
  }

  .logo-text {
    font-size: 14px;
  }

  .floating-navbar {
    bottom: 12px;
    padding: 0 12px;
  }
}
</style>
