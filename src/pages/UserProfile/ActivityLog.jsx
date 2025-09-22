import React from "react";

const ActivityLog = () => {
  const renderTable = (headers, data) => (
    <div className="bg-white overflow-hidden my-1">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gradient-to-tl from-gray-100 to-gray-300 text-gray-800">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className={`px-2 py-2 text-left text-sm font-medium border-y border-gray-400`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((row, rowIndex) => (
              <tr key={row.id} className={`hover:bg-gray-100 `}>
                {Object.values(row)
                  .slice(1)
                  .map((value, colIndex) => (
                    <td
                      key={colIndex}
                      className={`px-2 py-2 text-sm text-gray-900 border-y border-gray-400 ${
                        colIndex === 1 ? "text-green-600" : ""
                      } ${
                        colIndex === 2 ? "text-right" : ""
                      }`}
                    >
                      {value}
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const headers1 = [
    "Login Date & Time",
    "Login Status",
    "IP Address",
    "LSP",
    "City/State/Country",
    "User Agent Type",
  ];
  const tableData1 = [
    {
      id: 1,
      date: "2025-09-22 10:30:15",
      login_status: "Login --",
      ip_address: "203.0.113.10",
      lsp: "Google LLC",
      city: "Mountain View, California, USA",
      user_agent: "Chrome",
    },
    {
      id: 2,
      date: "2025-09-22 10:25:00",
      login_status: "Login --",
      ip_address: "198.51.100.5",
      lsp: "Comcast Cable",
      city: "New York, New York, USA",
      user_agent: "Firefox",
    },
    {
      id: 3,
      date: "2025-09-22 09:55:40",
      login_status: "Login --",
      ip_address: "203.0.113.20",
      lsp: "Cloudflare, Inc.",
      city: "Dhaka, Bangladesh",
      user_agent: "Safari",
    },
    {
      id: 4,
      date: "2025-09-21 23:44:33",
      login_status: "Login --",
      ip_address: "103.45.3.3",
      lsp: "-",
      city: "Dhaka, Bangladesh",
      user_agent: "Chrome",
    },
    {
      id: 5,
      date: "2025-09-21 21:05:12",
      login_status: "Login --",
      ip_address: "192.0.2.7",
      lsp: "AT&T Mobility",
      city: "Chicago, Illinois, USA",
      user_agent: "Edge",
    },
    {
      id: 6,
      date: "2025-09-21 18:00:00",
      login_status: "Login --",
      ip_address: "203.0.113.50",
      lsp: "Verizon Wireless",
      city: "Los Angeles, California, USA",
      user_agent: "Mobile App",
    },
  ];

  return (
    <div className="py-2  bg-gray-100">
      <h2 className="text-sm font-semibold">Activity Log</h2>
      {renderTable(headers1, tableData1)}
    </div>
  );
};

export default ActivityLog;
