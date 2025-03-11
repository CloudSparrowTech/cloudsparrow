import React, { useRef, useState } from "react";
import documentService from "../../../backend/document";
import fileService from "../../../backend/fileManager";
import { toast } from "react-toastify";
import html2pdf from "html2pdf.js";
import { numberToWordsRupees } from "../../../utils/utils";

const Preview = ({ data, user, close, totalAmount }) => {
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
          margin: [0, 0, 10, 10],
          filename: "invoice.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        })
        .from(pdfRef.current)
        .outputPdf("blob");

      const pdfFile = new File([pdfBlob], "invoice.pdf", {
        type: "application/pdf",
      });

      const file = await fileService.uploadFile(pdfFile);

      await documentService.createDocument({
        type: "invoice",
        title: "invoice",
        clientname: data.clientInfo.name,
        clientemail: data.clientInfo.email,
        clientphone: data.clientInfo.phone,
        document: file.fileUrl,
        creator: user.name,
        amount: totalAmount,
        paymentlink: "",
        paymentstatus: "pending",
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
    <title>Invoice</title>
    <style>
      @page {
        size: A4;
        margin: 20mm;
      }

      body {
        font-family: Arial, sans-serif;
        background: #f4f4f4;
        margin: 0;
        padding: 0;
      }

      .invoice-box {
        width: 210mm; /* A4 width */
        max-width: 800px;
        background: #fff;
        padding: 20mm; /* Adjust for A4 margins */
        margin: auto;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      .company-name {
        font-size: 24px;
        color: #2a6bfd;
        font-weight: bold;
      }

      .company-details,
      .invoice-details,
      .client-details,
      .bank-details,
      .amount-in-words {
        font-size: 14px;
        margin-bottom: 15px;
      }

      h3,
      h4 {
        border-bottom: 2px solid #2a6bfd;
        padding-bottom: 5px;
        color: #2a6bfd;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 15px;
      }

      table,
      th,
      td {
        border: 1px solid #ddd;
        padding: 10px;
        text-align: left;
      }

      th {
        background: #2a6bfd;
        color: #fff;
      }

      tfoot .total-label {
        font-weight: bold;
        background: #2a6bfd;
        color: #fff;
        text-align: right;
      }

      .signature {
        margin-top: 30px;
        font-size: 16px;
        font-weight: bold;
      }

      .auth-sign {
        margin-top: 5px;
        font-size: 14px;
        text-align: right;
      }
    </style>
  </head>
  <body>
    <div class="invoice-box">
      <h2 class="company-name">CLOUD SPARROW TECHNOLOGY</h2>
      <p class="company-details">
        Trademark of GAZI BUSINESS FRIENDS CLOUD PVT LTD<br />
        CIN: U14309WB2024PTC273069<br />
        Email: info@cloudsparrowtechnology.com | Phone: +91 7838393552<br />
        C26, Sector 65, Noida, Uttar Pradesh, 201301<br />
        State Name: Uttar Pradesh | State Code: UP
      </p>
      <table>
        <thead>
          <tr>
            <th colspan="5" style="text-align: center">invoice</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="5">
              <p class="invoice-details">
                <strong>Client Name:</strong> ${data.clientInfo.name}<br />
                <strong>Address:</strong> ${data.clientInfo.address}<br />
                <strong>Invoice No.:</strong> CSIN2025659<br />
              </p>

              <h4>Delivery Address:</h4>
              <p class="client-details">
                <strong>Client Name:</strong> ${data.deliveryInfo.name}<br />
                <strong>Address:</strong> ${data.deliveryInfo.address}
              </p>
            </td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Description</th>
            <th>Service Code</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          ${data.services
            .map((service, index) => {
              return `<tr>
                <td>${index + 1}</td>
                <td>${service.description}</td>
                <td>${service.servicecode}</td>
                <td>${service.amount}</td>
              </tr>`;
            })
            .join("")}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="total-label">Total Value</td>
            <td>&#x20B9;${totalAmount}</td>
          </tr>
          <tr>
            <td colspan="3">____</td>
            <td>____</td>
          </tr>
          <tr>
            <td colspan="3" class="total-label">Grand Total</td>
            <td>&#x20B9;${totalAmount}</td>
          </tr>
        </tfoot>
      </table>

      <h4>Bank Details</h4>
      <p class="bank-details">
        <strong>Account Name:</strong> GAZI BUSINESS FRIENDS CLOUD PVT LTD<br />
        <strong>A/C No.:</strong> 1109002100006804<br />
        <strong>IFSC:</strong> PUNB0110900
      </p>

      <p class="amount-in-words">
        <strong>Amount in Words: ${numberToWordsRupees(totalAmount)}.</strong>
      </p>

      <div class="auth-sign">
        <p>For CLOUD SPARROW TECHNOLOGY</p>
        <p style="font-style: italic">Authorized Signature</p>
      </div>
    </div>
  </body>
</html>
`;

  return (
    <div className="absolute left-0 top-14 container mx-auto p-4 bg-white">
      <div className="flex fixed right-10 justify-end mb-4 gap-2">
        <button
          onClick={printPage}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Print Invoice
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
