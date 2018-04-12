import React, {Component} from 'react';
import {Dimensions, TouchableOpacity, View} from "react-native";
import {commonAction} from "../../../common/CommonAction";
import XImage from "../../../widgets/XImage";
import Swiper from 'react-native-swiper';
import {getMiddle} from "../../../common/PhotoUtil";
import {contentTextColor, mainColor, placeholderTextColor} from "../../../constraint/Colors";
import {formatMoney} from "../../../common/StringUtil";
import {gotoDetail} from "../../../common/ProductUtil";
import {connect} from "react-redux";
const {width, height} = Dimensions.get('window');
class RushPurchase extends Component{
    render(){
        let data=this.props.data;
        return(
            <View style={{backgroundColor:'#fff'}}>
                {/*{*/}
                    {/*data.imgs.length===0?null:*/}
                    {/*<Swiper*/}
                        {/*removeClippedSubviews={false}*/}
                        {/*autoplayTimeout={3}*/}
                        {/*style={{height:  width * 0.26,borderTopColor: placeholderTextColor, borderTopWidth: 0.5}}*/}
                        {/*loop={true}*/}
                        {/*autoplay={true}*/}
                        {/*showsPagination={false}*/}
                    {/*>*/}
                        {/*{*/}
                            {/*data.imgs.map((item, i) => {*/}
                                    {/*return <TouchableOpacity*/}
                                        {/*key={i}*/}
                                        {/*activeOpacity={1}*/}
                                        {/*onPress={() => commonAction(this.props.dispatch,{item,token:this.props.token})}>*/}
                                        {/*<XImage uri={item.imgUrl} style={{resizeMode: 'stretch',width: width, height: width * 0.26}}/>*/}
                                    {/*</TouchableOpacity>*/}
                                {/*}*/}
                            {/*)*/}
                        {/*}*/}
                    {/*</Swiper>*/}
                {/*}*/}
                <XImage uri={'http://p0xkrqo35.bkt.clouddn.com/1523447895652.png'} style={{width: width, height: width * 0.12}}/>
                {/*<View style={{height: 0.5,backgroundColor:placeholderTextColor,width:width}}/>*/}
                <View style={{flexDirection:'row', paddingVertical:10}}>
                    <TouchableOpacity
                        disabled={!data.contents[0]}
                        style={{height: width * 0.4 *1.33,width: width * 0.4,marginHorizontal:10}}
                        activeOpacity={0.7}
                        onPress={() => commonAction(this.props.dispatch,{item:data.contents[0],token:this.props.token})}>
                        <XImage uri={'http://p0xkrqo35.bkt.clouddn.com/1523448368348.png'} style={{flex:1,resizeMode: 'stretch'}}/>
                    </TouchableOpacity>
                    {/*<View style={{height: width * 0.4 *1.33,backgroundColor:placeholderTextColor,width:0.5}}/>*/}

                    <View style={{flex:1,height: width * 0.4 *1.33,marginRight:10}}>
                        <TouchableOpacity
                            disabled={!data.contents[1]}
                            style={{flex:1,marginBottom:10}}
                            activeOpacity={0.7}
                            onPress={() => commonAction(this.props.dispatch,{item:data.contents[1],token:this.props.token})}>
                            <XImage uri={'http://p0xkrqo35.bkt.clouddn.com/1523448701195.png'} style={{flex:1,resizeMode: 'stretch'}}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            disabled={!data.contents[2]}
                            style={{flex:1}}
                            activeOpacity={0.7}
                            onPress={() => commonAction(this.props.dispatch,{item:data.contents[2],token:this.props.token})}>
                            <XImage uri={'http://p0xkrqo35.bkt.clouddn.com/1523448724074.png'} style={{flex:1,resizeMode: 'stretch'}}/>
                        </TouchableOpacity>
                        {/*<View style={{height:0.5,backgroundColor:placeholderTextColor,width:width * 0.6}}/>
                        <View style={{flexDirection:'row',height:width * 0.6*0.5}}>
                            <TouchableOpacity
                                disabled={!data.contents[2]}
                                style={{flex: 1}}
                                activeOpacity={0.7}
                                onPress={() => commonAction(this.props.dispatch,{item:data.contents[2],token:this.props.token})}>
                                <XImage uri={data.contents[2]?data.contents[2].imgUrl:''} style={{flex: 1}}/>
                            </TouchableOpacity>
                            <View style={{width:0.5,backgroundColor:placeholderTextColor,height:width * 0.6*0.5}}/>

                            <TouchableOpacity
                                disabled={!data.contents[3]}
                                style={{flex: 1}}
                                activeOpacity={0.7}
                                onPress={() => commonAction(this.props.dispatch,{item:data.contents[3],token:this.props.token})}>
                                <XImage uri={data.contents[3]?data.contents[3].imgUrl:''} style={{flex: 1}}/>
                            </TouchableOpacity>
                        </View>*/}
                    </View>
                </View>
            </View>
        )
    }
}
selector = (state) => {
    return {
        token: state.loginStore.token,
    }
};
export default connect(selector)(RushPurchase);