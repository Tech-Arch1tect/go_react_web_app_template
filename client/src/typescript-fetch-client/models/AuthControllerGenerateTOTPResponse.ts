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
 * @interface AuthControllerGenerateTOTPResponse
 */
export interface AuthControllerGenerateTOTPResponse {
    /**
     * 
     * @type {string}
     * @memberof AuthControllerGenerateTOTPResponse
     */
    secret?: string;
}

/**
 * Check if a given object implements the AuthControllerGenerateTOTPResponse interface.
 */
export function instanceOfAuthControllerGenerateTOTPResponse(value: object): value is AuthControllerGenerateTOTPResponse {
    return true;
}

export function AuthControllerGenerateTOTPResponseFromJSON(json: any): AuthControllerGenerateTOTPResponse {
    return AuthControllerGenerateTOTPResponseFromJSONTyped(json, false);
}

export function AuthControllerGenerateTOTPResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthControllerGenerateTOTPResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'secret': json['secret'] == null ? undefined : json['secret'],
    };
}

export function AuthControllerGenerateTOTPResponseToJSON(json: any): AuthControllerGenerateTOTPResponse {
    return AuthControllerGenerateTOTPResponseToJSONTyped(json, false);
}

export function AuthControllerGenerateTOTPResponseToJSONTyped(value?: AuthControllerGenerateTOTPResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'secret': value['secret'],
    };
}
