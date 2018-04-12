import React, {Component} from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    Dimensions, TouchableOpacity, ImageBackground
} from 'react-native';
import {
    ic_circle_logo, ic_authentication, ic_p_chuangke, ic_p_store, ic_me_bg, ic_setting, ic_me_vip
} from "../../../../../constraint/Image";
import {mainColor} from "../../../../../constraint/Colors";
import {connect} from 'react-redux';
import {isIPhone5, isTrue} from "../../../../../common/AppUtil";
import {goto} from "../../../../../reducers/RouterReducer";
import {ic_default_avatar} from "../../../../../../resources/index";
import TitleBar from "../../../../../widgets/TitleBar";
import XImage from "../../../../../widgets/XImage";

class HeadComponent extends Component {
    constructor(props) {
        super(props);
    }

    _merchantTypeOnPress() {
        if (this.props.userInfo.merchantType === 'MERCHANT_MARKER' || this.props.userInfo.merchantType === 'MERCHANT_FLAGSHIP') {
            this.props.dispatch(goto('EntrepreneurshipFound'));
        }
    }

    render() {
        return (
            <ImageBackground
                source={ic_me_bg}
                resizeMode={'cover'}
                style={styles.header}>
                <TitleBar
                    hideLeft={true}
                    title={' '}
                    customBarStyle={{backgroundColor:'#00000000'}}
                    hideRight={false}
                    customRightView={() => (<XImage source={ic_setting} style={styles.setting}/>)}
                    onRightViewClick={() => {
                        this.props.dispatch(goto('Setting'));
                    }}
                />
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={styles.avatarLayout}>
                        <Image source={ic_default_avatar} style={styles.avatar}/>
                    </View>
                    <View>
                        <View style={{flexDirection: 'row', alignItems: 'center',marginBottom:5}}>
                            <Text style={styles.nickName} numberOfLines={1}>{this.props.userInfo.name}</Text>
                            <XImage source={ic_me_vip} style={styles.setting}/>
                        </View>
                        <Text style={[styles.nickName,{fontSize:15}]} numberOfLines={1}>会员ID：{this.props.userInfo.memberId}</Text>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        // position: 'relative',
        // alignItems:'center',
        justifyContent:'center',
        // marginTop:-50,
        // marginBottom:10,
    },
    avatarLayout: {
        backgroundColor:'white',
        borderColor: mainColor,
        borderWidth: 3,
        borderRadius: 82/2,
        width: 82,
        height: 82,
        marginVertical:10,
        marginRight:5
    },
    avatar: {
        width: 76,
        height: 76,
        borderRadius: 38,
    },
    icon: {
        width: isIPhone5() ? 50 : 70,
        height: isIPhone5() ? 50 : 70,
        alignSelf: 'center',
    },
    nickName: {
        // marginTop:10,
        color: '#ffffff',
        fontSize: 18,
        backgroundColor:'#00000000',
        marginRight:2
    },
    memberGrade: {
        flex: 1,
        color: 'black',
        fontSize: 13,
        marginTop: 2,
    },
    setting: {
        width: 20,
        height: 20,
    },
});

selector = (state) => {
    return {
        otherConfig: state.loginStore.otherConfig
    }
};

export default connect(selector)(HeadComponent)