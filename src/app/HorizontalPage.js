import React from "react";
import { Page,
    Button,
    Flex,
    Masthead,
    MastheadMain,
    MastheadBrand,
    MastheadContent,
    PageSection,
    PageSectionVariants,
    Toolbar,
    ToolbarContent,
    ToolbarItem } from '@patternfly/react-core';
import { Navbar } from "./Navbar";
import { PostsList } from "../features/posts/PostsList";
import AddPost from "../features/posts/AddPost";
import { ModalWithForm }  from "../features/users/SignUpModal";
import { Link } from "react-router-dom";


export const PageHeader = () => {
  const headerToolbar = (
    <Toolbar id="toolbar">
      <ToolbarContent>
        <ToolbarItem>
          <Navbar mainPage="M A I N   P A G E"/>
        </ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );
  return (
    <Masthead style={{height: 100}}>
        <MastheadMain>
          <MastheadBrand href="https://looka.com/logo-maker/" onClick={() => console.log('clicked logo')} target="_blank">
            L O G O
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
        <PageSection variant={PageSectionVariants.dark}>
          <Flex style={{height: "10vw", alignContent: "center", justifyContent: "center"}}>
            <Link to={`/login`} style={{textDecoration: "none"}}>
              <Button style={{backgroundColor: "black", color: "white", width: "20vw", height: "100"}}>Login</Button>
            </Link>
            <ModalWithForm />
          </Flex>
        </PageSection>
        <AddPost />
      </Page>
    );
  };