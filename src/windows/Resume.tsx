import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import { Window } from "@windows";
import { WindowControls } from "@components";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const Resume = () => {
  return (
    <Window windowKey="resume">
      <Window.Wrapper>
        <div id="window-header">
          <WindowControls />
          <h2>Resume.pdf</h2>

          <a
            href="files/resume.pdf"
            download
            className="cursor-pointer"
            title="Download resume"
          >
            <Download className="icon" />
          </a>
        </div>

        <Document file="files/resume.pdf">
          <Page pageNumber={1} renderTextLayer renderAnnotationLayer />
        </Document>
      </Window.Wrapper>
    </Window>
  );
};

export default Resume;
