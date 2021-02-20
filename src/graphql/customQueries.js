export const findEstablishments = /* GraphQL */ `
  query FindEstablishments($input: FindEstablishmentsInput!) {
    findEstablishments(input: $input) {
      items {
        id
        name
        gps {
          lon
          lat
        }
        street
        city
        state
        zipcode
        neighborhood
        phone
        email
        placeID
        phoneNumber
        likeCount
        reviews {
          establishmentId
          userId
          createdAt
          establishmentName
          comments
          image
          rating
          updatedAt
        }
        createdAt
        updatedAt
        userLikes {
          nextToken
        }
      }
      nextToken
      total
    }
  }
`;