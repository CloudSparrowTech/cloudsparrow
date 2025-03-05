const Home = ({ invoices }) => {
  const pendingInvoices = invoices.filter((invoice) => {
    return invoice.paymentstatus === "pending";
  });
  const totalAmount = invoices.reduce((sum, invoice) => {
    return sum + invoice.totalamount;
  }, 0);

  const paidAmount = invoices.reduce((sum, invoice) => {
    return sum + invoice.paidamount;
  }, 0);

  const dueAmount = totalAmount - paidAmount;

  return (
    <>
      <div className="bg-white flex p-6 justify-between items-center shadow-md border border-gray-100 rounded-md">
        <div className="flex-1">
          <p>Total Amount</p>
          <h1>&#8377;{totalAmount}</h1>
        </div>
        <div className="flex-1 text-green-500">
          <p>Paid Amount</p>
          <h1>&#8377;{paidAmount}</h1>
        </div>
        <div className="flex-1 text-red-500">
          <p>Due Amount</p>
          <h1>&#8377;{dueAmount}</h1>
        </div>
      </div>
      <div className="bg-white flex flex-col justify-evenly px-6 py-2 shadow-md min-h-24 border border-gray-100 rounded-md my-4">
        <h1 className="mb-2">Pending Invoices</h1>
        {pendingInvoices.length < 0 ? (
          <p>Currently, No Pending Invoices!!!!</p>
        ) : (
          <table className="min-w-full text-center">
            <thead className="py-4 text-black">
              <tr className="border-b-2 border-gray-200">
                <td>#</td>
                <td>ClientName</td>
                <td>ClientPhone</td>
                <td>ClientEmail</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody className="py-4">
              {pendingInvoices.map((invoice) => (
                <tr key={invoice._id} className="border-b-2 border-gray-200">
                  <td>{invoice._id}</td>
                  <td>{invoice.clientname}</td>
                  <td>{invoice.clientphone}</td>
                  <td>{invoice.clientemail}</td>
                  <td>
                    <a
                      href={invoice.paymentlink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                      Pay Now
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Home;
