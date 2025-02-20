import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";
import React from "react";

const testcases = [
  { 
    params: { a: 5, b: 10 },
    result: 15,
    expected: 15
  },
  { 
    params: { a: 2, b: 8, c: 15 },
    result: 25,
    expected: 25
  },
  { 
    params: { x: 7, y: 3, z: 20 },
    result: 30,
    expected: 30
  },
];

const ResultsTab: React.FC = () => {
  return (
    <div className="p-4">
      <TabGroup>
        <TabList className="flex gap-2.5">
          {testcases.map((_, index) => (
            <Tab
              key={index}
              className="text-base/8 px-2.5 rounded-sm cursor-pointer focus:outline-none data-[selected]:bg-panel data-[hover]:bg-panel"
            >
              Кейс {index + 1}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {testcases.map((testcase, index) => (
            <TabPanel key={index} className="mt-2 space-y-2.5">
              <p>Входные данные</p>
              {Object.entries(testcase.params).map(([key, value]) => (
                <div key={key} className="bg-panel px-4 py-1.5 rounded-sm">
                  <span className="text-muted text-sm">{key} =</span>
                  <p>{value}</p>
                </div>
              ))}
              <p>Результат</p>
              <p 
                className={clsx(
                  "rounded-sm text-base/10 px-4 bg-panel",
                  testcase.result === testcase.expected ? "text-primary" : "text-hard"
                )}
              >
                {testcase.result}
              </p>
              <p>Ожидаемый результат</p>
              <p className="rounded-sm text-base/10 px-4 bg-panel text-primary">{testcase.expected}</p>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
}

export default ResultsTab;