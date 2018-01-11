import React from 'react';
import { connect } from 'react-redux';
import { userActions, loadActions } from '../actions';
// import { push } from 'react-router-redux';
class AddItemForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            load: {
                datePickUp: '',
                timePickUp: '',
                loadType: 0,
                idStatus: 0,
                price: '',
                weight: '',
                origin: '',
                destination: '',
                comment: '',
                idDispatch: null,
                idBroker: this.props.user._id
            }
        }
    }

    componentDidMount(){
        this.props.dispatch(loadActions.getStatuses());
        this.props.dispatch(loadActions.getLoadTypes());
    }

    handleChange = (event) => {

        const { name, value } = event.target;
        // console.log(event.target);
        const { load } = this.state;
        this.setState({
            load: {
                ...load,
                [name]: value
            }
        });
       
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log('submit',this.state.load);
        // const {}
        this.props.dispatch(loadActions.addLoad(this.state.load))
        // .then((dispatch ) => {
        this.props.dispatch(loadActions.getLoads())
        // this.props.dispatch(push('/broker'));
        // })
        
        this.props.updateList();
        // this.props.history.push('/broker');
    }

    handleCancel = (event) =>{
        event.preventDefault();
        this.props.cancelForm();
    }

    checkDate = (data) => { return data.match(/(\d{4})-(\d{2})-(\d{2})/) ? true : false }

    render() {
        const { statuses, loadTypes, user } = this.props;
        const { load } = this.state;
        // console.log('load:', this.state.load);

        return (
            <div >

                <h2>Add new load</h2>

                <form>

                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="datePickUp">Pick up date</label>
                                <input type="text" className={'form-control' + ( !load.datePickUp ? ' is-invalid' : '')} name="datePickUp" value={this.state.load.datePickUp} onChange={this.handleChange}/>
                                { !this.checkDate(load.datePickUp) && 
                                    <div className="invalid-feedback">Date should be YYYY-MM-DD</div> 
                                }
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="timePickUp">Pick up time</label>
                                <input type="text" className={'form-control' + ''} name="timePickUp" value={this.state.load.timePickUp} onChange={this.handleChange}/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="origin">Origin</label>
                                <input type="text" className={'form-control' + ''} name="origin" value={this.state.load.origin} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="destination">Destination</label>
                                <input type="text" className={'form-control' + ''} name="destination" value={this.state.load.destination} onChange={this.handleChange}/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="weight">Weight</label>
                                <input type="text" className={'form-control' + ''} name="weight" value={this.state.load.weight} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="price">Price</label>
                                <input type="text" className={'form-control' + ''} name="price" value={this.state.load.price} onChange={this.handleChange}/>
                            </div>
                        </div>
                    </div>

                    {/* lists */}
                    <div className="row">
                        <div className="col">
                            <select className="custom-select" name="idStatus" value={this.state.load.idStatus} onChange={this.handleChange} >
                                <option value="">Choose status...</option>
                                {/* <option value="111">111</option>
                                <option value="222">222</option> */}
                                {statuses && statuses.data.map( (status, key) => {
                                    return  <option key={key} value={status._id}>{status.statusName}</option>
                                })}
                            </select>
                        </div>
                        <div className="col">
                            <select className="custom-select" name="loadType" value={this.state.load.loadType} onChange={this.handleChange} >
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
                                <input type="text" className={'form-control' + ''} name="comment" value={this.state.load.comment} onChange={this.handleChange}/>
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
    const { user } = state.authentication
    return {
        statuses,
        loadTypes,
        loads,
        user
    };
}

export default connect(mapStateToProps)(AddItemForm);
