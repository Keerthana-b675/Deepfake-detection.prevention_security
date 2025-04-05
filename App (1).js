import React from "react";
import UploadForm from "./components/UploadForm";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-xl font-bold mb-4">Deepfake Detector</h1>
        <UploadForm />
      </div>
    </div>
  );
}

export default App;
