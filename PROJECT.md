# Project Plan: Database Schemas

## Project Metadata
- **Created:** September 2, 2025
- **Last Updated:** September 2, 2025 (Schema establishment plan)
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
├── PROJECT.md              # This document  
├── schemas/                # Core schema definitions
│   ├── Donor.json         # Donor entity schema (planned)
│   ├── Biosample.json     # Biosample entity schema (planned)
│   └── mixins/            # Reusable schema components (future)
├── docs/                  # Schema documentation
│   ├── schema-guide.md    # Schema usage guidelines (future)
│   └── migration-log.md   # Schema change history (future)
├── examples/              # Example data instances (future)
├── tests/                 # Schema validation tests (future)
└── .github/
    └── workflows/         # CI/CD for schema validation
```

### Key Files for Claude Code
| File Path | Purpose | Current Status |
|-----------|---------|----------------|
| `schemas/Donor.json` | Core donor entity schema | ⏳ Planned |
| `schemas/Biosample.json` | Core biosample entity schema | ⏳ Planned |
| `PROJECT.md` | Project documentation | 🔄 Updating |

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

### Current Sprint Tasks

#### Active Tasks
- [ ] **PROJECT.md Updates** - Reflect schema establishment plan
  - **File:** `PROJECT.md`
  - **Status:** In Progress
  - **Assignee:** Claude Code
  - **Notes:** Document Donor and Biosample schema implementation plan

- [ ] **Schema Analysis** - Compare igvfd vs lattice-db-old patterns
  - **Reference Files:** 
    - `/Users/gabdank/Documents/Repositories/igvfd/src/igvfd/schemas/donor.json`
    - `/Users/gabdank/Documents/Repositories/igvfd/src/igvfd/schemas/biosample.json`
    - `/Users/gabdank/Documents/Repositories/lattice-db-old/encoded/src/encoded/schemas/`
  - **Status:** Pending

#### Completed Tasks
- [x] **Repository Initialization** - Initial commit and setup
  - **Completed:** September 2, 2025
  - **Commit:** 441a1f7

---

## 🔄 Schema Development Plan

### Target Schema Registry
| Schema Name | Version | File Path | Status | Reference Implementation |
|-------------|---------|-----------|--------|--------------------------|
| mixins | 1.0.0 | `schemas/mixins.json` | ✅ Complete | IGVFD mixins.json (basic_item only) |
| User | 1.0.0 | `schemas/User.json` | ✅ Complete | IGVFD user.json (simplified) |
| Donor | 1.0.0 | `schemas/Donor.json` | ✅ Complete | IGVFD donor.json (simplified) |
| Biosample | 1.0.0 | `schemas/Biosample.json` | ✅ Complete | IGVFD biosample.json (simplified) |

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
| Feature | IGVFD Implementation | Lattice-DB Implementation | Our Choice |
|---------|---------------------|---------------------------|------------|
| Schema Version | JSON Schema 2020-12 | JSON Schema draft-04 | **2020-12** (modern) |
| Validation Complexity | High (dependentSchemas) | Medium (basic validation) | **Minimal** |
| Mixin Pattern | Advanced mixinProperties | Basic mixinProperties | **Minimal** |
| Property Count | Many properties | Medium properties | **Essential only** |
| External References | Sophisticated pattern matching | Simple pattern validation | **Sophisticated** |

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
| Decision | Rationale | Impact | Files |
|----------|-----------|--------|-------|
| JSON Schema draft 2020-12 | Modern standard with advanced validation features | All schema definitions | `schemas/` |
| IGVFD pattern adoption | Proven biological research schema patterns | Schema structure and validation | `schemas/Donor.json`, `schemas/Biosample.json` |
| MixinProperties approach | Code reuse and consistency across schemas | Schema organization | Future `schemas/mixins/` |

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
Foundation:  ████████░░ 80%
Core Dev:    ███░░░░░░░ 30%
Testing:     ░░░░░░░░░░  0%
Deployment:  ░░░░░░░░░░  0%
```

### Current Metrics
- **Files:** [count] total, [count] modified this week
- **Tests:** [count] passing / [count] total
- **Coverage:** [percentage]%
- **Issues:** [open] open, [closed] closed
- **Schema Versions:** [count] active schemas

### Recent Activity
- **[DATE]:** Completed user authentication module
- **[DATE]:** Updated product schema to v1.2.0
- **[DATE]:** Fixed validation bug in form components

---

## 🔧 Development Environment

### Setup Instructions for Claude Code
```bash
# Clone and setup
git clone https://github.com/gabdank/schemas
cd schemas

# Validate schemas (future)
# ajv validate --spec=draft2020 schemas/Donor.json
# ajv validate --spec=draft2020 schemas/Biosample.json

# Test schemas against example data (future)
# ajv test --spec=draft2020 schemas/Donor.json examples/donor-example.json
```

### Development Tools
```bash
# Required for schema development
# JSON Schema validator: npm install -g ajv-cli
# Schema linting: npm install -g @apidevtools/json-schema-ref-parser
```

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
- [ ] Complete PROJECT.md updates with schema establishment plan
- [ ] Commit PROJECT.md changes to main branch
- [ ] Push changes to GitHub remote
- [ ] Create feature/core-schemas branch for schema implementation

### Short Term (Next 2 Weeks)
- [ ] Implement Donor.json schema based on IGVFD patterns
- [ ] Implement Biosample.json schema with biological validation rules
- [ ] Create initial mixins for reusable schema components
- [ ] Set up basic schema validation workflow

### Long Term (Next Month)  
- [ ] Complete schema validation and testing framework
- [ ] Create comprehensive schema documentation
- [ ] Establish migration guidelines from legacy schemas

---

*Last updated: September 2, 2025 | Version: 1.0.0 | [Latest Commit](https://github.com/gabdank/schemas/commits/main)*