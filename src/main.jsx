import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import ProjectPage from './ProjectPage.jsx';

const experiences = [
  [
    "Janv. — avr. 2026",
    "Rénovation énergétique performante",
    "Chef de projet en rénovation énergétique performante · Formation achevée",
    "éRE · Biarritz · Formation sur site",
    [
      "Analyse énergétique du bâtiment : enveloppe thermique, déperditions, parois, confort thermique et performance énergétique.",
      "Audit énergétique en formation : études et scénarios avec CapRénov, comparaison des solutions techniques et estimation des gains.",
      "Étude des systèmes de chauffage, des pompes à chaleur, de la ventilation et des énergies renouvelables selon le bâtiment et les équipements existants.",
      "Conception de scénarios de rénovation globale, chiffrage des travaux et analyse de leur cohérence technique et économique.",
      "Cadre réglementaire, dispositifs d’aides financières et principes de mobilisation dans un projet.",
      "Préparation des travaux : marchés, coordination des corps de métier, organisation des interventions, prévention des risques et gestion des déchets.",
      "Accompagnement des ménages : analyse des besoins, présentation des solutions, sensibilisation aux économies d’énergie et prise en compte du budget.",
      "Certification complémentaire : Sauveteur Secouriste du Travail (SST)."
    ]
  ],
  [
    "Mars 2023 — juil. 2025",
    "Un projet personnel de rénovation globale",
    "Rénovation énergétique et création d’une extension de 40 m² au sol",
    "Projet personnel · Anglet · Accompagnement SOLIHA",
    [
      "Analyse de l’existant et identification des besoins de rénovation.",
      "Choix techniques : isolation thermique par l’extérieur, isolation des combles, pompe à chaleur air-eau et amélioration de la ventilation.",
      "Comparaison des devis, sélection des solutions techniques et choix des entreprises.",
      "Organisation des interventions, coordination des artisans et suivi de la réalisation des travaux.",
      "Articulation entre rénovation de la maison et extension, avec prise en compte des contraintes techniques, budgétaires et esthétiques.",
      "Cette expérience a éveillé mon intérêt pour la rénovation énergétique et m’a conduite à me former à l’éRE."
    ]
  ],
  [
    "Avr. 2022 — juin 2025",
    "L’accueil et la coordination au quotidien",
    "Réceptionniste hôtellerie",
    "Ibis Hôtel · Anglet · CDI",
    [
      "Gestion et coordination des arrivées et départs (check-in / check-out).",
      "Gestion des réservations et optimisation du taux d’occupation.",
      "Relation client et traitement des demandes spécifiques.",
      "Gestion des imprévus et résolution de problèmes.",
      "Coordination avec les équipes d’étage, la maintenance et la direction.",
      "Suivi administratif et encaissements."
    ]
  ],
  [
    "Nov. 2017 — sept. 2019",
    "Le suivi et la satisfaction client",
    "Réceptionniste",
    "Hôtel Les Genêts · Bayonne · CDI",
    [
      "Accueil physique et téléphonique, réservations et suivi des dossiers.",
      "Gestion de la satisfaction client.",
      "Facturation et encaissement."
    ]
  ],
  [
    "Juil. — sept. 2017",
    "Une relation client interculturelle",
    "Chargée des relations clientèle",
    "Sofitel Biarritz Le Miramar Thalassa sea & spa · Biarritz · Contrat",
    [
      "Gestion et accompagnement d’une clientèle russe haut de gamme.",
      "Adaptation des services aux spécificités culturelles et aux attentes du marché.",
      "Interface entre les clients et les équipes internes.",
      "Gestion des demandes complexes et personnalisées.",
      "Contribution à la satisfaction et à la fidélisation client."
    ]
  ],
  [
    "Oct. 2009 — nov. 2011",
    "Des projets sur mesure, de A à Z",
    "Chef de projet FIT — Marché russe (tourisme individuel)",
    "Stratagem Creative Solutions · Paris · CDI",
    [
      "Gestion de projets touristiques sur mesure de A à Z.",
      "Coordination de plusieurs prestataires en environnement international et négociation avec les fournisseurs.",
      "Planification, suivi opérationnel, gestion des priorités et respect des délais.",
      "Relation client premium et gestion des attentes.",
      "Résolution de problématiques complexes."
    ]
  ],
  [
    "Oct. 2007 — déc. 2008",
    "Le conseil à une clientèle internationale",
    "Conseillère clientèle multilingue",
    "Nestlé Nespresso · Paris · CDI",
    [
      "Conseil et accompagnement d’une clientèle internationale haut de gamme.",
      "Analyse des besoins et recommandation de solutions adaptées.",
      "Développement du chiffre d’affaires et fidélisation client.",
      "Encaissements et suivi des commandes.",
      "Coordination avec l’équipe commerciale, contribution à l’expérience client et à l’image de marque."
    ]
  ],
  [
    "Avr. 2001 — sept. 2005",
    "Concevoir et coordonner les séjours",
    "Chef de projet FIT — Marché russe (tourisme individuel)",
    "Evolution Voyages · Paris · CDI",
    [
      "Conception et coordination de séjours sur mesure pour une clientèle individuelle russe.",
      "Analyse des besoins et élaboration de propositions personnalisées.",
      "Pilotage de l’hébergement, du transport et des services annexes.",
      "Coordination des prestataires et partenaires.",
      "Suivi budgétaire et optimisation des coûts.",
      "Gestion des imprévus, qualité de service et interface entre clients internationaux et équipes opérationnelles."
    ]
  ],
  [
    "Sept. 2000 — avr. 2001",
    "La rigueur des dossiers et des délais",
    "Assistante administrative et commerciale",
    "Désirade Service Visa · Paris · CDI",
    [
      "Gestion et suivi de dossiers impliquant plusieurs intervenants.",
      "Coordination entre services internes et partenaires.",
      "Suivi des échéances et respect des délais.",
      "Contrôle administratif et conformité des documents."
    ]
  ],
  [
    "Août 1997 — juil. 1998",
    "Transmettre et accompagner",
    "Professeure de littérature russe",
    "École Académique de Commerce Internationale · Russie · CDI",
    [
      "Préparation et animation des cours de littérature.",
      "Conception de supports pédagogiques structurés et transmission claire de contenus complexes.",
      "Gestion d’un groupe d’élèves et maintien d’un cadre de travail.",
      "Évaluation des acquis et suivi individualisé.",
      "Participation aux réunions pédagogiques et coordination avec l’équipe éducative."
    ]
  ]
];
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <>
    <a className="skip" href="#main">Aller au contenu</a>
    <header className="header"><a className="brand" href="#accueil" aria-label="Elena Pidoux, accueil">elena pidoux<span>RELATION CLIENT & HABITAT</span></a><button className="menu-toggle" aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Fermer' : 'Menu'}</button><nav id="navigation" className={menuOpen ? 'open' : ''} aria-label="Navigation principale" onClick={() => setMenuOpen(false)}><a href="#approche">À propos</a><a href="#projet">Projet habitat</a><a href="#parcours">Parcours</a><a className="nav-contact" href="#contact">Échangeons</a></nav></header>
    <main id="main">
      <section id="accueil" className="hero wrap"><div className="hero-copy"><p className="eyebrow">ANGLET · PAYS BASQUE</p><h1>Le sens du contact.<br/>Le goût de <em>l’habitat.</em></h1><p className="intro">Relation client, coordination de projets et rénovation énergétique : je souhaite mettre mon expérience internationale et ma formation au service de projets concrets liés à l’habitat.</p><div className="actions"><a className="button dark" href="#parcours">Découvrir mon parcours</a><a className="text-link" href="https://www.linkedin.com/in/elena-pidoux-95a07889/" target="_blank" rel="noopener noreferrer">Mon LinkedIn ↗</a></div><div className="hero-note"><span className="small-mark">ep.</span><p>Elena Pidoux<span>Relation client · Conseil & vente · Projets habitat</span></p></div></div><figure className="hero-portrait"><img src={`${import.meta.env.BASE_URL}images/elena-pidoux.png`} alt="Portrait d’Elena Pidoux" width="410" height="615" fetchPriority="high"/><figcaption><span>Elena Pidoux</span><span>Le sens du contact, tout simplement.</span></figcaption></figure></section>
      <div className="ribbon"><span>ÉCOUTER AVEC ATTENTION</span><i>✳</i><span>COMPRENDRE LES BESOINS</span><i>✳</i><span>FAIRE AVANCER LES PROJETS</span></div>
      <section id="approche" className="section wrap"><div className="section-heading"><p className="eyebrow">01 — À PROPOS</p><h2>Une double expertise.<br/><em>Au service de l’habitat.</em></h2></div><div className="about-profile"><p className="eyebrow">À PROPOS</p><div className="about-copy"><p>Professionnelle expérimentée de la relation client et de la coordination de projets en environnement international, j’ai récemment achevé une formation de Chef de projet en rénovation énergétique performante à l’école éRE de Biarritz.</p><p>Mon parcours m’a permis de développer une solide capacité d’écoute, d’analyse des besoins, d’organisation et de coordination multi-intervenants. À ces compétences s’ajoutent une approche pragmatique des projets, un intérêt marqué pour l’habitat, les matériaux et l’optimisation des espaces, ainsi qu’une expérience personnelle de rénovation énergétique globale.</p><p>Aujourd’hui, je souhaite mettre cette double expertise au service de projets liés à l’habitat, en privilégiant la relation client, le conseil et l’accompagnement de projets concrets, avec une attention particulière portée à la performance énergétique et à la qualité des solutions proposées.</p></div></div><div className="skills"><article><span className="number">01</span><h3>Relation client & conseil</h3><p>Analyse des besoins, recommandations adaptées, présentation des solutions, fidélisation et accompagnement d’une clientèle internationale.</p><span className="tag">Écoute · Communication interculturelle</span></article><article><span className="number">02</span><h3>Coordination & organisation</h3><p>Planification, coordination multi-intervenants, gestion des prestataires, respect des délais et résolution des imprévus.</p><span className="tag">Projets · Travail d’équipe</span></article><article><span className="number">03</span><h3>Budget & suivi administratif</h3><p>Comparaison des devis, suivi budgétaire, optimisation des coûts, négociation fournisseurs et contrôle des dossiers.</p><span className="tag">Rigueur · Gestion des priorités</span></article><article><span className="number">04</span><h3>Analyse & scénarios énergétiques</h3><p>Compétences développées en formation : enveloppe thermique, déperditions, audit avec CapRénov, scénarios et estimation des gains.</p><span className="tag">Formation éRE · CapRénov</span></article><article><span className="number">05</span><h3>Solutions & préparation des travaux</h3><p>Étude des PAC, de la ventilation et des énergies renouvelables ; chiffrage, réglementation, aides, prévention des risques et gestion des déchets.</p><span className="tag">Formation éRE · Certification SST</span></article><article><span className="number">06</span><h3>Accompagnement & transmission</h3><p>Explication claire de contenus complexes, présentation des choix de rénovation et sensibilisation aux économies d’énergie selon les besoins et le budget.</p><span className="tag">Pédagogie · Accompagnement des ménages</span></article></div><div className="practical skills-practical"><div><h4>LANGUES</h4><p>Français <span>courant</span><br/>Russe <span>langue maternelle</span><br/>Anglais <span>intermédiaire</span></p></div><div><h4>OUTILS</h4><p>Logiciel CAP RENOV+<br/>Outils bureautiques<br/>Planification et aménagement IKEA</p></div><div><h4>MOBILITÉ</h4><p>Permis B<br/>Véhicule personnel</p></div></div></section>
      <section id="projet" className="project"><div className="wrap"><div className="project-top"><div><p className="eyebrow">02 — MON PROJET HABITAT</p><h2>Une maison de 1957.<br/><em>Un nouveau chapitre.</em></h2></div><span className="project-location">Anglet<br/>Mars 2023 — juillet 2025</span></div><p className="project-lead">La rénovation de ma maison a donné une dimension concrète à mon intérêt pour l’habitat. J’ai coordonné directement les artisans et suivi les choix techniques et budgétaires. Ce projet est aussi le support de mon cas pratique en rénovation énergétique : analyser l’existant, comparer les scénarios et construire un programme cohérent.</p><div className="project-gallery"><figure><img src={`${import.meta.env.BASE_URL}images/maison-avant.jpg`} alt="Maison avant rénovation, façade blanche et garage existant" loading="lazy" width="960" height="720"/><figcaption><span>01 — AVANT</span> Le bâti existant</figcaption></figure><figure><img src={`${import.meta.env.BASE_URL}images/maison-apres.jpg`} alt="Maison rénovée et extension, avec façades claires et terrasse" loading="lazy" width="960" height="720"/><figcaption><span>02 — APRÈS</span> Une nouvelle lecture de la maison</figcaption></figure></div><div className="stats"><div><strong>1957</strong><span>Année de construction du bâti étudié</span></div><div><strong>40 m²</strong><span>Surface au sol de l’extension · Projet personnel</span></div><div><strong>3 scénarios</strong><span>Comparés avec Cap Renov+</span></div></div><div className="project-details"><article><span>COMPRENDRE L’EXISTANT</span><h3>Partir du bâtiment et des usages</h3><p>Analyse des murs en briques, de l’isolation dégradée des combles, des menuiseries et du chauffage au gaz. Lecture des diagnostics et modélisation énergétique pour identifier les priorités de travaux.</p></article><article><span>COMPARER LES SOLUTIONS</span><h3>Une rénovation par étapes</h3><p>Le scénario retenu associe isolation par l’extérieur, ouate de cellulose dans les combles, pompe à chaleur air-eau sur radiateurs existants et VMC hygroréglable. Un poêle à bûches complète ensuite le dispositif.</p></article><article><span>PENSER L’ENSEMBLE</span><h3>Intégrer l’extension dès le départ</h3><p>Le projet personnel associe la rénovation de la maison et la création d’une extension de 40 m² au sol, en tenant compte des contraintes techniques, budgétaires et esthétiques. Le cas pratique de formation présente une extension de 33 m² dans son périmètre d’étude.</p></article></div><div className="project-study"><div><p className="eyebrow">DE L’ANALYSE AU SUIVI</p><h3>Relier technique, budget et organisation</h3><p>Le dossier développe la comparaison des devis, le financement, le phasage des travaux, les points de contrôle à la réception et l’entretien des équipements. Une approche qui associe performance du logement et confort au quotidien.</p></div><div className="study-result"><strong>73 %</strong><span>Gain énergétique annoncé dans la simulation du scénario retenu</span><p>Les classes B puis C présentées dans le dossier correspondent aux étapes modélisées. Ces résultats d’étude ne constituent pas une mesure des consommations après travaux.</p></div></div><a className="button project-download" href={`${import.meta.env.BASE_URL}projet`} target="_blank" rel="noopener noreferrer">Découvrir le projet complet <span>Nouvel onglet ↗</span></a><p className="project-caption">Projet personnel et cas pratique de formation · Photographies extraites du dossier fourni.</p></div></section>
      <section id="parcours" className="section wrap"><div className="section-heading"><p className="eyebrow">03 — MON PARCOURS</p><h2>Le lien humain,<br/><em>depuis toujours.</em></h2></div><div className="timeline">{experiences.map(([date,title,role,company,description]) => <article className="experience" key={`${company}-${date}`}><span className="date">{date}</span><div><h3>{title}</h3><h4>{role}</h4><p className="company">{company}</p><ul className="experience-tasks">{description.map(task => <li key={task}>{task}</li>)}</ul></div></article>)}</div></section>
      <section className="education-section"><div className="wrap education"><div><p className="eyebrow">04 — CONTINUER À APPRENDRE</p><h2>La curiosité<br/><em>comme moteur.</em></h2><p>J’ai achevé la formation de Chef de projet en rénovation énergétique performante à l’école éRE de Biarritz. Elle complète mon expérience de la relation client, de la coordination de projets et de la rénovation de ma maison.</p></div><div className="degrees"><article className="featured-degree"><span>JANVIER — AVRIL 2026 · CERTIFICAT OBTENU</span><h3>Chef de projet en rénovation énergétique performante</h3><p>École de la Rénovation Énergétique (éRE) · Biarritz</p><p className="sst-certificate">Certification complémentaire : Sauveteur Secouriste du Travail (SST).</p></article><article><span>2012 — 2014</span><h3>Master 2 Économie du développement — Tourisme international</h3><p>Licence professionnelle Hôtellerie et tourisme (VAE)<br/>Université Paris 1 Panthéon-Sorbonne</p></article><article><span>1992 — 1997</span><h3>DEA de philologie</h3><p>Université pédagogique de Samara · Russie</p></article></div></div></section>
      <section className="section wrap personal"><div><p className="eyebrow">05 — AU-DELÀ DU PARCOURS</p><h2>Ce qui<br/><em>m’anime aussi.</em></h2></div><div className="personal-content"><div className="interests"><article><h3>Redonner vie</h3><p>La restauration de mobilier ancien, le plaisir des matières et des objets qui ont une histoire.</p></article><article><h3>Découvrir</h3><p>Les voyages, l’architecture, les intérieurs et les différentes façons d’habiter.</p></article><article><h3>Transmettre</h3><p>L’enseignement bénévole du russe : partager une langue et créer des liens.</p></article><article><h3>Prendre l’air</h3><p>La randonnée et la course à pied.</p></article></div></div></section>
      <section id="contact" className="contact"><div className="wrap"><p className="eyebrow">ET SI NOUS ÉCHANGIONS ?</p><h2>Un besoin, une opportunité,<br/><em>une conversation.</em></h2><p>Vous recherchez un profil expérimenté en relation client et en coordination de projets, formé à la rénovation énergétique et attentif à la qualité des solutions proposées ? Je serais heureuse d’échanger avec vous.</p><a className="contact-email" href="mailto:elena.pidoux@gmail.com">elena.pidoux@gmail.com</a><div className="contact-bottom"><a href="tel:+33610338679">06 10 33 86 79</a><a href="https://www.linkedin.com/in/elena-pidoux-95a07889/" target="_blank" rel="noopener noreferrer">LinkedIn · Elena Pidoux ↗</a><span>Anglet · Pays basque, France</span></div></div></section>
    </main><footer className="wrap"><a className="footer-brand" href="#accueil">elena pidoux.</a><span>Relation client & projets habitat</span><a href="#accueil">Retour en haut</a></footer>
  </>;
}
const isProjectPage = window.location.pathname.replace(/\/+$/, '') === `${import.meta.env.BASE_URL}projet`.replace(/\/+$/, '');
if (isProjectPage) {
  document.title = 'Résidence Pidoux — Étude de rénovation | Elena Pidoux';
  document.querySelector('meta[name="description"]').setAttribute('content', 'Le projet de rénovation de la résidence Pidoux à Anglet : diagnostic, extension, scénarios énergétiques, financement, chantier et entretien.');
}
createRoot(document.getElementById('root')).render(<React.StrictMode>{isProjectPage ? <ProjectPage/> : <App/>}</React.StrictMode>);
