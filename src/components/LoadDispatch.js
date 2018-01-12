import React from 'react';
import Modal from 'react-modal';
import EditItemFormDispatch from '../components/EditItemFormDispatch';
import styles from './styles/load.css'

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

class LoadDispatch extends React.Component{

    constructor(props){
        super(props)
        this.state = {isModalOpen: false, loadId: ''}
    }
    
    convertDate = t => t.substring(0,10)
    

    handleOpenModal = (id) => this.setState({isModalOpen: true, loadId: id})
    handleAfterOpenModal = () => this.setState({isShowingModal: false})
    handleCloseModal = () => this.setState({isModalOpen: false})
    handleUpdateList = () => {
        this.setState({isModalOpen: false})
        // this.props.dispatch(loadActions.getLoads())
    }
    handleCancelForm = () => this.setState({isModalOpen: false})

    handleChangeItem = (e) => {
        this.handleOpenModal(e.currentTarget.id)
        // console.log('clicked:',e.currentTarget.id)
    }
    render() {
        console.log('loadlist:',this.props.loads)
        return (
            <div>
                <Modal
                    isOpen={this.state.isModalOpen}
                    onAfterOpen={this.handleAfterOpenModal}
                    onRequestClose={this.handleCloseModal}
                    style={modalFormStyles}
                    contentLabel="Edit load modal window"
                >
                    <EditItemFormDispatch loadId={this.state.loadId} cancelForm={this.handleCancelForm} updateList={this.handleUpdateList}/>
                    {/* <EditItemFormHelper loadId={this.state.loadId}/> */}
                </Modal>
                <table className="table">
                <thead>
                    {/* <div> */}
                <tr>
                    {/* <th scope="row">#</th> */}
                    <th scope="col">Pick up (date)</th>
                    <th scope="col">Pick up (time)</th>
                    <th scope="col">Load type</th>
                    <th scope="col">Origin</th>
                    <th scope="col">Destination</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                    <th scope="col">Dispatch</th>
                    <th scope="col">Comment</th>
                </tr>
                {/* </div> */}
                </thead>
                <tbody >
                    {this.props.loads.data.map( (load, key) => 
                        // <div>
                        <tr className="load" key={key} id={load._id} onClick={this.handleChangeItem}>
                            {/* <th scope="row">{key}</th> */}
                            <td>{this.convertDate(load.datePickUp)}</td>
                            <td>{load.timePickUp}</td>
                            <td>{load.loadType.typeName}</td>
                            <td>{load.origin}</td>
                            <td>{load.destination}</td>
                            <td>{load.weight}</td>
                            <td>{load.price}</td>
                            <td>{load.idStatus.statusName}</td>
                            <td>{load.idDispatch === null ? '' : load.idDispatch.contactPerson}</td>
                            <td>{load.comment}</td>
                        </tr>
                        // </div>
                    
                    )}
                </tbody>
            </table>
          </div>
        )

    }
}

export default LoadDispatch;
