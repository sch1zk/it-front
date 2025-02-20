"use client"

import { Layout, Model, TabNode, IJsonModel, TabSetNode, BorderNode, ITabSetRenderValues, ITabRenderValues, IIcons, I18nLabel } from 'flexlayout-react';
import 'flexlayout-react/style/dark.css';
import '@/styles/flexlayout.css'
import { JSX, useCallback, useMemo, useState } from 'react';
import { MdCode, MdDescription, MdFullscreen, MdFullscreenExit, MdHistory, MdPlayArrow, MdPublish, MdSchool, MdTask, MdTerminal } from 'react-icons/md';
import CodeEditor from './CodeEditor';
import DescriptionTab from './DescriptionTab';
import ResultsTab from './ResultsTab';
import TestcasesTab from './TestcasesTab';

const jsonModel: IJsonModel = {
  global: {
    tabEnableClose: false,
    tabSetMinHeight: 5,
  }, 
  borders: [],
  layout: {
    type: 'row',
    weight: 100,
    children: [
      {
        type: 'tabset',
        weight: 40,
        id: 'info',
        children: [
          {
            type: 'tab',
            name: 'Описание',
            id: 'description',
            component: 'description',
          },
          {
            type: 'tab',
            name: 'Разбор',
            id: 'learning',
            component: 'learning',
          },
          {
            type: 'tab',
            name: 'Решения',
            id: 'solutions',
            component: 'solutions',
          },
        ],
      },
      {
        type: 'row',
        weight: 60,
        children: [
          {
            type: 'tabset',
            weight: 50,
            id: 'coding',
            children: [
              {
                type: 'tab',
                name: 'Код',
                id: 'code',
                component: 'code',
              },
            ],
          },
          {
            type: 'tabset',
            weight: 50,
            id: 'testing',
            children: [
              {
                type: 'tab',
                name: 'Тест-кейсы',
                id: 'testcases',
                component: 'testcases',
              },
              {
                type: 'tab',
                name: 'Результаты',
                id: 'results',
                component: 'results',
              },
            ],
          },
        ],
      },
    ],
  },
};

const CaseComponent: React.FC = () => {
  const [layoutModel] = useState(() => Model.fromJson(jsonModel));

  const factory = useCallback((node: TabNode) => {
    const component = node.getComponent();

    if (!component) {
      return <div className="p-4">Компонент не найден</div>;
    }

    const componentsMap: Record<string, JSX.Element> = {
      description: <DescriptionTab/>,
      testcases: <TestcasesTab/>,
      results: <ResultsTab/>,
      code: <CodeEditor/>,
    };

    return componentsMap[component] || <div className="p-4">Неизвестный компонент</div>;
  }, []);

  const icons: IIcons = {
    maximize: <MdFullscreen size={20}/>, 
    restore: <MdFullscreenExit size={20}/>,
  };

  const translations: Record<I18nLabel, string> = {
    [I18nLabel.Close_Tab]: "Закрыть вкладку",
    [I18nLabel.Close_Tabset]: "Закрыть набор вкладок",
    [I18nLabel.Active_Tabset]: "Активный набор вкладок",
    [I18nLabel.Move_Tabset]: "Переместить набор вкладок",
    [I18nLabel.Move_Tabs]: "Переместить вкладки",
    [I18nLabel.Maximize]: "Развернуть",
    [I18nLabel.Restore]: "Восстановить",
    [I18nLabel.Popout_Tab]: "Вынести выбранную вкладку",
    [I18nLabel.Overflow_Menu_Tooltip]: "Скрытые вкладки",
    [I18nLabel.Error_rendering_component]: "Ошибка рендеринга компонента",
  };

  const i18nMapper = (id: I18nLabel, param?: string): string | undefined => {
    return translations[id] || id;
  };

  const onRenderTabSet = useCallback(
    (tabSetNode: TabSetNode | BorderNode, renderValues: ITabSetRenderValues) => {
      if (!(tabSetNode instanceof TabSetNode)) return;

      const node = tabSetNode.getSelectedNode();
      if (!node) return;

      const tabSetId = tabSetNode.getId();

      const buttonsMap: Record<string, JSX.Element> = {
        coding: <MdPlayArrow size={20} title="Запустить" />,
        testing: <MdPublish size={20} title="Опубликовать" />,
      };

      if (buttonsMap[tabSetId]) {
        renderValues.buttons.push(
          <button key={tabSetId} className='flexlayout__tab_toolbar_button'>
            {buttonsMap[tabSetId]}
          </button>
        );
      }
    },
    []
  );

  const onRenderTab = useCallback(
    (tabNode: TabNode, renderValues: ITabRenderValues) => {
      const iconsMap: Record<string, JSX.Element> = useMemo(() => ({
        description: <MdDescription />,
        learning: <MdSchool />,
        solutions: <MdHistory />,
        code: <MdCode />,
        testcases: <MdTask />,
        results: <MdTerminal />
      }), []);

      renderValues.leading = iconsMap[tabNode.getId()] || null;
    },
    []
  );

  return (
    <div className='flex px-2 pb-2' style={{ minHeight: "calc(100vh - var(--header-height))" }}>
      <Layout model={layoutModel} factory={factory} icons={icons} i18nMapper={i18nMapper} onRenderTabSet={onRenderTabSet} onRenderTab={onRenderTab}/>
    </div>
  );
}

export default CaseComponent;