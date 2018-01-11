import React from 'react';
import Modal from 'react-modal';
import AddItemForm from '../components/AddItemForm';
// import { connect } from 'react-redux';
// import { loadActions } from '../actions';

Modal.setAppElement('#root');
const modalFormStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
    //   border-radius
    }
  };
class AddItem extends React.Component {

    constructor(){
        super()
        this.state = {isModalOpen: false}
    }

    handleOpenModal = () => this.setState({isModalOpen: true})
    handleAfterOpenModal = () => this.setState({isShowingModal: false})
    handleCloseModal = () => this.setState({isModalOpen: false})
    handleUpdateList = () => {
        this.setState({isModalOpen: false})
        // this.props.dispatch(loadActions.getLoads())
    }
    handleCancelForm = () => this.setState({isModalOpen: false})


    render() {
        // const { authentication } = this.props;
        // console.log('authentication',authentication);
        return (
            <div>
                <button className="btn btn-primary" onClick={this.handleOpenModal}>Add load</button>
                <Modal
                    isOpen={this.state.isModalOpen}
                    onAfterOpen={this.handleAfterOpenModal}
                    onRequestClose={this.handleCloseModal}
                    style={modalFormStyles}
                    contentLabel="Example Modal"
                >
                    <AddItemForm updateList={this.handleUpdateList} cancelForm={this.handleCancelForm}/>
                </Modal>
            </div>
        );
    }
}

// function mapStateToProps(state) {
//     const { loads } = state;
//     return {
//         loads
//     };
// }

// export default  AddItem = connect(mapStateToProps)(AddItem);
export default  AddItem ; 
