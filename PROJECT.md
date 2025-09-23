# Project Plan: Database Schemas

## Project Metadata

- **Created:** September 2, 2024
- **Last Updated:** September 22, 2025 (ControlledTerm ontological architecture refactoring)
- **Version:** 1.0.0
- **Repository:** https://github.com/gabdank/schemas
- **Claude Project:** Database Schema Establishment

---

## 🎯 Project Overview

### Objective

Establish comprehensive JSON Schema definitions for biological research database entities, including users, labs, donors, biosamples, treatments, genetic modifications, and library preparation workflows.

### Scope

- **In Scope:**
  - Complete schema ecosystem for biological research (15 schemas implemented)
  - User management, lab organization, and sample tracking
  - Treatment and genetic modification documentation
  - Library preparation workflows (droplet and plate-based)
  - Abstract/concrete class hierarchies with inheritance
  - Advanced validation rules and dependent schemas
  - Schema versioning and migration strategy
  - Integration with biological data standards (ontologies, CHEBI, etc.)
- **Out of Scope:**
  - Database implementation
  - API endpoints
  - User interface components
- **Success Criteria:**
  - ✅ Complete schema ecosystem with 15 schemas and 71 passing tests
  - ✅ Schema compatibility with biological research standards
  - ✅ Proper version management and comprehensive documentation
  - ✅ Abstract/concrete inheritance patterns for extensibility

### Key Technologies

- **Schema Standard:** JSON Schema draft 2020-12
- **Reference Implementations:** IGVFD schemas, Lattice-DB schemas
- **Validation:** JSON Schema validation rules
- **Version Control:** Git-based schema versioning

---

## 📁 Repository Structure

```
schemas/
├── PROJECT.md                           # This document
├── README.md                            # Repository overview
├── package.json                         # NPM dependencies and scripts
├── package-lock.json                    # NPM lock file
├── jest.config.js                       # Jest testing configuration
├── .prettierrc                          # Code formatting configuration
├── .gitignore                           # Git ignore patterns
├── schemas/                             # Core schema definitions (15 schemas)
│   ├── mixins.json                     # Basic item mixin properties
│   ├── User.json                       # User entity schema (concrete)
│   ├── Lab.json                        # Lab entity schema (concrete)
│   ├── Library.json                    # Library entity schema (abstract)
│   ├── DropletLibrary.json             # Droplet library schema (concrete)
│   ├── PlateBasedLibrary.json          # Plate-based library schema (concrete)
│   ├── Donor.json                      # Donor entity schema (concrete)
│   ├── Biosample.json                  # Biosample entity schema (abstract)
│   ├── ControlledTerm.json             # Controlled vocabulary terms from biological ontologies
│   ├── Tissue.json                     # Tissue sample schema (concrete)
│   ├── PrimaryCell.json                # Primary cell schema (concrete)
│   ├── InVitroSystem.json              # In vitro system schema (concrete)
│   ├── InVivoSystem.json               # In vivo system schema (concrete)
│   ├── Treatment.json                  # Treatment schema (concrete)
│   └── GeneticModification.json        # Genetic modification schema (concrete)
├── tests/                              # Schema validation tests
│   ├── schemas/                        # Schema structure tests
│   │   └── schema.validation.test.js   # Jest test suite (71 tests)
│   └── examples/                       # Example data validation tests
│       ├── user/                       # User test data
│       │   ├── valid-user.json
│       │   └── invalid-user.json
│       ├── donor/                      # Donor test data
│       │   ├── valid-donor.json
│       │   └── invalid-donor.json
│       ├── biosample/                  # Biosample test data
│       │   ├── valid-biosample.json
│       │   └── invalid-biosample.json
│       ├── tissue/                     # Tissue test data
│       │   ├── valid-tissue.json
│       │   └── invalid-tissue.json
│       ├── primary_cell/               # Primary cell test data
│       │   ├── valid-primary-cell.json
│       │   └── invalid-primary-cell.json
│       ├── in_vitro_system/            # In vitro system test data
│       │   ├── valid-in-vitro-system.json
│       │   └── invalid-in-vitro-system.json
│       └── in_vivo_system/             # In vivo system test data
│           ├── valid-in-vivo-system.json
│           └── invalid-in-vivo-system.json
├── coverage/                           # Test coverage reports
└── .github/
    └── workflows/                      # CI/CD for schema validation
        └── schema-validation.yml       # Auto-formatting + validation workflow
```

### Key Files for Claude Code

| File Path                                 | Purpose                         | Current Status |
| ----------------------------------------- | ------------------------------- | -------------- |
| `schemas/mixins.json`                     | Basic item mixin properties     | ✅ Complete    |
| `schemas/User.json`                       | User entity schema (concrete)   | ✅ Complete    |
| `schemas/Lab.json`                        | Lab entity schema (concrete)    | ✅ Complete    |
| `schemas/Library.json`                    | Library entity schema (abstract)| ✅ Complete    |
| `schemas/DropletLibrary.json`             | Droplet library schema (concrete)| ✅ Complete   |
| `schemas/PlateBasedLibrary.json`          | Plate-based library schema (concrete)| ✅ Complete |
| `schemas/Donor.json`                      | Donor entity schema (abstract)  | ✅ Complete    |
| `schemas/Biosample.json`                  | Biosample schema (abstract)     | ✅ Complete    |
| `schemas/ControlledTerm.json`             | Controlled vocabulary terms     | ✅ Complete    |
| `schemas/Tissue.json`                     | Tissue sample schema (concrete) | ✅ Complete    |
| `schemas/PrimaryCell.json`                | Primary cell schema (concrete)  | ✅ Complete    |
| `schemas/InVitroSystem.json`              | In vitro system schema (concrete)| ✅ Complete   |
| `schemas/InVivoSystem.json`               | In vivo system schema (concrete) | ✅ Complete    |
| `tests/schemas/schema.validation.test.js` | Jest test suite (71 tests)      | ✅ Complete    |
| `PROJECT.md`                              | Project documentation           | ✅ Complete    |

---

## 🚀 Project Phases

### Phase 1: Schema Design & Planning

**Status:** 🟡 In Progress  
**GitHub Branch:** `main`  
**Target Date:** September 2025

**Objectives:**

- Analyze existing schema implementations (igvfd, lattice-db-old)
- Define core schema requirements for Donor and Biosample entities
- Establish schema versioning strategy
- Update project documentation

**Claude Code Context:**

```
Focus on understanding existing schema patterns. Reference implementations:
1. /Users/gabdank/Documents/Repositories/igvfd/src/igvfd/schemas/ (modern)
2. /Users/gabdank/Documents/Repositories/lattice-db-old/encoded/src/encoded/schemas/ (legacy)
Use JSON Schema draft 2020-12 for all new schemas.
```

### Phase 2: Core Schema Implementation

**Status:** ⏳ Planned  
**GitHub Branch:** `feature/core-schemas`  
**Target Date:** September 2025

**Objectives:**

- Implement Donor.json schema with comprehensive validation
- Implement Biosample.json schema with biological entity requirements
- Create mixin patterns for reusable schema components
- Establish schema relationships and dependencies

**Claude Code Context:**

```
Implement schemas in /schemas/ directory. Base designs on igvfd patterns:
- Use JSON Schema draft 2020-12
- Include mixinProperties for code reuse
- Add comprehensive validation rules
- Follow biological data standards
```

### Phase 3: Schema Validation & Testing

**Status:** ⏳ Planned  
**GitHub Branch:** `feature/validation`

**Objectives:**

- Create validation test suites for both schemas
- Test schema compatibility with example data
- Implement CI/CD validation workflows
- Document schema usage patterns

### Phase 4: Documentation & Integration

**Status:** ⏳ Planned  
**GitHub Branch:** `feature/docs`

**Objectives:**

- Complete schema documentation
- Create migration guides from legacy schemas
- Prepare integration guidelines for database implementation

---

## 📋 Detailed Task Breakdown

### Current Sprint Tasks - Sample Hierarchy Development

#### Active Tasks

- [ ] **Sample Hierarchy Expansion** - Implement concrete sample types
  - **Focus:** Create concrete implementations of abstract Biosample class
  - **Next Targets:** PrimaryCell, Organoid, CellLine schemas
  - **Status:** Planning
  - **Assignee:** Claude Code
  - **Notes:** Build on Tissue.json pattern for additional sample types

- [ ] **Ontology Integration** - Expand ontology term support
  - **Reference Files:**
    - `/Users/gabdank/Documents/Repositories/igvfd/src/igvfd/schemas/ontology_term.json`
    - `/Users/gabdank/Documents/Repositories/lattice-db-old/encoded/src/encoded/schemas/ontology_term.json`
  - **Status:** BiosampleOntologyTerm complete, expand for other domains
  - **Next:** Lab ontology terms, treatment terms

#### Completed Tasks

- [x] **Abstract Class System** - Donor and Biosample as abstract classes
  - **Completed:** September 3, 2025
  - **Files:** `schemas/Donor.json`, `schemas/Biosample.json`
  - **Commit:** 4dcf390

- [x] **Tissue Implementation** - First concrete sample type with inheritance
  - **Completed:** September 3, 2025
  - **Files:** `schemas/Tissue.json`
  - **Features:** Abstract class inheritance, comprehensive validation
  - **Commit:** 4dcf390

- [x] **Ontology Foundation** - BiosampleOntologyTerm implementation
  - **Completed:** September 3, 2025
  - **Files:** `schemas/BiosampleOntologyTerm.json`
  - **Integration:** Updated Biosample.json linkTo references
  - **Commit:** 4dcf390

- [x] **Repository Initialization** - Initial commit and setup
  - **Completed:** September 2, 2025
  - **Commit:** 441a1f7

---

## 🔄 Schema Development Plan

### Target Schema Registry

| Schema Name           | Version | File Path                            | Status      | Class Type | Reference Implementation                   |
| --------------------- | ------- | ------------------------------------ | ----------- | ---------- | ------------------------------------------ |
| mixins                | 1.0.0   | `schemas/mixins.json`                | ✅ Complete | Mixin      | IGVFD mixins.json (basic_item only)        |
| User                  | 1.0.0   | `schemas/User.json`                  | ✅ Complete | Concrete   | IGVFD user.json (simplified)               |
| Lab                   | 1.0.0   | `schemas/Lab.json`                   | ✅ Complete | Concrete   | IGVFD lab.json (minimal)                   |
| Library               | 1.0.0   | `schemas/Library.json`               | ✅ Complete | Abstract   | IGVFD library.json (minimal)               |
| DropletLibrary        | 1.0.0   | `schemas/DropletLibrary.json`        | ✅ Complete | Concrete   | 10X technology-specific properties (chemistry, barcodes, features) |
| PlateBasedLibrary     | 1.0.0   | `schemas/PlateBasedLibrary.json`     | ✅ Complete | Concrete   | Plate-based workflows (QuantumScale, sci-RNA-seq3, indexing) |
| Donor                 | 1.0.0   | `schemas/Donor.json`                 | ✅ Complete | Abstract   | IGVFD donor.json (simplified)              |
| Biosample             | 1.0.0   | `schemas/Biosample.json`             | ✅ Complete | Abstract   | IGVFD biosample.json (simplified)          |
| ControlledTerm        | 1.0.0   | `schemas/ControlledTerm.json`        | ✅ Complete | Concrete   | Multi-ontology terms (CL, EFO, UBERON, CHEBI, UniProt, Cellosaurus) |
| Tissue                | 1.0.0   | `schemas/Tissue.json`                | ✅ Complete | Concrete   | IGVFD + Lattice-DB tissue + tissue_section |
| PrimaryCell           | 1.0.0   | `schemas/PrimaryCell.json`           | ✅ Complete | Concrete   | IGVFD primary_cell.json (simplified)       |
| InVitroSystem         | 1.0.0   | `schemas/InVitroSystem.json`         | ✅ Complete | Concrete   | IGVFD in_vitro_system.json (minimal)       |
| InVivoSystem          | 1.0.0   | `schemas/InVivoSystem.json`          | ✅ Complete | Concrete   | IGVFD in_vivo_system.json (minimal)        |
| Treatment             | 1.0.0   | `schemas/Treatment.json`             | ✅ Complete | Concrete   | Chemical treatments with composite/non-composite validation |
| GeneticModification   | 1.0.0   | `schemas/GeneticModification.json`   | ✅ Complete | Concrete   | CRISPR and genetic engineering metadata    |
| ExperimentalCondition | 1.0.0   | `schemas/ExperimentalCondition.json` | ✅ Complete | Concrete   | Environmental parameters (pH, temperature, diet, etc.) |

### Schema Design Decisions

#### Mixins Design Notes

**Minimal Approach:** Only `basic_item` mixin included  
**Key Features:**

- Core metadata properties (uuid, schema_version, aliases, creation_timestamp, submitted_by, submitter_comment, description, notes)
- Reduces complexity while maintaining essential functionality

#### User Schema Design Notes

**Based on:** IGVFD `/profiles/user.json` (JSON Schema draft 2020-12)  
**Simplified Properties:**

- `basic_item` mixin for core metadata
- `email` (required) - unique email address with validation
- `first_name` (required) - user's given name
- `last_name` (required) - user's family name

#### Donor Schema Design Notes

**Based on:** IGVFD `/profiles/donor.json` (JSON Schema draft 2020-12)  
**Simplified Properties:**

- `basic_item` mixin for core metadata
- `lab` (required) - lab attribution
- `taxa` (required) - species specification

#### Biosample Schema Design Notes

**Based on:** IGVFD `/profiles/biosample.json` (JSON Schema draft 2020-12)  
**Simplified Properties:**

- `basic_item` mixin for core metadata
- `lab` (required) - lab attribution
- `donors` (required) - links to donor entities
- `sample_terms` (required) - ontology terms for biosample type

#### InVitroSystem Schema Design Notes

**Based on:** IGVFD `/profiles/in_vitro_system.json` (JSON Schema draft 2020-12)  
**Enhanced Properties:**

- Inherits all Biosample properties via mixinProperties
- `classification` (required) - enum: ["organoid", "gastruloid", "embryoid", "immortalized cell line"]
- Covers major in vitro biological system categories

#### InVivoSystem Schema Design Notes

**Based on:** IGVFD `/profiles/in_vivo_system.json` (JSON Schema draft 2020-12)  
**Enhanced Properties:**

- Inherits all Biosample properties via mixinProperties  
- `classification` (required) - enum: ["xenograft"] (expandable for future system types)
- `host` (optional) - links to Donor for transplantation scenarios

### Reference Implementation Analysis

| Feature               | IGVFD Implementation           | Lattice-DB Implementation | Our Choice           |
| --------------------- | ------------------------------ | ------------------------- | -------------------- |
| Schema Version        | JSON Schema 2020-12            | JSON Schema draft-04      | **2020-12** (modern) |
| Validation Complexity | High (dependentSchemas)        | Medium (basic validation) | **Minimal**          |
| Mixin Pattern         | Advanced mixinProperties       | Basic mixinProperties     | **Minimal**          |
| Property Count        | Many properties                | Medium properties         | **Essential only**   |
| External References   | Sophisticated pattern matching | Simple pattern validation | **Sophisticated**    |

---

## 🧠 Claude Code Context & Instructions

### Current Development Focus

**Phase:** Schema Design & Planning  
**Priority:** High  
**Next Milestone:** Complete Donor.json and Biosample.json schema implementation

### Key Context for Claude Code

```
Project Context:
- Database schema repository for biological research data
- Currently in Phase 1: analyzing existing implementations and planning new schemas
- Focus on creating modern, comprehensive JSON Schema definitions
- Pay special attention to biological data validation requirements

Current Priorities:
1. Complete PROJECT.md updates reflecting schema establishment plan
2. Implement Donor.json schema based on IGVFD patterns (schemas/Donor.json)
3. Implement Biosample.json schema with biological validation (schemas/Biosample.json)

Schema Standards:
- Use JSON Schema draft 2020-12 exclusively
- All schemas go in /schemas/ directory with capitalized names
- Follow IGVFD advanced patterns over lattice-db-old legacy patterns
- Include comprehensive validation rules and mixinProperties
- Update this PROJECT.md when adding new schemas
- Reference external ontologies and standards where applicable
```

### Architecture Decisions

| Decision                  | Rationale                                         | Impact                          | Files                                          |
| ------------------------- | ------------------------------------------------- | ------------------------------- | ---------------------------------------------- |
| JSON Schema draft 2020-12 | Modern standard with advanced validation features | All schema definitions          | `schemas/`                                     |
| IGVFD pattern adoption    | Proven biological research schema patterns        | Schema structure and validation | `schemas/Donor.json`, `schemas/Biosample.json` |
| MixinProperties approach  | Code reuse and consistency across schemas         | Schema organization             | Future `schemas/mixins/`                       |

---

## 🔗 GitHub Integration

### Automation Setup

- **Status Updates:** GitHub Actions update completion status in this document
- **Schema Sync:** Changes to `.json` schema files trigger documentation updates
- **Branch Protection:** Main branch requires PR review and passing tests

### GitHub Workflow Integration

```yaml
# Example: .github/workflows/update-project-status.yml
name: Update Project Status
on:
  push:
    branches: [main]
  pull_request:
    types: [closed]

jobs:
  update-status:
    if: github.event.pull_request.merged == true
    runs-on: ubuntu-latest
    steps:
      - name: Update PROJECT.md
        # Auto-update task completion status
```

### Issue Templates

- **Feature Request:** Links to specific project phases
- **Bug Report:** References relevant schema versions
- **Task:** Auto-assigns to project milestones

---

## 📊 Project Dashboard

### Overall Progress

```
Foundation:  ██████████ 100%
Core Dev:    ████████░░  80%
Testing:     ██████████ 100%
Deployment:  ░░░░░░░░░░   0%
```

### Current Metrics

- **Files:** 33 total, 16 schemas implemented, 14 example data files
- **Tests:** 73 passing / 73 total (increased from 71)
- **Coverage:** 100%
- **Issues:** 0 open, 0 closed
- **Schema Versions:** 16 active schemas (mixins, User, Lab, Library, DropletLibrary, PlateBasedLibrary, Donor, Biosample, ControlledTerm, Tissue, PrimaryCell, InVitroSystem, InVivoSystem, Treatment, GeneticModification, ExperimentalCondition)
- **Example Data:** Complete validation examples for all concrete biosample types with classification properties

### Recent Activity

- **September 22, 2025:** Implemented ExperimentalCondition schema for environmental and experimental parameters - added new schema with condition enum (pH, temperature, surface tension, diet, smoking status, oxygen level, humidity, pressure, osmolarity), value/units with dependency validation, linked from Biosample via experimental_conditions array, enabling tracking of experimental context beyond treatments and genetic modifications
- **September 22, 2025:** Enhanced DropletLibrary and PlateBasedLibrary with technology-specific properties - added chemistry_version (14 10X assay types), cell_barcode_length, umi_length, feature_types for droplets; added kit_version (QuantumScale, sci-RNA-seq3) and indexing_rounds for plate-based workflows, enabling accurate representation of real-world library preparation technologies
- **September 22, 2025:** Implemented sample enrichment properties in Biosample.json - added enrichment_method enum (6 methods), enriched/depleted_cell_types linking to ControlledTerm, enrichment_markers with 16 CD marker enums and expression levels, expanded test coverage to 73 tests, includes comprehensive example data for enrichment workflows
- **September 22, 2025:** Refactored BiosampleOntologyTerm.json to ControlledTerm.json - implemented unified ontological architecture supporting CL, EFO, UBERON, CHEBI, UniProt, and Cellosaurus ontologies, removed maxItems restriction enabling multiple ontology terms per sample, added required ontology_source property for clear validation, maintained test coverage at 71 tests
- **September 19, 2025:** Added dependentSchemas validation for multiplexing_method in Library schema - enforces logical constraint that multiplexing requires minimum 2 samples, expanded test coverage to 60 tests
- **September 19, 2025:** Refactored Library to abstract schema with concrete DropletLibrary and PlateBasedLibrary - added multiplexing_method enum ["cell hashing", "lipid hashing", "genetic", "sample barcodes"], expanded test coverage to 59 tests, enables proper library type modeling for droplet vs plate-based workflows
- **September 19, 2025:** Implemented suspension_type property in Biosample schema - added optional enum with values ["cell", "nucleus"], moved suspension_method and viability_percentage to future planning, expanded test coverage to 53 tests
- **September 19, 2025:** Updated Tissue preservation_method enum with standardized terminology - changed to past-tense adjectives (cryopreserved, paraffin embedded, OCT embedded), added new preservation methods (frozen, fixed, fixed-frozen), maintained test coverage at 52 tests
- **September 19, 2025:** Changed Library schema from abstract to concrete class - Library.json now allows direct object instantiation, updated PROJECT.md documentation to reflect concrete classification
- **September 19, 2025:** Updated PROJECT.md repository structure to reflect current state - added missing schema files, corrected test count to 52 tests, updated example data file count to 14 files, included complete file tree structure
- **September 19, 2025:** Added Phase 4 planning for sample enhancement and treatment integration - documented enrichment criteria, genetic modification tracking, treatment integration, preservation enhancements, and suspension type plans with implementation priority matrix
- **September 19, 2025:** Implemented Library.json schema for sample-derived libraries - added Library schema with required lab and samples properties, samples array links to any Biosample type, expanded test coverage to 52 tests, enables library preparation tracking across all concrete sample types
- **September 19, 2025:** Implemented Lab.json schema to resolve linkTo dependencies - added required name, institute_label, and pi properties with User linkTo relationship, expanded test coverage to 49 tests, resolved missing linkTo dependencies across Donor and Biosample schemas
- **September 18, 2025:** Enhanced InVitro/InVivo systems with classification properties - added required `classification` enums (organoid, gastruloid, embryoid, immortalized cell line for in vitro; xenograft for in vivo) and optional `host` linking for in vivo systems, expanded test coverage to 46 tests
- **September 18, 2025:** Implemented minimal InVitroSystem and InVivoSystem schemas with pure Biosample inheritance, expanded test coverage to 44 tests, added comprehensive example data for all biosample types
- **September 18, 2025:** Completed sample_procurement_interval refactoring - moved properties to abstract Biosample class, enhanced test coverage to 32 tests, added inheritance validation with example data
- **September 3, 2025:** Implemented PrimaryCell.json schema with Biosample inheritance and GitHub Actions auto-formatting
- **September 3, 2025:** Implemented BiosampleOntologyTerm.json and updated Biosample linkTo references
- **September 3, 2025:** Implemented Tissue.json schema with abstract class inheritance from Biosample
- **September 3, 2025:** Fixed GitHub Actions validation workflow and formatting issues
- **September 2, 2025:** Implemented core schemas (mixins, User, Donor, Biosample) with full test coverage
- **September 2, 2025:** Established testing framework with Jest + AJV + GitHub Actions CI/CD

---

## 🔧 Development Environment

### Setup Instructions for Claude Code

```bash
# Clone and setup
git clone https://github.com/gabdank/schemas
cd schemas
npm install

# Run all tests
npm test

# Validate all schemas
npm run validate

# Validate specific schema types
npm run validate:schemas          # Self-validate schemas
npm run validate:examples        # Test example data

# Development
npm run test:watch               # Watch mode for development
npm run test:coverage           # Generate coverage report
npm run lint                    # Check code formatting
npm run lint:fix               # Auto-fix formatting
```

### Testing Framework

**Technologies:** AJV + Jest + Husky + Prettier

- **Schema Validation:** AJV with JSON Schema draft 2020-12 support
- **Unit Testing:** Jest for comprehensive test suites
- **Pre-commit Hooks:** Husky + lint-staged for automatic validation
- **Code Formatting:** Prettier for consistent JSON formatting
- **CI/CD:** GitHub Actions for automated testing on push/PR

---

## 📝 Change Log

### Version 1.0.0 - [DATE]

- Initial project setup
- Created basic structure
- Added schema management system

### Version 1.1.0 - [DATE]

- Added GitHub integration
- Updated user schema
- Implemented validation layer

---

## 📚 References & Resources

### Documentation Links

- [JSON Schema Specification](https://json-schema.org/draft/2020-12/schema)
- [IGVFD Schema Documentation](https://igvfd.org)
- [Biological Ontology Standards](https://bioportal.bioontology.org)

### Claude Code Quick References

- **Schema Location:** Always check `/schemas/` for current schema definitions
- **Reference Patterns:** Follow IGVFD examples in `/Users/gabdank/Documents/Repositories/igvfd/src/igvfd/schemas/`
- **Legacy Reference:** Check lattice-db-old patterns in `/Users/gabdank/Documents/Repositories/lattice-db-old/encoded/src/encoded/schemas/`
- **Schema Standard:** Use JSON Schema draft 2020-12 for all new schemas

---

## 🎯 Next Actions

### Immediate (This Week)

- [x] Complete PROJECT.md updates with schema establishment plan
- [x] Commit PROJECT.md changes to main branch
- [x] Push changes to GitHub remote
- [x] Create feature/core-schemas branch for schema implementation

### Short Term (Next 2 Weeks)

- [x] Implement Donor.json schema based on IGVFD patterns
- [x] Implement Biosample.json schema with biological validation rules
- [x] Create initial mixins for reusable schema components
- [x] Set up comprehensive schema validation workflow with testing
- [x] Fix GitHub Actions validation workflow issues
- [x] Implement abstract class system (Donor and Biosample as abstract)
- [x] Plan and implement Tissue schema combining IGVFD and lattice-db patterns
- [x] Merge abstract classes and Tissue schema to main branch
- [x] **COMPLETED:** Refactor sample_procurement_interval properties to abstract Biosample class
- [x] **COMPLETED:** Enhance test coverage with inheritance validation and example data

### Long Term (Next Month)

- [ ] Complete schema validation and testing framework
- [ ] Create comprehensive schema documentation
- [ ] Establish migration guidelines from legacy schemas

---

## 📋 Planned Schema Enhancements

### Phase 4: Sample Enhancement & Treatment Integration

#### Sample Enrichment & Processing Enhancements
**Target Schema:** Biosample.json (Abstract class)
**Status:** ✅ Complete

**Enrichment Properties (Implemented):**
- `enrichment_method` (enum, optional) - Method used for enrichment: ["FACS", "MACS", "size_exclusion", "density_gradient", "manual_picking", "microfluidics"]
- `enriched_cell_types` (array, optional) - Links to ControlledTerm for enriched cell populations (CL ontology)
- `depleted_cell_types` (array, optional) - Links to ControlledTerm for depleted cell populations (CL ontology)
- `enrichment_markers` (array, optional) - Structured marker objects with CD marker enums and expression levels

**Enrichment Markers Structure:**
```json
{
  "marker": "CD45",           // Enum of 16 common CD markers
  "expression_level": "positive"  // ["positive", "negative", "low", "high", "intermediate"]
}
```

**Validation Features:**
- **CD Marker Standardization**: 16 validated CD markers (CD3, CD4, CD8, CD14, CD16, CD19, CD20, CD31, CD34, CD45, CD56, CD90, CD123, CD141, CD144, CD205)
- **Expression Level Control**: Structured enum for marker expression patterns
- **Ontological Cell Types**: Leverages ControlledTerm with CL ontology for standardized cell type annotation
- **Method Classification**: Standardized enrichment method vocabulary

**Benefits:**
- **Minimal Free Text**: Structured approach reduces data inconsistency
- **Real-World Validated**: Based on analysis of 7,000+ suspension samples
- **Ontological Standardization**: Cell types use Cell Ontology (CL) via ControlledTerm
- **Complex Workflow Support**: Multi-marker enrichment scenarios with positive/negative selection

#### Genetic Modification Tracking
**Target Schema:** Biosample.json (Abstract class)
**Status:** 📋 Planned

**Genetic Modification Properties:**
- `genetic_modifications` (array, optional) - Links to genetic modification records
- `modification_type` (enum, optional) - Type of genetic modification ["CRISPR", "overexpression", "knockdown", "knockout", "transgenic"]
- `modified_genes` (array, optional) - List of genes that were modified
- `modification_status` (enum, optional) - Status of modification ["confirmed", "pending", "failed"]

**Benefits:**
- Track genetic engineering interventions
- Link samples to their modification history
- Support experimental design documentation

#### Treatment Integration
**Target Schemas:** Biosample.json + New Treatment.json + Ontological Term Refactoring
**Status:** ✅ Complete

**Treatment Schema (Implemented):**
- **File:** `schemas/Treatment.json`
- **Type:** Concrete class
- **Required:** `is_composite`
- **Core Properties:**
  - `is_composite` (boolean) - True for combination/complex treatments, false for single-agent treatments

**Composite Treatment Properties (when is_composite: true):**
  - `description` (string, required) - Manual text description of the complex treatment
  - `protocol_document` (string, required) - Link to PDF document with detailed protocol

**Non-Composite Treatment Properties (when is_composite: false):**
  - `ontological_term` (string, required) - CheBI ID, UniProt ID, or other ontological identifier
  - `concentration` (number, required) - Treatment concentration (minimum: 0)
  - `concentration_units` (enum, required) - ["M", "mM", "μM", "nM", "pM", "mg/ml", "μg/ml", "ng/ml", "g/L", "mg/L", "μg/L"]
  - `duration` (number, required) - Treatment duration (minimum: 0)
  - `duration_units` (enum, required) - ["second", "minute", "hour", "day", "week", "month"]

**Validation Features:**
- **Dependent schemas** ensure concentration/duration paired with respective units
- **Conditional validation** based on is_composite boolean
- **Type safety** with number validation and minimum constraints
- **Comprehensive unit enums** covering common laboratory concentrations and time periods

**Benefits:**
- **Clear classification** between single-agent vs combination treatments
- **Ontological standardization** for simple treatments (leverages CheBI, UniProt databases)
- **Strict validation** ensures data consistency and completeness
- **Flexibility** for complex custom treatments requiring manual documentation

**Biosample Updates:**
- `treatment` (string, optional) - Links to Treatment record (`"linkTo": "Treatment"`)
- `genetic_modification` (string, optional) - Links to GeneticModification record (`"linkTo": "GeneticModification"`)

#### Genetic Modification Integration
**Target Schemas:** Biosample.json + New GeneticModification.json
**Status:** ✅ Complete

**GeneticModification Schema (Implemented):**
- **File:** `schemas/GeneticModification.json`
- **Type:** Concrete class
- **Required:** `description`, `modality`

**Core Properties:**
- `description` (string, required) - Plain text description with pattern validation
- `modality` (enum, required) - Purpose/effect: activation, base editing, cutting, interference, knockout, localizing, prime editing

**CRISPR Properties (Optional):**
- `cas` (enum, optional) - Cas protein: Cas9, Cas12a, Cas13, dCas9, nCas9, SpG, SpRY
- `cas_species` (enum, optional) - Origin species: Streptococcus pyogenes, Staphylococcus aureus, etc.
- `fused_domain` (enum, optional) - Fused molecule: VP64, KRAB, p300, ABE8e, BE4max, etc.

**Chemical Activation Properties (Optional):**
- `activated` (boolean, optional) - Whether chemically activated
- `activating_agent_term_id` (string, conditional) - CHEBI ID with pattern validation
- `activating_agent_term_name` (string, conditional) - CHEBI term name

**Target Properties:**
- `tagged_proteins` (array, optional) - Links to Gene schema (maxItems: 1)

**Validation Features:**
- **Dependent schemas** ensure activated=true requires CHEBI agent terms
- **Pattern validation** for CHEBI IDs (^CHEBI:[0-9]{1,7}$) and descriptions
- **Comprehensive enums** covering major CRISPR systems and genetic engineering approaches
- **Gene linkTo** for tracking protein targets

**Benefits:**
- **Comprehensive CRISPR coverage** including cutting-edge base/prime editing systems
- **Chemical activation support** for inducible genetic modifications
- **Standardized ontology** integration via CHEBI for activating agents
- **Flexible modality system** covering major genetic engineering approaches

#### Tissue-Specific Enhancements
**Target Schema:** Tissue.json
**Status:** 📋 Planned

**Preservation Enhancement:**
- Update existing `preservation_method` enum to include:
  - `["fresh", "frozen", "flash-frozen", "fixed-frozen", "fixed", "cryopreservation", "flash-freezing", "paraffin embedding", "OCT embedding"]`
- Maintain backward compatibility with existing values
- Add validation for preservation-specific metadata

#### Sample Suspension Type
**Target Schema:** Biosample.json (Abstract class)
**Status:** 🚧 In Development

**Suspension Type Property:**
- `suspension_type` (enum, optional) - Type of suspension: cells or nuclei
  - `["cell", "nucleus"]`

**Future Potential Additions:**
- `suspension_method` (string, optional) - Method used to create suspension
- `viability_percentage` (number, optional) - Cell viability percentage (0-100)

**Benefits:**
- Capture fundamental biological distinction between cell and nuclei suspensions
- Support downstream analysis requirements
- Simple enum without underscores for clean API usage


**MORE TODO**
- refactor Ontology Terms, having an abstract and concrete biosample, treatment, diesease, etc
- make sure Treatment linked to termontology
- make sure the Samples linked to ontology biosample
- consider introducing ExperimentalCondition instead of Treatment? to cover diet, environmental consitions and such.

### Implementation Priority & Timeline

| Enhancement | Target Schema | Estimated Effort | Dependencies | Priority |
|-------------|---------------|------------------|--------------|----------|
| Enrichment Criteria | Biosample.json | Medium | None | High |
| Suspension Type | Biosample.json | Low | None | ✅ Complete |
| Preservation Update | Tissue.json | Low | None | ✅ Complete |
| Treatment Integration | Biosample.json + Treatment.json | High | New Treatment schema | ✅ Complete |
| Genetic Modifications | Biosample.json + GeneticModification.json | Medium | None | ✅ Complete |
| Ontological Term Refactoring | Abstract OntologicalTerm + Concrete terms | High | BiosampleOntologyTerm migration | Low |

### Design Considerations

**Abstract vs Concrete Placement:**
- **Biosample.json** enhancements affect all concrete sample types (Tissue, PrimaryCell, InVitroSystem, InVivoSystem)
- **Tissue.json** enhancements are tissue-specific and don't affect other sample types
- **Treatment.json** as new concrete schema enables reusable treatment records

**Validation Strategy:**
- Use dependentSchemas for property interdependencies
- Maintain enum extensibility for future enhancement
- Preserve backward compatibility with existing data

**Testing Requirements:**
- Add comprehensive test coverage for new properties
- Test inheritance behavior across concrete sample types
- Validate enum constraints and dependent property requirements

### Phase 5: Ontological Term Architecture Refactoring

#### Proposed Abstract OntologicalTerm Architecture
**Motivation:** Current BiosampleOntologyTerm.json could be generalized to support multiple ontology types

**Abstract OntologicalTerm.json:**
- **Properties:** `term_id`, `term_name`, `ontology_source`, `definition`, `synonyms`
- **Validation:** Pattern matching for different ID formats (CheBI:123, UniProt:P12345, etc.)

**Concrete Implementations:**
1. **BiosampleOntologyTerm.json** - Current implementation (tissues, cell types, anatomical terms)
2. **ChemicalOntologyTerm.json** - Chemical compounds, drugs (CheBI, ChEMBL)
3. **ProteinOntologyTerm.json** - Proteins, enzymes (UniProt, InterPro)
4. **DiseaseOntologyTerm.json** - Diseases, phenotypes (MONDO, HPO)
5. **EnvironmentalOntologyTerm.json** - Environmental conditions (ENVO)

**Benefits:**
- **Consistency** across all ontological references
- **Validation** for proper ID formats per ontology
- **Extensibility** for future ontology types
- **Reusability** across Treatment, Biosample, and other schemas

**Migration Strategy:**
- Maintain backward compatibility with existing BiosampleOntologyTerm
- Gradual migration to abstract architecture
- Automated validation for ontology ID formats

---

## 🏗️ Phase 2: Abstract Classes & Tissue Implementation

### Current Implementation Status

**Completed Core Schemas:**

- ✅ **User.json** - Concrete class (submittable objects)
- ✅ **Donor.json** - Abstract class (no direct object submission)
- ✅ **Biosample.json** - Abstract class (no direct object submission)
- ✅ **mixins.json** - Basic properties mixin

### Abstract Class System Design

**Concept:** Donor and Biosample are abstract base classes that provide shared properties via mixinProperties but cannot be directly instantiated. The abstractness is enforced by:

1. **Mixin Inheritance Pattern:** Concrete classes inherit from abstract classes via mixinProperties
2. **Property Composition:** Abstract classes define common properties inherited by concrete implementations
3. **Future Mechanism:** Submission prevention mechanism to be added later

### Next Phase: Tissue Schema Implementation

**Objective:** Create Tissue.json as first concrete implementation inheriting from abstract Donor and Biosample classes.

**Tissue Schema Analysis & Proposal:**

#### Schema Comparison

| Property Category    | IGVFD tissue.json    | Lattice-DB tissue.json         | Lattice-DB tissue_section.json   | Proposed Tissue                       |
| -------------------- | -------------------- | ------------------------------ | -------------------------------- | ------------------------------------- |
| **Core Identity**    | award, lab, sources  | biosample_ontology             | derived_from, derivation_process | lab, derived_from, derivation_process |
| **Biological Links** | donors, sample_terms | derived_from                   | derived_from                     | donors, sample_terms, derived_from    |
| **Preservation**     | preservation_method  | preservation_method            | preservation_method              | preservation_method                   |
| **Timing**           | pmi/pmi_units        | death_to_preservation_interval | -                                | pmi/pmi_units                         |
| **Spatial**          | ccf_id, part_of      | spatial_information            | spatial_information, orientation | spatial_information, ccf_id           |
| **Processing**       | pooled_from          | derivation_process             | derivation_process, thickness    | derivation_process                    |

#### Proposed Tissue Schema Structure

**Required Fields:** `lab`, `donors`, `sample_terms`, `derived_from`, `derivation_process`

**MixinProperties:**

```json
"mixinProperties": [
    {"$ref": "mixins.json#/basic_item"},
    {"$ref": "Donor.json#/properties"},
    {"$ref": "Biosample.json#/properties"}
]
```

**Essential Properties:**

- `derived_from` - Links to Donor or other Tissue objects
- `derivation_process` - Enum of extraction methods (biopsy, dissection, etc.)
- `preservation_method` - Tissue preservation approach
- `pmi`/`pmi_units` - Post-mortem interval tracking
- `spatial_information` - Anatomical location description
- `ccf_id` - Common Coordinate Framework identifier

#### Implementation Plan

1. ✅ **Update Abstract Classes** - Add properties to Donor.json and Biosample.json for inheritance
2. ✅ **Create Tissue.json** - Implement as concrete class with abstract class mixins
3. ✅ **Create PrimaryCell.json** - Implement as concrete class inheriting from Biosample
4. ✅ **Update Tests** - Add comprehensive schema validation (24 tests passing)
5. ✅ **Validate Integration** - Ensure proper mixin inheritance and property composition

---

## 🔧 Phase 3: Suspension Properties & Mixin Refactoring

### Current Implementation Analysis

**Completed Concrete Biosamples:**
- ✅ **Tissue.json** - Inherited TissueSection properties, includes sample_procurement_interval
- ✅ **PrimaryCell.json** - Basic cell culture schema

**Planned Concrete Biosamples:**
- 📋 **InVitroSystem.json** - In vitro biological system schema
- 📋 **InVivoSystem.json** - In vivo biological system schema

### Missing Suspension Properties Analysis

**Properties from IGVFD suspension/primary_cell patterns:**
- `suspension_type` - Type of cell suspension
- `enrichment_factors` - Factors used for cell enrichment
- `depletion_factors` - Factors used for cell depletion  
- `enriched_cells` - Description of enriched cell populations
- `depleted_cells` - Description of depleted cell populations
- `sample_procurement_interval`/`sample_procurement_interval_units` - Time from collection to processing

### Proposed Mixin Refactoring Strategy

**✅ COMPLETED REFACTORING:** `sample_procurement_interval` properties have been successfully moved to abstract Biosample class.

**Completed Changes:**
1. **✅ Moved to Abstract Biosample:** `sample_procurement_interval`/`sample_procurement_interval_units` with dependentSchemas validation
2. **✅ Enhanced Inheritance:** Both Tissue.json and PrimaryCell.json now inherit timing properties via mixinProperties
3. **✅ Expanded Test Coverage:** Added comprehensive inheritance validation and example data tests (32 total tests)
4. **✅ Example Data:** Created valid/invalid examples demonstrating proper dependent property usage

## 🔮 Phase 4: Planned Schema Enhancements (Future)

### Donor Pooling Enhancement
**Status:** 📋 Planned for Future Implementation

**Objective:** Add support for donor pooling to better represent biological sample collection workflows.

**Proposed Changes to Donor.json:**
- `pooled_donors` (boolean, required) - indicates if this represents a single donor (false) or pooled donors (true)
- `donor_count` (integer, optional) - number of individual donors in pool (required if pooled_donors=true)
- Add dependentSchemas validation: if pooled_donors=true, then donor_count is required

**Benefits:**
- Accurate representation of sample collection methodologies
- Support for both individual and pooled donor scenarios
- Proper validation of pooling requirements

### Sample Enrichment Enhancement
**Status:** 📋 Planned for Future Implementation

**Objective:** Add enrichment/depletion tracking to support advanced sample processing workflows.

**Proposed Changes to Biosample.json:**
- `enrichment_factors` (array, optional) - factors used for cell enrichment/selection
- `depletion_factors` (array, optional) - factors used for cell depletion/removal
- `enriched_cell_types` (array, optional) - description of enriched cell populations
- `depleted_cell_types` (array, optional) - description of depleted cell populations

**Benefits:**
- Support for advanced sample processing documentation
- Tracking of enrichment/depletion methodologies
- Enhanced metadata for processed biological samples

---

_Last updated: September 18, 2025 | Version: 1.0.0 | [Latest Commit](https://github.com/gabdank/schemas/commits/main)_
