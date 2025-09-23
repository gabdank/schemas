const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const fs = require('fs');
const path = require('path');

// Configure AJV for testing with custom keywords
const ajv = new Ajv({
  strict: false,
  allErrors: true,
  allowUnionTypes: true,
  validateFormats: false,
  loadSchema: false,
});
addFormats(ajv);

// Add custom keywords used in IGVFD-style schemas
const customKeywords = [
  'mixinProperties',
  'linkTo',
  'linkSubmitsFor',
  'permission',
  'serverDefault',
  'requestMethod',
  'uniqueKey',
  'comment',
  'rdfs:subPropertyOf',
  'accessionType',
];

customKeywords.forEach((keyword) => {
  ajv.addKeyword({
    keyword,
    compile: () => () => true,
  });
});

// Load schemas
const loadSchema = (schemaPath) => {
  const fullPath = path.join(__dirname, '../../schemas', schemaPath);
  return JSON.parse(fs.readFileSync(fullPath, 'utf8'));
};

const mixinsSchema = loadSchema('mixins.json');
const userSchema = loadSchema('User.json');
const labSchema = loadSchema('Lab.json');
const librarySchema = loadSchema('Library.json');
const dropletLibrarySchema = loadSchema('DropletLibrary.json');
const plateBasedLibrarySchema = loadSchema('PlateBasedLibrary.json');
const donorSchema = loadSchema('Donor.json');
const biosampleSchema = loadSchema('Biosample.json');
const tissueSchema = loadSchema('Tissue.json');
const controlledTermSchema = loadSchema('ControlledTerm.json');
const primaryCellSchema = loadSchema('PrimaryCell.json');
const inVitroSystemSchema = loadSchema('InVitroSystem.json');
const inVivoSystemSchema = loadSchema('InVivoSystem.json');
const treatmentSchema = loadSchema('Treatment.json');
const geneticModificationSchema = loadSchema('GeneticModification.json');

describe('Schema Validation Tests', () => {
  describe('Schema Structure Validation', () => {
    test('mixins.json should have basic_item property', () => {
      expect(mixinsSchema).toHaveProperty('basic_item');
      expect(mixinsSchema.basic_item).toHaveProperty('uuid');
      expect(mixinsSchema.basic_item).toHaveProperty('schema_version');
    });

    test('User.json should have required JSON Schema properties', () => {
      expect(userSchema).toHaveProperty('$schema');
      expect(userSchema).toHaveProperty('title');
      expect(userSchema).toHaveProperty('type', 'object');
      expect(userSchema.required).toContain('email');
    });

    test('Lab.json should have required JSON Schema properties', () => {
      expect(labSchema).toHaveProperty('$schema');
      expect(labSchema).toHaveProperty('title');
      expect(labSchema).toHaveProperty('type', 'object');
      expect(labSchema.required).toContain('name');
      expect(labSchema.required).toContain('institute_label');
      expect(labSchema.required).toContain('pi');
    });

    test('Library.json should have required JSON Schema properties', () => {
      expect(librarySchema).toHaveProperty('$schema');
      expect(librarySchema).toHaveProperty('title');
      expect(librarySchema).toHaveProperty('type', 'object');
      expect(librarySchema.required).toContain('lab');
      expect(librarySchema.required).toContain('samples');
    });

    test('DropletLibrary.json should have required JSON Schema properties', () => {
      expect(dropletLibrarySchema).toHaveProperty('$schema');
      expect(dropletLibrarySchema).toHaveProperty('title');
      expect(dropletLibrarySchema).toHaveProperty('type', 'object');
      expect(dropletLibrarySchema.required).toContain('lab');
      expect(dropletLibrarySchema.required).toContain('samples');
    });

    test('PlateBasedLibrary.json should have required JSON Schema properties', () => {
      expect(plateBasedLibrarySchema).toHaveProperty('$schema');
      expect(plateBasedLibrarySchema).toHaveProperty('title');
      expect(plateBasedLibrarySchema).toHaveProperty('type', 'object');
      expect(plateBasedLibrarySchema.required).toContain('lab');
      expect(plateBasedLibrarySchema.required).toContain('samples');
    });

    test('Donor.json should have required JSON Schema properties', () => {
      expect(donorSchema).toHaveProperty('$schema');
      expect(donorSchema).toHaveProperty('title');
      expect(donorSchema).toHaveProperty('type', 'object');
      expect(donorSchema.required).toContain('lab');
      expect(donorSchema.required).toContain('taxa');
    });

    test('Biosample.json should have required JSON Schema properties', () => {
      expect(biosampleSchema).toHaveProperty('$schema');
      expect(biosampleSchema).toHaveProperty('title');
      expect(biosampleSchema).toHaveProperty('type', 'object');
      expect(biosampleSchema.required).toContain('lab');
      expect(biosampleSchema.required).toContain('donors');
      expect(biosampleSchema.required).toContain('sample_terms');
    });

    test('Tissue.json should have required JSON Schema properties', () => {
      expect(tissueSchema).toHaveProperty('$schema');
      expect(tissueSchema).toHaveProperty('title');
      expect(tissueSchema).toHaveProperty('type', 'object');
      expect(tissueSchema.required).toContain('lab');
      expect(tissueSchema.required).toContain('sample_terms');
      expect(tissueSchema.required).toContain('donors');
    });

    test('ControlledTerm.json should have required JSON Schema properties', () => {
      expect(controlledTermSchema).toHaveProperty('$schema');
      expect(controlledTermSchema).toHaveProperty('title');
      expect(controlledTermSchema).toHaveProperty('type', 'object');
      expect(controlledTermSchema.required).toContain('term_id');
      expect(controlledTermSchema.required).toContain('term_name');
      expect(controlledTermSchema.required).toContain('ontology_source');
    });

    test('PrimaryCell.json should have required JSON Schema properties', () => {
      expect(primaryCellSchema).toHaveProperty('$schema');
      expect(primaryCellSchema).toHaveProperty('title');
      expect(primaryCellSchema).toHaveProperty('type', 'object');
      expect(primaryCellSchema.required).toContain('lab');
      expect(primaryCellSchema.required).toContain('sample_terms');
      expect(primaryCellSchema.required).toContain('donors');
    });

    test('InVitroSystem.json should have required JSON Schema properties', () => {
      expect(inVitroSystemSchema).toHaveProperty('$schema');
      expect(inVitroSystemSchema).toHaveProperty('title');
      expect(inVitroSystemSchema).toHaveProperty('type', 'object');
      expect(inVitroSystemSchema.required).toContain('lab');
      expect(inVitroSystemSchema.required).toContain('sample_terms');
      expect(inVitroSystemSchema.required).toContain('donors');
    });

    test('InVivoSystem.json should have required JSON Schema properties', () => {
      expect(inVivoSystemSchema).toHaveProperty('$schema');
      expect(inVivoSystemSchema).toHaveProperty('title');
      expect(inVivoSystemSchema).toHaveProperty('type', 'object');
      expect(inVivoSystemSchema.required).toContain('lab');
      expect(inVivoSystemSchema.required).toContain('sample_terms');
      expect(inVivoSystemSchema.required).toContain('donors');
    });

    test('Treatment.json should have required JSON Schema properties', () => {
      expect(treatmentSchema).toHaveProperty('$schema');
      expect(treatmentSchema).toHaveProperty('title');
      expect(treatmentSchema).toHaveProperty('type', 'object');
      expect(treatmentSchema.required).toContain('is_composite');
    });

    test('GeneticModification.json should have required JSON Schema properties', () => {
      expect(geneticModificationSchema).toHaveProperty('$schema');
      expect(geneticModificationSchema).toHaveProperty('title');
      expect(geneticModificationSchema).toHaveProperty('type', 'object');
      expect(geneticModificationSchema.required).toContain('description');
      expect(geneticModificationSchema.required).toContain('modality');
    });
  });

  describe('Schema Required Fields', () => {
    test('User schema has correct required fields array', () => {
      expect(userSchema.required).toEqual(['email', 'first_name', 'last_name']);
    });

    test('Lab schema has correct required fields array', () => {
      expect(labSchema.required).toEqual(['name', 'institute_label', 'pi']);
    });

    test('Library schema has correct required fields array', () => {
      expect(librarySchema.required).toEqual(['lab', 'samples']);
    });

    test('DropletLibrary schema has correct required fields array', () => {
      expect(dropletLibrarySchema.required).toEqual(['lab', 'samples']);
    });

    test('PlateBasedLibrary schema has correct required fields array', () => {
      expect(plateBasedLibrarySchema.required).toEqual(['lab', 'samples']);
    });

    test('Donor schema has correct required fields array', () => {
      expect(donorSchema.required).toEqual(['lab', 'taxa']);
    });

    test('Biosample schema has correct required fields array', () => {
      expect(biosampleSchema.required).toEqual(['lab', 'donors', 'sample_terms']);
    });

    test('Tissue schema has correct required fields array', () => {
      expect(tissueSchema.required).toEqual(['lab', 'sample_terms', 'donors']);
    });

    test('ControlledTerm schema has correct required fields array', () => {
      expect(controlledTermSchema.required).toEqual(['term_id', 'term_name', 'ontology_source']);
    });

    test('PrimaryCell schema has correct required fields array', () => {
      expect(primaryCellSchema.required).toEqual(['lab', 'sample_terms', 'donors']);
    });

    test('InVitroSystem schema has correct required fields array', () => {
      expect(inVitroSystemSchema.required).toEqual(['lab', 'sample_terms', 'donors', 'classification']);
    });

    test('InVivoSystem schema has correct required fields array', () => {
      expect(inVivoSystemSchema.required).toEqual(['lab', 'sample_terms', 'donors', 'classification']);
    });

    test('Treatment schema has correct required fields array', () => {
      expect(treatmentSchema.required).toEqual(['is_composite']);
    });

    test('GeneticModification schema has correct required fields array', () => {
      expect(geneticModificationSchema.required).toEqual(['description', 'modality']);
    });
  });

  describe('Schema Properties Validation', () => {
    test('User schema has email with correct validation pattern', () => {
      expect(userSchema.properties.email).toHaveProperty('format', 'email');
      expect(userSchema.properties.email).toHaveProperty('pattern');
    });

    test('Donor schema has taxa with valid species enum', () => {
      expect(donorSchema.properties.taxa.enum).toContain('Homo sapiens');
      expect(donorSchema.properties.taxa.enum).toContain('Mus musculus');
    });

    test('Biosample schema has sample_terms with array constraints', () => {
      expect(biosampleSchema.properties.sample_terms).toHaveProperty('type', 'array');
      expect(biosampleSchema.properties.sample_terms).toHaveProperty('minItems', 1);
      expect(biosampleSchema.properties.sample_terms.maxItems).toBeUndefined();
    });

    test('Lab schema has correct property validations', () => {
      expect(labSchema.properties.name).toHaveProperty('type', 'string');
      expect(labSchema.properties.name).toHaveProperty('pattern');
      expect(labSchema.properties.institute_label).toHaveProperty('type', 'string');
      expect(labSchema.properties.institute_label).toHaveProperty('pattern');
      expect(labSchema.properties.pi).toHaveProperty('linkTo', 'User');
    });

    test('Library schema has correct property validations', () => {
      expect(librarySchema.properties.lab).toHaveProperty('type', 'string');
      expect(librarySchema.properties.lab).toHaveProperty('linkTo', 'Lab');
      expect(librarySchema.properties.samples).toHaveProperty('type', 'array');
      expect(librarySchema.properties.samples).toHaveProperty('minItems', 1);
      expect(librarySchema.properties.samples).toHaveProperty('uniqueItems', true);
      expect(librarySchema.properties.samples.items).toHaveProperty('linkTo', 'Biosample');
      expect(librarySchema.properties.multiplexing_method).toHaveProperty('type', 'string');
      expect(librarySchema.properties.multiplexing_method.enum).toEqual(['cell hashing', 'lipid hashing', 'genetic', 'sample barcodes']);
    });

    test('DropletLibrary schema inherits from Library', () => {
      expect(dropletLibrarySchema.mixinProperties).toContainEqual({"$ref": "Library.json#/properties"});
    });

    test('PlateBasedLibrary schema inherits from Library', () => {
      expect(plateBasedLibrarySchema.mixinProperties).toContainEqual({"$ref": "Library.json#/properties"});
    });

    test('Library schema has multiplexing_method dependency validation', () => {
      expect(librarySchema.dependentSchemas.multiplexing_method).toBeDefined();
      expect(librarySchema.dependentSchemas.multiplexing_method.properties.samples.minItems).toBe(2);
    });

    test('All schemas reference basic_item mixin', () => {
      expect(userSchema.mixinProperties[0].$ref).toBe('mixins.json#/basic_item');
      expect(labSchema.mixinProperties[0].$ref).toBe('mixins.json#/basic_item');
      expect(librarySchema.mixinProperties[0].$ref).toBe('mixins.json#/basic_item');
      expect(dropletLibrarySchema.mixinProperties[0].$ref).toBe('mixins.json#/basic_item');
      expect(plateBasedLibrarySchema.mixinProperties[0].$ref).toBe('mixins.json#/basic_item');
      expect(donorSchema.mixinProperties[0].$ref).toBe('mixins.json#/basic_item');
      expect(biosampleSchema.mixinProperties[0].$ref).toBe('mixins.json#/basic_item');
      expect(tissueSchema.mixinProperties[0].$ref).toBe('mixins.json#/basic_item');
      expect(controlledTermSchema.mixinProperties[0].$ref).toBe('mixins.json#/basic_item');
      expect(primaryCellSchema.mixinProperties[0].$ref).toBe('mixins.json#/basic_item');
      expect(inVitroSystemSchema.mixinProperties[0].$ref).toBe('mixins.json#/basic_item');
      expect(inVivoSystemSchema.mixinProperties[0].$ref).toBe('mixins.json#/basic_item');
      expect(treatmentSchema.mixinProperties[0].$ref).toBe('mixins.json#/basic_item');
      expect(geneticModificationSchema.mixinProperties[0].$ref).toBe('mixins.json#/basic_item');
    });

    test('Tissue schema inherits from abstract Biosample', () => {
      expect(tissueSchema.mixinProperties[1].$ref).toBe('Biosample.json#/properties');
    });

    test('PrimaryCell schema inherits from abstract Biosample', () => {
      expect(primaryCellSchema.mixinProperties[1].$ref).toBe('Biosample.json#/properties');
    });

    test('InVitroSystem schema inherits from abstract Biosample', () => {
      expect(inVitroSystemSchema.mixinProperties[1].$ref).toBe('Biosample.json#/properties');
    });

    test('InVivoSystem schema inherits from abstract Biosample', () => {
      expect(inVivoSystemSchema.mixinProperties[1].$ref).toBe('Biosample.json#/properties');
    });

    test('PrimaryCell has passage_number with minimum validation', () => {
      expect(primaryCellSchema.properties.passage_number.type).toBe('integer');
      expect(primaryCellSchema.properties.passage_number.minimum).toBe(0);
    });

    test('ControlledTerm has correct pattern validations', () => {
      expect(controlledTermSchema.properties.term_id.pattern).toBe(
        '^(CL|EFO|UBERON|CHEBI|UniProt|Cellosaurus):[A-Za-z0-9_]+$'
      );
      expect(controlledTermSchema.properties.term_name.pattern).toBe(
        '^(?![\\s\"\'])[\\S|\\s]*[^\\s\"\']$'
      );
    });

    test('Biosample schema links to ControlledTerm', () => {
      expect(biosampleSchema.properties.sample_terms.items.linkTo).toBe('ControlledTerm');
    });

    test('Tissue schema has orientation enum values', () => {
      expect(tissueSchema.properties.orientation.enum).toContain('coronal');
      expect(tissueSchema.properties.orientation.enum).toContain('sagittal');
      expect(tissueSchema.properties.orientation.enum).toContain('transverse');
    });

    test('Biosample schema has sample procurement interval dependent validations', () => {
      expect(biosampleSchema.dependentSchemas.sample_procurement_interval.required).toContain(
        'sample_procurement_interval_units'
      );
      expect(biosampleSchema.dependentSchemas.sample_procurement_interval_units.required).toContain(
        'sample_procurement_interval'
      );
    });

    test('Biosample schema has sample procurement interval properties', () => {
      expect(biosampleSchema.properties.sample_procurement_interval.type).toBe('integer');
      expect(biosampleSchema.properties.sample_procurement_interval.minimum).toBe(0);
      expect(biosampleSchema.properties.sample_procurement_interval_units.type).toBe('string');
      expect(biosampleSchema.properties.sample_procurement_interval_units.enum).toContain('hour');
      expect(biosampleSchema.properties.sample_procurement_interval_units.enum).toContain('day');
    });

    test('Biosample schema has suspension_type property with correct enum values', () => {
      expect(biosampleSchema.properties.suspension_type).toHaveProperty('type', 'string');
      expect(biosampleSchema.properties.suspension_type.enum).toEqual(['cell', 'nucleus']);
    });

    test('Biosample schema has treatment property linking to Treatment', () => {
      expect(biosampleSchema.properties.treatment).toHaveProperty('type', 'string');
      expect(biosampleSchema.properties.treatment).toHaveProperty('linkTo', 'Treatment');
    });

    test('Biosample schema has genetic_modification property linking to GeneticModification', () => {
      expect(biosampleSchema.properties.genetic_modification).toHaveProperty('type', 'string');
      expect(biosampleSchema.properties.genetic_modification).toHaveProperty('linkTo', 'GeneticModification');
    });

    test('Biosample schema has enrichment properties with correct validation', () => {
      // enrichment_method enum validation
      expect(biosampleSchema.properties.enrichment_method).toHaveProperty('type', 'string');
      expect(biosampleSchema.properties.enrichment_method.enum).toEqual([
        'FACS', 'MACS', 'size_exclusion', 'density_gradient', 'manual_picking', 'microfluidics'
      ]);

      // enriched_cell_types array linking to ControlledTerm with CL requirement
      expect(biosampleSchema.properties.enriched_cell_types).toHaveProperty('type', 'array');
      expect(biosampleSchema.properties.enriched_cell_types).toHaveProperty('uniqueItems', true);
      expect(biosampleSchema.properties.enriched_cell_types.items).toHaveProperty('linkTo', 'ControlledTerm');
      expect(biosampleSchema.properties.enriched_cell_types.description).toContain('Cell Ontology (CL)');
      expect(biosampleSchema.properties.enriched_cell_types.items.comment).toContain("ontology_source='CL'");

      // depleted_cell_types array linking to ControlledTerm with CL requirement
      expect(biosampleSchema.properties.depleted_cell_types).toHaveProperty('type', 'array');
      expect(biosampleSchema.properties.depleted_cell_types).toHaveProperty('uniqueItems', true);
      expect(biosampleSchema.properties.depleted_cell_types.items).toHaveProperty('linkTo', 'ControlledTerm');
      expect(biosampleSchema.properties.depleted_cell_types.description).toContain('Cell Ontology (CL)');
      expect(biosampleSchema.properties.depleted_cell_types.items.comment).toContain("ontology_source='CL'");

      // enrichment_markers complex object array
      expect(biosampleSchema.properties.enrichment_markers).toHaveProperty('type', 'array');
      expect(biosampleSchema.properties.enrichment_markers).toHaveProperty('uniqueItems', true);
      expect(biosampleSchema.properties.enrichment_markers.items.type).toBe('object');
      expect(biosampleSchema.properties.enrichment_markers.items.required).toEqual(['marker', 'expression_level']);
    });

    test('Biosample enrichment_markers has correct marker enum values', () => {
      const markerEnum = biosampleSchema.properties.enrichment_markers.items.properties.marker.enum;
      expect(markerEnum).toContain('CD45');
      expect(markerEnum).toContain('CD31');
      expect(markerEnum).toContain('CD3');
      expect(markerEnum).toContain('CD4');
      expect(markerEnum).toContain('CD123');
      expect(markerEnum).toContain('CD205');
      expect(markerEnum).toEqual([
        "CD3", "CD4", "CD8", "CD14", "CD16", "CD19", "CD20", "CD31", "CD34", "CD45", "CD56", "CD90", "CD123", "CD141", "CD144", "CD205"
      ]);

      const expressionEnum = biosampleSchema.properties.enrichment_markers.items.properties.expression_level.enum;
      expect(expressionEnum).toEqual(['positive', 'negative', 'low', 'high', 'intermediate']);
    });

    test('Tissue schema has thickness dependent validations only', () => {
      expect(tissueSchema.dependentSchemas.thickness.required).toContain('thickness_units');
      expect(tissueSchema.dependentSchemas.thickness_units.required).toContain('thickness');
      expect(tissueSchema.dependentSchemas.sample_procurement_interval).toBeUndefined();
    });

    test('Concrete schemas inherit sample procurement properties via mixinProperties', () => {
      // Tissue inherits from Biosample which has sample_procurement_interval
      expect(tissueSchema.mixinProperties[1].$ref).toBe('Biosample.json#/properties');
      // PrimaryCell also inherits from Biosample
      expect(primaryCellSchema.mixinProperties[1].$ref).toBe('Biosample.json#/properties');
      // Direct properties should not exist in concrete schemas
      expect(tissueSchema.properties.sample_procurement_interval).toBeUndefined();
      expect(primaryCellSchema.properties.sample_procurement_interval).toBeUndefined();
    });

    test('InVitroSystem has classification enum with correct values', () => {
      expect(inVitroSystemSchema.properties.classification.type).toBe('string');
      expect(inVitroSystemSchema.properties.classification.enum).toEqual([
        'organoid', 'gastruloid', 'embryoid', 'immortalized cell line'
      ]);
    });

    test('InVivoSystem has classification enum and optional host property', () => {
      expect(inVivoSystemSchema.properties.classification.type).toBe('string');
      expect(inVivoSystemSchema.properties.classification.enum).toEqual(['xenograft']);
      expect(inVivoSystemSchema.properties.host.type).toBe('string');
      expect(inVivoSystemSchema.properties.host.linkTo).toBe('Donor');
      // Host should be optional (not in required array)
      expect(inVivoSystemSchema.required).not.toContain('host');
    });

    test('InVitro and InVivo systems inherit from Biosample with additional properties', () => {
      // Both schemas inherit from Biosample
      expect(inVitroSystemSchema.mixinProperties[1].$ref).toBe('Biosample.json#/properties');
      expect(inVivoSystemSchema.mixinProperties[1].$ref).toBe('Biosample.json#/properties');
      // Properties object should now contain classification (no longer empty)
      expect(Object.keys(inVitroSystemSchema.properties)).toContain('classification');
      expect(Object.keys(inVivoSystemSchema.properties)).toContain('classification');
      expect(Object.keys(inVivoSystemSchema.properties)).toContain('host');
      // Should still inherit all Biosample properties via mixinProperties
      expect(inVitroSystemSchema.properties.sample_procurement_interval).toBeUndefined();
      expect(inVivoSystemSchema.properties.sample_procurement_interval).toBeUndefined();
    });

    test('Treatment schema has is_composite property with dependent validation', () => {
      expect(treatmentSchema.properties.is_composite.type).toBe('boolean');
      expect(treatmentSchema.dependentSchemas.is_composite).toBeDefined();

      // Test non-composite treatment requirements
      const nonCompositeSchema = treatmentSchema.dependentSchemas.is_composite.then;
      expect(nonCompositeSchema.required).toEqual(['ontological_term', 'concentration', 'duration']);
      expect(nonCompositeSchema.properties.ontological_term.type).toBe('string');
      expect(nonCompositeSchema.properties.concentration.type).toBe('number');
      expect(nonCompositeSchema.properties.concentration.minimum).toBe(0);
      expect(nonCompositeSchema.properties.concentration_units.type).toBe('string');
      expect(nonCompositeSchema.properties.concentration_units.enum).toContain('μM');
      expect(nonCompositeSchema.properties.concentration_units.enum).toContain('nM');
      expect(nonCompositeSchema.properties.duration.type).toBe('number');
      expect(nonCompositeSchema.properties.duration.minimum).toBe(0);
      expect(nonCompositeSchema.properties.duration_units.type).toBe('string');
      expect(nonCompositeSchema.properties.duration_units.enum).toContain('hour');
      expect(nonCompositeSchema.properties.duration_units.enum).toContain('day');

      // Test composite treatment requirements
      const compositeSchema = treatmentSchema.dependentSchemas.is_composite.else;
      expect(compositeSchema.required).toEqual(['description', 'protocol_document']);
      expect(compositeSchema.properties.description.type).toBe('string');
      expect(compositeSchema.properties.protocol_document.type).toBe('string');
    });

    test('Treatment schema has concentration/duration unit dependencies in non-composite', () => {
      const nonCompositeSchema = treatmentSchema.dependentSchemas.is_composite.then;
      expect(nonCompositeSchema.dependentSchemas.concentration.required).toContain('concentration_units');
      expect(nonCompositeSchema.dependentSchemas.concentration_units.required).toContain('concentration');
      expect(nonCompositeSchema.dependentSchemas.duration.required).toContain('duration_units');
      expect(nonCompositeSchema.dependentSchemas.duration_units.required).toContain('duration');
    });

    test('GeneticModification schema has correct property validation', () => {
      expect(geneticModificationSchema.properties.description.type).toBe('string');
      expect(geneticModificationSchema.properties.description.pattern).toBe('^(\\S+(\\s|\\S)*\\S+|\\S)$');
      expect(geneticModificationSchema.properties.modality.type).toBe('string');
      expect(geneticModificationSchema.properties.modality.enum).toContain('activation');
      expect(geneticModificationSchema.properties.modality.enum).toContain('knockout');
      expect(geneticModificationSchema.properties.modality.enum).toContain('base editing');
      expect(geneticModificationSchema.properties.cas.enum).toContain('Cas9');
      expect(geneticModificationSchema.properties.cas.enum).toContain('dCas9');
      expect(geneticModificationSchema.properties.activating_agent_term_id.pattern).toBe('^CHEBI:[0-9]{1,7}$');
    });

    test('GeneticModification schema has chemical activation dependency', () => {
      expect(geneticModificationSchema.dependentSchemas.activated).toBeDefined();

      // Test the if condition - activated must be true
      const ifCondition = geneticModificationSchema.dependentSchemas.activated.if;
      expect(ifCondition.properties.activated.const).toBe(true);

      // Test the then requirement - requires both agent properties
      const thenSchema = geneticModificationSchema.dependentSchemas.activated.then;
      expect(thenSchema.required).toEqual(['activating_agent_term_id', 'activating_agent_term_name']);
    });

  });

  describe('Example Data Structure Validation', () => {
    const loadExample = (examplePath) => {
      const fullPath = path.join(__dirname, '../examples', examplePath);
      return JSON.parse(fs.readFileSync(fullPath, 'utf8'));
    };

    test('Valid tissue example has proper structure and inheritance properties', () => {
      const validTissue = loadExample('tissue/valid-tissue.json');
      
      // Check inherited Biosample properties
      expect(validTissue.lab).toBeDefined();
      expect(validTissue.donors).toBeDefined();
      expect(validTissue.sample_terms).toBeDefined();
      expect(validTissue.sample_procurement_interval).toBeDefined();
      expect(validTissue.sample_procurement_interval_units).toBeDefined();
      
      // Check tissue-specific properties
      expect(validTissue.thickness).toBeDefined();
      expect(validTissue.thickness_units).toBeDefined();
      expect(validTissue.orientation).toBeDefined();
      
      // Verify dependent property pairing is correct
      expect(validTissue.sample_procurement_interval).toBe(2);
      expect(validTissue.sample_procurement_interval_units).toBe('hour');
    });

    test('Invalid tissue example missing required dependent property', () => {
      const invalidTissue = loadExample('tissue/invalid-tissue.json');
      
      // Should have sample_procurement_interval but missing units
      expect(invalidTissue.sample_procurement_interval).toBeDefined();
      expect(invalidTissue.sample_procurement_interval_units).toBeUndefined();
      
      // This violates the dependentSchemas rule from Biosample
    });

    test('Valid primary cell example has proper structure and inheritance properties', () => {
      const validPrimaryCell = loadExample('primary_cell/valid-primary-cell.json');
      
      // Check inherited Biosample properties
      expect(validPrimaryCell.lab).toBeDefined();
      expect(validPrimaryCell.donors).toBeDefined();
      expect(validPrimaryCell.sample_terms).toBeDefined();
      expect(validPrimaryCell.sample_procurement_interval).toBeDefined();
      expect(validPrimaryCell.sample_procurement_interval_units).toBeDefined();
      
      // Check primary cell-specific properties
      expect(validPrimaryCell.passage_number).toBeDefined();
      
      // Verify dependent property pairing is correct
      expect(validPrimaryCell.sample_procurement_interval).toBe(1);
      expect(validPrimaryCell.sample_procurement_interval_units).toBe('day');
    });

    test('Invalid primary cell example missing required dependent property', () => {
      const invalidPrimaryCell = loadExample('primary_cell/invalid-primary-cell.json');
      
      // Should have units but missing sample_procurement_interval
      expect(invalidPrimaryCell.sample_procurement_interval).toBeUndefined();
      expect(invalidPrimaryCell.sample_procurement_interval_units).toBeDefined();
      
      // This violates the dependentSchemas rule from Biosample
    });

    test('Both tissue and primary cell inherit sample_procurement_interval properties', () => {
      const validTissue = loadExample('tissue/valid-tissue.json');
      const validPrimaryCell = loadExample('primary_cell/valid-primary-cell.json');
      
      // Both should have inherited the timing properties from Biosample
      expect(validTissue.sample_procurement_interval).toBe(2);
      expect(validTissue.sample_procurement_interval_units).toBe('hour');
      expect(validPrimaryCell.sample_procurement_interval).toBe(1);
      expect(validPrimaryCell.sample_procurement_interval_units).toBe('day');
      
      // Verify units are from valid enum values
      expect(['second', 'minute', 'hour', 'day', 'week']).toContain(validTissue.sample_procurement_interval_units);
      expect(['second', 'minute', 'hour', 'day', 'week']).toContain(validPrimaryCell.sample_procurement_interval_units);
    });

    test('Valid in vitro system example has proper structure and inheritance properties', () => {
      const validInVitro = loadExample('in_vitro_system/valid-in-vitro-system.json');
      
      // Check inherited Biosample properties
      expect(validInVitro.lab).toBeDefined();
      expect(validInVitro.donors).toBeDefined();
      expect(validInVitro.sample_terms).toBeDefined();
      expect(validInVitro.sample_procurement_interval).toBeDefined();
      expect(validInVitro.sample_procurement_interval_units).toBeDefined();
      
      // Check new classification property
      expect(validInVitro.classification).toBeDefined();
      expect(validInVitro.classification).toBe('organoid');
      expect(['organoid', 'gastruloid', 'embryoid', 'immortalized cell line']).toContain(validInVitro.classification);
      
      // Verify inherited timing properties work correctly
      expect(validInVitro.sample_procurement_interval).toBe(4);
      expect(validInVitro.sample_procurement_interval_units).toBe('hour');
    });

    test('Invalid in vitro system example missing required properties', () => {
      const invalidInVitro = loadExample('in_vitro_system/invalid-in-vitro-system.json');
      
      // Should be missing required sample_terms and classification
      expect(invalidInVitro.sample_terms).toBeUndefined();
      expect(invalidInVitro.classification).toBeUndefined();
      // Has procurement interval but missing units (violates dependentSchemas)
      expect(invalidInVitro.sample_procurement_interval).toBeDefined();
      expect(invalidInVitro.sample_procurement_interval_units).toBeUndefined();
    });

    test('Valid in vivo system example has proper structure and inheritance properties', () => {
      const validInVivo = loadExample('in_vivo_system/valid-in-vivo-system.json');
      
      // Check inherited Biosample properties
      expect(validInVivo.lab).toBeDefined();
      expect(validInVivo.donors).toBeDefined();
      expect(validInVivo.sample_terms).toBeDefined();
      expect(validInVivo.sample_procurement_interval).toBeDefined();
      expect(validInVivo.sample_procurement_interval_units).toBeDefined();
      
      // Check new classification and host properties
      expect(validInVivo.classification).toBeDefined();
      expect(validInVivo.classification).toBe('xenograft');
      expect(['xenograft']).toContain(validInVivo.classification);
      expect(validInVivo.host).toBeDefined();
      expect(validInVivo.host).toBe('HOST_MOUSE_001');
      
      // Verify inherited timing properties work correctly
      expect(validInVivo.sample_procurement_interval).toBe(30);
      expect(validInVivo.sample_procurement_interval_units).toBe('minute');
    });

    test('Invalid in vivo system example missing required properties', () => {
      const invalidInVivo = loadExample('in_vivo_system/invalid-in-vivo-system.json');
      
      // Should be missing required donors array and classification
      expect(invalidInVivo.donors).toBeUndefined();
      expect(invalidInVivo.classification).toBeUndefined();
      // Has valid timing properties
      expect(invalidInVivo.sample_procurement_interval).toBeDefined();
      expect(invalidInVivo.sample_procurement_interval_units).toBeDefined();
    });

    test('All biosample types inherit sample_procurement_interval properties consistently', () => {
      const validTissue = loadExample('tissue/valid-tissue.json');
      const validPrimaryCell = loadExample('primary_cell/valid-primary-cell.json');
      const validInVitro = loadExample('in_vitro_system/valid-in-vitro-system.json');
      const validInVivo = loadExample('in_vivo_system/valid-in-vivo-system.json');
      
      // All should have inherited timing properties from Biosample
      [validTissue, validPrimaryCell, validInVitro, validInVivo].forEach(sample => {
        expect(sample.sample_procurement_interval).toBeDefined();
        expect(sample.sample_procurement_interval_units).toBeDefined();
        expect(['second', 'minute', 'hour', 'day', 'week']).toContain(sample.sample_procurement_interval_units);
      });
    });
  });
});
