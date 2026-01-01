# Monitoring et Détection des Incidents – SecureBank

## Objectif

Mettre en place une capacité de  détection rapide des attaques  et de
 réponse efficace aux incidents de sécurité , afin de limiter l’impact
financier, opérationnel et réputationnel.

---

## Sources de logs surveillées

- Logs applicatifs (authentification, transferts, erreurs)
- Logs d’accès API (IP, endpoint, statut HTTP)
- Logs base de données (requêtes anormales, erreurs)
- Logs WAF et Load Balancer

---

## Indicateurs de compromission (IOC)

- Multiples échecs de connexion sur un court laps de temps
- Tentatives répétées de virement à montants élevés
- Augmentation soudaine des erreurs 401 / 403
- Utilisation de tokens invalides ou expirés
- Requêtes bloquées par le WAF

---

## Outils recommandés

-  SIEM  : ELK Stack, Splunk, AWS CloudWatch
-  Alerting  : PagerDuty, OpsGenie
-  IDS / IPS  : Suricata, AWS GuardDuty

---

## Processus de gestion des incidents

1. Détection automatique via alertes
2. Qualification par l’équipe sécurité
3. Isolation du composant affecté
4. Analyse forensique
5. Remédiation
6. Communication interne et externe

---

## Bénéfices métier

- Réduction du temps de détection (MTTD)
- Limitation des pertes financières
- Amélioration de la conformité RGPD / PCI-DSS
- Renforcement de la confiance client
