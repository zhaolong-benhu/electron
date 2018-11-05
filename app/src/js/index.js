'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

// var remote = require('electron-prebuilt').remote;

import { Router, Route, Link, browserHistory,hashHistory,IndexRoute} from 'react-router';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


require('../css/index.less')

import TitleBar from './component/title-bar'
import ToolContainer from './component/tool-container'
import CheckTransfer from './component/tool/check-transfer'
import Calculator from './component/tool/calculator'
import Lottery from './component/tool/lottery'
import CallExpress from './component/tool/call-express'

import FalemaleIndex from './component/female-index'
import SaleIndex from './component/sale-index'


class App extends React.Component{

    static defaultProps = {
        links:[{name:'工具大全',url:'/tool',key:"tool"},
        {name:'女装',url:'/female',key:"female"},
        {name:'折扣网址',url:'/sale',key:"sale"}]
    };
    componentDidMount(){
        console.log(this.props.location.pathname);
        window.location.href="#/tool";
    }

    render(){
        let url = this.props.location.pathname;

        return(
            <div className="container">
                <TitleBar />
                {<div className="content">
                    <ReactCSSTransitionGroup className="top-title" transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                        {(()=>{
                            if(url.indexOf('/tool') == 0 || url == "/"){
                                return <div className="tool title" key="tool">
                                    <a className="icon" href="#/tool"></a>
                                </div >
                            }
                           else if (url.indexOf('/female') == 0 || url == "/"){
                                return <div className="female title"  key="femal">
                                    <a className="icon" href="#/female"></a>
                                </div>
                            }
                           else if(url.indexOf('/sale') == 0 || url == "/"){
                                return <div className="sale title"  key="sale">
                                    <a className="icon" href="#/sale"></a>
                                </div>
                            }
                        })()}
                    </ReactCSSTransitionGroup>
                    <div className="center-content">
                        <ReactCSSTransitionGroup  component="div" className="left-navigations" transitionName="nav" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                            {this.props.links.map(function(link,index){
                                if(url.indexOf(link.url) !=0 )
                                    return <Link className={link.key} to={link.url} activeClassName="active" key={index}></Link>
                            })}
                        </ReactCSSTransitionGroup>


                       <ReactCSSTransitionGroup
                                component="div"
                                transitionName="router"
                                className="right-contents"
                                transitionEnterTimeout={500}
                                transitionLeaveTimeout={500}
                                >
                                {React.cloneElement(this.props.children, {
                                    key: this.props.location.pathname
                                })}
                            </ReactCSSTransitionGroup>

                    </div>
                </div>}
            </div>
        )
    }
}


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={ToolContainer} />
            <Route path="tool" component={ToolContainer} >
                <Route path="check-transfer" component={CheckTransfer} />
                <Route path="calculator" component={Calculator} />
                <Route path="lottery" component={Lottery} />
                <Route path="call-express" component={CallExpress} />
            </Route>
            <Route path="female" component={FalemaleIndex} >
            </Route>
            <Route path="sale" component={SaleIndex} >
            </Route>
        </Route>

    </Router>
    ,document.getElementById('app')
)
