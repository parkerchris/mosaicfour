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
                        id
                        sqft
                        beds
                        baths
                        yearBuilt
                        purchasePrice
                        purchaseDate
                        rent
                        rentDuration
                        mailboxNumber
                        mailboxLocation
                        garbageDay
                        landscapeDay
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
        `,

        updatePropertyInfo: gql`
            mutation UpdatePropertyInfo(
                    $propInfoId: String!, 
                    $sqft: String, 
                    $beds: String,
                    $baths: String,
                    $yearBuilt: String,
                    $purchasePrice: String,
                    $purchaseDate: String,
                    $rent: String,
                    $rentDuration: String,
                    $mailboxNumber: String,
                    $mailboxLocation: String,
                    $garbageDay: String,
                    $landscapeDay: String
                    ) {
                updatePropertyInfo(
                        propInfoId: $propInfoId, 
                        sqft: $sqft, 
                        beds: $beds,
                        baths: $baths
                        yearBuilt: $yearBuilt
                        purchasePrice: $purchasePrice
                        purchaseDate: $purchaseDate
                        rent: $rent
                        rentDuration: $rentDuration
                        mailboxNumber: $mailboxNumber
                        mailboxLocation: $mailboxLocation
                        garbageDay: $garbageDay
                        landscapeDay: $landscapeDay
                            ) {
                    success
                    error
                }
            }
        `
    }
}