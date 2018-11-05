import React from 'react'

import { Link} from 'react-router';

require('../../css/component/female-index.less')

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


export default class FemaleIndex extends React.Component{

    state ={
        banner:[
            {image:"src/images/test/banner.png",url:"http://www.taobao.com"},
            {image:"src/images/test/banner2.png",url:"http://www.taobao.com"},
            {image:"src/images/test/banner3.png",url:"http://www.taobao.com"},
            {image:"src/images/test/banner4.png",url:"http://www.taobao.com"},
            {image:"src/images/test/banner5.png",url:"http://www.taobao.com"}
        ],
        current_banner:0
    }

    _handleChangeCarousel(pos){
        let number =  this.state.banner.length;
        if(number == 0)
            return;
        switch(pos){
            case 'next':
                this.setState({current_banner:(this.state.current_banner + 1)%number})
            break;
            case 'prev':
                this.setState({current_banner:((this.state.current_banner - 1 + number)%number)})
            break;
        }
    }
    componentDidMount(){
         this.timer = setInterval(
            () => { this._handleChangeCarousel('next') },
            5000
        );
    }

    componentWillUnmount() {
        this.timer && clearInterval(this.timer);
    }

    render(){
        return(
            <div className="female-container">

                <div style={{width:"1052px"}}>

                    <div className="banner">
                            <ReactCSSTransitionGroup
                                className="carousel" component="div"
                                transitionName="carousel" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
                                    {this.state.banner.map((item,index)=>{
                                        if(this.state.current_banner == index){
                                            return <div key={index} className="item" style={{backgroundImage:"url(" + item.image +")"}}> </div>
                                        }
                                    })}
                            </ReactCSSTransitionGroup>
                        <div className="right-banner">
                            <div className="item"></div>
                            <div className="item2"></div>
                            <div className="item3"></div>
                        </div>
                    </div>

                    <div className="recommend-shop">
                        <div className="title"></div>
                        <div className="list">
                            <div className="item"></div>
                            <div className="item shop2"></div>
                            <div className="item shop3"></div>
                            <div className="item shop4"></div>
                            <div className="item shop5"></div>
                            <div className="item shop10"></div>
                            <div className="item shop6"></div>
                            <div className="item shop7"></div>
                            <div className="item shop8"></div>
                            <div className="item shop9"></div>


                        </div>
                    </div>

                    <div className="female-list">
                        <div className="list">
                            <div className="item icon">

                            </div>
                            {(()=>{
                                var items = [];
                                for(var i=0;i<11;i++){
                                items.push(<div className="item card">
                                        <div className="cover"></div>
                                        <div className="title">小猴姐姐爱美衣</div>
                                        <div className="bottom">
                                            <span className="price">￥ 79.9</span>
                                            <div className="mall">天猫</div>
                                        </div>
                                    </div>)
                                }
                                return items
                            })()}

                        </div>
                       <div className="more">
                            查看更多
                       </div>


                    </div>

                    <div className="guess-prefer">
                        <div className="title"></div>
                        <div className="list-content">
                            <div className="left"></div>
                            <div className="list">
                                <div className="item">
                                    <div className="cover"></div>
                                    <div className="text">2016新款女装外套</div>
                                </div>
                                 <div className="item">
                                    <div className="cover"></div>
                                    <div className="text">2016新款女装外套</div>
                                </div>
                                 <div className="item">
                                    <div className="cover"></div>
                                    <div className="text">2016新款女装外套</div>
                                </div>
                                 <div className="item">
                                    <div className="cover"></div>
                                    <div className="text">2016新款女装外套</div>
                                </div>
                                 <div className="item">
                                    <div className="cover"></div>
                                    <div className="text">2016新款女装外套</div>
                                </div>
                            </div>
                            <div className="right"></div>
                        </div>
                    </div>

                    <div className="female-list">
                        <div className="list">
                            <div className="item male-icon">

                            </div>
                            {(()=>{
                                var items = [];
                                for(var i=0;i<11;i++){
                                items.push(<div className="item card" key={i}>
                                        <div className="cover"></div>
                                        <div className="title">小猴姐姐爱美衣</div>
                                        <div className="bottom">
                                            <span className="price">￥ 79.9</span>
                                            <div className="mall">天猫</div>
                                        </div>
                                    </div>)
                                }
                                return items
                            })()}

                        </div>
                       <div className="more">
                            查看更多
                       </div>


                    </div>


                    <div className="rec-shop">
                        <div className="title"></div>
                        <div className="list">
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>

                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
