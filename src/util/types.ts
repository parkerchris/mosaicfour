import { Session } from "next-auth"
import { PrismaClient } from '@prisma/client'
//frontend

export interface CreateUserTypeData {
    createUserType: {
        success: boolean;
        error: string;
    }
}

export interface CreateUserTypeVariables {
    userType: string;
}


//backend
export interface GraphQLContext {
    session: Session | null;
    prisma: PrismaClient;
    //pubsub
}


//users
export interface CreateUserTypeResponse {
    success?: boolean;
    error?: string
}


export interface LoadPropertiesData {
    loadProperties: Array<LoadedProperties>
}

export interface LoadedProperties {
    id: string;
    address: string;
    city: string;
    state: string;
    zip: string;
}