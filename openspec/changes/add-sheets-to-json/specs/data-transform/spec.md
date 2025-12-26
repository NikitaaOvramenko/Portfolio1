## ADDED Requirements

### Requirement: Sheets Array to JSON Conversion
The system SHALL provide a function to convert Google Sheets 2D array format to an array of JSON objects.

#### Scenario: Convert with headers
- **WHEN** given a 2D array where first row is headers `[["id", "name", "url"], ["1", "Project A", "http://..."]]`
- **THEN** return `[{ id: "1", name: "Project A", url: "http://..." }]`

#### Scenario: Handle empty data
- **WHEN** given an empty array or undefined
- **THEN** return an empty array `[]`

#### Scenario: Handle single header row
- **WHEN** given only a header row with no data rows
- **THEN** return an empty array `[]`

### Requirement: Fallback to Static Data
The Projects component SHALL fall back to static `projectsData` when Google Sheets API fails or returns empty data.

#### Scenario: API failure fallback
- **WHEN** Google Sheets API request fails
- **THEN** display projects from static `projectsData.tsx`

#### Scenario: Empty response fallback
- **WHEN** Google Sheets API returns empty values
- **THEN** display projects from static `projectsData.tsx`




