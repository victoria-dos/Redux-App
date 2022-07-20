import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { PostAuthor } from "./PostAuthor";
import { postDeleted } from "./postsSlice";
import DeletePostModal from "./DeletePostModal";
import { useHistory } from "react-router-dom";
import { SectionTitle, SubSectionTitle } from "../../utilities/Titles"
import { Page,
  PageSection,
  PageSectionVariants,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardFooter,
  Text,
  TextContent,
  TextVariants } from "@patternfly/react-core";
import { PageHeader } from "../../app/HorizontalPage";

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params;

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );

  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts)
  const history = useHistory();

  if (!post) {
    return (
      <Page>
        <PageSection variant={PageSectionVariants.dark} isWidthLimited isCenterAligned>
        <SectionTitle title="Post not found!"/>
      </PageSection>
      </Page>
    );
  }

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
  }

  const onDeletePostClick = (e) => {
    const index = posts.findIndex(
      (post) => e.target.getAttribute("id") === post.id
    );
    dispatch(postDeleted(index));
    history.push(`/`);
  };

  const ParseText = ({ post }) => {
    return post.content.split('\n').map((chunk) => <Text key={post.id} component={TextVariants.p} className="pf-u-my-m">{chunk}</Text>)
  }

  return (
    <Page header={<PageHeader />}>
      <PageSection variant={PageSectionVariants.dark} isWidthLimited isCenterAligned>
      <Card>
        <CardTitle>
          <SubSectionTitle title={post.title} />
          <PostAuthor userId={post.user} />
        </CardTitle>
        <CardBody>
          <TextContent>
            <ParseText post={post} />
          </TextContent>
        </CardBody>
        <CardFooter>
          <Button type="button" variant="tertiary" className="pf-u-mr-xl">
            <Link to={`/editPost/${post.id}`} style={linkStyle}>
              Edit Post
            </Link>
          </Button>
          <DeletePostModal history={history}/>
        </CardFooter>
        
      </Card>
    </PageSection>
    </Page>
  );
};
