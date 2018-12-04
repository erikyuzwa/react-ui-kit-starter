import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import AlertComponent from './Alert';

const story = storiesOf('AlertComponent', module);
story.addDecorator(withKnobs);

story.add('With knobs', () => (
  <AlertComponent message={text('hello world')} />
));
