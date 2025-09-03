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
const donorSchema = loadSchema('Donor.json');
const biosampleSchema = loadSchema('Biosample.json');
const tissueSchema = loadSchema('Tissue.json');
const biosampleOntologyTermSchema = loadSchema('BiosampleOntologyTerm.json');

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

    test('BiosampleOntologyTerm.json should have required JSON Schema properties', () => {
      expect(biosampleOntologyTermSchema).toHaveProperty('$schema');
      expect(biosampleOntologyTermSchema).toHaveProperty('title');
      expect(biosampleOntologyTermSchema).toHaveProperty('type', 'object');
      expect(biosampleOntologyTermSchema.required).toContain('term_id');
      expect(biosampleOntologyTermSchema.required).toContain('term_name');
    });
  });

  describe('Schema Required Fields', () => {
    test('User schema has correct required fields array', () => {
      expect(userSchema.required).toEqual(['email', 'first_name', 'last_name']);
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

    test('BiosampleOntologyTerm schema has correct required fields array', () => {
      expect(biosampleOntologyTermSchema.required).toEqual(['term_id', 'term_name']);
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
      expect(biosampleSchema.properties.sample_terms).toHaveProperty('maxItems', 1);
    });

    test('All schemas reference basic_item mixin', () => {
      expect(userSchema.mixinProperties[0].$ref).toBe('mixins.json#/basic_item');
      expect(donorSchema.mixinProperties[0].$ref).toBe('mixins.json#/basic_item');
      expect(biosampleSchema.mixinProperties[0].$ref).toBe('mixins.json#/basic_item');
      expect(tissueSchema.mixinProperties[0].$ref).toBe('mixins.json#/basic_item');
      expect(biosampleOntologyTermSchema.mixinProperties[0].$ref).toBe('mixins.json#/basic_item');
    });

    test('Tissue schema inherits from abstract Biosample', () => {
      expect(tissueSchema.mixinProperties[1].$ref).toBe('Biosample.json#/properties');
    });

    test('BiosampleOntologyTerm has correct pattern validations', () => {
      expect(biosampleOntologyTermSchema.properties.term_id.pattern).toBe('^(UBERON|EFO|CL|CLO|NTR):[0-9]{2,8}$');
      expect(biosampleOntologyTermSchema.properties.term_name.pattern).toBe('^(?![\\s\"\'])[\\S|\\s]*[^\\s\"\']$');
    });

    test('Biosample schema links to BiosampleOntologyTerm', () => {
      expect(biosampleSchema.properties.sample_terms.items.linkTo).toBe('BiosampleOntologyTerm');
    });

    test('Tissue schema has orientation enum values', () => {
      expect(tissueSchema.properties.orientation.enum).toContain('coronal');
      expect(tissueSchema.properties.orientation.enum).toContain('sagittal');
      expect(tissueSchema.properties.orientation.enum).toContain('transverse');
    });

    test('Tissue schema has dependent validations', () => {
      expect(tissueSchema.dependentSchemas.sample_procurement_interval.required).toContain('sample_procurement_interval_units');
      expect(tissueSchema.dependentSchemas.sample_procurement_interval_units.required).toContain('sample_procurement_interval');
      expect(tissueSchema.dependentSchemas.thickness.required).toContain('thickness_units');
      expect(tissueSchema.dependentSchemas.thickness_units.required).toContain('thickness');
    });
  });
});
