import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import Dropzone from 'react-dropzone';
import Plot from 'react-plotly.js';
import './line.css';
import axios from 'axios';

function Box() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [filteredData, setFilteredData] = useState(null); // State to store the filtered data

  const handleFileUpload = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedFile(file);

    const reader = new FileReader();
    reader.onload = function (e) {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheet = workbook.SheetNames[0];
      const excelData = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheet]);

      // Remove columns with all null values
      const filteredData = excelData.filter((item) => !Object.values(item).every((value) => value === null));

      // Set the filtered data to the state
      setFilteredData(filteredData);

      // Save the filtered data to the backend
      saveDataToBackend(filteredData);
    };
    reader.readAsArrayBuffer(file);
  };

  const saveDataToBackend = async (data) => {
    try {
      await axios.post('/api/saveData', { data });
      console.log('Data saved to MongoDB');
    } catch (error) {
      console.error('Error saving data to MongoDB:', error);
    }
  };

  const renderCharts = () => {
    if (filteredData && filteredData.length > 0) {
      const columns = Object.keys(filteredData[0]);

      
      const boxTraces = columns.map((column) => ({
        y: filteredData.map((item) => item[column]),
        type: 'box',
        name: column,
      }));

    
      return (
        <>
          <h2>Box Plot</h2>
          <div className="chart-container">
            <Plot data={boxTraces} layout={{ title: 'Box Plot' }} config={{ responsive: true }} />
            </div>
        </>
      );
    } else {
      return <p>No data to visualize. Upload an Excel file to get started.</p>;
    }
  };

  return (
    <div className="container">
      <h1 className="title">GET IT VISUALIZED</h1>
      <Dropzone onDrop={handleFileUpload}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <p>Drag n drop an Excel file here, or click to select one.</p>
            {uploadedFile && <p className="file-info">Uploaded File: {uploadedFile.name}</p>}
          </div>
        )}
      </Dropzone>
      {renderCharts()}
    </div>
  );
}

export default Box;