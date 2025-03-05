const Invoices = ({ invoices }) => {
  const paidInvoices = invoices.filter((invoice) => {
    return invoice.paymentstatus != "pending";
  });

  const handleDownload = async (documentUrl, title) => {
    try {
      const response = await fetch(documentUrl);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = `${title}.pdf`; // Set default name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading document:", error);
    }
  };

  return (
    <>
      <h1 className="text-lg mb-6">Invoice Details</h1>
      <table className="min-w-full text-center">
        <thead className="py-4 text-black">
          <tr className="border-b-2 border-gray-200">
            <td>#</td>
            <td>ClientName</td>
            <td>ClientPhone</td>
            <td>ClientEmail</td>
            <td>View</td>
            <td>Download</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody className="py-4">
          {paidInvoices.map((invoice) => (
            <tr key={invoice._id} className="border-b-2 border-gray-200">
              <td>{invoice._id}</td>
              <td>{invoice.clientname}</td>
              <td>{invoice.clientphone}</td>
              <td>{invoice.clientemail}</td>
              <td>
                <a
                  href={invoice.document}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                >
                  View
                </a>
              </td>
              <td>
                <button
                  onClick={() =>
                    handleDownload(invoice.document, invoice.title)
                  }
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                >
                  Download
                </button>
              </td>
              <td>PAID</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Invoices;
