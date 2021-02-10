/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEstablishmentLike = /* GraphQL */ `
  subscription OnCreateEstablishmentLike {
    onCreateEstablishmentLike {
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
export const onUpdateEstablishmentLike = /* GraphQL */ `
  subscription OnUpdateEstablishmentLike {
    onUpdateEstablishmentLike {
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
export const onDeleteEstablishmentLike = /* GraphQL */ `
  subscription OnDeleteEstablishmentLike {
    onDeleteEstablishmentLike {
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
export const onCreateCheckIn = /* GraphQL */ `
  subscription OnCreateCheckIn {
    onCreateCheckIn {
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
export const onUpdateCheckIn = /* GraphQL */ `
  subscription OnUpdateCheckIn {
    onUpdateCheckIn {
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
export const onDeleteCheckIn = /* GraphQL */ `
  subscription OnDeleteCheckIn {
    onDeleteCheckIn {
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
export const onCreateEstablishmentFollow = /* GraphQL */ `
  subscription OnCreateEstablishmentFollow {
    onCreateEstablishmentFollow {
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
export const onUpdateEstablishmentFollow = /* GraphQL */ `
  subscription OnUpdateEstablishmentFollow {
    onUpdateEstablishmentFollow {
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
export const onDeleteEstablishmentFollow = /* GraphQL */ `
  subscription OnDeleteEstablishmentFollow {
    onDeleteEstablishmentFollow {
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
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview {
    onCreateReview {
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
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview {
    onUpdateReview {
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
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview {
    onDeleteReview {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($id: String!) {
    onUpdateUser(id: $id) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($id: String!) {
    onDeleteUser(id: $id) {
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
export const onCreateUserFollow = /* GraphQL */ `
  subscription OnCreateUserFollow {
    onCreateUserFollow {
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
export const onUpdateUserFollow = /* GraphQL */ `
  subscription OnUpdateUserFollow {
    onUpdateUserFollow {
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
export const onDeleteUserFollow = /* GraphQL */ `
  subscription OnDeleteUserFollow {
    onDeleteUserFollow {
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
export const onCreateEstablishment = /* GraphQL */ `
  subscription OnCreateEstablishment {
    onCreateEstablishment {
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
export const onUpdateEstablishment = /* GraphQL */ `
  subscription OnUpdateEstablishment {
    onUpdateEstablishment {
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
export const onDeleteEstablishment = /* GraphQL */ `
  subscription OnDeleteEstablishment {
    onDeleteEstablishment {
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
