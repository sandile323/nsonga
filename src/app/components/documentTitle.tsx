"use client"; // Add this directive to indicate this is a client component

import { useEffect } from "react";

const DocumentTitle = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = `${title} - Nsonga HR Consulting`;
  }, [title]);

  return null;
};

export default DocumentTitle;
