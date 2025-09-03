# Project Plan: Database Schemas

## Project Metadata

- **Created:** September 2, 2025
- **Last Updated:** September 3, 2025 (Abstract classes and Tissue planning)
- **Version:** 1.0.0
- **Repository:** https://github.com/gabdank/schemas
- **Claude Project:** Database Schema Establishment

---

## 🎯 Project Overview

### Objective

Establish comprehensive JSON Schema definitions for database entities, starting with core biological data types: Donor and Biosample schemas.

### Scope

- **In Scope:**
  - Donor.json schema definition with modern JSON Schema draft 2020-12
  - Biosample.json schema definition with advanced validation rules
  - Schema versioning and migration strategy
  - Integration with existing biological data standards
- **Out of Scope:**
  - Database implementation
  - API endpoints
  - User interface components
- **Success Criteria:**
  - Complete Donor.json and Biosample.json schemas with comprehensive validation
  - Schema compatibility with biological research standards
  - Proper version management and documentation

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
├── schemas/                             # Core schema definitions
│   ├── mixins.json                     # Basic item mixin properties
│   ├── User.json                       # User entity schema (concrete)
│   ├── Donor.json                      # Donor entity schema (abstract)
│   ├── Biosample.json                  # Biosample entity schema (abstract)
│   ├── BiosampleOntologyTerm.json      # Ontology terms for biosamples
│   ├── Tissue.json                     # Tissue sample schema (concrete)
│   └── PrimaryCell.json                # Primary cell schema (concrete)
├── tests/                              # Schema validation tests
│   ├── schemas/                        # Schema structure tests
│   │   └── schema.validation.test.js   # Jest test suite (24 tests)
│   └── examples/                       # Example data validation tests
│       ├── user/                       # User test data
│       ├── donor/                      # Donor test data
│       └── biosample/                  # Biosample test data
└── .github/
    └── workflows/                      # CI/CD for schema validation
        └── schema-validation.yml       # Auto-formatting + validation workflow
```

### Key Files for Claude Code

| File Path                                 | Purpose                         | Current Status |
| ----------------------------------------- | ------------------------------- | -------------- |
| `schemas/mixins.json`                     | Basic item mixin properties     | ✅ Complete    |
| `schemas/User.json`                       | User entity schema (concrete)   | ✅ Complete    |
| `schemas/Donor.json`                      | Donor entity schema (abstract)  | ✅ Complete    |
| `schemas/Biosample.json`                  | Biosample schema (abstract)     | ✅ Complete    |
| `schemas/BiosampleOntologyTerm.json`      | Ontology terms for samples      | ✅ Complete    |
| `schemas/Tissue.json`                     | Tissue sample schema (concrete) | ✅ Complete    |
| `schemas/PrimaryCell.json`                | Primary cell schema (concrete)  | ✅ Complete    |
| `tests/schemas/schema.validation.test.js` | Jest test suite (24 tests)      | ✅ Complete    |
| `PROJECT.md`                              | Project documentation           | 🔄 Updating    |

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
| Donor                 | 1.0.0   | `schemas/Donor.json`                 | ✅ Complete | Abstract   | IGVFD donor.json (simplified)              |
| Biosample             | 1.0.0   | `schemas/Biosample.json`             | ✅ Complete | Abstract   | IGVFD biosample.json (simplified)          |
| BiosampleOntologyTerm | 1.0.0   | `schemas/BiosampleOntologyTerm.json` | ✅ Complete | Concrete   | IGVFD sample_term.json + ontology patterns |
| Tissue                | 1.0.0   | `schemas/Tissue.json`                | ✅ Complete | Concrete   | IGVFD + Lattice-DB tissue + tissue_section |
| PrimaryCell           | 1.0.0   | `schemas/PrimaryCell.json`           | ✅ Complete | Concrete   | IGVFD primary_cell.json (simplified)       |
| InVitroSystem         | 1.0.0   | `schemas/InVitroSystem.json`         | 📋 Planned  | Concrete   | IGVFD in_vitro_system.json                 |
| InVivoSystem          | 1.0.0   | `schemas/InVivoSystem.json`          | 📋 Planned  | Concrete   | IGVFD in_vivo_system.json                  |

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

- **Files:** 18 total, 7 schemas implemented
- **Tests:** 24 passing / 24 total
- **Coverage:** 100%
- **Issues:** 0 open, 0 closed
- **Schema Versions:** 7 active schemas (mixins, User, Donor, Biosample, BiosampleOntologyTerm, Tissue, PrimaryCell)

### Recent Activity

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
- [ ] Implement abstract class system (Donor and Biosample as abstract)
- [ ] Plan and implement Tissue schema combining IGVFD and lattice-db patterns
- [ ] Merge abstract classes and Tissue schema to main branch

### Long Term (Next Month)

- [ ] Complete schema validation and testing framework
- [ ] Create comprehensive schema documentation
- [ ] Establish migration guidelines from legacy schemas

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

**Issue Identified:** Both Tissue.json and PrimaryCell.json currently implement `sample_procurement_interval` independently, suggesting this property belongs in the abstract Biosample class.

**Refactoring Plan:**
1. **Move to Abstract Biosample:** `sample_procurement_interval`/`sample_procurement_interval_units` 
2. **Add Suspension Properties:** Suspension-specific properties to PrimaryCell.json
3. **Validate Inheritance:** Ensure proper property composition via mixinProperties
4. **Update Tests:** Comprehensive validation of refactored inheritance

**Next Implementation Steps:**
1. Analyze suspension properties from IGVFD schemas
2. Identify which properties belong in abstract vs concrete classes
3. Refactor Biosample.json to include shared timing properties
4. Update concrete classes to remove duplicated properties
5. Add suspension-specific properties to PrimaryCell.json

---

_Last updated: September 3, 2025 | Version: 1.0.0 | [Latest Commit](https://github.com/gabdank/schemas/commits/main)_
