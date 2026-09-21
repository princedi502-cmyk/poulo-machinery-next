# CONTENT_CONFIRMATIONS.md — Poulo Machinery Website Rebuild

This file lists all ambiguous, unconfirmed, or pending business facts and specifications.
**RULE FOR DEVELOPERS & AI AGENTS:** Do NOT remove any item from this file or convert an unconfirmed claim into a public claim until explicit written confirmation is provided by Poulo Machinery client.

---

## 1. Commercial & Entity Relationship
- [ ] **Exact Relationship with Qingdao Jinxin Hejia Machinery Co., Ltd.**:
  - *Current Status*: Website refers to them as "China Manufacturing Partner".
  - *Pending Confirmation*: Is Poulo an "Authorized Distributor", "Exclusive Distributor", or "India-side Importer & Supplier"?
  - *Guardrail*: Use "sourced from Qingdao Jinxin Hejia Machinery Co., Ltd., China". Never call Poulo the manufacturer.

- [ ] **Meaning of "Since 1990"**:
  - *Current Status*: Brochure mentions "Association with Jinxinheija (Since 1990)".
  - *Pending Confirmation*: Does 1990 refer to Jinxin Hejia's founding year in China or Poulo's establishment year?
  - *Guardrail*: Omit "Since 1990" until clarified.

---

## 2. Product Specifications & Model Names
- [ ] **Water Jet Loom Model 2**:
  - *Current Status*: Brochure has conflicting references to PL822 and PL882.
  - *Pending Confirmation*: What is the exact model name for the second Water Jet Loom?
  - *Guardrail*: Page `/water-jet-looms/[model]` is withheld from production indexing until confirmed.

- [ ] **PL5810 Installed Power Range**:
  - *Current Status*: Section 1 of catalogue lists 1.5–5.4 kW; spec table lists up to 7.5 kW.
  - *Pending Confirmation*: What is the standard installed motor power rating for PL5810?
  - *Guardrail*: Display "Power configuration dependent — confirm before order". Do not state a single fixed kW number.

- [ ] **AI Concept Graphic (Air Jet Loom Anatomy)**:
  - *Current Status*: Supplied AI concept image is labeled "PX-1900". Catalogue specifies Air Jet Loom model as "PL920".
  - *Pending Confirmation*: Is PX-1900 a valid model name, or is PL920 the sole Air Jet model?
  - *Guardrail*: Do NOT publish the PX-1900 diagram. Use verified PL920 labels only.

---

## 3. Services, Warranty & Support Commitments
- [ ] **Installation & Commissioning**:
  - *Current Status*: Unconfirmed if Poulo provides on-site installation in India.
  - *Guardrail*: `/service-support/` route remains hidden/flagged until confirmed.

- [ ] **Spare Parts Stock & Warranty**:
  - *Current Status*: Unconfirmed if Poulo maintains an in-house spare parts warehouse in Surat or specific warranty durations.
  - *Guardrail*: Do not advertise "24/7 support", "1-year warranty", or "ready spare parts stock".

- [ ] **Installed Machine Count & Geographical Reach**:
  - *Current Status*: Unconfirmed total machine installations and states served across India.
  - *Guardrail*: Omit numeric counts (e.g. "500+ machines installed").

---

## 4. Assets & Partner Logos
- [ ] **Factory Photography Attribution**:
  - *Current Status*: Shared Google Drive photo library contains panoramic factory and workshop shots.
  - *Guardrail*: Always attribute factory imagery to Qingdao Jinxin Hejia in China. Never label as Poulo's Surat factory.

- [ ] **Third-Party Component Logos**:
  - *Current Status*: Logos of component suppliers appear in the catalogue.
  - *Pending Confirmation*: Do we have explicit permission to display third-party brand logos?
  - *Guardrail*: List component names as plain text specs rather than displaying brand logos without permission.

