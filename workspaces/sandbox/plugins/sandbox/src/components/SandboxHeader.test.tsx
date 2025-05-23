/*
 * Copyright Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { render, screen } from '@testing-library/react';
import React from 'react';
import { SandboxHeader } from './SandboxHeader';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { wrapInTestApp } from '@backstage/test-utils';

test('renders the modal with the correct title', () => {
  const theme = createTheme();
  render(
    wrapInTestApp(
      <ThemeProvider theme={theme}>
        <SandboxHeader pageTitle="My Page Title" />
      </ThemeProvider>,
    ),
  );
  expect(screen.getByText('My Page Title')).toBeInTheDocument();
});
