import React from "react";
import { Page,
    Masthead,
    MastheadMain,
    MastheadBrand,
    MastheadContent,
    PageSection,
    PageSectionVariants,
    Toolbar,
    ToolbarContent,
    ToolbarItem,
    Card,
    CardBody } from '@patternfly/react-core';
import { Navbar } from "./Navbar";
import { PostsList } from "../features/posts/PostsList";
import { AddPostForm } from "../features/posts/AddPostForm";

export const PageHeader = () => {
  const headerToolbar = (
    <Toolbar id="toolbar">
      <ToolbarContent>
        <ToolbarItem>
          <Navbar mainPage="Main page"/>
        </ToolbarItem>
        <ToolbarItem>header-tools</ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );
  return (
    <Masthead style={{height: 100}}>
        <MastheadMain>
          <MastheadBrand href="https://looka.com/logo-maker/" onClick={() => console.log('clicked logo')} target="_blank">
            There would be a Logo
          </MastheadBrand>
        </MastheadMain>
        <MastheadContent>{headerToolbar}</MastheadContent>
      </Masthead>
  )
}

export const HorizontalPage = () => {
    return (
      <Page header={<PageHeader />}>
        <PostsList />
        <PageSection variant={PageSectionVariants.dark}></PageSection>
        <AddPostForm />
      </Page>
    );
  };