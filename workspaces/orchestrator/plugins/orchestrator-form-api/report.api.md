## API Report File for "@red-hat-developer-hub/backstage-plugin-orchestrator-form-api"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ApiRef } from '@backstage/core-plugin-api';
import { Context } from 'react';
import { ErrorSchema } from '@rjsf/utils';
import { FormProps } from '@rjsf/core';
import { JsonObject } from '@backstage/types';
import type { JSONSchema7 } from 'json-schema';
import { UiSchema } from '@rjsf/utils';

// @public
export type FormDecoratorProps = Pick<FormProps<JsonObject, JSONSchema7>, 'formData' | 'formContext' | 'widgets' | 'onChange' | 'customValidate'> & {
    getExtraErrors?: (formData: JsonObject) => Promise<ErrorSchema<JsonObject>> | undefined;
};

// @public
export interface OrchestratorFormApi {
    getFormContext(): Context<OrchestratorFormContextProps | null>;
    getFormDecorator(): OrchestratorFormDecorator;
}

// @public
export const orchestratorFormApiRef: ApiRef<OrchestratorFormApi>;

// @public (undocumented)
export type OrchestratorFormContextProps = {
    schema: JSONSchema7;
    updateSchema: OrchestratorFormSchemaUpdater;
    numStepsInMultiStepSchema?: number;
    children: React.ReactNode;
    onSubmit: (formData: JsonObject) => void;
    uiSchema: UiSchema<JsonObject, JSONSchema7>;
    formData: JsonObject;
    setFormData: (data: JsonObject) => void;
};

// @public
export type OrchestratorFormDecorator = (FormComponent: React.ComponentType<FormDecoratorProps>) => React.ComponentType;

// @public
export type OrchestratorFormSchemaUpdater = (chunks: SchemaChunksResponse) => void;

// @public
export type SchemaChunksResponse = {
    [key: string]: JsonObject;
};

// @public (undocumented)
export const useOrchestratorFormApiOrDefault: () => OrchestratorFormApi;

// @public
export const useWrapperFormPropsContext: () => OrchestratorFormContextProps;

// Warnings were encountered during analysis:
//
// src/api.d.ts:58:1 - (ae-undocumented) Missing documentation for "OrchestratorFormContextProps".
// src/context.d.ts:6:22 - (ae-undocumented) Missing documentation for "useOrchestratorFormApiOrDefault".

// (No @packageDocumentation comment for this package)

```
