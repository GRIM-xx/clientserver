import React from "react";

const LessonTable = () => {
  return (
    <div className="relative flex flex-col overflow-x-auto shadow rounded-xl">
      <table className="w-full text-sm text-left text-dark-100 dark:text-light">
        <thead className="text-xs uppercase bg-dark text-light dark:bg-dark-100 dark:text-light">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              Lesson
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Connected Course
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Restriction
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-dark hover:bg-light dark:border-light hover:dark:bg-dark-100">
            <th
              scope="row"
              className="px-6 py-4 font-semibold whitespace-nowrap text-dark-100 dark:text-light"
            >
              Lesson 1
            </th>
            <td className="px-6 py-4">Course 3</td>
            <td className="px-6 py-4">Restriction</td>
            <td className="px-6 py-4">9/10/2022</td>
          </tr>
          <tr className="border-b border-dark hover:bg-light dark:border-light hover:dark:bg-dark-100">
            <th
              scope="row"
              className="px-6 py-4 font-semibold whitespace-nowrap text-dark-100 dark:text-light"
            >
              Lesson 2
            </th>
            <td className="px-6 py-4">Course 1</td>
            <td className="px-6 py-4">Restriction</td>
            <td className="px-6 py-4">9/10/2022</td>
          </tr>
          <tr className="border-b border-dark hover:bg-light dark:border-light hover:dark:bg-dark-100">
            <th
              scope="row"
              className="px-6 py-4 font-semibold whitespace-nowrap text-dark-100 dark:text-light"
            >
              Lesson 3
            </th>
            <td className="px-6 py-4">Course 1</td>
            <td className="px-6 py-4">Restriction</td>
            <td className="px-6 py-4">9/10/2022</td>
          </tr>
          <tr className="border-b border-dark hover:bg-light dark:border-light hover:dark:bg-dark-100">
            <th
              scope="row"
              className="px-6 py-4 font-semibold whitespace-nowrap text-dark-100 dark:text-light"
            >
              Lesson 4
            </th>
            <td className="px-6 py-4">Course 2</td>
            <td className="px-6 py-4">Restriction</td>
            <td className="px-6 py-4">9/10/2022</td>
          </tr>
          <tr className="hover:bg-light dark:border-light hover:dark:bg-dark-100">
            <th
              scope="row"
              className="px-6 py-4 font-semibold whitespace-nowrap text-dark-100 dark:text-light"
            >
              Lesson 5
            </th>
            <td className="px-6 py-4">Course 3</td>
            <td className="px-6 py-4">Restriction</td>
            <td className="px-6 py-4">9/10/2022</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LessonTable;
