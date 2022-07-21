import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUpdated } from "./postsSlice";
import { useHistory } from "react-router-dom";
import { PageHeader } from "../../app/HorizontalPage";
import { SectionTitle } from "../../utilities/Titles";
import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer';
import componentTypes from '@data-driven-forms/react-form-renderer/component-types';
import TextField from '@data-driven-forms/pf4-component-mapper/text-field';
import Textarea from '@data-driven-forms/pf4-component-mapper/textarea';
import { Page,
  PageSection,
  PageSectionVariants }
  from '@patternfly/react-core';

import createEditPostSchema from "./createEditPostSchema";
import { FormTemplateCanReset } from "../../utilities/templates";

const componentMapper = {
  [componentTypes.TEXT_FIELD]: TextField,
  [componentTypes.TEXTAREA]: Textarea,
};

export const EditPost = ({ match }) => {
  const { postId } = match.params;
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = ({title, content}) => {
    dispatch(postUpdated({ id: postId, title, content }));
    history.push(`/posts/${postId}`);
  };

  return (
    <Page header={<PageHeader />}>
      <PageSection variant={PageSectionVariants.light} isWidthLimited isCenterAligned>
        <SectionTitle title="Edit post"/>
        <FormRenderer
      componentMapper={componentMapper}
      FormTemplate={FormTemplateCanReset}
      schema={createEditPostSchema(post.title, post.content)}
      onSubmit={onSubmit}
    />
      </PageSection>
    </Page>
  );
};
