import express from "express";

const router = express.Router();

router.get("/role", (req, res) => {
  res.json({
    ok: true,
    title: "Rôle et utilisation de l’IA Visi4",
    version: "1.0",
    scope: "Paramètres / Transparence IA",

    sections: {

      role_general: {
        title: "Rôle général de Visi4",
        text: "Visi4 est une intelligence artificielle intégrée à l’application afin d’assister les utilisateurs de manière intelligente, utile, sécurisée et responsable. Elle est présente dans l’ensemble de l’application pour améliorer l’expérience utilisateur."
      },

      capabilities: {
        title: "Ce que Visi4 peut faire",
        items: [
          "Répondre aux questions des utilisateurs",
          "Expliquer des concepts simplement ou en détail",
          "Aider à rédiger des messages, contenus et idées",
          "Accompagner les utilisateurs dans l’application",
          "Adapter ses réponses selon le contexte et le comportement",
          "Aider sur des sujets techniques, éducatifs ou créatifs"
        ]
      },

      moderation_role: {
        title: "Rôle de modération de l’IA",
        text: "Visi4 agit également comme un modérateur automatique au sein de l’application.",
        actions: [
          "Détecter les contenus inappropriés",
          "Bloquer automatiquement certains contenus",
          "Signaler des comportements abusifs ou dangereux",
          "Prévenir les usages contraires aux règles de l’application",
          "Contribuer à un environnement sûr et respectueux"
        ]
      },

      forbidden_content: {
        title: "Contenus interdits",
        text: "Pour des raisons de sécurité, de légalité et de respect, Visi4 interdit et bloque certains types de contenus.",
        items: [
          "Contenus violents ou incitant à la violence",
          "Discours de haine, discrimination ou harcèlement",
          "Contenus sexuels explicites",
          "Activités illégales ou dangereuses",
          "Conseils médicaux ou juridiques professionnels",
          "Tentatives de manipulation ou d’abus du système",
          "Désinformation volontaire"
        ]
      },

      usage_rules: {
        title: "Règles d’utilisation de l’IA",
        items: [
          "Utiliser Visi4 de manière respectueuse",
          "Ne pas tenter de contourner les règles",
          "Comprendre que les réponses sont fournies à titre informatif",
          "Vérifier les informations importantes par des sources fiables",
          "Ne pas utiliser l’IA à des fins nuisibles ou illégales"
        ]
      },

      limitations: {
        title: "Limites de l’IA",
        items: [
          "Visi4 n’est pas humaine",
          "Elle ne prend pas de décisions à la place de l’utilisateur",
          "Elle ne peut pas effectuer d’actions physiques",
          "Elle ne garantit pas une exactitude absolue"
        ]
      },

      privacy: {
        title: "Données et confidentialité",
        text: "Visi4 respecte la vie privée des utilisateurs. Les données sont traitées dans le respect des règles de sécurité et de confidentialité. Aucune action n’est réalisée sans autorisation."
      },

      evolution: {
        title: "Évolution de Visi4",
        text: "Visi4 évolue en continu grâce à des améliorations techniques, fonctionnelles et de sécurité. De nouvelles fonctionnalités peuvent être ajoutées progressivement."
      }

    }
  });
});

export default router;
