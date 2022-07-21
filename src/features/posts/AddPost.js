import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { SectionTitle } from "../../utilities/Titles"
import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer';
import componentTypes from '@data-driven-forms/react-form-renderer/component-types';
import TextField from '@data-driven-forms/pf4-component-mapper/text-field';
import Select from '@data-driven-forms/pf4-component-mapper/select';
import Textarea from '@data-driven-forms/pf4-component-mapper/textarea';
import { 
  PageSection,
  PageSectionVariants }
from '@patternfly/react-core';
import createAddPostSchema from "./createAddPostSchema";
import { FormTemplateCanReset } from "../../utilities/templates";

const componentMapper = {
  [componentTypes.TEXT_FIELD]: TextField,
  [componentTypes.SELECT]: Select,
  [componentTypes.TEXTAREA]: Textarea,
};

const AddPost = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const onSubmit = ({title, content, userId}) => {
    dispatch(postAdded(title, content, userId));
  };

  return (
    <PageSection variant={PageSectionVariants.light} isWidthLimited isCenterAligned>
      <SectionTitle title="Add a new Post"/>
      <FormRenderer
      componentMapper={componentMapper}
      FormTemplate={FormTemplateCanReset}
      schema={createAddPostSchema(users)}
      onSubmit={onSubmit}
    />
    </PageSection>   
  )
}

export default AddPost;
