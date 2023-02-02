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