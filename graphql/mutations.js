/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEstablishmentFollow = /* GraphQL */ `
  mutation CreateEstablishmentFollow(
    $input: CreateEstablishmentFollowInput!
    $condition: ModelEstablishmentFollowConditionInput
  ) {
    createEstablishmentFollow(input: $input, condition: $condition) {
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
export const updateEstablishmentFollow = /* GraphQL */ `
  mutation UpdateEstablishmentFollow(
    $input: UpdateEstablishmentFollowInput!
    $condition: ModelEstablishmentFollowConditionInput
  ) {
    updateEstablishmentFollow(input: $input, condition: $condition) {
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
export const deleteEstablishmentFollow = /* GraphQL */ `
  mutation DeleteEstablishmentFollow(
    $input: DeleteEstablishmentFollowInput!
    $condition: ModelEstablishmentFollowConditionInput
  ) {
    deleteEstablishmentFollow(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createUserFollow = /* GraphQL */ `
  mutation CreateUserFollow(
    $input: CreateUserFollowInput!
    $condition: ModelUserFollowConditionInput
  ) {
    createUserFollow(input: $input, condition: $condition) {
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
export const updateUserFollow = /* GraphQL */ `
  mutation UpdateUserFollow(
    $input: UpdateUserFollowInput!
    $condition: ModelUserFollowConditionInput
  ) {
    updateUserFollow(input: $input, condition: $condition) {
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
export const deleteUserFollow = /* GraphQL */ `
  mutation DeleteUserFollow(
    $input: DeleteUserFollowInput!
    $condition: ModelUserFollowConditionInput
  ) {
    deleteUserFollow(input: $input, condition: $condition) {
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
export const createEstablishment = /* GraphQL */ `
  mutation CreateEstablishment(
    $input: CreateEstablishmentInput!
    $condition: ModelEstablishmentConditionInput
  ) {
    createEstablishment(input: $input, condition: $condition) {
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
export const updateEstablishment = /* GraphQL */ `
  mutation UpdateEstablishment(
    $input: UpdateEstablishmentInput!
    $condition: ModelEstablishmentConditionInput
  ) {
    updateEstablishment(input: $input, condition: $condition) {
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
export const deleteEstablishment = /* GraphQL */ `
  mutation DeleteEstablishment(
    $input: DeleteEstablishmentInput!
    $condition: ModelEstablishmentConditionInput
  ) {
    deleteEstablishment(input: $input, condition: $condition) {
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
export const createEstablishmentLike = /* GraphQL */ `
  mutation CreateEstablishmentLike(
    $input: CreateEstablishmentLikeInput!
    $condition: ModelEstablishmentLikeConditionInput
  ) {
    createEstablishmentLike(input: $input, condition: $condition) {
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
export const updateEstablishmentLike = /* GraphQL */ `
  mutation UpdateEstablishmentLike(
    $input: UpdateEstablishmentLikeInput!
    $condition: ModelEstablishmentLikeConditionInput
  ) {
    updateEstablishmentLike(input: $input, condition: $condition) {
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
export const deleteEstablishmentLike = /* GraphQL */ `
  mutation DeleteEstablishmentLike(
    $input: DeleteEstablishmentLikeInput!
    $condition: ModelEstablishmentLikeConditionInput
  ) {
    deleteEstablishmentLike(input: $input, condition: $condition) {
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
export const createCheckIn = /* GraphQL */ `
  mutation CreateCheckIn(
    $input: CreateCheckInInput!
    $condition: ModelCheckInConditionInput
  ) {
    createCheckIn(input: $input, condition: $condition) {
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
export const updateCheckIn = /* GraphQL */ `
  mutation UpdateCheckIn(
    $input: UpdateCheckInInput!
    $condition: ModelCheckInConditionInput
  ) {
    updateCheckIn(input: $input, condition: $condition) {
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
export const deleteCheckIn = /* GraphQL */ `
  mutation DeleteCheckIn(
    $input: DeleteCheckInInput!
    $condition: ModelCheckInConditionInput
  ) {
    deleteCheckIn(input: $input, condition: $condition) {
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
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
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
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
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
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
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
