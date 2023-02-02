import { gql } from '@apollo/client'

export default {
    Queries: {},
    Mutations: {
        createUserType: gql`
            mutation CreateUserType($userType: String!) {
                createUserType(userType: $userType) {
                    success
                    error
                }
            }
        `
    }
}