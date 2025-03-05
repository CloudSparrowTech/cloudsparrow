import React, { useRef, useState } from "react";
import documentService from "../../../backend/document";
import fileService from "../../../backend/fileManager";
import { toast } from "react-toastify";
import { base64logo } from "../../../utils/utils";
import html2pdf from "html2pdf.js";

const Preview = ({ data, user, title, close }) => {
  const pdfRef = useRef(null);
  const today = new Date().toLocaleDateString("en-GB").replace(/\//g, "-");
  const [editableContent, setEditableContent] = useState("");
  const handleEdit = (event) => {
    setEditableContent(event.target.innerHTML);
  };
  const printPage = async () => {
    try {
      if (!pdfRef.current) {
        toast.error("Error: PDF content not found.");
        return;
      }

      const pdfBlob = await html2pdf()
        .set({
          margin: [10, 10, 10, 10],
          filename: "proposal.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        })
        .from(pdfRef.current)
        .outputPdf("blob");

      const pdfFile = new File([pdfBlob], "proposal.pdf", {
        type: "application/pdf",
      });

      const file = await fileService.uploadFile(pdfFile);

      await documentService.createDocument({
        type: "proposal",
        title: "proposal",
        clientname: data.clientInfo.name,
        clientemail: data.clientInfo.email,
        clientphone: data.clientInfo.phone,
        document: file.fileUrl,
        creator: user.name,
      });

      const pdfURL = URL.createObjectURL(pdfBlob);
      window.open(pdfURL, "_blank");
    } catch (error) {
      toast.error(error?.message || "Error generating PDF.");
    }
  };

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PROPOSAL FOR ${title} DEVELOPMENT</title>
  <style>
    @page { size: A4; margin: 20mm; }

    body { 
      font-family: Arial, sans-serif; 
      background-color: #f8f9fa;
      width: 210mm; 
      height: 297mm;
      margin: 0 auto;
      padding: 20px;
    }

    header { 
      display: flex; 
      align-items: center; 
      justify-content: space-between; 
      padding-bottom: 10px; 
      border-bottom: 2px solid #ddd; 
      text-align: center;
    }

    .logo { 
      flex: 1; 
      text-align: left;
    }

    .logo img { 
      max-width: 100px; 
    }

    .title { 
      flex: 2; 
      text-align: center; 
    }

    .title h1 { 
      font-size: 24px; 
      margin: 0;
    }

    .contact-info { 
      flex: 1; 
      text-align: right; 
      font-size: 14px;
    }

    main {
      margin-top: 10px;
    }

    .section { 
      padding: 10px; 
      border: 1px solid #ddd; 
      border-radius: 5px; 
      background: #fff; 
      margin-bottom: 10px; 
      font-size: 14px;
      page-break-inside: avoid;
    }

    .section-title { 
      font-size: 16px; 
      font-weight: bold;
      margin-bottom: 5px;
    }

    ul, ol { 
      padding-left: 15px; 
      margin: 5px 0;
    }

    li { 
      margin-bottom: 2px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
    }

    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }

    th {
      background-color: #f2f2f2;
    }

    footer {
      margin-top: 20px;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <header>
    <div class="logo">
      <img src=${base64logo} alt="logo"/>
    </div>
    <div class="title">
      <h1>Cloud Sparrow Technology</h1>
    </div>
    <div class="contact-info">
      <p><strong>Date:</strong> ${today}</p>
      <p><strong>Phone:</strong> +91 7838393552</p>
      <p><strong>Email:</strong> sales@cloudsparrowtechnology.com</p>
    </div>
  </header>

  <main>
    <h2 style="text-align: center; font-size: 18px; margin: 10px 0;">
      PROPOSAL FOR ${title} DEVELOPMENT 
    </h2>
    
    <div class="section">
      <p class="section-title">Client Information</p>
      <p><strong>Name:</strong> ${data.clientInfo.name}</p>
      <p><strong>Phone:</strong> ${data.clientInfo.phone}</p>
      <p><strong>Email:</strong> ${data.clientInfo.email}</p>
      <p><strong>Address:</strong> ${data.clientInfo.address}</p>
    </div>
    
    <div class="section">
      <p class="section-title">Introduction</p>
      <p>${data.introduction}</p>
    </div>
    
    <div class="section">
      <p class="section-title">Project Scope</p>
      <p>
        The proposed application will include the following core functionalities:
      </p>
      <ol>
    ${data.projectScope
      .map((scope) => {
        return `<li>
            <p class="section-title">${scope.title}</p>
            <ul>
              ${scope.content
                .map((content) => {
                  return `<li>${content}</li>`;
                })
                .join("")}
            </ul>
          </li>`;
      })
      .join("")}
      </ol>
    </div>
    
    <div class="section">
      <p class="section-title">Technology Stack</p>
        <ul>
            ${data.techStack
              .map((tech) => {
                return `<li>
                    <strong>${tech.title}:</strong> ${tech.content}
                  </li>`;
              })
              .join("")}
        </ul>
    </div>
    
    <div class="section">
      <p class="section-title">Project Timeline</p>
      <table>
        <tr>
          <th>Phase</th>
          <th>Duration</th>
          <th>Deliverables</th>
        </tr>
        ${data.timeline
          .map(
            (item) => `
          <tr>
            <td>${item.phase}</td>
            <td>${item.duration}</td>
            <td>${item.deliverables}</td>
          </tr>
        `
          )
          .join("")}
      </table>
    </div>
    
    <div class="section">
      <p class="section-title">Cost Estimation</p>
      <table>
        <tr>
          <th>Component</th>
          <th>Cost (INR)</th>
        </tr>
        ${data.costs
          .map(
            (item) => `
          <tr>
            <td>${item.component}</td>
            <td>${item.cost} RS</td>
          </tr>
        `
          )
          .join("")}
        <tr>
          <th>Total Cost</th>
          <th>${data.costs.reduce(
            (sum, item) => sum + (parseInt(item.cost) || 0),
            0
          )} RS</th>
        </tr>
      </table>
      <p>Note: The final cost may vary based on additional requirements and modifications</p>
    </div>
    
    <div class="section">
      <p class="section-title">Terms & Conditions</p>
      <ul>
        <li>50% upfront payment, 30% after development completion, 20% after final delivery.</li>
        <li>Any additional feature requests will be estimated separately.</li>
        <li>Post-launch maintenance is available at an additional monthly cost.</li>
        <li>The client must provide necessary content, branding, and hosting credentials</li>
        <li>This proposal is valid until ${data.validTill}.</li>
      </ul>
    </div>
    
    <div class="section">
      <p class="section-title">Conclusion</p>
      <p>${data.conclusion}</p>
    </div>
  </main>
  <footer>
  
    <div class="section">
      <p class="section-title">Acceptance</p>
      <p>By signing below, you accept the terms of this proposal and authorize Cloud Sparrow Technology to proceed...</p>
      <p><strong>Client Signature:</strong> ___________________</p>
      <p><strong>Date:</strong> ___________________</p>
    </div>
    
    <div class="section">
      <p><strong>Regards,</strong></p>
      <p>${user?.name}</p>
      <p>${user?.role}</p>
      <p>Cloud Sparrow Technology LLP</p>
    </div>
  </footer>
</body>
</html>`;

  return (
    <div className="absolute inset-0 container mx-auto p-4 bg-white">
      <div className="flex justify-end mb-4 gap-2">
        <button
          onClick={printPage}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Print Proposal
        </button>
        <button
          onClick={() => close(false)}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Close
        </button>
      </div>
      <div
        contentEditable
        onInput={handleEdit}
        ref={pdfRef}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default Preview;
