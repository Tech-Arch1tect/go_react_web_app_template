/* tslint:disable */
/* eslint-disable */
/**
 * Server API
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
 * @interface AuthControllerResetPasswordResponse
 */
export interface AuthControllerResetPasswordResponse {
    /**
     * 
     * @type {string}
     * @memberof AuthControllerResetPasswordResponse
     */
    message?: string;
}

/**
 * Check if a given object implements the AuthControllerResetPasswordResponse interface.
 */
export function instanceOfAuthControllerResetPasswordResponse(value: object): value is AuthControllerResetPasswordResponse {
    return true;
}

export function AuthControllerResetPasswordResponseFromJSON(json: any): AuthControllerResetPasswordResponse {
    return AuthControllerResetPasswordResponseFromJSONTyped(json, false);
}

export function AuthControllerResetPasswordResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthControllerResetPasswordResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function AuthControllerResetPasswordResponseToJSON(json: any): AuthControllerResetPasswordResponse {
    return AuthControllerResetPasswordResponseToJSONTyped(json, false);
}

export function AuthControllerResetPasswordResponseToJSONTyped(value?: AuthControllerResetPasswordResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
    };
}

