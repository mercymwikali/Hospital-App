import React, { useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const PDFExport = ({ contentRef, fileName }) => {
  const exportToPDF = async () => {
    try {
      const content = contentRef.current;

      if (!content) {
        throw new Error('Content not found');
      }

      const canvas = await html2canvas(content, { scrollY: -window.scrollY });

      const pdf = new jsPDF();
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save(`${fileName}.pdf`);
    } catch (error) {
      console.error('Error exporting to PDF:', error);
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      // Content is ready, trigger export
      exportToPDF();
    }
  }, [contentRef]);

  return (
    <button onClick={exportToPDF}>Export to PDF</button>
  );
};

export default PDFExport;
