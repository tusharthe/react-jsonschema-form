import React from "react";
import { utils } from "@rjsf/core";
 
import { ArrayFieldTemplateProps, IdSchema } from "@rjsf/core";

import AddButton from "../AddButton/AddButton";
import IconButton from "../IconButton/IconButton";

const { isMultiSelect, getDefaultRegistry } = utils;

const ArrayFieldTemplate = (props: ArrayFieldTemplateProps) => {
  const { schema, registry = getDefaultRegistry() } = props;

  if (isMultiSelect(schema, registry.rootSchema)) {
    return <DefaultFixedArrayFieldTemplate {...props} />;
  } else {
    return <DefaultNormalArrayFieldTemplate {...props} />;
  }
};

type ArrayFieldTitleProps = {
  TitleField: any;
  idSchema: IdSchema;
  title: string;
  required: boolean;
};

const ArrayFieldTitle = ({
  TitleField,
  idSchema,
  title,
  required,
}: ArrayFieldTitleProps) => {
  if (!title) {
    return null;
  }

  const id = `${idSchema.$id}__title`;
  return <TitleField id={id} title={title} required={required} />;
};

type ArrayFieldDescriptionProps = {
  DescriptionField: any;
  idSchema: IdSchema;
  description: string;
};

const ArrayFieldDescription = ({
  DescriptionField,
  idSchema,
  description,
}: ArrayFieldDescriptionProps) => {
  if (!description) {
    return null;
  }

  const id = `${idSchema.$id}__description`;
  return <DescriptionField id={id} description={description} />;
};

// Used in the two templates
const DefaultArrayItem = (props: any) => {
  const btnStyle = {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: "bold",
  };
  return (
    <div key={props.key}>
      <div className="mb-2 flex flex-row align-middle items-center">
        <div   className="flex flex-col w-100 text-md">{props.children}</div>

        <div className="py-4 flex flex-col w-100">
          {props.hasToolbar && (
            <div className="flex flex-row">
              {(props.hasMoveUp || props.hasMoveDown) && (
                <div className="m-0 p-0">
                  <IconButton
                    icon="arrow-up"
                    className="array-item-move-up"
                    tabIndex={-1}
                    style={btnStyle as any}
                    disabled={
                      props.disabled || props.readonly || !props.hasMoveUp
                    }
                    onClick={props.onReorderClick(props.index, props.index - 1)}
                  />
                </div>
              )}

              {(props.hasMoveUp || props.hasMoveDown) && (
                <div className="m-0 p-0">
                  <IconButton
                    icon="arrow-down"
                    tabIndex={-1}
                    style={btnStyle as any}
                    disabled={
                      props.disabled || props.readonly || !props.hasMoveDown
                    }
                    onClick={props.onReorderClick(props.index, props.index + 1)}
                  />
                </div>
              )}

              {props.hasRemove && (
                <div className="m-0 p-0">
                  <IconButton
                    icon="remove"
                    tabIndex={-1}
                    style={btnStyle as any}
                    disabled={props.disabled || props.readonly}
                    onClick={props.onDropIndexClick(props.index)}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const DefaultFixedArrayFieldTemplate = (props: ArrayFieldTemplateProps) => {
  return (
    <fieldset className={props.className}>
      <ArrayFieldTitle
        key={`array-field-title-${props.idSchema.$id}`}
        TitleField={props.TitleField}
        idSchema={props.idSchema}
        title={props.uiSchema["ui:title"] || props.title}
        required={props.required}
      />

      {(props.uiSchema["ui:description"] || props.schema.description) && (
        <div
          className="field-description"
          key={`field-description-${props.idSchema.$id}`}>
          {props.uiSchema["ui:description"] || props.schema.description}
        </div>
      )}

      <div
        className="row array-item-list"
        key={`array-item-list-${props.idSchema.$id}`}>
        {props.items && props.items.map(DefaultArrayItem)}
      </div>

      {props.canAdd && (
        <AddButton
          className="array-item-add"
          onClick={props.onAddClick}
          disabled={props.disabled || props.readonly}
        />
      )}
    </fieldset>
  );
};

const DefaultNormalArrayFieldTemplate = (props: ArrayFieldTemplateProps) => {
  return (
    <div>
      <div className="p-0 m-0 flex flex-row">
        <div className="p-0 m-0 flex-col flex">
        <ArrayFieldTitle
          key={`array-field-title-${props.idSchema.$id}`}
          TitleField={props.TitleField}
          idSchema={props.idSchema}
          title={props.uiSchema["ui:title"] || props.title}
          required={props.required}
        />

        {(props.uiSchema["ui:description"] || props.schema.description) && (
          <ArrayFieldDescription
            key={`array-field-description-${props.idSchema.$id}`}
            DescriptionField={props.DescriptionField}
            idSchema={props.idSchema}
            description={
              props.uiSchema["ui:description"] || props.schema.description
            }
          />
        )}

        <div  key={`array-item-list-${props.idSchema.$id}`} className="p-1 m-0 pl-5 pr-5">
          {props.items && props.items.map(p => DefaultArrayItem(p))}

          {props.canAdd && (
            <div className="">
              <div className="mt-2 flex flex-row">
                <div className="grid grid-cols-1" ></div>
                <div  className="py-4 grid grid-cols-3"> <AddButton
                  className="array-item-add"
                  onClick={props.onAddClick}
                  disabled={props.disabled || props.readonly}
                /></div>

              </div>
            </div>
          )}
        </div></div>

      </div>
    </div>
  );
};

export default ArrayFieldTemplate;
