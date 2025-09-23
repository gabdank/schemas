# Enrichment Example Data

This directory contains example data demonstrating enrichment workflows for biological samples.

## Note on ControlledTerm References

In these examples, `enriched_cell_types` and `depleted_cell_types` use CL (Cell Ontology) term IDs directly (e.g., "CL:0000842") for simplicity in example data.

In a real database implementation, these would be UUIDs referencing ControlledTerm objects where:
- `term_id` = "CL:0000842"
- `ontology_source` = "CL"
- `term_name` = "mononuclear cell" (for example)

The schema requires that linked ControlledTerm objects have `ontology_source="CL"` for enriched and depleted cell types.

## Example Files

- `valid-enriched-tissue.json` - Tissue sample with CD45+ enrichment
- `valid-depleted-primary-cell.json` - Primary T cells with CD8+ depletion
- `complex-multi-marker-enrichment.json` - Multi-marker FACS sorting scenario