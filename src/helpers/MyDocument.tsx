import { Document, Page } from "react-pdf";

export default function MyDocument({ file }: { file: string }) {
  return (
    <Document file={file}>
      <Page pageNumber={1} />
    </Document>
  );
}
