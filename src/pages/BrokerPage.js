import React from 'react';
import Header from '../components/Header';
import AddItem from '../components/AddItem';
import LoadList from '../components/LoadList';


class BrokerPage extends React.Component {



    render() {
        return (
            <div>
                <Header />
                <LoadList />
                <AddItem />
            </div>
        );
    }
}

export default BrokerPage;
