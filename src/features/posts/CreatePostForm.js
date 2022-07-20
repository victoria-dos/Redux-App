import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { SectionTitle } from "../../utilities/Titles"
import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer';
import componentTypes from '@data-driven-forms/react-form-renderer/component-types';
import FormTemplate from '@data-driven-forms/pf4-component-mapper/form-template';
import TextField from '@data-driven-forms/pf4-component-mapper/text-field';
import Select from '@data-driven-forms/pf4-component-mapper/select';
import Textarea from '@data-driven-forms/pf4-component-mapper/textarea';
import { 
  PageSection,
  PageSectionVariants }
from '@patternfly/react-core';
import newPostSchema from "./newPostSchema";


const componentMapper = {
  [componentTypes.TEXT_FIELD]: TextField,
  [componentTypes.SELECT]: Select,
  [componentTypes.TEXTAREA]: Textarea,
};

const FormTemplateCanReset = (props) => <FormTemplate {...props} canReset />;

const CreatePostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  // const handleTitleChange = (title) => setTitle(title)
  // const handleContentChange = (content) => setContent(content)
  // const handleUserIdChange = (userId) => setUserId(userId)

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const onSavePostClick = () => {
    dispatch(postAdded(title, content, userId));
    setTitle("");
    setContent("");
  };


  return (
    <PageSection variant={PageSectionVariants.light} isWidthLimited isCenterAligned>
      <SectionTitle title="Add a new Post"/>
      <FormRenderer
      componentMapper={componentMapper}
      FormTemplate={FormTemplateCanReset}
      schema={newPostSchema({users})}
      onSubmit={onSavePostClick}
    />
    </PageSection>
    
  )
}

export default CreatePostForm;
