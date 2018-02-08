import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Route, Link, Match } from 'react-router-dom';
//import { Match } from 'react-router';
import  WodsPage  from '../components/WodsPage';
import selectUserDetail from '../actions/select-user-detail';
import {bindActionCreators} from 'redux';

const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match}) => (
        <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
    )} />
);

class UserDetail extends Component {

    render() {
        if (!this.props.user){
            return (<h2>Select a user...</h2>);

        }
        else{
            if(!this.props.userdetail){
            return (
                <div>
                    <h2>{this.props.user.first} {this.props.user.last}</h2>
                        <h2>Age: {this.props.user.age}</h2>
                        <h3>Description: {this.props.user.description}</h3>
                        <div>
                        <p>
                        <ActiveLink activeOnlyWhenExact to="WodsPage" label="Click for WoD" />
                        </p>

                        </div> 
                        
                        <Route path="/WodsPage" component={WodsPage}/>
                </div>
            );
            }
        }
    }
}

function mapStateToProps(state){
    return{
        user: state.activeUser
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUserDetail: selectUserDetail}, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(UserDetail);