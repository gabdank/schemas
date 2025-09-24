# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development Commands

- `npm test` - Run Jest test suite (73 tests)
- `npm run test:watch` - Run tests in watch mode for development
- `npm run test:coverage` - Generate test coverage report
- `npm run validate` - Run comprehensive schema validation (alias for npm test)
- `npm run lint` - Check JSON formatting with Prettier
- `npm run lint:fix` - Auto-fix JSON formatting issues

### Test Commands

- `npm run validate:schemas` - Schema structure validation (handled by Jest)
- `npm run validate:examples` - Example data validation (handled by Jest)

Note: Schema validation uses Jest with AJV because of custom `mixinProperties` extension that standard JSON Schema validators don't support.

## Architecture Overview

### Project Purpose

This repository contains JSON Schema definitions for biological research database entities, including comprehensive schemas for users, labs, donors, biosamples, treatments, genetic modifications, and library preparation workflows.

### Schema Architecture Patterns

#### Abstract vs Concrete Classes

- **Abstract Classes**: `Donor.json`, `Biosample.json`, `Library.json` - Define shared properties via mixinProperties but cannot be directly instantiated
- **Concrete Classes**: `User.json`, `Lab.json`, `Tissue.json`, `PrimaryCell.json`, etc. - Can be directly instantiated and often inherit from abstract classes

#### Inheritance Pattern

Schemas use `mixinProperties` for inheritance:

```json
{
  "mixinProperties": [
    { "$ref": "mixins.json#/basic_item" },
    { "$ref": "Biosample.json#/properties" }
  ]
}
```

#### Schema Standards

- **JSON Schema Version**: draft 2020-12 (modern standard)
- **Custom Keywords**: Uses IGVFD-style extensions (`mixinProperties`, `linkTo`, `permission`, etc.)
- **Validation**: AJV with custom keyword support in test framework

### Key Schema Categories

#### Core Infrastructure

- `mixins.json` - Basic item mixin with core metadata properties (uuid, schema_version, timestamps, etc.)
- `User.json` - User entities with email, names
- `Lab.json` - Laboratory entities with institute and PI information

#### Biological Entities

- `Donor.json` (abstract) - Base class for biological donors
- `Biosample.json` (abstract) - Base class for biological samples with enrichment, experimental conditions
- `ControlledTerm.json` - Ontological terms (CL, EFO, UBERON, CHEBI, UniProt, Cellosaurus)

#### Concrete Sample Types

- `Tissue.json` - Tissue samples with preservation, spatial information
- `PrimaryCell.json` - Primary cell cultures
- `InVitroSystem.json` - Organoids, cell lines (classification: organoid, gastruloid, embryoid, immortalized cell line)
- `InVivoSystem.json` - Xenograft systems (classification: xenograft)

#### Library Preparation

- `Library.json` (abstract) - Base library schema
- `DropletLibrary.json` - 10X technology with chemistry versions, barcodes
- `PlateBasedLibrary.json` - Plate-based workflows (QuantumScale, sci-RNA-seq3)

#### Treatments & Modifications

- `Treatment.json` - Chemical treatments with composite/non-composite validation
- `GeneticModification.json` - CRISPR and genetic engineering metadata
- `ExperimentalCondition.json` - Environmental parameters (pH, temperature, diet, etc.)

### File Structure

```
schemas/                     # All schema definitions
├── mixins.json             # Core mixin properties
├── [Entity].json           # Individual schema files (capitalized names)
tests/
├── schemas/                # Jest test suites
│   └── schema.validation.test.js  # Main test file (73 tests)
└── examples/               # Test data organized by entity type
    ├── user/
    ├── donor/
    ├── biosample/
    └── ...
```

### Testing Framework

- **Framework**: Jest + AJV + custom keywords
- **Coverage**: 100% schema validation
- **Test Types**: Schema structure validation, example data validation, inheritance validation
- **Custom Keywords**: Handles IGVFD-style extensions (`mixinProperties`, `linkTo`, etc.)

### Validation Patterns

- **Dependent Schemas**: Properties that require other properties (e.g., concentration requires concentration_units)
- **Conditional Logic**: Boolean flags that change required properties (e.g., is_composite in Treatment.json)
- **Enum Constraints**: Controlled vocabularies for standardization
- **Pattern Validation**: Format validation (emails, CHEBI IDs, etc.)

### Biological Data Standards Integration

- **Ontologies**: Cell Ontology (CL), Experimental Factor Ontology (EFO), UBERON, CHEBI, UniProt, Cellosaurus
- **Reference Implementations**: Based on IGVFD patterns with biological research standards
- **Biological Validation**: Species-specific constraints, developmental stage tracking, treatment dosage validation

### Development Workflow

1. Create/modify schemas in `schemas/` directory
2. Add corresponding test examples in `tests/examples/[entity]/`
3. Run `npm test` to validate schema structure and examples
4. Run `npm run lint:fix` to ensure consistent formatting
5. Schemas must pass all validation before merging

### Schema Naming Conventions

- **File Names**: PascalCase (e.g., `PrimaryCell.json`, `InVitroSystem.json`)
- **Property Names**: snake_case (e.g., `first_name`, `lab_name`)
- **Enum Values**: lowercase with underscores (e.g., `"organoid"`, `"immortalized_cell_line"`)

### Common Development Tasks

- **Adding New Schema**: Create schema file, add test examples, update test suite
- **Modifying Abstract Classes**: Changes affect all inheriting concrete classes
- **Adding Properties**: Consider placement in abstract vs concrete classes
- **Enum Extensions**: Maintain backward compatibility when expanding enums

Always run the full test suite (`npm test`) after making changes to ensure schema validity and inheritance works correctly.

- do not use underscores in enum values
