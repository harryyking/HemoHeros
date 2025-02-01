"use client";
import { useEffect } from "react";

export default function CalendlyWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-center overflow-hidden">
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/arthurharry06/30min?primary_color=03d434"
        style={{ minWidth: "320px", height: "700px" }}
      />
    </div>
  );
}
