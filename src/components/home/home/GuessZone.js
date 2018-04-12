import React, {Component} from 'react';
import {Dimensions, FlatList, Text, TouchableOpacity, View} from "react-native";
import {commonAction} from "../../../common/CommonAction";
import XImage from "../../../widgets/XImage";
import Swiper from 'react-native-swiper';
import {getMiddle} from "../../../common/PhotoUtil";
import {mainColor, placeholderTextColor, priceColor, titleTextColor} from "../../../constraint/Colors";
import {formatMoney} from "../../../common/StringUtil";
import {gotoDetail} from "../../../common/ProductUtil";
import {connect} from "react-redux";
import {ic_buy_more} from "../../../constraint/Image";
import {CommonStyles} from "../../../styles/CommonStyles";
const {width, height} = Dimensions.get('window');
class GuessZone extends Component{
    render(){
        let data=this.props.data;
        return(
            <View style={{backgroundColor:'#fff'}}>
                <XImage uri={'http://p0xkrqo35.bkt.clouddn.com/1523498172343.png'} style={{width: width, height: width * 0.12}}/>
                <View >
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={data.contents}
                        numColumns={2}
                        ItemSeparatorComponent={() => <View style={CommonStyles.vline}/>}
                        keyExtractor={(item, index) => index}
                        renderItem={({item,index}) =>
                            <TouchableOpacity
                                key={index}
                                activeOpacity={0.7}//点击时的透明度
                                style={{padding: 10, justifyContent:'center',width: width / 2,borderRightWidth:0.5,borderRightColor:placeholderTextColor}}
                                onPress={() => commonAction(this.props.dispatch,{item,token:this.props.token})}>
                                <XImage uri={getMiddle(item.imgUrl)}
                                        style={{marginBottom: 10, width: width / 2- 20,height:width / 2- 20}}/>
                                <Text numberOfLines={1} style={{fontSize:12.5,color:titleTextColor}}>{item.text}</Text>
                                <View style={{flexDirection:'row'}}>
                                    <Text numberOfLines={1}
                                          style={{fontSize:12,color:priceColor,paddingTop:3,flex:1}}>{formatMoney(item.price)}</Text>
                                </View>
                            </TouchableOpacity>
                        }/>
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

export default connect(selector)(GuessZone);