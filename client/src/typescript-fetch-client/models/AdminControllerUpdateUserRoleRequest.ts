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
 * @interface AdminControllerUpdateUserRoleRequest
 */
export interface AdminControllerUpdateUserRoleRequest {
    /**
     * 
     * @type {string}
     * @memberof AdminControllerUpdateUserRoleRequest
     */
    role?: string;
}

/**
 * Check if a given object implements the AdminControllerUpdateUserRoleRequest interface.
 */
export function instanceOfAdminControllerUpdateUserRoleRequest(value: object): value is AdminControllerUpdateUserRoleRequest {
    return true;
}

export function AdminControllerUpdateUserRoleRequestFromJSON(json: any): AdminControllerUpdateUserRoleRequest {
    return AdminControllerUpdateUserRoleRequestFromJSONTyped(json, false);
}

export function AdminControllerUpdateUserRoleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdminControllerUpdateUserRoleRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'role': json['role'] == null ? undefined : json['role'],
    };
}

export function AdminControllerUpdateUserRoleRequestToJSON(json: any): AdminControllerUpdateUserRoleRequest {
    return AdminControllerUpdateUserRoleRequestToJSONTyped(json, false);
}

export function AdminControllerUpdateUserRoleRequestToJSONTyped(value?: AdminControllerUpdateUserRoleRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'role': value['role'],
    };
}

