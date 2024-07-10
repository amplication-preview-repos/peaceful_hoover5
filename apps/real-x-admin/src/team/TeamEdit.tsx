import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TeamEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="teamName" source="teamName" />
      </SimpleForm>
    </Edit>
  );
};
