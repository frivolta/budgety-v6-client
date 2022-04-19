import React from 'react';
import {
    DefaultButton,
    Dropdown,
    DropdownMenuItemType,
    FontWeights,
    IContextualMenuProps,
    IDropdownOption,
    IDropdownStyles,
    IStackStyles,
    IStackTokens,
    ITextStyles
} from '@fluentui/react';
import './App.css';
import FullLayout from "./feature/FullLayout";

const boldStyle: Partial<ITextStyles> = { root: { fontWeight: FontWeights.semibold } };
const stackTokens: IStackTokens = { childrenGap: 15 };
const stackStyles: Partial<IStackStyles> = {
  root: {
    width: '960px',
    margin: '0 auto',
    textAlign: 'center',
    color: '#605e5c',
  },
};

const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: 300 },
};

const options: IDropdownOption[] = [
    { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
    { key: 'apple', text: 'Apple' },
    { key: 'banana', text: 'Banana' },
    { key: 'orange', text: 'Orange', disabled: true },
    { key: 'grape', text: 'Grape' },
    { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
    { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
    { key: 'broccoli', text: 'Broccoli' },
    { key: 'carrot', text: 'Carrot' },
    { key: 'lettuce', text: 'Lettuce' },
];

const menuProps: IContextualMenuProps = {
    items: [
        {
            key: 'emailMessage',
            text: 'Email message',
            iconProps: { iconName: 'Mail' },
        },
        {
            key: 'calendarEvent',
            text: 'Calendar event',
            iconProps: { iconName: 'Calendar' },
        },
    ],
};
export const App: React.FunctionComponent = () => {
  return (
      <FullLayout>
          content
      </FullLayout>
  );
};
