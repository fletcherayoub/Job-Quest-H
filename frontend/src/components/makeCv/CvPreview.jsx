import React, { useRef } from 'react';
import { templates } from './Templates';

const CvPreview = ({ personalInfo, education, experience, selectedTemplate, onEdit, onDownload }) => {
  const cvPreviewRef = useRef(null);

  return (
    <div>
      <div ref={cvPreviewRef} className="cv-preview border border-gray-300 p-5 rounded-md">
        <style>{templates[selectedTemplate].styles}</style>
        <div dangerouslySetInnerHTML={{ __html: templates[selectedTemplate].html({personalInfo, education, experience}) }} />
      </div>
      <div className="flex mt-4">
        <button
          onClick={onEdit}
          className="btn bg-blue-500 text-white w-full py-2 rounded-md mr-2"
        >
          Edit CV
        </button>
        <button
          onClick={onDownload}
          className="btn bg-blue-500 text-white w-full py-2 rounded-md"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default CvPreview;