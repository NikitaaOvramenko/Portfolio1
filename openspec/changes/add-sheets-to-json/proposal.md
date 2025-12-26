# Change: Add Google Sheets to JSON Conversion

## Why
The Google Sheets API returns data as a 2D array (`[["col1", "col2"], ["val1", "val2"]]`), but the Projects component needs JSON objects with named properties. A transformation function is needed to convert the array format to usable JSON.

## What Changes
- Add a `sheetsToJson` utility function inside `Projects.tsx` that:
  - Takes the raw 2D array from Google Sheets API
  - Uses the first row as column headers
  - Maps remaining rows to objects with those headers as keys
- Update the `useEffect` to transform data after fetching
- Use transformed data to render projects (with fallback to static data)

## Impact
- Affected specs: data-transform (new capability)
- Affected code: `src/home-page/Projects.tsx`




