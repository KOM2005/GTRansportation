import React from 'react';
import { connect } from 'react-redux';
import { loadActions } from '../actions';
import Load from './Load';

class LoadList extends React.Component{

    // constructor(props){
    //     super(props);
    //     this.state = {refresh: this.props.update} 
    // }

    componentWillMount(){
        this.props.dispatch(loadActions.getLoads());
        this.props.dispatch(loadActions.getStatuses());
        this.props.dispatch(loadActions.getLoadTypes());
    }
    
    render() {
        const { loads } = this.props;

        if (!loads.isFetching) {
            return (
                <div>
                    <Load loads={loads} />
                 </div>
             )
        } else {
            return (
                <div>
                    No any loads by far ...
                 </div>
             )
        }


    }
}



function mapStateToProps(state) {
    const { loads } = state;
    return {
        loads
    };
}

export default connect(mapStateToProps)(LoadList);

