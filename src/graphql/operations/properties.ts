import { gql } from '@apollo/client'

export default {
    Queries: {
        loadProperties: gql`
            query loadProperties {
                loadProperties {
                    id
                    address
                    city
                    state
                    zip
                } 
            }
        `,
        loadProperty: gql`
            query LoadProperty($propId: String!) {
                loadProperty(propId: $propId) {
                    address
                    city
                    state
                    zip
                    propertyData {
                        sqft
                    }
                }
            }
        `
    },
    Mutations: {
        addProperty: gql`
            mutation AddProperty($address: String!, $city: String!, $state: String!, $zip: String!) {
                addProperty(address: $address, city: $city, state: $state, zip: $zip) {
                    success
                    error
                }
            }
        `
    }
}