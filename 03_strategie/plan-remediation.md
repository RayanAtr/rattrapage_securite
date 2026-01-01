# Plan de Remédiation Priorisé – SecureBank

## Objectif

Ce plan de remédiation vise à corriger les vulnérabilités identifiées
de manière  priorisée, réaliste et opérationnelle , en tenant compte
des contraintes métier et techniques.

---

## Phase 1 – CRITIQUE (0 à 48h)

Objectif : supprimer immédiatement les risques majeurs pouvant entraîner
une compromission totale du système ou des pertes financières directes.

| Phase | Vulnérabilité | Action | Effort estimé | Risque si non traité |
|------|--------------|--------|---------------|---------------------|
| 1 | SQL Injection `/api/login` | Requêtes préparées + validation des entrées | 1 jour | Compromission totale des comptes |
| 1 | Authentification faible | Mise en place JWT signé + bcrypt | 1 jour | Usurpation d’identité |
| 1 | IDOR sur virements | Vérification de l’identité côté serveur | 1 jour | Vol d’argent |
| 1 | Secrets en dur | Déplacement vers variables d’environnement | 0.5 jour | Compromission base de données |

---

## Phase 2 – HAUTE PRIORITÉ (1 semaine)

Objectif : renforcer la sécurité globale et éviter les régressions.

| Phase | Vulnérabilité | Action | Effort estimé | Risque si non traité |
|------|--------------|--------|---------------|---------------------|
| 2 | Absence de rate limiting | Mise en place d’un rate limiter | 0.5 jour | Brute force |
| 2 | CORS permissif | Restriction des origines autorisées | 0.5 jour | Attaques cross-origin |
| 2 | Logs sensibles | Nettoyage et sécurisation des logs | 1 jour | Fuite de données |
| 2 | Absence de tests | Ajout de tests de sécurité | 2 jours | Régressions |

---

## Phase 3 – AMÉLIORATION CONTINUE (1 mois)

Objectif : inscrire la sécurité dans une démarche durable.

| Phase | Vulnérabilité | Action | Effort estimé | Risque si non traité |
|------|--------------|--------|---------------|---------------------|
| 3 | Absence de monitoring | Mise en place SIEM / alertes | 3 jours | Détection tardive |
| 3 | Manque de formation | Formation secure coding | 2 jours | Nouvelles failles |
| 3 | Pas d’audit régulier | Audits périodiques | 1 jour/mois | Dette sécurité |

---

## Conclusion

Cette priorisation permet de  réduire rapidement le risque critique 
tout en construisant une  sécurité durable et réaliste .
