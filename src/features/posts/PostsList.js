import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pageSet } from './postsSlice';
import { Link } from "react-router-dom";
import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import { SectionTitle, SubSectionTitle } from "../../utilities/Titles"
import { PageSection, Pagination, PageSectionVariants, Toolbar } from '@patternfly/react-core';
import { paginationBuilder, isOffsetValid, getLastPageOffset } from '../../utilities/Pagination';
import { TablePosts } from "./TablePosts";

export const PostsList = () => {
  const dispatch = useDispatch();
  const { data, pagination } = useSelector((state) => state.posts);
  const orderedPosts = data.slice().sort((a,b) => b.date.localeCompare(a.date))

  const fetchData = ({ offset, limit, pagination }) => {
    const isPaginationValid = isOffsetValid(offset, pagination.count);
    offset = isPaginationValid ? offset : getLastPageOffset(pagination.count, limit);
  
    const payload = {
      ...pagination,
      offset,
      limit,
    };
    dispatch(pageSet(payload))
  };

  const columns = {
    title: "Title",
    author: "Author",
    date: "Date",
    content: "Content",
    viewLink: "ID",
  }
  

  return (
    <PageSection variant={PageSectionVariants.light} isWidthLimited isCenterAligned>
      <SectionTitle title="Posts"/>
        <TablePosts data={data} columns={columns}></TablePosts>
      {/* {data ? orderedPosts.map((post) => (
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
      ))
    :
    <div>
      <SubSectionTitle title="No posts available" />
    </div>} */}
    <Toolbar>
      <Pagination {...paginationBuilder(pagination, () => fetchData({ offset: pagination.offset, limit: pagination.limit, pagination }))} variant="bottom"/>
    </Toolbar> 
    </PageSection>
  );
};
