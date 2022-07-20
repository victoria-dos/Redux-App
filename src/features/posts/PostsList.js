import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import { SectionTitle, SubSectionTitle } from "../../utilities/Titles"
import { Truncate, Button, Card, CardBody, CardTitle, PageSection, PageSectionVariants } from '@patternfly/react-core';

export const PostsList = () => {
  
  const posts = useSelector((state) => state.posts)
  const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))

  return (
    <PageSection variant={PageSectionVariants.light} isWidthLimited isCenterAligned>
      <SectionTitle title="Posts"/>
      {orderedPosts.map((post) => (
        <div key={post.id} className="pf-u-w-50-on-md">
        <Card isRounded className="pf-u-display-flex pf-u-h-33">
          <CardTitle>
            <SubSectionTitle title={post.title} />
            <PostAuthor userId={post.user} />
            <TimeAgo timestamp={post.date} />
          </CardTitle>
          <CardBody>
            <p className="pf-u-text-truncate pf-u-h-inherit">{post.content}</p>
            <Link to={`/posts/${post.id}`}>View Post</Link>
          </CardBody>
        </Card>
        <br></br>
        </div>
      ))}
    </PageSection>
  );
};
