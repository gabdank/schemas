# Project Plan: schemas

## Project Metadata
- **Created:** September 2, 2025
- **Last Updated:** September 2, 2025
- **Version:** 1.0.0
- **Repository:** https://github.com/gabdank/schemas
- **Claude Project:** lattice-db-old

---

## 🎯 Project Overview

### Objective
[Clear, concise project goal]

### Scope
- **In Scope:** 
- **Out of Scope:** 
- **Success Criteria:** 

### Key Technologies
- **Languages:** 
- **Frameworks:** 
- **Tools:** 
- **APIs:** 

---

## 📁 Repository Structure

```
project-root/
├── PROJECT.md              # This document
├── src/                    
│   ├── components/         
│   ├── utils/             
│   └── schemas/           # JSON schema files
├── docs/                  
├── tests/                 
└── .github/
    └── workflows/         # GitHub Actions
```

### Key Files for Claude Code
| File Path | Purpose | Current Status |
|-----------|---------|----------------|
| `src/main.js` | Entry point | ⏳ Pending |
| `src/schemas/` | Data schemas | ⏳ Pending |
| `package.json` | Dependencies | ✅ Complete |

---

## 🚀 Project Phases

### Phase 1: Foundation Setup
**Status:** 🟡 In Progress  
**GitHub Branch:** `feature/foundation`  
**Issues:** [#1](link), [#2](link)

**Objectives:**
- Initialize project structure
- Set up development environment
- Create base configuration files

**Claude Code Context:**
```
Focus on setting up the basic project structure. Prioritize:
1. Package.json with essential dependencies
2. Basic folder structure
3. Configuration files (eslint, prettier, etc.)
```

### Phase 2: Core Development
**Status:** ⏳ Planned  
**GitHub Branch:** `feature/core`  
**Target Date:** [DATE]

**Objectives:**
- Implement core functionality
- Create main components/modules
- Set up initial data schemas

**Claude Code Context:**
```
Implement the core business logic. Reference the schemas in /src/schemas/ 
and ensure all components follow the established patterns from Phase 1.
```

### Phase 3: Integration & Testing
**Status:** ⏳ Planned  
**GitHub Branch:** `feature/testing`

**Objectives:**
- Write comprehensive tests
- Integrate external APIs
- Performance optimization

### Phase 4: Deployment & Documentation
**Status:** ⏳ Planned  
**GitHub Branch:** `feature/deploy`

**Objectives:**
- Production deployment setup
- User documentation
- Final testing and validation

---

## 📋 Detailed Task Breakdown

### Current Sprint Tasks

#### Active Tasks
- [ ] **Task 1** - [Description] 
  - **File:** `src/component.js`
  - **Issue:** [#X](github-issue-link)
  - **Assignee:** Claude Code
  - **Notes:** [Any specific requirements]

- [ ] **Task 2** - [Description]
  - **File:** `src/utils/helper.js`
  - **Issue:** [#Y](github-issue-link)
  - **Status:** In Review

#### Completed Tasks
- [x] **Initial Setup** - Repository initialization
  - **Completed:** [DATE]
  - **Commit:** [commit-hash]

---

## 🔄 JSON Schema Management

### Schema Registry
| Schema Name | Version | File Path | Last Updated | Changes |
|-------------|---------|-----------|--------------|---------|
| User | 1.0.0 | `src/schemas/user.v1.json` | [DATE] | Initial version |
| Product | 1.2.0 | `src/schemas/product.v1.2.json` | [DATE] | Added price validation |

### Schema Change Log

#### User Schema v1.0.0 → v1.1.0
**Date:** [DATE]  
**Breaking Changes:** No  
**Migration Required:** No

**Changes:**
- Added optional `avatar` field
- Updated `email` validation regex
- Added `createdAt` timestamp

**Files Affected:**
- `src/schemas/user.v1.1.json`
- `src/types/user.ts`
- `src/components/UserProfile.js`

**Claude Code Instructions:**
```
Update all user-related components to handle the new avatar field.
Check UserProfile.js for avatar display logic implementation.
```

#### Product Schema v1.1.0 → v1.2.0
**Date:** [DATE]  
**Breaking Changes:** Yes  
**Migration Required:** Yes

**Changes:**
- Changed `price` from string to number
- Made `category` required
- Deprecated `oldField`

**Migration Notes:**
```javascript
// Convert existing data
const migrateProduct = (oldProduct) => ({
  ...oldProduct,
  price: parseFloat(oldProduct.price),
  category: oldProduct.category || 'uncategorized'
});
```

---

## 🧠 Claude Code Context & Instructions

### Current Development Focus
**Phase:** [Current Phase]  
**Priority:** [High/Medium/Low]  
**Next Milestone:** [Description]

### Key Context for Claude Code
```
Project Context:
- This is a [type] application focused on [primary purpose]
- We're currently in [phase] working on [specific goals]
- The codebase follows [architectural pattern/conventions]
- Pay special attention to [specific areas of focus]

Current Priorities:
1. [Priority 1 with file references]
2. [Priority 2 with file references]
3. [Priority 3 with file references]

Code Standards:
- Follow existing patterns in /src/components/
- All new schemas go in /src/schemas/ with version numbers
- Update this PROJECT.md when making structural changes
- Use TypeScript interfaces that match JSON schemas
```

### Architecture Decisions
| Decision | Rationale | Impact | Files |
|----------|-----------|--------|-------|
| React + TypeScript | Type safety, component reusability | All frontend code | `src/components/` |
| JSON Schema validation | Data integrity, API validation | Data layer | `src/schemas/` |

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
git clone [REPO_URL]
cd [PROJECT_NAME]
npm install

# Start development
npm run dev

# Run tests
npm test

# Schema validation
npm run validate-schemas
```

### Environment Variables
```bash
# Required for development
API_KEY=your_api_key
DATABASE_URL=your_db_url
NODE_ENV=development
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
- [API Documentation](link)
- [Schema Specifications](link)
- [Development Guidelines](link)

### Claude Code Quick References
- **Schema Location:** Always check `/src/schemas/` for latest versions
- **Component Patterns:** Follow examples in `/src/components/BaseComponent.js`
- **Testing:** Use patterns from `/tests/example.test.js`

---

## 🎯 Next Actions

### Immediate (This Week)
- [ ] Complete [specific task]
- [ ] Update [specific schema]
- [ ] Review [specific component]

### Short Term (Next 2 Weeks)
- [ ] Implement [feature]
- [ ] Migrate to [new version]
- [ ] Optimize [performance area]

### Long Term (Next Month)
- [ ] [Major milestone]
- [ ] [Integration goal]
- [ ] [Deployment target]

---

*Last updated: September 2, 2025 | Version: 1.0.0 | [Latest Commit](https://github.com/gabdank/schemas/commits/main)*