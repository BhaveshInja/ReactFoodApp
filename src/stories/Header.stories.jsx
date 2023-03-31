import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from '../components/Layout/Header';


export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Header',
  component: Header,
};

export const Primary = () => <Header primary>Header</Header>;