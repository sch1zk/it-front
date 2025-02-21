"use client"

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";
import React, { ForwardedRef, forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { TestResult } from "./CaseComponent";

export interface ResultsTabHandle {
  updateResults: (newResults: TestResult[]) => void;
}

const ResultsTab = forwardRef(
  (_, ref: ForwardedRef<ResultsTabHandle>) => {
  
    const [results, setResults] = useState<TestResult[]>([]);

    useImperativeHandle(ref, () => ({
      updateResults(newResults: TestResult[]) {
        setResults(newResults);
      }
    }));

    return (
      <div className="p-4">
        <TabGroup>
          <TabList className="flex gap-2.5">
            {results.map((_, index) => (
              <Tab
                key={index}
                className="text-base/8 px-2.5 rounded-sm cursor-pointer focus:outline-none data-[selected]:bg-panel data-[hover]:bg-panel"
              >
                Кейс {index + 1}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {results.map((result, index) => (
              <TabPanel key={index} className="mt-2 space-y-2.5">
                <p>Входные данные</p>
                {Object.entries(result.params).map(([key, value]) => (
                  <div key={key} className="bg-panel px-4 py-1.5 rounded-sm">
                    <span className="text-muted text-sm">{key} =</span>
                    <p>{value}</p>
                  </div>
                ))}
                <p>Результат</p>
                <p 
                  className={clsx(
                    "rounded-sm text-base/10 px-4 bg-panel",
                    result.passed ? "text-primary" : "text-hard"
                  )}
                >
                  {result.output}
                </p>
                <p>Ожидаемый результат</p>
                <p className="rounded-sm text-base/10 px-4 bg-panel text-primary">{result.expected}</p>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    );
  }
)

export default ResultsTab;