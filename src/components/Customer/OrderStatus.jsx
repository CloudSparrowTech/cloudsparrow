const OrderStatus = ({ invoices }) => {
  return (
    <>
      <div>
        <h1 className="text-lg">Order Status</h1>
        <div className="flex my-6">
          <input
            className="py-3 p-4 border-gray-400 border rounded-md"
            type="text"
            placeholder="Pending"
          />
          <div className="flex border-gray-400 border rounded-md overflow-hidden mx-4">
            <input
              className="py-2 px-4"
              type="text"
              placeholder="Search Name/Phone/City"
            />
            <button className="p-2 bg-blue-800 text-white hover:bg-blue-900">
              Search
            </button>
          </div>
        </div>
      </div>
      <table className="min-w-full text-center border">
        <thead className="py-4 text-black">
          <tr className="border-b-2 border-gray-200">
            <td>#</td>
            <td>Date</td>
            <td>User</td>
            <td>Mobile</td>
            <td>Email</td>
            <td>City</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody className="py-4">
          {invoices.map((invoice) => {
            return (
              <tr className="border-b-2 border-gray-200">
                <td>{invoice._id}</td>
                <td>03/12/2000</td>
                <td>{invoice.clientname}</td>
                <td>{invoice.clientphone}</td>
                <td>{invoice.clientemail}</td>
                <td>agra</td>
                <td>{invoice.paymentstatus}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default OrderStatus;
