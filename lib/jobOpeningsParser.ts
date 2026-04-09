import fs from 'fs';
import path from 'path';

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary?: string;
  posted: string;
  deadline?: string;
  featured?: boolean;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

/**
 * Parse job openings from markdown file
 * Returns empty array if no jobs found or file doesn't exist
 */
export function parseJobOpenings(): JobOpening[] {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'job-openings.md');
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.warn('Job openings file not found:', filePath);
      return [];
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    
    // Split by job separator (---)
    const jobSections = fileContent.split(/^---$/gm).filter(section => {
      const trimmed = section.trim();
      // Filter out empty sections and comments
      return trimmed && !trimmed.startsWith('<!--') && trimmed.includes('##');
    });

    if (jobSections.length === 0) {
      return [];
    }

    const jobs: JobOpening[] = [];

    for (const section of jobSections) {
      try {
        const job = parseJobSection(section);
        if (job) {
          jobs.push(job);
        }
      } catch (error) {
        console.error('Error parsing job section:', error);
        // Continue parsing other jobs even if one fails
      }
    }

    return jobs;
  } catch (error) {
    console.error('Error reading job openings file:', error);
    return [];
  }
}

/**
 * Parse a single job section from markdown
 */
function parseJobSection(section: string): JobOpening | null {
  const lines = section.split('\n').map(line => line.trim()).filter(Boolean);
  
  if (lines.length === 0) return null;

  // Extract title (## Title)
  const titleLine = lines.find(line => line.startsWith('##'));
  if (!titleLine) return null;
  
  const title = titleLine.replace(/^##\s*/, '').trim();
  
  // Extract metadata (- **Key:** Value)
  const metadata: Record<string, string> = {};
  const metadataLines = lines.filter(line => line.startsWith('- **'));
  
  for (const line of metadataLines) {
    const match = line.match(/- \*\*(.+?):\*\*\s*(.+)/);
    if (match) {
      const [, key, value] = match;
      metadata[key.toLowerCase()] = value.trim();
    }
  }

  // Extract sections (### Section)
  const description = extractSection(lines, '### Description');
  const requirements = extractListSection(lines, '### Requirements');
  const responsibilities = extractListSection(lines, '### Responsibilities');

  // Validate required fields
  if (!metadata.department || !metadata.location || !metadata.type || !metadata.posted) {
    console.warn(`Skipping job "${title}" - missing required fields`);
    return null;
  }

  // Generate ID from title
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return {
    id,
    title,
    department: metadata.department,
    location: metadata.location,
    type: metadata.type,
    salary: metadata.salary,
    posted: metadata.posted,
    deadline: metadata.deadline,
    featured: metadata.featured?.toLowerCase() === 'true',
    description: description || '',
    requirements: requirements || [],
    responsibilities: responsibilities || [],
  };
}

/**
 * Extract text content from a section
 */
function extractSection(lines: string[], sectionHeader: string): string {
  const startIndex = lines.findIndex(line => line === sectionHeader);
  if (startIndex === -1) return '';

  const contentLines: string[] = [];
  for (let i = startIndex + 1; i < lines.length; i++) {
    const line = lines[i];
    // Stop at next section header or metadata
    if (line.startsWith('###') || line.startsWith('- **')) break;
    if (line && !line.startsWith('-')) {
      contentLines.push(line);
    }
  }

  return contentLines.join(' ').trim();
}

/**
 * Extract list items from a section
 */
function extractListSection(lines: string[], sectionHeader: string): string[] {
  const startIndex = lines.findIndex(line => line === sectionHeader);
  if (startIndex === -1) return [];

  const items: string[] = [];
  for (let i = startIndex + 1; i < lines.length; i++) {
    const line = lines[i];
    // Stop at next section header
    if (line.startsWith('###')) break;
    // Extract list items
    if (line.startsWith('- ') && !line.startsWith('- **')) {
      items.push(line.replace(/^-\s*/, '').trim());
    }
  }

  return items;
}

/**
 * Get unique departments from job openings
 */
export function getDepartments(jobs: JobOpening[]): string[] {
  return Array.from(new Set(jobs.map(job => job.department)));
}

/**
 * Get unique locations from job openings
 */
export function getLocations(jobs: JobOpening[]): string[] {
  return Array.from(new Set(jobs.map(job => job.location)));
}

/**
 * Get unique job types from job openings
 */
export function getJobTypes(jobs: JobOpening[]): string[] {
  return Array.from(new Set(jobs.map(job => job.type)));
}

// Made with Bob
