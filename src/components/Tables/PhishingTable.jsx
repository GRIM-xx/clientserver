import React from "react";

const PhisingTable = () => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-dark-100 dark:text-light">
        <thead className="text-xs uppercase bg-dark text-light dark:bg-dark-100 dark:text-light">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-dark hover:bg-light dark:border-light hover:dark:bg-dark-100">
            <th
              scope="row"
              className="px-6 py-4 font-bold whitespace-nowrap text-dark-100 dark:text-light"
            >
              Apple MacBook Pro 17"
            </th>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
          </tr>
          <tr className="border-b border-dark hover:bg-light dark:border-light hover:dark:bg-dark-100">
            <th
              scope="row"
              className="px-6 py-4 font-bold whitespace-nowrap text-dark-100 dark:text-light"
            >
              Microsoft Surface Pro
            </th>
            <td className="px-6 py-4">White</td>
            <td className="px-6 py-4">Laptop PC</td>
            <td className="px-6 py-4">$1999</td>
          </tr>
          <tr className=" hover:bg-light hover:dark:bg-dark-100">
            <th
              scope="row"
              className="px-6 py-4 font-bold whitespace-nowrap text-dark-100 dark:text-light"
            >
              Magic Mouse 2
            </th>
            <td className="px-6 py-4">Black</td>
            <td className="px-6 py-4">Accessories</td>
            <td className="px-6 py-4">$99</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PhisingTable;
