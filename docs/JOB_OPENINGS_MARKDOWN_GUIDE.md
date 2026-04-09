# Job Openings - Markdown-Based System

Simple markdown-based job openings management for static Next.js sites.

## Overview

This system uses a markdown file (`public/data/job-openings.md`) to manage job openings. No database or CMS required - just edit a markdown file and rebuild your site.

## Features

✅ **Simple**: Edit a markdown file to add/remove jobs
✅ **Static Export Compatible**: Perfect for shared hosting
✅ **No Dependencies**: No external services or databases
✅ **Conditional Rendering**: Section automatically hides when no jobs
✅ **Filtering**: Filter by department, location, and type
✅ **Featured Jobs**: Highlight important positions
✅ **SEO Friendly**: All content in static HTML

## Quick Start

### 1. Edit the Markdown File

Open `public/data/job-openings.md` and add your job openings:

```markdown
---
## Senior Software Engineer
- **Department:** Engineering
- **Location:** Riyadh, Saudi Arabia
- **Type:** Full-time
- **Salary:** SAR 120,000 - 180,000/year
- **Posted:** 2024-01-15
- **Deadline:** 2024-04-30
- **Featured:** true

### Description
We are seeking an experienced Senior Software Engineer...

### Requirements
- 5+ years of experience in software development
- Strong proficiency in JavaScript/TypeScript
- Experience with Next.js

### Responsibilities
- Design and develop scalable web applications
- Collaborate with cross-functional teams
- Write clean, maintainable code
---
```

### 2. Use the Component in Your Page

```tsx
// app/[lang]/careers/page.tsx
import { parseJobOpenings } from '@/lib/jobOpeningsParser';
import JobOpeningsMarkdown from '@/components/careers/JobOpeningsMarkdown';

export default function CareersPage() {
  const jobs = parseJobOpenings();

  // Section automatically hides if no jobs
  if (jobs.length === 0) {
    return (
      <main>
        <h1>Careers</h1>
        <p>No positions available at this time.</p>
      </main>
    );
  }

  return (
    <main>
      <JobOpeningsMarkdown 
        jobs={jobs}
        content={{
          title: "Current Openings",
          subtitle: "Join Our Team",
          description: "Explore exciting career opportunities",
          filters: { all: "All" },
          cta: { label: "Apply Now", href: "/careers/apply" }
        }}
      />
    </main>
  );
}
```

### 3. Build and Deploy

```bash
npm run build
# Upload 'out' folder to your shared hosting
```

## Markdown File Format

### Job Entry Structure

Each job opening must be wrapped in `---` separators:

```markdown
---
## Job Title
- **Department:** Required
- **Location:** Required
- **Type:** Required
- **Salary:** Optional
- **Posted:** Required (YYYY-MM-DD)
- **Deadline:** Optional (YYYY-MM-DD)
- **Featured:** Optional (true/false)

### Description
Job description text here...

### Requirements
- Requirement 1
- Requirement 2
- Requirement 3

### Responsibilities
- Responsibility 1
- Responsibility 2
- Responsibility 3
---
```

### Required Fields

- `## Job Title` - The job title (heading level 2)
- `Department` - Department name
- `Location` - Location or "Remote"
- `Type` - Employment type (Full-time, Part-time, Contract, Internship)
- `Posted` - Posting date in YYYY-MM-DD format
- `### Description` - Job description
- `### Requirements` - List of requirements
- `### Responsibilities` - List of responsibilities

### Optional Fields

- `Salary` - Salary range (e.g., "SAR 80,000 - 120,000/year")
- `Deadline` - Application deadline in YYYY-MM-DD format
- `Featured` - Set to "true" to highlight the job

## Managing Job Openings

### Adding a New Job

1. Open `public/data/job-openings.md`
2. Copy the template from the file
3. Fill in the job details
4. Save the file
5. Rebuild: `npm run build`
6. Deploy the updated `out` folder

### Removing a Job

1. Open `public/data/job-openings.md`
2. Delete the job entry (including the `---` separators)
3. Save the file
4. Rebuild and deploy

### Hiding All Jobs

To hide the job openings section completely:

**Option 1**: Comment out all jobs in the markdown file:
```markdown
<!--
---
## Job Title
...
---
-->
```

**Option 2**: Delete all job entries (keep the file but remove all jobs)

**Option 3**: Delete the markdown file entirely

The section will automatically hide when no jobs are found.

### Featuring a Job

Add `- **Featured:** true` to highlight a job:

```markdown
---
## Senior Software Engineer
- **Department:** Engineering
- **Location:** Riyadh, Saudi Arabia
- **Type:** Full-time
- **Featured:** true
...
---
```

Featured jobs display a badge and can be styled differently.

## Component Props

### JobOpeningsMarkdown

```typescript
interface JobOpeningsMarkdownProps {
  jobs: JobOpening[];
  content?: {
    title?: string;           // Section title
    subtitle?: string;        // Section subtitle
    description?: string;     // Section description
    filters?: { all: string }; // "All" filter label
    cta?: {
      label: string;          // Apply button text
      href: string;           // Apply button link
    };
  };
}
```

### Default Values

If you don't provide content props, these defaults are used:

```typescript
{
  title: "Current Openings",
  subtitle: "Join Our Team",
  description: "Explore exciting career opportunities at Lightech",
  filters: { all: "All" },
  cta: { label: "Apply Now", href: "/careers/apply" }
}
```

## Filtering

The component automatically provides filters based on available jobs:

- **Department Filter**: Shows all unique departments
- **Location Filter**: Shows all unique locations
- **Type Filter**: Shows all unique employment types

Filters only appear if there are multiple options (e.g., if all jobs are in one department, the department filter is hidden).

## Styling

The component uses your existing UI components:
- `Button` from `@/components/ui/button`
- `Card` components from `@/components/ui/card`
- Lucide React icons
- Framer Motion for animations

Customize styling by modifying the component or your UI theme.

## Examples

### Minimal Job Entry

```markdown
---
## Marketing Intern
- **Department:** Marketing
- **Location:** Remote
- **Type:** Internship
- **Posted:** 2024-03-01

### Description
Join our marketing team as an intern.

### Requirements
- Currently enrolled in university
- Interest in digital marketing

### Responsibilities
- Assist with social media campaigns
- Create marketing content
---
```

### Full Job Entry with All Fields

```markdown
---
## Senior Product Manager
- **Department:** Product
- **Location:** Riyadh, Saudi Arabia
- **Type:** Full-time
- **Salary:** SAR 150,000 - 200,000/year
- **Posted:** 2024-02-15
- **Deadline:** 2024-05-31
- **Featured:** true

### Description
Lead product strategy and development for our flagship products. Work with engineering, design, and business teams to deliver exceptional user experiences.

### Requirements
- 7+ years of product management experience
- Strong technical background
- Experience with B2B SaaS products
- Excellent communication skills in English and Arabic
- MBA or equivalent preferred

### Responsibilities
- Define product vision and roadmap
- Conduct market research and competitive analysis
- Work with engineering teams on product development
- Analyze product metrics and user feedback
- Present to stakeholders and executives
- Manage product launches
---
```

## Troubleshooting

### Jobs Not Appearing

**Check:**
1. File exists at `public/data/job-openings.md`
2. Jobs are not commented out (`<!-- -->`)
3. Jobs have all required fields
4. Jobs are wrapped in `---` separators
5. Rebuild the site: `npm run build`

### Parsing Errors

**Common issues:**
- Missing required fields (Department, Location, Type, Posted)
- Incorrect date format (use YYYY-MM-DD)
- Missing section headers (`### Description`, etc.)
- Malformed markdown syntax

Check the console for error messages during build.

### Section Not Hiding

The section hides when:
- No jobs in the markdown file
- All jobs are commented out
- File doesn't exist
- All jobs fail to parse

Ensure you're checking `jobs.length === 0` in your page component.

## Best Practices

### 1. Keep Jobs Updated

Remove expired jobs regularly to keep the list current.

### 2. Use Consistent Formatting

Follow the template format exactly for reliable parsing.

### 3. Test Locally

Always test locally before deploying:
```bash
npm run build
npx serve out
```

### 4. Version Control

Commit the markdown file to git to track changes:
```bash
git add public/data/job-openings.md
git commit -m "Update job openings"
```

### 5. Backup

Keep a backup of your job openings file before making major changes.

## Advantages

✅ **Simple**: No CMS, no database, just markdown
✅ **Fast**: Static HTML, no API calls
✅ **Cheap**: Works on any shared hosting
✅ **Portable**: Easy to migrate or backup
✅ **Version Control**: Track changes with git
✅ **No Dependencies**: No external services

## Limitations

⚠️ **Rebuild Required**: Must rebuild to update jobs
⚠️ **No Real-Time**: Changes not live until rebuild
⚠️ **Manual Process**: No admin interface

For most job listings (which don't change frequently), these limitations are acceptable trade-offs for simplicity.

## Migration from Other Systems

### From Sanity/CMS

1. Export jobs from your CMS
2. Convert to markdown format
3. Add to `job-openings.md`
4. Remove CMS dependencies
5. Rebuild and deploy

### From Database

1. Query all jobs from database
2. Generate markdown file programmatically
3. Save to `public/data/job-openings.md`
4. Test and deploy

## Support

For issues or questions:
1. Check the markdown file syntax
2. Review console errors during build
3. Verify all required fields are present
4. Test with a minimal job entry

---

**Last Updated**: 2026-04-09
**Version**: 1.0.0