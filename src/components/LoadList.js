import React from 'react';
import { connect } from 'react-redux';
import { loadActions } from '../actions';
import Load from './Load';
import LoadDispatch from './LoadDispatch';

class LoadList extends React.Component{

    componentWillMount(){
        const {user, dispatch} = this.props
        console.log(user._id)
        user.role === 1 ?
            dispatch(loadActions.getLoadsById(user._id)) :
            dispatch(loadActions.getLoads())
        this.props.dispatch(loadActions.getStatuses());
        this.props.dispatch(loadActions.getLoadTypes());
    }
    
    render() {
        const { loads, user } = this.props;
        console.log('loadlist:',loads)

        if (!loads.isFetching) {
            return (
                <div>
                {user.role === 1 ?
                        <Load loads={loads} /> : <LoadDispatch loads={loads} />
                }
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
    const { user } = state.authentication;
    return {
        loads,
        user
    };
}

export default connect(mapStateToProps)(LoadList);

