import React, {Component} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Route, Link} from 'react-router-dom';
import WodsPage from '../components/WodsPage';
import selectUserDetail from '../actions/select-user-detail';
import {bindActionCreators} from 'redux';

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
                        <Link to="WodsPage">Click for WoD</Link>
                        </p>
                        
                        <Route pattern="/WodsPage" component={WodsPage}/>

                        </div>
                </div>
            );
            }
        }
    }
}

function MatchDispatchToProps(dispatch){
    return bindActionCreators({selectUserDetail: selectUserDetail}, dispatch)
}

function mapStateToProps(state){
    return{
        user: state.activeUser
    };
}

export default connect(mapStateToProps,MatchDispatchToProps)(UserDetail);