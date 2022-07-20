import React from 'react';
import { connect } from 'react-redux';

import { postDeleted } from "./postsSlice";
import { Modal, ModalVariant, Button } from '@patternfly/react-core';



class DeletePostModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.handleModalToggle = () => {
      this.setState(({ isModalOpen }) => ({
        isModalOpen: !isModalOpen
      }));
    };
    this.handleDeletePost = () => {
        this.props.postDeleted()
        this.props.history.push(`/`);
    }
  }

  render() {
    const { isModalOpen } = this.state;

    return (
      <React.Fragment>
        <Button variant="danger" onClick={this.handleModalToggle}>
        Delete Post
        </Button>
        <Modal
          variant={ModalVariant.small}
          title="Delete the post?"
          isOpen={isModalOpen}
          onClose={this.handleModalToggle}
          actions={[
            <Button key="confirm" variant="danger" onClick={this.handleDeletePost}>
              Confirm
            </Button>,
            <Button key="cancel" variant="link" onClick={this.handleModalToggle}>
              Cancel
            </Button>
          ]}
        >
          Confirm if you want to delete this post.
        </Modal>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postDeleted: () => dispatch(postDeleted())
    }
};
export default connect(null, mapDispatchToProps)(DeletePostModal)