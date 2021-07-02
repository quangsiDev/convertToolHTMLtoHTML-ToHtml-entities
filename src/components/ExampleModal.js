import React, { Component } from 'react'
import { Modal, Button } from 'antd';


export default class ExampleModal extends Component {\
    state={
        isModalVisible:false
    }
     showModal = () => {
        setIsModalVisible(true);
      };
    
       handleOk = () => {
        setIsModalVisible(false);
      };
    
       handleCancel = () => {
        setIsModalVisible(false);
      };
    render() {
        return (
            <div>
              <Button type="primary" onClick={this.showModal}>
                Open Modal
              </Button>
              <Modal title="Basic Modal" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Modal>
            </div>
          )
    }
}