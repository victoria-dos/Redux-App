import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { SectionTitle } from "../../utilities/Titles"
import { Button,
  Form,
  FormGroup,
  TextInput,
  TextArea,
  FormSelect,
  FormSelectOption,
  SelectVariant,
  ActionGroup,
  PageSection,
  PageSectionVariants } from '@patternfly/react-core';


export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const handleTitleChange = (title) => setTitle(title)
  const handleContentChange = (content) => setContent(content)
  const handleUserIdChange = (userId) => setUserId(userId)

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const onSavePostClick = (e) => {
    e.preventDefault()
    dispatch(postAdded(title, content, userId));
    setTitle("");
    setContent("");
  };

  const canSave = !!title && !!content && !!userId;

  const usersOptions = users.map((user) => (
    <FormSelectOption key={user.id} value={user.id} label={user.name}/>
  ));

  return (
    <PageSection variant={PageSectionVariants.light} isWidthLimited isCenterAligned>
      <SectionTitle title="Add a new Post"/>
      <Form isHorizontal isWidthLimited maxWidth="500px">
        <FormGroup label="Post Title" isRequired>
          <TextInput isRequired
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={handleTitleChange}
        />
        </FormGroup>
        
        <FormGroup label="Author" isRequired>
        <FormSelect isRequired
          id="postAuthor"
          value={userId}
          variant={SelectVariant.single}
          onChange={handleUserIdChange}
        >
          <FormSelectOption value="" label="" />
          {usersOptions}
        </FormSelect>
        </FormGroup>
        
        <FormGroup label="Post Content" isRequired>
        <TextArea isRequired autoResize
          id="postContent"
          name="postContent"
          value={content}
          onChange={handleContentChange}
        />
        </FormGroup>
        
        <ActionGroup>
        <Button type="submit" variant="primary" onClick={onSavePostClick} isDisabled={!canSave}>Save Post</Button>
        </ActionGroup>
      </Form>
    </PageSection>
  );
};
