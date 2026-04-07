export interface NavItem {
  label: string
  to: string
}

export interface CardItem {
  title: string
  description: string
  image: string
  eyebrow?: string
  tags?: string[]
  link?: string
}

export interface FeatureItem {
  title: string
  description: string
}

export interface QuoteItem {
  quote: string
  author: string
  context: string
}

export interface TeamItem {
  name: string
  role: string
  bio: string
}

export const site = {
  name: 'Château de Rajat',
  baseUrl: 'https://www.chateaurajat.fr',
  phone: '04 69 00 20 92',
  phoneHref: 'tel:+33469002092',
  email: 'contact@chateaurajat.fr',
  emailHref: 'mailto:contact@chateaurajat.fr',
  mapUrl: 'https://maps.app.goo.gl/58fqBNKyHNFbWiJ68',
  address: ['21 Chemin de Rajat', '69780 Saint-Pierre-de-Chandieu'],
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/chateauderajat/' },
    { label: 'Facebook', href: 'https://www.facebook.com/chateauderajat' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/18279036/admin/feed/posts/' },
    { label: 'YouTube', href: 'https://www.youtube.com/channel/UC1DXqqz6tmBy3L3G2sHeEgA' }
  ],
  navigation: [
    { label: 'Accueil', to: '/' },
    { label: 'Événements d’entreprise', to: '/evenements-entreprise' },
    { label: 'Événements particuliers', to: '/evenements-particuliers' },
    { label: 'Espaces', to: '/espaces-reception' },
    { label: 'Galerie', to: '/galerie' },
    { label: 'Le Château', to: '/le-chateau' },
    { label: 'Contact', to: '/contact' }
  ] as NavItem[],
  home: {
    heroTitle: 'Un lieu d’exception pour recevoir, célébrer et marquer les esprits.',
    heroText:
      'Aux portes de Lyon, le Château de Rajat réunit un domaine de caractère, des espaces lumineux et un accompagnement attentif pour les événements professionnels comme les réceptions privées.',
    heroImage: '/img/chateau/hero.jpg',
    stats: ['20 hectares de parc', '15 min de l’aéroport Saint-Exupéry', 'Château, Orangerie et extérieurs']
  },
  universes: [
    {
      eyebrow: 'Professionnels',
      title: 'Séminaires, soirées, conventions et formats corporate',
      description:
        'Une réponse claire pour les entreprises qui recherchent un lieu de standing, accessible, modulable et fluide à opérer.',
      image: '/img/chateau/corporate.jpg',
      tags: ['Séminaires', 'Soirées de gala', 'Roadshows', 'Team building'],
      link: '/evenements-entreprise'
    },
    {
      eyebrow: 'Particuliers',
      title: 'Mariages et célébrations dans un cadre rare',
      description:
        'Le domaine mêle cachet patrimonial, lumière et accompagnement sur mesure pour créer une expérience chaleureuse et mémorable.',
      image: '/img/chateau/wedding.jpg',
      tags: ['Mariages', 'Réceptions privées', 'Célébrations', 'Cadre d’exception'],
      link: '/evenements-particuliers'
    }
  ] as CardItem[],
  spaces: [
    {
      eyebrow: 'Le Château',
      title: 'Salons de réception et galerie panoramique',
      description:
        'Un décor de caractère avec salons de réception, verrière et vues ouvertes sur le parc pour des événements au cachet affirmé.',
      image: '/img/chateau/chateau.jpg',
      tags: ['Réception', 'Cachet', 'Vue parc']
    },
    {
      eyebrow: 'L’Orangerie',
      title: '450 m² de lumière et de modularité',
      description:
        'Une architecture de verre et de métal qui apporte une atmosphère plus contemporaine aux grands formats, soirées et événements scénographiés.',
      image: '/img/chateau/orangerie.jpg',
      tags: ['450 m²', 'Contemporain', 'Modulable']
    },
    {
      eyebrow: 'Le parc',
      title: 'Extérieurs et respiration paysagère',
      description:
        'Le domaine arboré prolonge l’expérience dès l’arrivée et donne au lieu cette sensation d’espace, de calme et de prestige.',
      image: '/img/chateau/park.jpg',
      tags: ['20 hectares', 'Nature', 'Arrivée marquante']
    }
  ] as CardItem[],
  corporateFormats: [
    {
      title: 'Séminaires & conventions',
      description: 'Des espaces capables d’alterner temps de travail, plénière, cocktail et moments de respiration.',
      image: '/img/chateau/corporate.jpg',
      tags: ['Plénière', 'Réunions', 'Cocktail']
    },
    {
      title: 'Soirées d’entreprise',
      description: 'Un cadre qui donne immédiatement du relief à une réception, un dîner de gala ou une soirée clients.',
      image: '/img/chateau/evening.jpg',
      tags: ['Gala', 'Réception', 'Image de marque']
    },
    {
      title: 'Roadshows & lancements',
      description: 'Une adresse plus distinctive qu’un hall impersonnel pour accueillir démonstrations, présentations et dispositifs éphémères.',
      image: '/img/chateau/interior.jpg',
      tags: ['Présentation', 'Produit', 'Expérience']
    },
    {
      title: 'Team building',
      description: 'Le parc, les volumes et la modularité du lieu permettent de construire des formats plus vivants et plus fédérateurs.',
      image: '/img/chateau/park.jpg',
      tags: ['Cohésion', 'Extérieurs', 'Formats hybrides']
    }
  ] as CardItem[],
  privateFormats: [
    {
      title: 'Mariages',
      description: 'Un cadre fort, une organisation fluide et la possibilité de se projeter du premier repérage jusqu’au jour J.',
      image: '/img/chateau/wedding.jpg',
      tags: ['Cérémonie', 'Cocktail', 'Dîner']
    },
    {
      title: 'Anniversaires & célébrations',
      description: 'Le domaine s’adapte à des réceptions privées qui demandent autant d’élégance que de simplicité dans l’accueil.',
      image: '/img/chateau/evening.jpg',
      tags: ['Privatisation', 'Réception', 'Ambiance']
    },
    {
      title: 'Moments de famille',
      description: 'Le parc et les espaces de réception permettent de réunir plusieurs générations dans un lieu facile à vivre.',
      image: '/img/chateau/chateau.jpg',
      tags: ['Convivialité', 'Cadre', 'Souvenir']
    }
  ] as CardItem[],
  gallery: [
    { title: 'Arrivée sur le domaine', description: 'Une première impression qui installe immédiatement le standing.', image: '/img/chateau/hero.jpg' },
    { title: 'Le Château', description: 'Des volumes nobles et une expression plus patrimoniale du lieu.', image: '/img/chateau/chateau.jpg' },
    { title: 'L’Orangerie', description: 'Une signature plus contemporaine et plus lumineuse.', image: '/img/chateau/orangerie.jpg' },
    { title: 'Ambiance corporate', description: 'Un décor qui valorise les événements professionnels.', image: '/img/chateau/corporate.jpg' },
    { title: 'Moments de réception', description: 'Une scénographie qui reste élégante sans surcharger.', image: '/img/chateau/evening.jpg' },
    { title: 'Mariage', description: 'Le lieu se prête aux formats plus émotionnels et plus intimes.', image: '/img/chateau/wedding.jpg' },
    { title: 'Perspective intérieure', description: 'Une matière visuelle forte pour la projection des invités.', image: '/img/chateau/interior.jpg' },
    { title: 'Le parc', description: 'L’ampleur paysagère qui singularise Rajat.', image: '/img/chateau/park.jpg' }
  ] as CardItem[],
  differentiators: [
    {
      title: 'Un cadre immédiatement marquant',
      description: 'Architecture du XIXe siècle, parc arboré, verrière panoramique et Orangerie créent une signature visuelle forte.'
    },
    {
      title: 'Une localisation pratique',
      description: 'Le domaine reste simple d’accès depuis Lyon, les grands axes et l’aéroport, ce qui facilite la logistique des invités.'
    },
    {
      title: 'Un accompagnement rassurant',
      description: 'L’équipe accompagne la préparation avec écoute, conseil et coordination pour fluidifier l’ensemble du projet.'
    }
  ] as FeatureItem[],
  corporateBenefits: [
    {
      title: 'Des espaces adaptés à plusieurs temps forts',
      description: 'Rajat permet d’alterner accueil, réunion, plénière, cocktail ou dîner dans un même lieu, avec beaucoup de fluidité.'
    },
    {
      title: 'Un cadre qui valorise l’image de l’événement',
      description: 'Le domaine apporte immédiatement du relief à un séminaire, une soirée d’entreprise, un lancement ou une réception clients.'
    },
    {
      title: 'Un accompagnement attentif',
      description: 'L’équipe accompagne la préparation et la coordination pour permettre aux organisateurs d’avancer avec sérénité.'
    }
  ] as FeatureItem[],
  privateBenefits: [
    {
      title: 'Créer une projection émotionnelle',
      description: 'Le cadre, la lumière et le calme du domaine créent une atmosphère propice aux grands moments de vie.'
    },
    {
      title: 'Rassurer sur l’accompagnement',
      description: 'Le discours insiste sur l’écoute, le souci du détail et la coordination qui rendent l’expérience plus sereine.'
    },
    {
      title: 'Préserver un esprit de maison',
      description: 'Le château conjugue élégance, chaleur et simplicité d’accueil pour recevoir sans ostentation.'
    }
  ] as FeatureItem[],
  history: [
    {
      title: 'Un château du XIXe siècle dans un écrin de verdure',
      description:
        'Construit dans un style Louis XV et posé au cœur de 20 hectares, Rajat conjugue patrimoine, respiration paysagère et sens de la réception.'
    },
    {
      title: 'Une offre pensée pour différents usages',
      description:
        'Séminaire, dîner, mariage ou lancement: les espaces permettent de faire cohabiter élégance, circulation fluide et scénarios variés.'
    },
    {
      title: 'Une adresse reconnue dans l’est lyonnais',
      description:
        'La combinaison du lieu, de l’accessibilité et de l’accompagnement fait du domaine une référence pour des événements à forte valeur perçue.'
    }
  ] as FeatureItem[],
  team: [
    {
      name: 'Nadège Scotton',
      role: 'Direction commerciale',
      bio: 'Passionnée par l’événementiel depuis plus de vingt ans, elle accompagne la conception des projets avec exigence, écoute et sens du détail.'
    },
    {
      name: 'Valérie Delaplane',
      role: 'Assistance commerciale et administrative',
      bio: 'Son parcours dans le spectacle et l’univers du mariage nourrit une attention précise à l’organisation et au suivi des temps forts.'
    },
    {
      name: 'Vido Rion',
      role: 'Régie et coordination technique',
      bio: 'Le jour J, il veille à la fluidité de l’événement et au dialogue avec les prestataires pour garantir une exécution maîtrisée.'
    }
  ] as TeamItem[],
  quotes: [
    {
      quote:
        'Tout le monde a trouvé le lieu incroyablement beau et la qualité du service a largement participé à rendre notre événement mémorable.',
      author: 'Camille',
      context: 'Événement professionnel'
    },
    {
      quote:
        'Le lieu est splendide, plein de charme, et l’organisation du début à la fin a été irréprochable. Une journée magique et sans stress.',
      author: 'Jassim & Hanane',
      context: 'Mariage'
    },
    {
      quote:
        'Les participants ont été enchantés par le lieu, l’accueil et le professionnalisme de l’équipe. Un vrai plaisir de préparer cet événement avec eux.',
      author: 'Flore',
      context: 'Conférence internationale'
    }
  ] as QuoteItem[],
  faq: [
    {
      title: 'Quels types d’événements le lieu accueille-t-il ?',
      description:
        'Le domaine accueille aussi bien des événements professionnels que des réceptions privées: séminaires, soirées, conventions, mariages et célébrations.'
    },
    {
      title: 'Le lieu est-il simple d’accès ?',
      description:
        'Oui. Rajat se situe à Saint-Pierre-de-Chandieu, aux portes de Lyon, proche des axes routiers et à environ quinze minutes de l’aéroport.'
    },
    {
      title: 'Quels espaces peut-on privatiser ?',
      description:
        'Le Château, l’Orangerie et les extérieurs peuvent être mobilisés selon le format, l’ambiance recherchée et le nombre d’invités.'
    }
  ] as FeatureItem[],
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.5933741416698!2d5.0349207!3d45.6389044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4d01cd9660525%3A0x918cf233de56c91e!2sChateau%20de%20Rajat!5e0!3m2!1sfr!2sfr!4v1711702797784!5m2!1sfr!2sfr'
}
