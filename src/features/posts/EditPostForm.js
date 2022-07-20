import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUpdated } from "./postsSlice";
import { useHistory } from "react-router-dom";
import { PageHeader } from "../../app/HorizontalPage";
import { SectionTitle } from "../../utilities/Titles"
import { Button,
  Form,
  FormGroup,
  TextInput,
  TextArea,
  ActionGroup,
  Page,
  PageSection,
  PageSectionVariants } from '@patternfly/react-core';

export const EditPostForm = ({ match }) => {
  const { postId } = match.params;
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [disableSubmit, setDisableSubmit] = useState(true)

  const handleTitleChange = (title) => {
    setTitle(title);
    setDisableSubmit(title === post.title && content === post.content);
  }
  const handleContentChange = (content) => {
    setContent(content);
    setDisableSubmit(title === post.title && content === post.content);
  }
  

  const dispatch = useDispatch();
  const history = useHistory();

  const onSavePostClick = (e) => {
    e.preventDefault()
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content }));
      history.push(`/posts/${postId}`);
    }
  };

  return (
    <Page header={<PageHeader />}>
      <PageSection variant={PageSectionVariants.light} isWidthLimited isCenterAligned>
      <SectionTitle title="Edit post"/>
      <Form isHorizontal isWidthLimited maxWidth="1200px">
      <FormGroup label="Post Title">
          <TextInput
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={handleTitleChange}
        />
        </FormGroup>

        <FormGroup label="Post Content">
        <TextArea autoResize
          id="postContent"
          name="postContent"
          value={content}
          onChange={handleContentChange}
        />
        </FormGroup>
        <ActionGroup>
          <Button type="submit" variant="primary" onClick={onSavePostClick} isDisabled={disableSubmit}>Save Post</Button>
        </ActionGroup>
      </Form>
    </PageSection>
    </Page>
  );
};
