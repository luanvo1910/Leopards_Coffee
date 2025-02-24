import React, { useState } from "react";
import Table from "./Table";
import TableDetailsModal from "./TableDetailsModal";

const tables = [
  {
    id: 1,
    isActive: true,
    orders: [
      { name: "Cà phê sữa", price: 30000 },
      { name: "Trà đào", price: 25000 },
    ],
  },
  { id: 2, isActive: false, orders: [] },
  { id: 3, isActive: true, orders: [{ name: "Espresso", price: 40000 }] },
  { id: 4, isActive: false, orders: [] },
  {
    id: 5,
    isActive: true,
    orders: [
      { name: "Cappuccino", price: 45000 },
      { name: "Bánh ngọt", price: 50000 },
    ],
  },
];

const TableManage = () => {
  const [selectedTable, setSelectedTable] = useState(null);

  const handleShowTableDetails = (table) => {
    setSelectedTable(table);
  };

  const handleCloseModal = () => {
    setSelectedTable(null);
  };

  return (
    <div>
      <div className="flex-1 p-8 grid grid-cols-2 gap-6">
        {tables.map((table) => (
          <Table
            key={table.id}
            tableData={table}
            onShowDetails={handleShowTableDetails}
          />
        ))}
      </div>
      {selectedTable && (
        <TableDetailsModal
          table={selectedTable}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default TableManage;
