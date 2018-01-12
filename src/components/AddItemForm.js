import React from 'react';
import { connect } from 'react-redux';
import { loadActions } from '../actions';
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
        // console.log('name, value', name, value);
        // console.log(event.target);
        const { load } = this.state;
        this.setState({
            load: {
                ...load,
                [name]: value
            }
        });
       
    }

    checkDate = (data) =>  data.match(/(\d{4})-(\d{2})-(\d{2})/) ? true : false 
    checkTime = (data) =>  data.match(/(\d{2}):(\d{2}) (\S\S)/) ? true : false 

    handleSubmit = (event) => {
        event.preventDefault();
        const { load } = this.state
        const { user } = this.props
        const dataCorrect = this.checkDate(load.datePickUp) && 
                            this.checkTime(load.timePickUp) &&
                            load.origin.trim() && load.origin.trim() &&
                            !isNaN(load.weight)  && !isNaN(load.price) &&
                            load.idStatus && load.loadType ;
        // console.log('submit ver:',dataCorrect)
        if (dataCorrect) {
            this.props.dispatch(loadActions.addLoad(load, user._id))
            this.props.updateList();
        }
    }

    handleCancel = (event) =>{
        event.preventDefault();
        this.props.cancelForm();
    }



    render() {
        const { statuses, loadTypes } = this.props;
        const { load } = this.state;
        // console.log('weight:', !isNaN(load.weight) );

        return (
            <div >
                
                <h2>Add new load</h2> 

                <form className="was-validated">

                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="datePickUp">Pick up date</label>
                                <input type="text" className={'form-control' + ( !this.checkDate(load.datePickUp) || !load.datePickUp ? ' is-invalid' : '')} name="datePickUp" value={load.datePickUp} onChange={this.handleChange}/>
                                { (!this.checkDate(load.datePickUp) || load.datePickUp) &&
                                     <div className="invalid-feedback">Date should be YYYY-MM-DD</div> }
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="timePickUp">Pick up time</label>
                                <input type="text" className={'form-control' + ( !this.checkTime(load.timePickUp) || !load.timePickUp ? ' is-invalid' : '')} name="timePickUp" value={this.state.load.timePickUp} onChange={this.handleChange} />
                                { (!this.checkTime(load.timePickUp) || load.time) &&
                                     <div className="invalid-feedback">Time should be HH:MM AM|PM</div> }
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="origin">Origin</label>
                                <input type="text" className={'form-control' + ( !load.origin.trim() ? ' is-invalid' : '')} name="origin" value={load.origin} onChange={this.handleChange}/>
                                { !load.origin.trim() && <div className="invalid-feedback">Required field</div> }
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="destination">Destination</label>
                                <input type="text" className={'form-control' + ( !load.destination.trim()  ? ' is-invalid' : '')} name="destination" value={load.destination} onChange={this.handleChange}/>
                                { !load.destination.trim() &&  <div className="invalid-feedback">Required field</div> }
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="weight">Weight</label>
                                <input type="text" className={'form-control' + ( isNaN(load.weight) || !load.weight ? ' is-invalid' : '')} name="weight" value={load.weight} onChange={this.handleChange}/>
                                { isNaN(load.weight) &&  <div className="invalid-feedback">Should be a number</div>  }
                                { !load.weight && <div className="invalid-feedback">Required field</div> }
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="price">Price</label>
                                <input type="text" className={'form-control' + ( isNaN(load.price) || !load.price ? ' is-invalid' : '')} name="price" value={load.price} onChange={this.handleChange}/>
                                { isNaN(load.price) && <div className="invalid-feedback">Number is required</div> }
                                { !load.price &&  <div className="invalid-feedback">Required field</div> }
                            </div>
                        </div>
                    </div>

                    {/* lists */}
                    <div className="row">
                        <div className="col">
                            <select className="custom-select" name="idStatus" value={load.idStatus} onChange={this.handleChange} required>
                                <option value="">Choose status...</option>
                                {statuses && statuses.data.map( (status, key) => {
                                    return  <option key={key} value={status._id}>{status.statusName}</option>
                                })}
                            </select>
                            { !load.idStatus && <div className="invalid-feedback">Status is required</div> }
                        </div>
                        <div className="col">
                            <select className="custom-select" name="loadType" value={load.loadType} onChange={this.handleChange} required>
                            <option value="">Choose load type...</option>
                                {loadTypes && loadTypes.data.map( (loadType, key) => {
                                    return  <option key={key} value={loadType._id}>{loadType.typeName}</option>
                                })}
                            </select>
                            { !load.loadType && <div className="invalid-feedback">Load type is required</div> }
                        </div>
                    </div>
                     {/* end lists */}
                     <br />
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="comment">Comment</label>
                                <input type="text" className='form-control' name="comment" value={this.state.load.comment} onChange={this.handleChange}/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <button className="btn btn-primary" onClick={this.handleSubmit}>Save</button> {' '}
                                <button className="btn btn-secondary" onClick={this.handleCancel}>Cancel</button>
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
