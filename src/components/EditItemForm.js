import React from 'react';
import { connect } from 'react-redux';
import { userActions, loadActions } from '../actions';

class EditItemForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    componentWillMount(){
        const { statuses, loadTypes, loads, loadId } = this.props
        let load = loads.data.filter(load => load._id === loadId)[0]
        this.setState({loadData: load})
    }

    handleChange = (event) => {

        const { name, value } = event.target;
        console.log('name, value', name, value);
        // console.log(event.target);
        const { loadData } = this.state;
        this.setState({
            loadData: {
                ...loadData,
                [name]: value
            }
        });
        console.log('this.state', this.state);
       
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {loadData} = this.state
        const {loadId} = this.props
        // let dataCorrect = load.origin && load.destination;

        if (true) {
            console.log('submit loadData:', loadData)
            this.props.dispatch(loadActions.editLoad(loadId, loadData))
                    
            this.props.updateList();
        }
        // this.props.history.push('/broker');
    }

    handleCancel = (event) =>{
        event.preventDefault();
        this.props.cancelForm();
    }

    // checkDate = (data) => { return data.match(/(\d{4})-(\d{2})-(\d{2})/) ? true : false }

    render() {
        const { statuses, loadTypes, user, load } = this.props;
        const { loadData } = this.state;
        // console.log('render load:', load);
        // console.log('id load:', this.props.loadId);
        console.log('loadData', loadData)

        return (
            <div >

                <h2>Edit load </h2>

                <form>

                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="datePickUp">Pick up date</label>
                                <input type="text" className={'form-control' + ''} name="datePickUp" value={loadData.datePickUp} onChange={this.handleChange}/>
                                {/* { !this.checkDate(load.datePickUp) && 
                                    <div className="invalid-feedback">Date should be YYYY-MM-DD</div> 
                                } */}
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="timePickUp">Pick up time</label>
                                <input type="text" className={'form-control' + ''} name="timePickUp" value={this.state.loadData.timePickUp} onChange={this.handleChange} readOnly/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="origin">Origin</label>
                                <input type="text" className={'form-control' + ''} name="origin" value={this.state.loadData.origin} onChange={this.handleChange}/>
                                {/* { !load.origin && 
                                    <div className="invalid-feedback">Origin is required field</div> 
                                } */}
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="destination">Destination</label>
                                <input type="text" className={'form-control' + ''} name="destination" value={this.state.loadData.destination} onChange={this.handleChange}/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="weight">Weight</label>
                                <input type="text" className={'form-control' + ''} name="weight" value={this.state.loadData.weight} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="price">Price</label>
                                <input type="text" className={'form-control' + ''} name="price" value={this.state.loadData.price} onChange={this.handleChange}/>
                            </div>
                        </div>
                    </div>

                    {/* lists */}
                    <div className="row">
                        <div className="col">
                            <select className="custom-select" name="idStatus" value={this.state.loadData.idStatus._id} onChange={this.handleChange} >
                                <option value="">Choose status...</option>
                                {statuses && statuses.data.map( (status, key) => {
                                    return  <option key={key} value={status._id}>{status.statusName}</option>
                                })}
                            </select>
                        </div>
                        <div className="col">
                            <select className="custom-select" name="loadType" value={this.state.loadData.loadType._id} onChange={this.handleChange} >
                            <option value="">Choose load type...</option>
                                {loadTypes && loadTypes.data.map( (loadType, key) => {
                                    return  <option key={key} value={loadType._id}>{loadType.typeName}</option>
                                })}
                            </select>
                        </div>
                    </div>
                     {/* end lists */}
                     <br />
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="comment">Comment</label>
                                <input type="text" className={'form-control' + ''} name="comment" value={this.state.loadData.comment} onChange={this.handleChange}/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <button className="btn btn-primary" onClick={this.handleSubmit}>Save</button> {' '}
                                <button className="btn btn-secondary" onClick={this.handleCancel}>Cancel</button>
                                {/* <Link to="/login" className="btn btn-link">Cancel</Link> */}
                            </div>
                        </div>
                    </div>
    
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { statuses, loadTypes, loads } = state;
    // const { user } = state.authentication
    return {
        statuses,
        loadTypes,
        loads
        // user
    };
}

export default connect(mapStateToProps)(EditItemForm);
