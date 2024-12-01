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
 * @interface AuthControllerChangePasswordRequest
 */
export interface AuthControllerChangePasswordRequest {
    /**
     * 
     * @type {string}
     * @memberof AuthControllerChangePasswordRequest
     */
    currentPassword: string;
    /**
     * 
     * @type {string}
     * @memberof AuthControllerChangePasswordRequest
     */
    newPassword: string;
}

/**
 * Check if a given object implements the AuthControllerChangePasswordRequest interface.
 */
export function instanceOfAuthControllerChangePasswordRequest(value: object): value is AuthControllerChangePasswordRequest {
    if (!('currentPassword' in value) || value['currentPassword'] === undefined) return false;
    if (!('newPassword' in value) || value['newPassword'] === undefined) return false;
    return true;
}

export function AuthControllerChangePasswordRequestFromJSON(json: any): AuthControllerChangePasswordRequest {
    return AuthControllerChangePasswordRequestFromJSONTyped(json, false);
}

export function AuthControllerChangePasswordRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthControllerChangePasswordRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'currentPassword': json['current_password'],
        'newPassword': json['new_password'],
    };
}

export function AuthControllerChangePasswordRequestToJSON(json: any): AuthControllerChangePasswordRequest {
    return AuthControllerChangePasswordRequestToJSONTyped(json, false);
}

export function AuthControllerChangePasswordRequestToJSONTyped(value?: AuthControllerChangePasswordRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'current_password': value['currentPassword'],
        'new_password': value['newPassword'],
    };
}

