import React from 'react';
import { connect } from 'react-redux';
import   WodsList  from '../containers/Wods-list';
import  fetchWods  from '../actions/fetchWods';
import { PropType } from 'prop-types';

class WodsPage extends React.Component {
   
    render() {
       
        return (
        <div>
        <h1>Wods List</h1>
        <WodsList wods={this.props.wods} />
      

    </div>
        );
    }
}

WodsPage.propTypes = {
   wods: React.PropTypes.array.isRequired
}


function mapStateToProps(state){
    return{
        wods: state.wods
    }

}


export default connect(mapStateToProps)(WodsPage);