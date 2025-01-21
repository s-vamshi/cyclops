import React from "react";
import { CreateModuleComponent } from "../../shared/CreateModule";
import {
  createModule,
  getNamespaces,
  getTemplate,
  getTemplateInitialValues,
  getTemplateStore,
} from "../../../utils/api/api";

const NewModule = () => {
  return (
    <CreateModuleComponent
      getTemplateStore={getTemplateStore}
      getNamespaces={getNamespaces}
      getTemplate={getTemplate}
      getTemplateInitialValues={getTemplateInitialValues}
      submitModule={createModule}
      onSubmitModuleSuccess={(moduleName) => {
        window.location.href = "/modules/" + moduleName;
      }}
    />
  );
};
export default NewModule;
