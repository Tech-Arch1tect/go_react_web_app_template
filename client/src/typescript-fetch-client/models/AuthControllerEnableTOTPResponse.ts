/* tslint:disable */
/* eslint-disable */
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AuthControllerEnableTOTPResponse
 */
export interface AuthControllerEnableTOTPResponse {
    /**
     * 
     * @type {string}
     * @memberof AuthControllerEnableTOTPResponse
     */
    message?: string;
}

/**
 * Check if a given object implements the AuthControllerEnableTOTPResponse interface.
 */
export function instanceOfAuthControllerEnableTOTPResponse(value: object): value is AuthControllerEnableTOTPResponse {
    return true;
}

export function AuthControllerEnableTOTPResponseFromJSON(json: any): AuthControllerEnableTOTPResponse {
    return AuthControllerEnableTOTPResponseFromJSONTyped(json, false);
}

export function AuthControllerEnableTOTPResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthControllerEnableTOTPResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function AuthControllerEnableTOTPResponseToJSON(json: any): AuthControllerEnableTOTPResponse {
    return AuthControllerEnableTOTPResponseToJSONTyped(json, false);
}

export function AuthControllerEnableTOTPResponseToJSONTyped(value?: AuthControllerEnableTOTPResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
    };
}

