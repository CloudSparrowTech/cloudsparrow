import React, { useRef, useState } from "react";
import documentService from "../../../backend/document";
import fileService from "../../../backend/fileManager";
import { toast } from "react-toastify";
import { base64logo } from "../../../utils/utils";
import html2pdf from "html2pdf.js";

const Preview = ({ data, user, close }) => {
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
          filename: "quotation.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        })
        .from(pdfRef.current)
        .outputPdf("blob");

      const pdfFile = new File([pdfBlob], "quotation.pdf", {
        type: "application/pdf",
      });

      const file = await fileService.uploadFile(pdfFile);

      await documentService.createDocument({
        type: "quotation",
        title: "Funding Quotation",
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
  <title>Quotation for Fundraising & Documentation Support</title>
  <style>
    @page { size: A4; margin: 20mm; }

    body { 
      font-family: Arial, sans-serif; 
      background-color: #f8f9fa;
      margin: 0;
      padding: 0;
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

    ul { 
      padding-left: 15px; 
      margin: 5px 0;
    }

    li { 
      margin-bottom: 2px;
    }

    p { 
      margin: 2px 0;
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
    <h2 style="text-align: center; font-size: 18px; margin: 10px 0;">Quotation for Fundraising & Documentation Support</h2>
    
    <div class="section">
      <p class="section-title">Client Information</p>
      <p><strong>Name: </strong>${data.clientInfo.name}</p>
      <p><strong>Phone: </strong>${data.clientInfo.phone}</p>
      <p><strong>Email: </strong>${data.clientInfo.email}</p>
      <p><strong>Address: </strong>${data.clientInfo.address}</p>
    </div>
    
    <div class="section">
      <p class="section-title">Summary</p>
      <p>
        Cloud Sparrow Technology provides comprehensive end-to-end support for startups and companies in raising funds and offering complete documentation services. Below is the breakdown of the proposed services:
      </p>
    </div>
    
    <div class="section">
      <p class="section-title">Funding Advisory Services</p>
      <ul>
        <li>Market research & analysis to determine optimal funding options.</li>
        <li>Identifying potential investors and strategic partnerships.</li>
        <li>Pitch deck creation and review.</li>
        <li>Structuring and preparing for funding rounds (Seed, Series A, etc.).</li>
        <li>Investor negotiations and closing support.</li>
      </ul>
    </div>
    
    <div class="section">
      <p class="section-title">Documentation Support</p>
      <ul>
        <li>Business plan preparation and refinement.</li>
        <li>Financial projections and budgeting.</li>
        <li>Legal and regulatory document review.</li>
        <li>Term sheet assistance.</li>
        <li>Due diligence preparation.</li>
      </ul>
    </div>
    
    <div class="section">
      <p class="section-title">Quotation</p>
      <ul>
      ${data.quotations
        .map((quotation) => {
          return `<li><strong>${quotation.service}:</strong> ₹ ${quotation.price}</li>`;
        })
        .join("")}
      </ul>
    </div>
    
    <div class="section">
      <p class="section-title">Required Documentation</p>
      <ul>
      ${data.selectedDocuments
        .map((docs) => {
          return `<li>${docs}</li>`;
        })
        .join("")}
      </ul>
    </div>
    
    <div class="section">
      <p class="section-title">Terms & Conditions</p>
      <ul>
        <li>This quotation is valid ${data.validTill}.</li>
        <li>Any additional services beyond those outlined will be billed separately.</li>
        <li>Payment should be made via [Bank Transfer, Digital Payments, etc.].</li>
        <li>All documentation provided must be accurate and up-to-date.</li>
        <li>Cloud Sparrow Technology will not be responsible for inaccuracies or incomplete information provided by the client.</li>
      </ul>
    </div>
  </main>

  <footer>
    
    <div class="section">
      <p class="section-title">Acceptance</p>
      <p>By signing below, you accept the terms of this quotation and authorize Cloud Sparrow Technology to proceed with the services outlined.</p>
      <p><strong>Client Signature:</strong> ___________________</p>
      <p><strong>Date:</strong> ___________________</p>
    </div>
    
    <div class="section">
      <p><strong>Regards,</strong></p>
      <p>${user.name}</p>
      <p>${user.role}</p>
      <p>Cloud Sparrow Technology</p>
    </div>
  </footer>
</body>
</html>
`;

  return (
    <div className="absolute left-0 top-14 container mx-auto p-4 bg-white">
      <div className="flex justify-end mb-4 gap-2">
        <button
          onClick={printPage}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Print Quotation
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
