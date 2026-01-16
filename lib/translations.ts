export type Language = "en" | "sw" | "fr" | "es"

export interface TranslationKeys {
  // Navigation
  nav: {
    home: string
    trails: string
    champions: string
    about: string
    pricing: string
    startJourney: string
  }
  // Hero Section
  hero: {
    location: string
    title: string
    subtitle: string
    startButton: string
    exploreButton: string
  }
  // Form
  form: {
    title: string
    subtitle: string
    placeName: string
    placeNamePlaceholder: string
    locationType: string
    locationTypePlaceholder: string
    activity: string
    activityPlaceholder: string
    visitorProfile: string
    visitorProfilePlaceholder: string
    timeAvailable: string
    timeAvailablePlaceholder: string
    generateButton: string
    generatingButton: string
  }
  // Location Types
  locationTypes: {
    trail: string
    hill: string
    road: string
    trainingRoute: string
    village: string
  }
  // Activities
  activities: {
    walking: string
    running: string
    cycling: string
  }
  // Visitor Profiles
  visitorProfiles: {
    tourist: string
    athlete: string
    student: string
  }
  // Time Options
  timeOptions: {
    short: string
    halfDay: string
    fullDay: string
  }
  // Features
  features: {
    heritage: {
      title: string
      description: string
    }
    culture: {
      title: string
      description: string
    }
    guided: {
      title: string
      description: string
    }
  }
  // About Page
  about: {
    badge: string
    title: string
    subtitle: string
    missionTitle: string
    missionText: string
    valuesTitle: string
    howItWorksTitle: string
    whyNandiTitle: string
    responsiblyTitle: string
  }
  // Footer
  footer: {
    description: string
    explore: string
    resources: string
    connect: string
    copyright: string
    madeWith: string
  }
  // Champions Page
  champions: {
    title: string
    subtitle: string
    achievements: string
    trainingGrounds: string
    hometown: string
  }
  // Trails Page
  trails: {
    title: string
    subtitle: string
    difficulty: string
    distance: string
    elevation: string
    duration: string
    highlights: string
    culturalNotes: string
    difficultyLevels: {
      easy: string
      moderate: string
      challenging: string
    }
  }
}

export const translations: Record<Language, TranslationKeys> = {
  en: {
    nav: {
      home: "Home",
      trails: "Explore Trails",
      champions: "Champions",
      about: "About",
      pricing: "Pricing",
      startJourney: "Start Journey",
    },
    hero: {
      location: "Nandi County, Kenya",
      title: "Walk Through Legacy",
      subtitle:
        "Experience the birthplace of champions through immersive storytelling. Every trail has a story. Every step connects you to legacy.",
      startButton: "Start Your Journey",
      exploreButton: "Explore Trails",
    },
    form: {
      title: "Create Your Journey",
      subtitle:
        "Tell us about your destination, and we will craft a personalized storytelling experience that brings the landscape to life.",
      placeName: "Place or Trail Name",
      placeNamePlaceholder: "e.g., Kaptagat Forest, Kipchoge Training Route",
      locationType: "Location Type",
      locationTypePlaceholder: "Select location type",
      activity: "Activity",
      activityPlaceholder: "Select activity",
      visitorProfile: "Visitor Profile",
      visitorProfilePlaceholder: "Select visitor type",
      timeAvailable: "Time Available",
      timeAvailablePlaceholder: "Select duration",
      generateButton: "Generate My Journey",
      generatingButton: "Creating Your Story...",
    },
    locationTypes: {
      trail: "Trail",
      hill: "Hill",
      road: "Road",
      trainingRoute: "Training Route",
      village: "Village",
    },
    activities: {
      walking: "Walking",
      running: "Running",
      cycling: "Cycling",
    },
    visitorProfiles: {
      tourist: "Tourist",
      athlete: "Athlete",
      student: "Student",
    },
    timeOptions: {
      short: "Short Walk (30-60 minutes)",
      halfDay: "Half Day (2-4 hours)",
      fullDay: "Full Day (5+ hours)",
    },
    features: {
      heritage: {
        title: "Sports Heritage",
        description: "Connect with the legendary training grounds of champions",
      },
      culture: {
        title: "Cultural Context",
        description: "Discover traditions and community values in every location",
      },
      guided: {
        title: "Guided Experience",
        description: "Practical tips for pace, terrain, and respectful exploration",
      },
    },
    about: {
      badge: "Our Story",
      title: "Where Stories Meet Footsteps",
      subtitle:
        "We believe every trail in Nandi County carries the spirit of champions, the wisdom of community, and the beauty of Kenyan heritage.",
      missionTitle: "Our Mission",
      missionText:
        "Nandi Stories transforms physical journeys into cultural experiences. We connect visitors with the rich heritage of Nandi County, Kenya—the birthplace of legendary runners and a community that has shaped global athletics.",
      valuesTitle: "Our Values",
      howItWorksTitle: "How It Works",
      whyNandiTitle: "Why Nandi County?",
      responsiblyTitle: "Visit Responsibly",
    },
    footer: {
      description: "Experience the birthplace of champions through immersive sports-led cultural storytelling.",
      explore: "Explore",
      resources: "Resources",
      connect: "Connect",
      copyright: "Nandi Stories. Honoring heritage with respect and authenticity.",
      madeWith: "Made with",
    },
    champions: {
      title: "Legends of Nandi",
      subtitle: "Meet the champions who put Nandi County on the world stage",
      achievements: "Achievements",
      trainingGrounds: "Training Grounds",
      hometown: "Hometown",
    },
    trails: {
      title: "Explore the Trails",
      subtitle: "Discover the legendary training grounds and scenic routes of Nandi County",
      difficulty: "Difficulty",
      distance: "Distance",
      elevation: "Elevation",
      duration: "Duration",
      highlights: "Highlights",
      culturalNotes: "Cultural Notes",
      difficultyLevels: {
        easy: "Easy",
        moderate: "Moderate",
        challenging: "Challenging",
      },
    },
  },
  sw: {
    nav: {
      home: "Nyumbani",
      trails: "Chunguza Njia",
      champions: "Mashujaa",
      about: "Kuhusu",
      pricing: "Bei",
      startJourney: "Anza Safari",
    },
    hero: {
      location: "Kaunti ya Nandi, Kenya",
      title: "Tembea Kupitia Urithi",
      subtitle:
        "Furahia mahali mashujaa walizaliwa kupitia hadithi zinazovutia. Kila njia ina hadithi. Kila hatua inakuunganisha na urithi.",
      startButton: "Anza Safari Yako",
      exploreButton: "Chunguza Njia",
    },
    form: {
      title: "Unda Safari Yako",
      subtitle: "Tuambie kuhusu marudio yako, na tutaunda uzoefu wa hadithi binafsi unaoleta mandhari kuwa hai.",
      placeName: "Mahali au Jina la Njia",
      placeNamePlaceholder: "mfano, Msitu wa Kaptagat, Njia ya Mafunzo ya Kipchoge",
      locationType: "Aina ya Mahali",
      locationTypePlaceholder: "Chagua aina ya mahali",
      activity: "Shughuli",
      activityPlaceholder: "Chagua shughuli",
      visitorProfile: "Wasifu wa Mgeni",
      visitorProfilePlaceholder: "Chagua aina ya mgeni",
      timeAvailable: "Muda Unapatikana",
      timeAvailablePlaceholder: "Chagua muda",
      generateButton: "Unda Safari Yangu",
      generatingButton: "Inaunda Hadithi Yako...",
    },
    locationTypes: {
      trail: "Njia",
      hill: "Kilima",
      road: "Barabara",
      trainingRoute: "Njia ya Mafunzo",
      village: "Kijiji",
    },
    activities: {
      walking: "Kutembea",
      running: "Kukimbia",
      cycling: "Kuendesha Baiskeli",
    },
    visitorProfiles: {
      tourist: "Mtalii",
      athlete: "Mwanariadha",
      student: "Mwanafunzi",
    },
    timeOptions: {
      short: "Matembezi Mafupi (dakika 30-60)",
      halfDay: "Nusu Siku (masaa 2-4)",
      fullDay: "Siku Nzima (masaa 5+)",
    },
    features: {
      heritage: {
        title: "Urithi wa Michezo",
        description: "Unganisha na viwanja vya mafunzo vya mashujaa",
      },
      culture: {
        title: "Muktadha wa Kitamaduni",
        description: "Gundua mila na maadili ya jamii katika kila eneo",
      },
      guided: {
        title: "Uzoefu wa Kuongozwa",
        description: "Vidokezo vya vitendo kwa kasi, ardhi, na uchunguzi wa heshima",
      },
    },
    about: {
      badge: "Hadithi Yetu",
      title: "Mahali Hadithi Zinakutana na Hatua",
      subtitle:
        "Tunaamini kila njia katika Kaunti ya Nandi inabeba roho ya mashujaa, hekima ya jamii, na uzuri wa urithi wa Kenya.",
      missionTitle: "Dhamira Yetu",
      missionText:
        "Nandi Stories hubadilisha safari za kimwili kuwa uzoefu wa kitamaduni. Tunaunganisha wageni na urithi tajiri wa Kaunti ya Nandi, Kenya—mahali ambapo wapiga mbio mashuhuri walizaliwa.",
      valuesTitle: "Maadili Yetu",
      howItWorksTitle: "Jinsi Inavyofanya Kazi",
      whyNandiTitle: "Kwa Nini Kaunti ya Nandi?",
      responsiblyTitle: "Tembelea kwa Uwajibikaji",
    },
    footer: {
      description: "Furahia mahali mashujaa walizaliwa kupitia hadithi za michezo na kitamaduni.",
      explore: "Chunguza",
      resources: "Rasilimali",
      connect: "Unganisha",
      copyright: "Nandi Stories. Kuheshimu urithi kwa heshima na uhalisi.",
      madeWith: "Imetengenezwa kwa",
    },
    champions: {
      title: "Hadithi za Nandi",
      subtitle: "Kutana na mashujaa walioweka Kaunti ya Nandi katika jukwaa la dunia",
      achievements: "Mafanikio",
      trainingGrounds: "Viwanja vya Mafunzo",
      hometown: "Mji wa Kuzaliwa",
    },
    trails: {
      title: "Chunguza Njia",
      subtitle: "Gundua viwanja vya mafunzo mashuhuri na njia nzuri za Kaunti ya Nandi",
      difficulty: "Ugumu",
      distance: "Umbali",
      elevation: "Urefu",
      duration: "Muda",
      highlights: "Vivutio",
      culturalNotes: "Maelezo ya Kitamaduni",
      difficultyLevels: {
        easy: "Rahisi",
        moderate: "Wastani",
        challenging: "Changamoto",
      },
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      trails: "Explorer les Sentiers",
      champions: "Champions",
      about: "À Propos",
      pricing: "Tarifs",
      startJourney: "Commencer",
    },
    hero: {
      location: "Comté de Nandi, Kenya",
      title: "Marchez à Travers l'Héritage",
      subtitle:
        "Découvrez le berceau des champions à travers des récits immersifs. Chaque sentier a une histoire. Chaque pas vous connecte à l'héritage.",
      startButton: "Commencez Votre Voyage",
      exploreButton: "Explorer les Sentiers",
    },
    form: {
      title: "Créez Votre Voyage",
      subtitle:
        "Parlez-nous de votre destination et nous créerons une expérience narrative personnalisée qui donne vie au paysage.",
      placeName: "Lieu ou Nom du Sentier",
      placeNamePlaceholder: "par ex., Forêt de Kaptagat, Route d'Entraînement de Kipchoge",
      locationType: "Type de Lieu",
      locationTypePlaceholder: "Sélectionnez le type de lieu",
      activity: "Activité",
      activityPlaceholder: "Sélectionnez l'activité",
      visitorProfile: "Profil du Visiteur",
      visitorProfilePlaceholder: "Sélectionnez le type de visiteur",
      timeAvailable: "Temps Disponible",
      timeAvailablePlaceholder: "Sélectionnez la durée",
      generateButton: "Générer Mon Voyage",
      generatingButton: "Création de Votre Histoire...",
    },
    locationTypes: {
      trail: "Sentier",
      hill: "Colline",
      road: "Route",
      trainingRoute: "Parcours d'Entraînement",
      village: "Village",
    },
    activities: {
      walking: "Marche",
      running: "Course",
      cycling: "Cyclisme",
    },
    visitorProfiles: {
      tourist: "Touriste",
      athlete: "Athlète",
      student: "Étudiant",
    },
    timeOptions: {
      short: "Courte Marche (30-60 minutes)",
      halfDay: "Demi-Journée (2-4 heures)",
      fullDay: "Journée Complète (5+ heures)",
    },
    features: {
      heritage: {
        title: "Patrimoine Sportif",
        description: "Connectez-vous aux terrains d'entraînement légendaires des champions",
      },
      culture: {
        title: "Contexte Culturel",
        description: "Découvrez les traditions et les valeurs communautaires de chaque lieu",
      },
      guided: {
        title: "Expérience Guidée",
        description: "Conseils pratiques pour le rythme, le terrain et l'exploration respectueuse",
      },
    },
    about: {
      badge: "Notre Histoire",
      title: "Où les Histoires Rencontrent les Pas",
      subtitle:
        "Nous croyons que chaque sentier du comté de Nandi porte l'esprit des champions, la sagesse de la communauté et la beauté du patrimoine kenyan.",
      missionTitle: "Notre Mission",
      missionText:
        "Nandi Stories transforme les voyages physiques en expériences culturelles. Nous connectons les visiteurs au riche patrimoine du comté de Nandi, Kenya—le berceau des coureurs légendaires.",
      valuesTitle: "Nos Valeurs",
      howItWorksTitle: "Comment Ça Marche",
      whyNandiTitle: "Pourquoi le Comté de Nandi?",
      responsiblyTitle: "Visitez Responsablement",
    },
    footer: {
      description: "Découvrez le berceau des champions à travers des récits culturels et sportifs immersifs.",
      explore: "Explorer",
      resources: "Ressources",
      connect: "Connecter",
      copyright: "Nandi Stories. Honorer le patrimoine avec respect et authenticité.",
      madeWith: "Fait avec",
    },
    champions: {
      title: "Légendes de Nandi",
      subtitle: "Rencontrez les champions qui ont mis le comté de Nandi sur la scène mondiale",
      achievements: "Réalisations",
      trainingGrounds: "Terrains d'Entraînement",
      hometown: "Ville Natale",
    },
    trails: {
      title: "Explorer les Sentiers",
      subtitle: "Découvrez les terrains d'entraînement légendaires et les itinéraires pittoresques du comté de Nandi",
      difficulty: "Difficulté",
      distance: "Distance",
      elevation: "Altitude",
      duration: "Durée",
      highlights: "Points Forts",
      culturalNotes: "Notes Culturelles",
      difficultyLevels: {
        easy: "Facile",
        moderate: "Modéré",
        challenging: "Difficile",
      },
    },
  },
  es: {
    nav: {
      home: "Inicio",
      trails: "Explorar Senderos",
      champions: "Campeones",
      about: "Acerca de",
      pricing: "Precios",
      startJourney: "Comenzar",
    },
    hero: {
      location: "Condado de Nandi, Kenia",
      title: "Camina a Través del Legado",
      subtitle:
        "Experimenta el lugar de nacimiento de campeones a través de narrativas inmersivas. Cada sendero tiene una historia. Cada paso te conecta con el legado.",
      startButton: "Comienza Tu Viaje",
      exploreButton: "Explorar Senderos",
    },
    form: {
      title: "Crea Tu Viaje",
      subtitle:
        "Cuéntanos sobre tu destino y crearemos una experiencia narrativa personalizada que da vida al paisaje.",
      placeName: "Lugar o Nombre del Sendero",
      placeNamePlaceholder: "ej., Bosque de Kaptagat, Ruta de Entrenamiento de Kipchoge",
      locationType: "Tipo de Ubicación",
      locationTypePlaceholder: "Selecciona el tipo de ubicación",
      activity: "Actividad",
      activityPlaceholder: "Selecciona la actividad",
      visitorProfile: "Perfil del Visitante",
      visitorProfilePlaceholder: "Selecciona el tipo de visitante",
      timeAvailable: "Tiempo Disponible",
      timeAvailablePlaceholder: "Selecciona la duración",
      generateButton: "Generar Mi Viaje",
      generatingButton: "Creando Tu Historia...",
    },
    locationTypes: {
      trail: "Sendero",
      hill: "Colina",
      road: "Carretera",
      trainingRoute: "Ruta de Entrenamiento",
      village: "Pueblo",
    },
    activities: {
      walking: "Caminar",
      running: "Correr",
      cycling: "Ciclismo",
    },
    visitorProfiles: {
      tourist: "Turista",
      athlete: "Atleta",
      student: "Estudiante",
    },
    timeOptions: {
      short: "Caminata Corta (30-60 minutos)",
      halfDay: "Medio Día (2-4 horas)",
      fullDay: "Día Completo (5+ horas)",
    },
    features: {
      heritage: {
        title: "Patrimonio Deportivo",
        description: "Conéctate con los legendarios campos de entrenamiento de campeones",
      },
      culture: {
        title: "Contexto Cultural",
        description: "Descubre tradiciones y valores comunitarios en cada ubicación",
      },
      guided: {
        title: "Experiencia Guiada",
        description: "Consejos prácticos para ritmo, terreno y exploración respetuosa",
      },
    },
    about: {
      badge: "Nuestra Historia",
      title: "Donde las Historias Encuentran Pasos",
      subtitle:
        "Creemos que cada sendero en el condado de Nandi lleva el espíritu de los campeones, la sabiduría de la comunidad y la belleza del patrimonio keniano.",
      missionTitle: "Nuestra Misión",
      missionText:
        "Nandi Stories transforma los viajes físicos en experiencias culturales. Conectamos a los visitantes con el rico patrimonio del condado de Nandi, Kenia—el lugar de nacimiento de corredores legendarios.",
      valuesTitle: "Nuestros Valores",
      howItWorksTitle: "Cómo Funciona",
      whyNandiTitle: "¿Por Qué el Condado de Nandi?",
      responsiblyTitle: "Visita Responsablemente",
    },
    footer: {
      description:
        "Experimenta el lugar de nacimiento de campeones a través de narrativas culturales y deportivas inmersivas.",
      explore: "Explorar",
      resources: "Recursos",
      connect: "Conectar",
      copyright: "Nandi Stories. Honrando el patrimonio con respeto y autenticidad.",
      madeWith: "Hecho con",
    },
    champions: {
      title: "Leyendas de Nandi",
      subtitle: "Conoce a los campeones que pusieron al condado de Nandi en el escenario mundial",
      achievements: "Logros",
      trainingGrounds: "Campos de Entrenamiento",
      hometown: "Ciudad Natal",
    },
    trails: {
      title: "Explorar los Senderos",
      subtitle: "Descubre los legendarios campos de entrenamiento y rutas escénicas del condado de Nandi",
      difficulty: "Dificultad",
      distance: "Distancia",
      elevation: "Elevación",
      duration: "Duración",
      highlights: "Destacados",
      culturalNotes: "Notas Culturales",
      difficultyLevels: {
        easy: "Fácil",
        moderate: "Moderado",
        challenging: "Desafiante",
      },
    },
  },
}

export function getTranslation(lang: Language): TranslationKeys {
  return translations[lang] || translations.en
}
