import React, { Component, PropTypes } from 'react';
import Counter from './Counter';
import Home from './Home';
import Rooms from './Rooms';
import Room from './Room';
import PinList from './PinList';
import MyPage from './MyPage';
import NotFound from './NotFound';
import Nav from './Nav';
import Profile from './Profile';
import {
  Route,
  Link
} from 'react-router-dom'
import { Grid } from 'semantic-ui-react'


const propTypes = {

};
const defaultProps = {

};
class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Grid centered doubling columns={2}>
                    <Grid.Column>
                        <Nav/>

                        <Route exact path="/chopchop/" component={Home}/>
                        <Route path="/chopchop/Rooms" component={Rooms}/>
                        <Route path="/chopchop/PinList" component={PinList}/>
                        <Route path="/chopchop/MyPage" component={MyPage}/>
                        <Route path="/chopchop/Rooms/:roomId" component={Room}/>
                        <Route path="/chopchop/Profile/:profileId" component={Profile}/>

                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main;
