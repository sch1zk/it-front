import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import React from "react";

interface TestcasesTabProps {
  testcases: { params: Record<string, any>; expected?: any }[];
}

const TestcasesTab: React.FC<TestcasesTabProps> = ({ testcases }) => {
  return (
    <div className="p-4">
      <TabGroup>
        <TabList className="flex gap-2.5">
          {testcases.map((_, index) => (
            <Tab
              key={`tab-${index}`}
              className="text-base/8 px-2.5 rounded-sm cursor-pointer focus:outline-none data-[selected]:bg-panel data-[hover]:bg-panel"
            >
              Кейс {index + 1}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {testcases.map((testcase, index) => (
            <TabPanel key={index} className="mt-2 space-y-2.5">
              {Object.entries(testcase.params).map(([key, value]) => (
                <div key={key}>
                  <span>{key} =</span>
                  <p className="mt-1 rounded-sm text-base/10 px-4 bg-panel">
                    {value}
                  </p>
                </div>
              ))}
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
}

export default TestcasesTab;