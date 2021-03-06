export const BALANCE_ACCOUNT ='BALANCE_ACCOUNT';//余额
export const JADE_INTEGRAL_ACCOUNT = 'JADE_INTEGRAL_ACCOUNT';//玉积分
export const CONSUMER_COUPON_ACCOUNT = 'CONSUMER_COUPON_ACCOUNT';//消费券
export const SPECIAL_INTEGRAL_ACCOUNT = 'SPECIAL_INTEGRAL_ACCOUNT';//专用积分
export const PLATINUM_INTEGRAL_ACCOUNT = 'PLATINUM_INTEGRAL_ACCOUNT';//白金积分
export const GENERAL_INTEGRAL_ACCOUNT = 'GENERAL_INTEGRAL_ACCOUNT';//通用积分
export const K_INTEGRAL_ACCOUNT = 'K_INTEGRAL_ACCOUNT';//K积分
export const SETTLEMENT_CARD = 'SETTLEMENT_CARD';//结算卡
export const BLUE_INTEGRAL_ACCOUNT = 'BLUE_INTEGRAL_ACCOUNT';//蓝积分
export const ENTREPRENEURSHIP_COUPON_ACCOUNT = 'ENTREPRENEURSHIP_COUPON_ACCOUNT';//创业券
export const COMPANY_BALANCE_ACCOUNT = 'COMPANY_BALANCE_ACCOUNT';//商家余额
export const CONSUMER_INTEGRAL_ACCOUNT = 'CONSUMER_INTEGRAL_ACCOUNT';//消费积分
export const MY_RECOMMENDATION = 'MY_RECOMMENDATION';//我的推荐

export const NAME_BALANCE_ACCOUNT = '消费余额';
export const NAME_JADE_INTEGRAL_ACCOUNT = '玉积分';
export const NAME_CONSUMER_COUPON_ACCOUNT = '消费券';
export const NAME_BLUE_INTEGRAL_ACCOUNT = '蓝积分';
export const NAME_GENERAL_INTEGRAL_ACCOUNT = '通用积分';
export const NAME_SPECIAL_INTEGRAL_ACCOUNT = '专用积分';
export const NAME_PLATINUM_INTEGRAL_ACCOUNT = '白金积分';
export const NAME_INTEGRAL_ACCOUNT = 'K积分';
export const NAME_ENTREPRENEURSHIP_COUPON_ACCOUNT = '创业券';
export const NAME_COMPANY_BALANCE_ACCOUNT = '商家余额';
export const NAME_CONSUMER_INTEGRAL_ACCOUNT = '消费积分';

export const PAYMENTS_CONFIG = {
    [BALANCE_ACCOUNT]: {name: NAME_BALANCE_ACCOUNT, ratio: 1},
    [JADE_INTEGRAL_ACCOUNT]: {name: NAME_JADE_INTEGRAL_ACCOUNT, ratio: 1},
    [CONSUMER_COUPON_ACCOUNT]: {name: NAME_CONSUMER_COUPON_ACCOUNT, ratio: 1},
    [BLUE_INTEGRAL_ACCOUNT]: {name: NAME_BLUE_INTEGRAL_ACCOUNT, ratio: 1},
    [GENERAL_INTEGRAL_ACCOUNT]: {name: NAME_GENERAL_INTEGRAL_ACCOUNT, ratio: 1},
    [SPECIAL_INTEGRAL_ACCOUNT]: {name: NAME_SPECIAL_INTEGRAL_ACCOUNT, ratio: 1},
    [PLATINUM_INTEGRAL_ACCOUNT]: {name: NAME_PLATINUM_INTEGRAL_ACCOUNT, ratio: 1},
    [K_INTEGRAL_ACCOUNT]: {name: NAME_INTEGRAL_ACCOUNT, ratio: 1},
    [ENTREPRENEURSHIP_COUPON_ACCOUNT]: {name: NAME_ENTREPRENEURSHIP_COUPON_ACCOUNT, ratio: 1},
    [COMPANY_BALANCE_ACCOUNT]: {name: NAME_COMPANY_BALANCE_ACCOUNT, ratio: 1},
    [CONSUMER_INTEGRAL_ACCOUNT]: {name: NAME_CONSUMER_INTEGRAL_ACCOUNT, ratio: 1},

};

export function getAssetTypeName(type) {
    switch (type){
        case BALANCE_ACCOUNT:return NAME_BALANCE_ACCOUNT;
        case JADE_INTEGRAL_ACCOUNT:return NAME_JADE_INTEGRAL_ACCOUNT;
        case CONSUMER_COUPON_ACCOUNT:return NAME_CONSUMER_COUPON_ACCOUNT;
        case BLUE_INTEGRAL_ACCOUNT:return NAME_BLUE_INTEGRAL_ACCOUNT;
        case GENERAL_INTEGRAL_ACCOUNT:return NAME_GENERAL_INTEGRAL_ACCOUNT;
        case SPECIAL_INTEGRAL_ACCOUNT:return NAME_SPECIAL_INTEGRAL_ACCOUNT;
        case PLATINUM_INTEGRAL_ACCOUNT:return NAME_PLATINUM_INTEGRAL_ACCOUNT;
        case K_INTEGRAL_ACCOUNT:return NAME_INTEGRAL_ACCOUNT;
        case ENTREPRENEURSHIP_COUPON_ACCOUNT:return NAME_ENTREPRENEURSHIP_COUPON_ACCOUNT;
        case COMPANY_BALANCE_ACCOUNT:return NAME_COMPANY_BALANCE_ACCOUNT;
        case CONSUMER_INTEGRAL_ACCOUNT:return NAME_CONSUMER_INTEGRAL_ACCOUNT;

    }
}

export const PERSONAL_WITHDRAWAL = 'PERSONAL_WITHDRAWAL'; //个人余额提现记录
export const BUSINESS_WITHDRAWAL = 'BUSINESS_WITHDRAWAL'; //商家余额提现记录