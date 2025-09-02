const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const fs = require('fs');
const path = require('path');

const ajv = new Ajv({ strict: false, allErrors: true });
addFormats(ajv);

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
  describe('Schema Self-Validation', () => {
    test('mixins.json should be valid JSON Schema', () => {
      const validate = ajv.validateSchema(mixinsSchema);
      expect(validate).toBe(true);
      if (!validate) {
        console.log('Mixins schema errors:', ajv.errors);
      }
    });

    test('User.json should be valid JSON Schema', () => {
      const validate = ajv.validateSchema(userSchema);
      expect(validate).toBe(true);
      if (!validate) {
        console.log('User schema errors:', ajv.errors);
      }
    });

    test('Donor.json should be valid JSON Schema', () => {
      const validate = ajv.validateSchema(donorSchema);
      expect(validate).toBe(true);
      if (!validate) {
        console.log('Donor schema errors:', ajv.errors);
      }
    });

    test('Biosample.json should be valid JSON Schema', () => {
      const validate = ajv.validateSchema(biosampleSchema);
      expect(validate).toBe(true);
      if (!validate) {
        console.log('Biosample schema errors:', ajv.errors);
      }
    });
  });

  describe('Schema Compilation', () => {
    test('User schema should compile successfully', () => {
      expect(() => {
        ajv.compile(userSchema);
      }).not.toThrow();
    });

    test('Donor schema should compile successfully', () => {
      expect(() => {
        ajv.compile(donorSchema);
      }).not.toThrow();
    });

    test('Biosample schema should compile successfully', () => {
      expect(() => {
        ajv.compile(biosampleSchema);
      }).not.toThrow();
    });
  });

  describe('Required Fields Validation', () => {
    test('User schema requires email, first_name, last_name', () => {
      const validate = ajv.compile(userSchema);
      
      // Missing required fields should fail
      expect(validate({})).toBe(false);
      expect(validate({ email: 'test@example.com' })).toBe(false);
      expect(validate({ email: 'test@example.com', first_name: 'John' })).toBe(false);
      
      // All required fields should pass
      expect(validate({
        email: 'test@example.com',
        first_name: 'John',
        last_name: 'Doe'
      })).toBe(true);
    });

    test('Donor schema requires lab, taxa', () => {
      const validate = ajv.compile(donorSchema);
      
      // Missing required fields should fail
      expect(validate({})).toBe(false);
      expect(validate({ lab: 'test-lab' })).toBe(false);
      
      // All required fields should pass
      expect(validate({
        lab: 'test-lab',
        taxa: 'Homo sapiens'
      })).toBe(true);
    });

    test('Biosample schema requires lab, donors, sample_terms', () => {
      const validate = ajv.compile(biosampleSchema);
      
      // Missing required fields should fail
      expect(validate({})).toBe(false);
      expect(validate({ lab: 'test-lab' })).toBe(false);
      expect(validate({ lab: 'test-lab', donors: ['donor1'] })).toBe(false);
      
      // All required fields should pass
      expect(validate({
        lab: 'test-lab',
        donors: ['donor1'],
        sample_terms: ['term1']
      })).toBe(true);
    });
  });

  describe('Field Validation Rules', () => {
    test('User email should follow pattern validation', () => {
      const validate = ajv.compile(userSchema);
      
      const validUser = {
        email: 'valid@example.com',
        first_name: 'John',
        last_name: 'Doe'
      };
      
      const invalidUser = {
        email: 'INVALID@EXAMPLE.COM', // uppercase not allowed
        first_name: 'John',
        last_name: 'Doe'
      };
      
      expect(validate(validUser)).toBe(true);
      expect(validate(invalidUser)).toBe(false);
    });

    test('Donor taxa should only accept valid species', () => {
      const validate = ajv.compile(donorSchema);
      
      expect(validate({
        lab: 'test-lab',
        taxa: 'Homo sapiens'
      })).toBe(true);
      
      expect(validate({
        lab: 'test-lab',
        taxa: 'Mus musculus'
      })).toBe(true);
      
      expect(validate({
        lab: 'test-lab',
        taxa: 'Invalid species'
      })).toBe(false);
    });

    test('Biosample sample_terms should be array with exactly one item', () => {
      const validate = ajv.compile(biosampleSchema);
      
      // Valid: exactly one sample term
      expect(validate({
        lab: 'test-lab',
        donors: ['donor1'],
        sample_terms: ['term1']
      })).toBe(true);
      
      // Invalid: empty array
      expect(validate({
        lab: 'test-lab',
        donors: ['donor1'],
        sample_terms: []
      })).toBe(false);
      
      // Invalid: multiple sample terms
      expect(validate({
        lab: 'test-lab',
        donors: ['donor1'],
        sample_terms: ['term1', 'term2']
      })).toBe(false);
    });
  });
});