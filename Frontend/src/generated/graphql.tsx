import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `ID` scalar type represents a unique MongoDB identifier in collection. MongoDB by default use 12-byte ObjectId value (https://docs.mongodb.com/manual/reference/bson-types/#objectid). But MongoDB also may accepts string or integer as correct values for _id field. */
  MongoID: any;
};

export type Query = {
  __typename?: 'Query';
  userById?: Maybe<User>;
  userByIds: Array<User>;
  userOne?: Maybe<User>;
  userMany: Array<User>;
  userCount?: Maybe<Scalars['Int']>;
  userConnection?: Maybe<UserConnection>;
  userPagination?: Maybe<UserPagination>;
};


export type QueryUserByIdArgs = {
  _id: Scalars['MongoID'];
};


export type QueryUserByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsUserInput>;
};


export type QueryUserOneArgs = {
  filter?: Maybe<FilterFindOneUserInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneUserInput>;
};


export type QueryUserManyArgs = {
  filter?: Maybe<FilterFindManyUserInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyUserInput>;
};


export type QueryUserCountArgs = {
  filter?: Maybe<FilterCountUserInput>;
};


export type QueryUserConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FilterFindManyUserInput>;
  sort?: Maybe<SortConnectionUserEnum>;
};


export type QueryUserPaginationArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterFindManyUserInput>;
  sort?: Maybe<SortFindManyUserInput>;
};

export type User = {
  __typename?: 'User';
  name: Scalars['String'];
  social: EnumUserSocial;
  socialId: Scalars['String'];
  profileImg?: Maybe<Scalars['String']>;
  myPolls?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  castedPolls?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id: Scalars['MongoID'];
};

export enum EnumUserSocial {
  Kakao = 'Kakao',
  Naver = 'Naver'
}


export enum SortFindByIdsUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC'
}

export type FilterFindOneUserInput = {
  name?: Maybe<Scalars['String']>;
  social?: Maybe<EnumUserSocial>;
  socialId?: Maybe<Scalars['String']>;
  profileImg?: Maybe<Scalars['String']>;
  myPolls?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  castedPolls?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneUserOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneUserInput>>;
  AND?: Maybe<Array<FilterFindOneUserInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneUserOperatorsInput = {
  _id?: Maybe<FilterFindOneUser_IdOperatorsInput>;
};

export type FilterFindOneUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortFindOneUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC'
}

export type FilterFindManyUserInput = {
  name?: Maybe<Scalars['String']>;
  social?: Maybe<EnumUserSocial>;
  socialId?: Maybe<Scalars['String']>;
  profileImg?: Maybe<Scalars['String']>;
  myPolls?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  castedPolls?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyUserOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyUserInput>>;
  AND?: Maybe<Array<FilterFindManyUserInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyUserOperatorsInput = {
  _id?: Maybe<FilterFindManyUser_IdOperatorsInput>;
};

export type FilterFindManyUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortFindManyUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC'
}

export type FilterCountUserInput = {
  name?: Maybe<Scalars['String']>;
  social?: Maybe<EnumUserSocial>;
  socialId?: Maybe<Scalars['String']>;
  profileImg?: Maybe<Scalars['String']>;
  myPolls?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  castedPolls?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountUserOperatorsInput>;
  OR?: Maybe<Array<FilterCountUserInput>>;
  AND?: Maybe<Array<FilterCountUserInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountUserOperatorsInput = {
  _id?: Maybe<FilterCountUser_IdOperatorsInput>;
};

export type FilterCountUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Information to aid in pagination. */
  edges: Array<UserEdge>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** The item at the end of the edge */
  node: User;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export enum SortConnectionUserEnum {
  IdDesc = '_ID_DESC',
  IdAsc = '_ID_ASC'
}

/** List of items with pagination. */
export type UserPagination = {
  __typename?: 'UserPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<User>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  currentPage: Scalars['Int'];
  perPage: Scalars['Int'];
  pageCount?: Maybe<Scalars['Int']>;
  itemCount?: Maybe<Scalars['Int']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create one document with mongoose defaults, setters, hooks and validation */
  userCreateOne?: Maybe<CreateOneUserPayload>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  userCreateMany?: Maybe<CreateManyUserPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  userUpdateById?: Maybe<UpdateByIdUserPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  userUpdateOne?: Maybe<UpdateOneUserPayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  userUpdateMany?: Maybe<UpdateManyUserPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  userRemoveById?: Maybe<RemoveByIdUserPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  userRemoveOne?: Maybe<RemoveOneUserPayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  userRemoveMany?: Maybe<RemoveManyUserPayload>;
};


export type MutationUserCreateOneArgs = {
  record: CreateOneUserInput;
};


export type MutationUserCreateManyArgs = {
  records: Array<CreateManyUserInput>;
};


export type MutationUserUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdUserInput;
};


export type MutationUserUpdateOneArgs = {
  record: UpdateOneUserInput;
  filter?: Maybe<FilterUpdateOneUserInput>;
  sort?: Maybe<SortUpdateOneUserInput>;
  skip?: Maybe<Scalars['Int']>;
};


export type MutationUserUpdateManyArgs = {
  record: UpdateManyUserInput;
  filter?: Maybe<FilterUpdateManyUserInput>;
  sort?: Maybe<SortUpdateManyUserInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationUserRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};


export type MutationUserRemoveOneArgs = {
  filter?: Maybe<FilterRemoveOneUserInput>;
  sort?: Maybe<SortRemoveOneUserInput>;
};


export type MutationUserRemoveManyArgs = {
  filter: FilterRemoveManyUserInput;
  limit?: Maybe<Scalars['Int']>;
};

export type CreateOneUserPayload = {
  __typename?: 'CreateOneUserPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Created document */
  record?: Maybe<User>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type ErrorInterface = {
  /** Generic error message */
  message?: Maybe<Scalars['String']>;
};

export type CreateOneUserInput = {
  name: Scalars['String'];
  social: EnumUserSocial;
  socialId: Scalars['String'];
  profileImg?: Maybe<Scalars['String']>;
  myPolls?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  castedPolls?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type CreateManyUserPayload = {
  __typename?: 'CreateManyUserPayload';
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<User>>;
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type CreateManyUserInput = {
  name: Scalars['String'];
  social: EnumUserSocial;
  socialId: Scalars['String'];
  profileImg?: Maybe<Scalars['String']>;
  myPolls?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  castedPolls?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type UpdateByIdUserPayload = {
  __typename?: 'UpdateByIdUserPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<User>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateByIdUserInput = {
  name?: Maybe<Scalars['String']>;
  social?: Maybe<EnumUserSocial>;
  socialId?: Maybe<Scalars['String']>;
  profileImg?: Maybe<Scalars['String']>;
  myPolls?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  castedPolls?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type UpdateOneUserPayload = {
  __typename?: 'UpdateOneUserPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<User>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateOneUserInput = {
  name?: Maybe<Scalars['String']>;
  social?: Maybe<EnumUserSocial>;
  socialId?: Maybe<Scalars['String']>;
  profileImg?: Maybe<Scalars['String']>;
  myPolls?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  castedPolls?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterUpdateOneUserInput = {
  name?: Maybe<Scalars['String']>;
  social?: Maybe<EnumUserSocial>;
  socialId?: Maybe<Scalars['String']>;
  profileImg?: Maybe<Scalars['String']>;
  myPolls?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  castedPolls?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOneUserOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateOneUserInput>>;
  AND?: Maybe<Array<FilterUpdateOneUserInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneUserOperatorsInput = {
  _id?: Maybe<FilterUpdateOneUser_IdOperatorsInput>;
};

export type FilterUpdateOneUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortUpdateOneUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC'
}

export type UpdateManyUserPayload = {
  __typename?: 'UpdateManyUserPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateManyUserInput = {
  name?: Maybe<Scalars['String']>;
  social?: Maybe<EnumUserSocial>;
  socialId?: Maybe<Scalars['String']>;
  profileImg?: Maybe<Scalars['String']>;
  myPolls?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  castedPolls?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type FilterUpdateManyUserInput = {
  name?: Maybe<Scalars['String']>;
  social?: Maybe<EnumUserSocial>;
  socialId?: Maybe<Scalars['String']>;
  profileImg?: Maybe<Scalars['String']>;
  myPolls?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  castedPolls?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateManyUserOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateManyUserInput>>;
  AND?: Maybe<Array<FilterUpdateManyUserInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManyUserOperatorsInput = {
  _id?: Maybe<FilterUpdateManyUser_IdOperatorsInput>;
};

export type FilterUpdateManyUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortUpdateManyUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC'
}

export type RemoveByIdUserPayload = {
  __typename?: 'RemoveByIdUserPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<User>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type RemoveOneUserPayload = {
  __typename?: 'RemoveOneUserPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<User>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type FilterRemoveOneUserInput = {
  name?: Maybe<Scalars['String']>;
  social?: Maybe<EnumUserSocial>;
  socialId?: Maybe<Scalars['String']>;
  profileImg?: Maybe<Scalars['String']>;
  myPolls?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  castedPolls?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveOneUserOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveOneUserInput>>;
  AND?: Maybe<Array<FilterRemoveOneUserInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneUserOperatorsInput = {
  _id?: Maybe<FilterRemoveOneUser_IdOperatorsInput>;
};

export type FilterRemoveOneUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortRemoveOneUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatUpdatedatAsc = 'CREATEDAT__UPDATEDAT_ASC',
  CreatedatUpdatedatDesc = 'CREATEDAT__UPDATEDAT_DESC'
}

export type RemoveManyUserPayload = {
  __typename?: 'RemoveManyUserPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type FilterRemoveManyUserInput = {
  name?: Maybe<Scalars['String']>;
  social?: Maybe<EnumUserSocial>;
  socialId?: Maybe<Scalars['String']>;
  profileImg?: Maybe<Scalars['String']>;
  myPolls?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  castedPolls?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveManyUserOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveManyUserInput>>;
  AND?: Maybe<Array<FilterRemoveManyUserInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManyUserOperatorsInput = {
  _id?: Maybe<FilterRemoveManyUser_IdOperatorsInput>;
};

export type FilterRemoveManyUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};
