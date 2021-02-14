/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const findEstablishments = /* GraphQL */ `
  query FindEstablishments($input: findEstablishmentsInput!) {
    findEstablishments(input: $input) {
      items {
        id
        ownerId
        owner {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          updatedAt
        }
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
export const getEstablishmentFollow = /* GraphQL */ `
  query GetEstablishmentFollow($establishmentId: ID!, $userId: ID!) {
    getEstablishmentFollow(establishmentId: $establishmentId, userId: $userId) {
      establishmentId
      userId
      user {
        pk_id
        id
        firstName
        lastName
        userName
        birthdate
        gender
        description
        ownerOf {
          id
          ownerId
          name
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
          createdAt
          updatedAt
        }
        createdAt
        lastUpdated
        profilePicture
        followers {
          nextToken
        }
        followed {
          nextToken
        }
        updatedAt
        establishmentLikes {
          nextToken
        }
      }
      createdAt
      updatedAt
      establishment {
        id
        ownerId
        owner {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          updatedAt
        }
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
    }
  }
`;
export const listEstablishmentFollows = /* GraphQL */ `
  query ListEstablishmentFollows(
    $establishmentId: ID
    $userId: ModelIDKeyConditionInput
    $filter: ModelEstablishmentFollowFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listEstablishmentFollows(
      establishmentId: $establishmentId
      userId: $userId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        establishmentId
        userId
        user {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          updatedAt
        }
        createdAt
        updatedAt
        establishment {
          id
          ownerId
          name
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
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($pk_id: ID!, $id: ID!) {
    getUser(pk_id: $pk_id, id: $id) {
      pk_id
      id
      firstName
      lastName
      userName
      birthdate
      gender
      description
      ownerOf {
        id
        ownerId
        owner {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          updatedAt
        }
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
      createdAt
      lastUpdated
      profilePicture
      followers {
        items {
          id
          userFollowedId
          createdAt
          updatedAt
        }
        nextToken
      }
      followed {
        items {
          id
          userFollowedId
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
      establishmentLikes {
        items {
          establishmentId
          userId
          createdAt
          establishmentName
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $pk_id: ID
    $id: ModelIDKeyConditionInput
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      pk_id: $pk_id
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        pk_id
        id
        firstName
        lastName
        userName
        birthdate
        gender
        description
        ownerOf {
          id
          ownerId
          name
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
          createdAt
          updatedAt
        }
        createdAt
        lastUpdated
        profilePicture
        followers {
          nextToken
        }
        followed {
          nextToken
        }
        updatedAt
        establishmentLikes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getUserFollow = /* GraphQL */ `
  query GetUserFollow($id: ID!, $userFollowedId: ID!) {
    getUserFollow(id: $id, userFollowedId: $userFollowedId) {
      id
      userFollower {
        pk_id
        id
        firstName
        lastName
        userName
        birthdate
        gender
        description
        ownerOf {
          id
          ownerId
          name
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
          createdAt
          updatedAt
        }
        createdAt
        lastUpdated
        profilePicture
        followers {
          nextToken
        }
        followed {
          nextToken
        }
        updatedAt
        establishmentLikes {
          nextToken
        }
      }
      userFollowedId
      userFollowed {
        pk_id
        id
        firstName
        lastName
        userName
        birthdate
        gender
        description
        ownerOf {
          id
          ownerId
          name
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
          createdAt
          updatedAt
        }
        createdAt
        lastUpdated
        profilePicture
        followers {
          nextToken
        }
        followed {
          nextToken
        }
        updatedAt
        establishmentLikes {
          nextToken
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUserFollows = /* GraphQL */ `
  query ListUserFollows(
    $id: ID
    $userFollowedId: ModelIDKeyConditionInput
    $filter: ModelUserFollowFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserFollows(
      id: $id
      userFollowedId: $userFollowedId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        userFollower {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          updatedAt
        }
        userFollowedId
        userFollowed {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEstablishmentsFollowedByUser = /* GraphQL */ `
  query GetEstablishmentsFollowedByUser(
    $userId: ID
    $establishmentId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEstablishmentFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getEstablishmentsFollowedByUser(
      userId: $userId
      establishmentId: $establishmentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        establishmentId
        userId
        user {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          updatedAt
        }
        createdAt
        updatedAt
        establishment {
          id
          ownerId
          name
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
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getFollowers = /* GraphQL */ `
  query GetFollowers(
    $userFollowedId: ID
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getFollowers(
      userFollowedId: $userFollowedId
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userFollower {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          updatedAt
        }
        userFollowedId
        userFollowed {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listEstablishments = /* GraphQL */ `
  query ListEstablishments(
    $ownerId: ID
    $id: ModelIDKeyConditionInput
    $filter: ModelEstablishmentFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listEstablishments(
      ownerId: $ownerId
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        ownerId
        owner {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          updatedAt
        }
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
    }
  }
`;
export const getEstablishment = /* GraphQL */ `
  query GetEstablishment($ownerId: ID!, $id: ID!) {
    getEstablishment(ownerId: $ownerId, id: $id) {
      id
      ownerId
      owner {
        pk_id
        id
        firstName
        lastName
        userName
        birthdate
        gender
        description
        ownerOf {
          id
          ownerId
          name
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
          createdAt
          updatedAt
        }
        createdAt
        lastUpdated
        profilePicture
        followers {
          nextToken
        }
        followed {
          nextToken
        }
        updatedAt
        establishmentLikes {
          nextToken
        }
      }
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
        user {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          updatedAt
        }
        updatedAt
        establishment {
          id
          ownerId
          name
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
          createdAt
          updatedAt
        }
      }
      createdAt
      updatedAt
      userLikes {
        items {
          establishmentId
          userId
          createdAt
          establishmentName
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const searchEstablishments = /* GraphQL */ `
  query SearchEstablishments(
    $filter: SearchableEstablishmentFilterInput
    $sort: SearchableEstablishmentSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchEstablishments(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        ownerId
        owner {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          updatedAt
        }
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
export const getEstablishmentLike = /* GraphQL */ `
  query GetEstablishmentLike($establishmentId: ID!, $createdAt: AWSDateTime!) {
    getEstablishmentLike(
      establishmentId: $establishmentId
      createdAt: $createdAt
    ) {
      establishmentId
      userId
      createdAt
      user {
        pk_id
        id
        firstName
        lastName
        userName
        birthdate
        gender
        description
        ownerOf {
          id
          ownerId
          name
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
          createdAt
          updatedAt
        }
        createdAt
        lastUpdated
        profilePicture
        followers {
          nextToken
        }
        followed {
          nextToken
        }
        updatedAt
        establishmentLikes {
          nextToken
        }
      }
      establishmentName
      updatedAt
      establishment {
        id
        ownerId
        owner {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          updatedAt
        }
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
    }
  }
`;
export const listEstablishmentLikes = /* GraphQL */ `
  query ListEstablishmentLikes(
    $establishmentId: ID
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelEstablishmentLikeFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listEstablishmentLikes(
      establishmentId: $establishmentId
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        establishmentId
        userId
        createdAt
        user {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          updatedAt
        }
        establishmentName
        updatedAt
        establishment {
          id
          ownerId
          name
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
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getEstablishmentLikesByUser = /* GraphQL */ `
  query GetEstablishmentLikesByUser(
    $userId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEstablishmentLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getEstablishmentLikesByUser(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        establishmentId
        userId
        createdAt
        user {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          updatedAt
        }
        establishmentName
        updatedAt
        establishment {
          id
          ownerId
          name
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
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getCheckIn = /* GraphQL */ `
  query GetCheckIn($establishmentId: ID!, $createdAt: AWSDateTime!) {
    getCheckIn(establishmentId: $establishmentId, createdAt: $createdAt) {
      establishmentId
      userId
      createdAt
      establishmentName
      user {
        pk_id
        id
        firstName
        lastName
        userName
        birthdate
        gender
        description
        ownerOf {
          id
          ownerId
          name
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
          createdAt
          updatedAt
        }
        createdAt
        lastUpdated
        profilePicture
        followers {
          nextToken
        }
        followed {
          nextToken
        }
        updatedAt
        establishmentLikes {
          nextToken
        }
      }
      updatedAt
      establishment {
        id
        ownerId
        owner {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          updatedAt
        }
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
    }
  }
`;
export const listCheckIns = /* GraphQL */ `
  query ListCheckIns(
    $establishmentId: ID
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelCheckInFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCheckIns(
      establishmentId: $establishmentId
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        establishmentId
        userId
        createdAt
        establishmentName
        user {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          updatedAt
        }
        updatedAt
        establishment {
          id
          ownerId
          name
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
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getReview = /* GraphQL */ `
  query GetReview($establishmentId: ID!, $createdAt: AWSDateTime!) {
    getReview(establishmentId: $establishmentId, createdAt: $createdAt) {
      establishmentId
      userId
      createdAt
      establishmentName
      comments
      image
      rating
      user {
        pk_id
        id
        firstName
        lastName
        userName
        birthdate
        gender
        description
        ownerOf {
          id
          ownerId
          name
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
          createdAt
          updatedAt
        }
        createdAt
        lastUpdated
        profilePicture
        followers {
          nextToken
        }
        followed {
          nextToken
        }
        updatedAt
        establishmentLikes {
          nextToken
        }
      }
      updatedAt
      establishment {
        id
        ownerId
        owner {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          updatedAt
        }
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
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $establishmentId: ID
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listReviews(
      establishmentId: $establishmentId
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        establishmentId
        userId
        createdAt
        establishmentName
        comments
        image
        rating
        user {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          updatedAt
        }
        updatedAt
        establishment {
          id
          ownerId
          name
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
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getUserCheckins = /* GraphQL */ `
  query GetUserCheckins(
    $userId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCheckInFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUserCheckins(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        establishmentId
        userId
        createdAt
        establishmentName
        user {
          pk_id
          id
          firstName
          lastName
          userName
          birthdate
          gender
          description
          createdAt
          lastUpdated
          profilePicture
          updatedAt
        }
        updatedAt
        establishment {
          id
          ownerId
          name
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
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
