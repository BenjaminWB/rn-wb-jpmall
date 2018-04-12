import React, {Component} from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet, TouchableOpacity,
} from 'react-native';
import {
    mainBackgroundColor, placeholderTextColor,
    titleTextColor,
} from '../../constraint/Colors';
import {ic_un_selected, ic_selected, ic_delete, ic_store} from '../../constraint/Image'
import {connect} from "react-redux";
import {allSelectMerchantProduct} from "../../reducers/ShoppingCartReducer";
import CheckBox from "../../widgets/checkbox/CheckBox";
import {APP_NAME} from "../../constraint/Strings";
import XImage from "../../widgets/XImage";

class ShoppingCartMerchantHeader extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        let {allCheck,merchantName} = this.props.data;
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.storeLayout}
                onPress={() => {
                    this.props.dispatch(allSelectMerchantProduct(this.props.data.merchantId,!allCheck));
                }}>
                <CheckBox isCheck={allCheck}/>
                <XImage source={ic_store} style={{height:18,width:18,marginHorizontal:5}}/>
                <Text style={styles.storeName}>{merchantName}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
    },

    storeLayout:{
        padding:9,
        flexDirection:'row',
        backgroundColor:'#ffffff',
        alignItems:'center',
        borderBottomColor:placeholderTextColor,
        borderBottomWidth:0.5
    },
    storeName: {
        color: titleTextColor,
        fontSize: 15,
    },


    countContainer: {
        height: 31,
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor: mainBackgroundColor,
        marginRight: 10,
        marginLeft: 10,
        justifyContent: 'center',
    },
    selectCount: {
        fontSize: 16,
        color: titleTextColor,

    },
});

selector = (state) => {
    return {
        token: state.loginStore.token,
    }
};
export default connect(selector)(ShoppingCartMerchantHeader);