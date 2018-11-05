import React from 'react'

import { Link} from 'react-router';

require('../../css/component/sale-index.less')

const  BrowserWindow = window.require('electron').remote.BrowserWindow;

 const ChildProcess = window.require('child_process');
 const path = window.require('path');

export default class FemaleIndex extends React.Component{

    componentDidMount()
    {

   }


   state={
       first:true,
     list:[
         {name:"淘宝",icon:"taobao.png",url:"http://www.taobao.com"},
         {name:"京东",icon:"jd.png",url:"http://www.jd.com"},
         {name:"天猫",icon:"tmall.png",url:"http://www.tmall.com"},
         {name:"苏宁",icon:"suning.png",url:"http://www.suning.com"},

         {name:"1号店",icon:"1.png",url:"http://www.yhd.com"},
         {name:"唯品会",icon:"vip.png",url:"http://www.vip.com"},
         {name:"聚美优品",icon:"jmyp.png",url:"http://www.jumei.com"},
         {name:"亚马逊",icon:"amazon.png",url:"http://www.amazon.cn"},

         {name:"蘑菇街",icon:"mgj.png",url:"http://www.mogujie.com"},
         {name:"蜜芽",icon:"my.png",url:"http://www.mia.com"},
         {name:"国美电器",icon:"gmdq.png",url:"http://www.gome.com.cn"},
         {name:"当当网",icon:"ddw.png",url:"http://www.dangdang.com"},

         {name:"卷皮",icon:"jp.png",url:"http://www.juanpi.com"},
         {name:"折800",icon:"z800.png",url:"http://www.zhe800.com"},
         {name:"全球购",icon:"global.png",url:"http://g.taobao.com"},
         {name:"易迅网",icon:"yx.png",url:"http://www.yixun.com"}
         ]
   };

    _handleNewWindow(url){

        var win = new BrowserWindow({
            width: 1200,
            height: 800,
            backgroundColor: '#FFFFFF',
            autoHideMenuBar: true,

            webPreferences:{
                webSecurity:false,
                allowDisplayingInsecureContent:true,
                allowRunningInsecureContent:true,
                nodeIntegration:false
            } ,
            show: true });

        win.loadURL(url);


    }
    render(){
        return(
            <div className="sale-container">

                <div className="list">

                {this.state.list.map((item,index)=>{
                    return(
                        <a className="item" key={index}
                        href="javascript:void(0)"
                        onClick={this._handleNewWindow.bind(this,item.url)}
                        style={{backgroundImage:"url(src/images/sale/" + item.icon +")"}}></a>
                    )
                })}

                </div>

            </div>
        )
    }
}
