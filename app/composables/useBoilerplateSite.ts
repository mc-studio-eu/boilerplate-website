type LocaleCode = 'fr' | 'en'

interface BoilerplateMessageSet {
  nav: {
    showcase: string
    services: string
    process: string
    faq: string
    contact: string
    freeAudit: string
  }
  hero: {
    title: string
    subtitle: string
    primaryCta: string
    secondaryCta: string
    secondaryFallback: string
    badgeLabel: string
    marquee: string[]
  }
  trust: {
    stats: string[]
    services: string[]
    markets: string[]
  }
  showcase: {
    kicker: string
    title: string
    subtitle: string
    cta: string
  }
  services: {
    kicker: string
    title: string
    subtitle: string
    details: string
    deliverables: string
    forWho: string
    included: string
    delay: string
    moreTitle: string
    moreSubtitle: string
  }
  system: {
    title: string
    subtitle: string
    leftTitle: string
    leftText: string
    rightTitle: string
    rightText: string
  }
  process: {
    title: string
    subtitle: string
  }
  proof: {
    kicker: string
    intro: string
    title: string
  }
  faq: {
    title: string
    subtitle: string
    cardTitle: string
    cardText: string
    button: string
  }
  cta: {
    title: string
    subtitle: string
    embedLabel: string
    fallbackTitle: string
    fallbackText: string
    fallbackButton: string
  }
  footer: {
    rights: string
    legal: string
  }
  meta: {
    titleSuffix: string
    description: string
  }
}

interface BoilerplateService {
  title: string
  subtitle: string
  image: string
  deliverables: string[]
  result: string
  forWho: string[]
  included: string[]
  delay: string
}

interface BoilerplateShowcase {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

interface BoilerplateQuote {
  id: number
  content: string
  author: {
    name: string
    role: string
  }
}

interface BoilerplateFaq {
  id: number
  question: string
  answer: string
}

interface BoilerplateStep {
  id: number
  title: string
  description: string
  image: string
}

interface BoilerplateSocial {
  label: string
  href: string
}

const messages: Record<LocaleCode, BoilerplateMessageSet> = {
  fr: {
    nav: {
      showcase: 'Structure',
      services: 'Blocs',
      process: 'Méthode',
      faq: 'FAQ',
      contact: 'Réserver un call',
      freeAudit: 'Brief gratuit'
    },
    hero: {
      title: 'Un boilerplate qui transforme <br class="hidden xs:inline"> une entreprise en site crédible.',
      subtitle: 'Passe un nom d’entreprise ou une URL, puis remplace seulement le contenu utile. La structure, les animations et les sections restent prêtes à l’emploi.',
      primaryCta: 'Préparer l’entête',
      secondaryCta: 'Voir la source',
      secondaryFallback: 'Voir le site cible',
      badgeLabel: 'Boilerplate',
      marquee: ['header', 'hero', 'social proof', 'services', 'FAQ', 'CTA', 'animations', 'responsive', 'SEO', 'Nuxt']
    },
    trust: {
      stats: ['Header prêt en quelques minutes', 'Sections déjà structurées', 'Animations conservées'],
      services: ['Hero', 'Navigation', 'CTA', 'Preuves', 'FAQ'],
      markets: ['France', 'Europe', 'Remote']
    },
    showcase: {
      kicker: 'Sections prêtes',
      title: 'Ce que le boilerplate peut générer',
      subtitle: 'Le contenu ci-dessous se recalcule à partir d’un profil d’entreprise minimal.',
      cta: 'Ouvrir'
    },
    services: {
      kicker: 'Blocs réutilisables',
      title: 'Des sections génériques, pas des promesses figées',
      subtitle: 'Chaque carte représente un bloc réutilisable pour une entreprise, un SaaS, un cabinet, une agence ou un service local.',
      details: 'Détails',
      deliverables: 'Livrables',
      forWho: 'Pour qui',
      included: 'Inclus',
      delay: 'Usage'
    ,
      moreTitle: 'Autres blocs disponibles',
      moreSubtitle: 'Tu peux remplacer ou enrichir ces blocs sans toucher à la structure globale.'
    },
    system: {
      title: 'Le système derrière le boilerplate',
      subtitle: 'Le projet sépare maintenant le contenant visuel et le contenu métier.',
      leftTitle: 'Ce qui reste stable',
      leftText: 'Layout, animations, thèmes, composants visuels, responsive, structure de page et patterns d’interaction.',
      rightTitle: 'Ce qui change par entreprise',
      rightText: 'Nom, promesse, navigation, CTA, preuves, FAQ, bloc contact, liens et métadonnées SEO.'
    },
    process: {
      title: 'Comment l’utiliser',
      subtitle: 'Tu peux partir du boilerplate vide, ou injecter un profil via les paramètres d’URL pour générer une première version exploitable.'
    },
    proof: {
      kicker: 'Mode opératoire',
      intro: 'Le boilerplate ne fabrique pas de faux avis clients. Il prépare des repères clairs pour ce qui doit être remplacé.',
      title: 'Ce que tu peux personnaliser ensuite'
    },
    faq: {
      title: 'Questions fréquentes',
      subtitle: 'Les réponses sont orientées usage du boilerplate.',
      cardTitle: 'Point d’entrée',
      cardText: 'Passe `?company=` ou `?website=` dans l’URL pour générer une base cohérente. Ensuite on raffine ensemble le contenu réel.',
      button: 'Ouvrir le site source'
    },
    cta: {
      title: 'Brancher un rendez-vous ou un formulaire',
      subtitle: 'Le bloc de contact reste générique. Il affiche un embed si tu renseignes une URL de calendrier, sinon il montre un fallback propre.',
      embedLabel: 'Calendrier intégré',
      fallbackTitle: 'Aucun calendrier configuré',
      fallbackText: 'Renseigne `NUXT_PUBLIC_CALENDAR_URL` pour embarquer un calendrier, ou remplace ce bloc par ton formulaire.',
      fallbackButton: 'Configurer le contact'
    },
    footer: {
      rights: 'Boilerplate marketing générique.',
      legal: 'Mentions'
    },
    meta: {
      titleSuffix: 'Boilerplate marketing générique',
      description: 'Boilerplate Nuxt générique capable de générer la structure d’un site à partir d’un nom d’entreprise ou d’une URL.'
    }
  },
  en: {
    nav: {
      showcase: 'Structure',
      services: 'Blocks',
      process: 'Method',
      faq: 'FAQ',
      contact: 'Book a call',
      freeAudit: 'Free brief'
    },
    hero: {
      title: 'A boilerplate that turns <br class="hidden xs:inline"> a company into a credible website.',
      subtitle: 'Pass a company name or a website URL, then replace only the useful content. Structure, animations and sections stay ready to use.',
      primaryCta: 'Prepare the header',
      secondaryCta: 'View source',
      secondaryFallback: 'Open target site',
      badgeLabel: 'Boilerplate',
      marquee: ['header', 'hero', 'social proof', 'services', 'FAQ', 'CTA', 'animations', 'responsive', 'SEO', 'Nuxt']
    },
    trust: {
      stats: ['Header ready in minutes', 'Sections already structured', 'Animations preserved'],
      services: ['Hero', 'Navigation', 'CTA', 'Proof', 'FAQ'],
      markets: ['France', 'Europe', 'Remote']
    },
    showcase: {
      kicker: 'Ready sections',
      title: 'What the boilerplate can generate',
      subtitle: 'The content below recomputes from a minimal company profile.',
      cta: 'Open'
    },
    services: {
      kicker: 'Reusable blocks',
      title: 'Generic sections, not locked promises',
      subtitle: 'Each card is a reusable block for a company, SaaS, consultancy, agency or local service.',
      details: 'Details',
      deliverables: 'Deliverables',
      forWho: 'Best for',
      included: 'Includes',
      delay: 'Usage',
      moreTitle: 'More available blocks',
      moreSubtitle: 'You can replace or extend these blocks without touching the overall structure.'
    },
    system: {
      title: 'What sits behind the boilerplate',
      subtitle: 'The project now separates the visual shell from business content.',
      leftTitle: 'What stays stable',
      leftText: 'Layout, animations, themes, visual components, responsive behavior, page structure and interaction patterns.',
      rightTitle: 'What changes per company',
      rightText: 'Name, promise, navigation, CTA, proof, FAQ, contact block, links and SEO metadata.'
    },
    process: {
      title: 'How to use it',
      subtitle: 'You can start from the empty boilerplate, or inject a profile through URL params to generate a workable first pass.'
    },
    proof: {
      kicker: 'Operating mode',
      intro: 'The boilerplate does not fabricate fake testimonials. It prepares clear placeholders for what needs to be replaced.',
      title: 'What you can customize next'
    },
    faq: {
      title: 'Frequently asked questions',
      subtitle: 'Answers are now about using the boilerplate.',
      cardTitle: 'Entry point',
      cardText: 'Pass `?company=` or `?website=` in the URL to generate a coherent draft. Then refine the real content together.',
      button: 'Open source site'
    },
    cta: {
      title: 'Plug a calendar or form',
      subtitle: 'The contact block stays generic. It shows an embed when a calendar URL is configured, otherwise it renders a clean fallback.',
      embedLabel: 'Embedded calendar',
      fallbackTitle: 'No calendar configured',
      fallbackText: 'Set `NUXT_PUBLIC_CALENDAR_URL` to embed a scheduling flow, or replace this block with your form.',
      fallbackButton: 'Configure contact'
    },
    footer: {
      rights: 'Generic marketing boilerplate.',
      legal: 'Legal'
    },
    meta: {
      titleSuffix: 'Generic marketing boilerplate',
      description: 'Generic Nuxt boilerplate able to generate a website structure from a company name or website URL.'
    }
  }
}

const FALLBACK_LOGO = '/img/main/logo.svg'

const normalizeText = (value: string) => value.replace(/\s+/g, ' ').trim()

const toTitleCase = (value: string) =>
  value
    .split(' ')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

const humanizeSlug = (value: string) => toTitleCase(value.replace(/[-_]+/g, ' '))

const sanitizeUrl = (value?: string | null) => {
  if (!value) return ''
  const trimmed = value.trim()
  if (!trimmed) return ''

  try {
    const url = trimmed.startsWith('http') ? new URL(trimmed) : new URL(`https://${trimmed}`)
    return url.toString()
  } catch {
    return ''
  }
}

const extractDomainParts = (value: string) => {
  const sanitized = sanitizeUrl(value)
  if (!sanitized) return { hostname: '', slug: '', normalizedUrl: '' }

  const url = new URL(sanitized)
  const hostname = url.hostname.replace(/^www\./, '')
  const segments = hostname.split('.').filter(Boolean)
  const slug = segments.length > 1 ? segments[segments.length - 2] : segments[0] || ''

  return { hostname, slug, normalizedUrl: sanitized }
}

const buildInitials = (value: string) =>
  value
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('')

const guessSector = (companyName: string, website: string, explicitSector: string) => {
  if (explicitSector) return explicitSector

  const sample = `${companyName} ${website}`.toLowerCase()
  const rules = [
    { match: ['energy', 'solar', 'power'], label: 'énergie' },
    { match: ['clinic', 'health', 'care', 'dental'], label: 'santé' },
    { match: ['legal', 'law', 'avocat'], label: 'juridique' },
    { match: ['clean', 'cleaning', 'ménage'], label: 'services' },
    { match: ['saas', 'software', 'app', 'platform'], label: 'logiciel' },
    { match: ['studio', 'agency', 'design'], label: 'agence' }
  ]

  const found = rules.find((rule) => rule.match.some((token) => sample.includes(token)))
  return found?.label || 'activité'
}

const guessOffer = (sector: string, explicitOffer: string, locale: LocaleCode) => {
  if (explicitOffer) return explicitOffer

  const offers: Record<LocaleCode, Record<string, string>> = {
    fr: {
      énergie: 'une offre claire et crédible',
      santé: 'une présence rassurante et premium',
      juridique: 'une prise de contact sérieuse et structurée',
      logiciel: 'un produit facile à comprendre',
      agence: 'une offre claire, visuelle et différenciante',
      services: 'un service lisible et orienté conversion',
      activité: 'une proposition de valeur claire'
    },
    en: {
      énergie: 'a clear and credible offer',
      santé: 'a reassuring premium presence',
      juridique: 'a structured lead capture flow',
      logiciel: 'an easy to understand product',
      agence: 'a clear visual offer',
      services: 'a conversion oriented service offer',
      activité: 'a clear value proposition'
    }
  }

  return offers[locale][sector] || offers[locale].activité
}

export const useBoilerplateSite = () => {
  const route = useRoute()
  const runtimeConfig = useRuntimeConfig()
  const { locale } = useI18n()

  const currentLocale = computed<LocaleCode>(() => (locale.value === 'en' ? 'en' : 'fr'))
  const copy = computed(() => messages[currentLocale.value])

  const queryCompany = computed(() => normalizeText(String(route.query.company || '')))
  const queryWebsite = computed(() => sanitizeUrl(String(route.query.website || '')))
  const querySector = computed(() => normalizeText(String(route.query.sector || '')))
  const queryOffer = computed(() => normalizeText(String(route.query.offer || '')))
  const queryAudience = computed(() => normalizeText(String(route.query.audience || '')))

  const domain = computed(() => extractDomainParts(queryWebsite.value))
  const companyName = computed(() => {
    if (queryCompany.value) return queryCompany.value
    if (domain.value.slug) return humanizeSlug(domain.value.slug)
    return currentLocale.value === 'fr' ? 'Nom de votre entreprise' : 'Your company name'
  })

  const sector = computed(() => guessSector(companyName.value, queryWebsite.value, querySector.value))
  const offer = computed(() => guessOffer(sector.value, queryOffer.value, currentLocale.value))
  const audience = computed(() =>
    queryAudience.value || (currentLocale.value === 'fr' ? 'vos prospects les plus qualifiés' : 'your best qualified prospects')
  )
  const companyInitials = computed(() => buildInitials(companyName.value) || 'BP')

  const headerTitle = computed(() => {
    if (currentLocale.value === 'fr') {
      return `${companyName.value} : un header prêt à raconter ${offer.value}.`
    }

    return `${companyName.value}: a ready-made header for ${offer.value}.`
  })

  const headerSubtitle = computed(() => {
    if (queryWebsite.value) {
      if (currentLocale.value === 'fr') {
        return `Base générée depuis ${domain.value.hostname}. On garde le shell visuel et on prépare un hero, une navigation et des CTA déjà alignés avec ${audience.value}.`
      }

      return `Draft generated from ${domain.value.hostname}. The visual shell stays in place while the hero, navigation and CTAs are aligned to ${audience.value}.`
    }

    if (currentLocale.value === 'fr') {
      return `${companyName.value} peut maintenant être injectée dans ce boilerplate pour obtenir une première structure crédible, rapide à adapter et déjà responsive.`
    }

    return `${companyName.value} can now be injected into this boilerplate to get a credible, fast to adapt and already responsive first structure.`
  })

  const showcaseItems = computed<BoilerplateShowcase[]>(() => [
    {
      id: 1,
      title: currentLocale.value === 'fr' ? 'Hero + promesse' : 'Hero + promise',
      description:
        currentLocale.value === 'fr'
          ? `Une entête qui place ${companyName.value}, son offre et une action claire dès le premier écran.`
          : `A header that places ${companyName.value}, its offer and a clear action in the first screen.`,
      image: '/img/project/arises-tablet.jpeg',
      tags: [companyName.value, sector.value, currentLocale.value === 'fr' ? 'Hero' : 'Hero', offer.value],
      link: queryWebsite.value || runtimeConfig.public.siteUrl || '/'
    },
    {
      id: 2,
      title: currentLocale.value === 'fr' ? 'Preuves & structure' : 'Proof & structure',
      description:
        currentLocale.value === 'fr'
          ? `Un bloc de crédibilité, des services lisibles et des CTA adaptés pour transformer une visite en prise de contact.`
          : `A credibility block, readable services and adapted CTAs to turn a visit into a contact.`,
      image: '/img/project/souji-nova-desktop.png',
      tags: [
        currentLocale.value === 'fr' ? 'Social proof' : 'Social proof',
        currentLocale.value === 'fr' ? 'Services' : 'Services',
        currentLocale.value === 'fr' ? 'CTA' : 'CTA'
      ],
      link: queryWebsite.value || runtimeConfig.public.siteUrl || '/'
    },
    {
      id: 3,
      title: currentLocale.value === 'fr' ? 'Contact & conversion' : 'Contact & conversion',
      description:
        currentLocale.value === 'fr'
          ? `Le projet sait déjà afficher un agenda, un bouton direct ou un fallback propre selon les variables disponibles.`
          : `The project already knows how to display a scheduler, direct button or clean fallback depending on available variables.`,
      image: '/img/project/ra-energy.png',
      tags: [
        currentLocale.value === 'fr' ? 'Calendrier' : 'Calendar',
        currentLocale.value === 'fr' ? 'Responsive' : 'Responsive',
        currentLocale.value === 'fr' ? 'SEO' : 'SEO'
      ],
      link: queryWebsite.value || runtimeConfig.public.siteUrl || '/'
    }
  ])

  const serviceCards = computed<BoilerplateService[]>(() => [
    {
      title: currentLocale.value === 'fr' ? 'Bloc Hero' : 'Hero block',
      subtitle:
        currentLocale.value === 'fr'
          ? 'Positionner immédiatement l’offre et l’action principale.'
          : 'Immediately position the offer and primary action.',
      image: '/img/services/lp.png',
      deliverables: currentLocale.value === 'fr' ? ['Titre', 'Sous-titre', 'CTA'] : ['Headline', 'Subheadline', 'CTA'],
      result:
        currentLocale.value === 'fr'
          ? `Un hero capable de porter ${companyName.value} sans repartir de zéro.`
          : `A hero able to support ${companyName.value} without starting over.`,
      forWho:
        currentLocale.value === 'fr'
          ? ['Entreprise avec une offre claire', 'Refonte rapide', 'Premier draft avant personnalisation']
          : ['Company with a clear offer', 'Fast redesign', 'First draft before customization'],
      included:
        currentLocale.value === 'fr'
          ? ['Titre recalculé', 'CTA principal', 'CTA secondaire', 'Badges de confiance', 'Marquee animée']
          : ['Recomputed headline', 'Primary CTA', 'Secondary CTA', 'Trust badges', 'Animated marquee'],
      delay: currentLocale.value === 'fr' ? 'Piloté par company / website' : 'Driven by company / website'
    },
    {
      title: currentLocale.value === 'fr' ? 'Blocs de contenu' : 'Content blocks',
      subtitle:
        currentLocale.value === 'fr'
          ? 'Présenter l’offre, les preuves et la méthode avec une structure stable.'
          : 'Present the offer, proof and method with a stable structure.',
      image: '/img/services/sprint.png',
      deliverables:
        currentLocale.value === 'fr'
          ? ['Services', 'Process', 'FAQ']
          : ['Services', 'Process', 'FAQ'],
      result:
        currentLocale.value === 'fr'
          ? 'Une home déjà segmentée en blocs logiques faciles à remplacer.'
          : 'A homepage already split into logical, easy to replace blocks.',
      forWho:
        currentLocale.value === 'fr'
          ? ['SaaS', 'Cabinet', 'Agence', 'Service local']
          : ['SaaS', 'Consultancy', 'Agency', 'Local service'],
      included:
        currentLocale.value === 'fr'
          ? ['Cartes extensibles', 'Carousel de sections', 'FAQ accordéon', 'Navigation d’ancre']
          : ['Expandable cards', 'Section carousel', 'Accordion FAQ', 'Anchor navigation'],
      delay: currentLocale.value === 'fr' ? 'Contenu configurable' : 'Configurable content'
    },
    {
      title: currentLocale.value === 'fr' ? 'Bloc contact' : 'Contact block',
      subtitle:
        currentLocale.value === 'fr'
          ? 'Connecter une prise de rendez-vous, un formulaire ou un lien externe.'
          : 'Connect scheduling, a form or an external link.',
      image: '/img/services/launch.png',
      deliverables:
        currentLocale.value === 'fr' ? ['Agenda', 'Fallback', 'SEO'] : ['Scheduler', 'Fallback', 'SEO'],
      result:
        currentLocale.value === 'fr'
          ? 'Une fin de page exploitable même si aucun outil de réservation n’est encore branché.'
          : 'A usable page ending even when no booking tool is connected yet.',
      forWho:
        currentLocale.value === 'fr'
          ? ['Projet en setup', 'Lead gen', 'Service B2B']
          : ['Setup project', 'Lead gen', 'B2B service'],
      included:
        currentLocale.value === 'fr'
          ? ['Iframe conditionnelle', 'Liens de contact', 'CTA de secours']
          : ['Conditional iframe', 'Contact links', 'Fallback CTA'],
      delay: currentLocale.value === 'fr' ? 'Variables runtime' : 'Runtime variables'
    }
  ])

  const extraBlocks = computed(() =>
    currentLocale.value === 'fr'
      ? ['Navbar flottante', 'Footer générique', 'Métadonnées SEO', 'Theme light/dark', 'Animations GSAP', 'Sections à ancres']
      : ['Floating navbar', 'Generic footer', 'SEO metadata', 'Light/dark theme', 'GSAP animations', 'Anchor sections']
  )

  const steps = computed<BoilerplateStep[]>(() => [
    {
      id: 1,
      title: currentLocale.value === 'fr' ? '1. Donner un nom ou une URL' : '1. Give a name or URL',
      description:
        currentLocale.value === 'fr'
          ? 'Exemple: `/?company=Acme&website=https://acme.com`. Le profil de base est calculé automatiquement.'
          : 'Example: `/?company=Acme&website=https://acme.com`. The base profile is computed automatically.',
      image: '/img/process/step1_calendar.png'
    },
    {
      id: 2,
      title: currentLocale.value === 'fr' ? '2. Ajuster la promesse' : '2. Adjust the promise',
      description:
        currentLocale.value === 'fr'
          ? 'Affiner `sector`, `offer` ou `audience` pour pousser le hero, la navigation et les cartes dans la bonne direction.'
          : 'Refine `sector`, `offer` or `audience` to push the hero, nav and cards in the right direction.',
      image: '/img/process/step2_proposal.png'
    },
    {
      id: 3,
      title: currentLocale.value === 'fr' ? '3. Remplacer par le vrai contenu' : '3. Replace with real content',
      description:
        currentLocale.value === 'fr'
          ? 'Quand la structure convient, on remplace les placeholders avec les vraies preuves, FAQs, visuels et liens.'
          : 'Once the structure fits, replace placeholders with real proof, FAQs, visuals and links.',
      image: '/img/process/step3_kickoff.png'
    }
  ])

  const quotes = computed<BoilerplateQuote[]>(() => [
    {
      id: 1,
      content:
        currentLocale.value === 'fr'
          ? 'Remplace ici les vraies preuves client, métriques ou logos. Le boilerplate garde volontairement cet espace neutre.'
          : 'Replace this with real customer proof, metrics or logos. The boilerplate intentionally keeps this area neutral.',
      author: {
        name: currentLocale.value === 'fr' ? 'Zone de preuve' : 'Proof area',
        role: currentLocale.value === 'fr' ? 'A personnaliser' : 'To customize'
      }
    },
    {
      id: 2,
      content:
        currentLocale.value === 'fr'
          ? 'Tu peux aussi y mettre une citation fondateur, un bénéfice chiffré ou un extrait de cas client selon le type d’entreprise.'
          : 'You can also place a founder quote, a quantified benefit or a case study excerpt depending on the business.',
      author: {
        name: currentLocale.value === 'fr' ? 'Contenu flexible' : 'Flexible content',
        role: currentLocale.value === 'fr' ? 'Bloc éditorial' : 'Editorial block'
      }
    },
    {
      id: 3,
      content:
        currentLocale.value === 'fr'
          ? 'Le plus important est que la structure te donne déjà un endroit juste pour chaque message.'
          : 'What matters is that the structure already gives each message the right place.',
      author: {
        name: currentLocale.value === 'fr' ? 'Usage du template' : 'Template usage',
        role: currentLocale.value === 'fr' ? 'Hiérarchie claire' : 'Clear hierarchy'
      }
    }
  ])

  const faqItems = computed<BoilerplateFaq[]>(() => [
    {
      id: 1,
      question:
        currentLocale.value === 'fr'
          ? 'Quels paramètres peuvent générer une première version ?'
          : 'Which parameters can generate a first draft?',
      answer:
        currentLocale.value === 'fr'
          ? 'Le projet lit `company`, `website`, `sector`, `offer` et `audience` dans l’URL. Tu peux donc créer une première entête sans éditer le code.'
          : 'The project reads `company`, `website`, `sector`, `offer` and `audience` from the URL. You can create a first header without editing code.'
    },
    {
      id: 2,
      question:
        currentLocale.value === 'fr'
          ? 'Est-ce que le boilerplate scrape automatiquement un site ?'
          : 'Does the boilerplate automatically scrape a site?',
      answer:
        currentLocale.value === 'fr'
          ? 'Non. Il génère une base cohérente à partir d’entrées minimales. Pour une vraie extraction de contenu, il faut un flux supplémentaire côté assistant ou backend.'
          : 'No. It generates a coherent base from minimal inputs. Real content extraction still requires an assistant or backend flow.'
    },
    {
      id: 3,
      question:
        currentLocale.value === 'fr'
          ? 'Où configurer les vrais liens de contact ?'
          : 'Where do I configure real contact links?',
      answer:
        currentLocale.value === 'fr'
          ? 'Dans les variables publiques Nuxt: `NUXT_PUBLIC_CALENDAR_URL`, `NUXT_PUBLIC_CONTACT_EMAIL`, `NUXT_PUBLIC_WHATSAPP_URL`, `NUXT_PUBLIC_LINKEDIN_URL`, `NUXT_PUBLIC_INSTAGRAM_URL`, `NUXT_PUBLIC_X_URL`.'
          : 'In Nuxt public vars: `NUXT_PUBLIC_CALENDAR_URL`, `NUXT_PUBLIC_CONTACT_EMAIL`, `NUXT_PUBLIC_WHATSAPP_URL`, `NUXT_PUBLIC_LINKEDIN_URL`, `NUXT_PUBLIC_INSTAGRAM_URL`, `NUXT_PUBLIC_X_URL`.'
    },
    {
      id: 4,
      question:
        currentLocale.value === 'fr'
          ? 'Est-ce que les animations restent ?'
          : 'Do the animations stay?',
      answer:
        currentLocale.value === 'fr'
          ? 'Oui. Le refactor vise précisément à garder les librairies, les transitions et les patterns d’animation, tout en retirant le branding spécifique.'
          : 'Yes. The refactor is explicitly keeping the libraries, transitions and animation patterns while removing the specific branding.'
    }
  ])

  const socials = computed<BoilerplateSocial[]>(() =>
    [
      { label: 'LinkedIn', href: runtimeConfig.public.linkedinUrl },
      { label: 'Instagram', href: runtimeConfig.public.instagramUrl },
      { label: 'X', href: runtimeConfig.public.xUrl }
    ].filter((item) => item.href)
  )

  const contactEmail = computed(() => runtimeConfig.public.contactEmail || '')
  const calendarUrl = computed(() => runtimeConfig.public.calendarUrl || '')
  const whatsappUrl = computed(() => runtimeConfig.public.whatsappUrl || '')
  const sourceLink = computed(() => queryWebsite.value || runtimeConfig.public.siteUrl || '')

  const navigation = computed(() => [
    { key: 'showcase', label: copy.value.nav.showcase, id: 'showcase' },
    { key: 'services', label: copy.value.nav.services, id: 'services' },
    { key: 'process', label: copy.value.nav.process, id: 'process' },
    { key: 'faq', label: copy.value.nav.faq, id: 'faq' }
  ])

  const metaTitle = computed(() => `${companyName.value} | ${copy.value.meta.titleSuffix}`)
  const metaDescription = computed(() => {
    if (queryWebsite.value) {
      return currentLocale.value === 'fr'
        ? `Structure générique générée pour ${companyName.value} depuis ${domain.value.hostname}.`
        : `Generic structure generated for ${companyName.value} from ${domain.value.hostname}.`
    }

    return copy.value.meta.description
  })

  return {
    locale: currentLocale,
    copy,
    navigation,
    companyName,
    companyInitials,
    sector,
    offer,
    audience,
    headerTitle,
    headerSubtitle,
    logoUrl: FALLBACK_LOGO,
    heroMarquee: computed(() => copy.value.hero.marquee),
    trustStats: computed(() => copy.value.trust.stats),
    trustServices: computed(() => copy.value.trust.services),
    trustMarkets: computed(() => copy.value.trust.markets),
    showcaseItems,
    serviceCards,
    extraBlocks,
    steps,
    quotes,
    faqItems,
    socials,
    sourceLink,
    contactEmail,
    calendarUrl,
    whatsappUrl,
    metaTitle,
    metaDescription
  }
}
