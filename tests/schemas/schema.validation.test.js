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
  loadSchema: false
});
addFormats(ajv);

// Add custom keywords used in IGVFD-style schemas
const customKeywords = [
  'mixinProperties', 'linkTo', 'linkSubmitsFor', 'permission', 
  'serverDefault', 'requestMethod', 'uniqueKey', 'comment',
  'rdfs:subPropertyOf', 'accessionType'
];

customKeywords.forEach(keyword => {
  ajv.addKeyword({ 
    keyword, 
    compile: () => () => true 
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
    });
  });
});
