import merge from 'lodash/merge';
import { MoonPayExchangeActionTypes } from '../../../types';

const initialState = {
    /**
     * Amount for purchase
     */
    amount: '',
    /**
     * Active denomination on MoonPay purchase screen
     */
    denomination: 'i',
    /**
     * MoonPay supported currencies
     */
    currencies: [],
    /**
     * MoonPay exchange rates for IOTA - { EUR, USD, GBP }
     */
    exchangeRates: {},
    /**
     * MoonPay currency quote
     */
    currencyQuote: {},
    /**
     * Selected account for transfer
     */
    accountName: '',
    /**
     * Stores customer information e.g., email, DOB
     */
    customer: {},
    /**
     * Determines if a network call is in progress for email authentication
     */
    isAuthenticatingEmail: false,
    /**
     * Determines if there was an error during email authentication request
     */
    hasErrorAuthenticatingEmail: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case MoonPayExchangeActionTypes.SET_SUPPORTED_CURRENCIES:
            return {
                ...state,
                currencies: action.payload,
            };
        case MoonPayExchangeActionTypes.SET_DENOMINATION:
            return {
                ...state,
                denomination: action.payload,
            };
        case MoonPayExchangeActionTypes.SET_AMOUNT:
            return {
                ...state,
                amount: action.payload,
            };
        case MoonPayExchangeActionTypes.SET_IOTA_EXCHANGE_RATES:
            return {
                ...state,
                exchangeRates: action.payload,
            };
        case MoonPayExchangeActionTypes.SET_CURRENCY_QUOTE:
            return {
                ...state,
                currencyQuote: action.payload,
            };
        case MoonPayExchangeActionTypes.SET_ACCOUNT_NAME:
            return {
                ...state,
                accountName: action.payload,
            };
        case MoonPayExchangeActionTypes.UPDATE_CUSTOMER_INFO:
            return {
                ...state,
                customer: merge({}, state.customer, action.payload),
            };
        case MoonPayExchangeActionTypes.AUTHENTICATE_EMAIL_REQUEST:
            return {
                ...state,
                isAuthenticatingEmail: true,
                hasErrorAuthenticatingEmail: false,
            };
        case MoonPayExchangeActionTypes.AUTHENTICATE_EMAIL_SUCCESS:
            return {
                ...state,
                isAuthenticatingEmail: false,
            };
        case MoonPayExchangeActionTypes.AUTHENTICATE_EMAIL_ERROR:
            return {
                ...state,
                isAuthenticatingEmail: false,
                hasErrorAuthenticatingEmail: true,
            };
        default:
            return state;
    }
};
