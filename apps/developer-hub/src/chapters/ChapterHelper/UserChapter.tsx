import { Route } from 'react-router-dom';
import { CHAPTERS, TODOTemplate } from './Chapter.models';
import { Page } from '../Read/Page';
import { PageSection } from './PageSections';
import { DEZO_DOG, ParentRoutes } from '../../services/utils';
import Deso from '@deso-workspace/deso-sdk';
import {
  GetSingleProfileRequest,
  GetUsersStatelessRequest,
  GetProfilesRequest,
  GetUserMetadataRequest,
} from '@deso-workspace/deso-types';
const deso = new Deso();
// deso.user.getSingleProfile;
// deso.user.getSingleProfilePicture;
export const userChapter = {
  GET_USERS_STATELESS: {
    parentRoute: ParentRoutes.user,
    title: 'Get Users Stateless',
    route: '/user/get-users-stateless',
    method: deso.user.getUserStateless,
    params: {
      PublicKeysBase58Check: [DEZO_DOG],
    } as GetUsersStatelessRequest,
    documentation: [
      'https://docs.deso.org/backend/blockchain-data/api/user-endpoints#get-users-stateless',
    ],
    githubSource: [],
    component: function () {
      return (
        <Route
          key={this.title}
          path={this.route}
          element={
            <Page
              method={{
                methodName: `deso.user.getUserStateless(request)`,
                params: this.params,
                method: this.method,
              }}
              pretext={PageSection(
                this.title,
                <div>
                  get-users-stateless will query information on an existing user
                  or users.
                </div>
              )}
              tabs={[]}
              chapters={CHAPTERS}
              selectedChapter={this}
            />
          }
        ></Route>
      );
    },
  },
  GET_SINGLE_PROFILE: {
    parentRoute: ParentRoutes.user,
    title: 'Get Single Profile',
    route: '/get-single-profile',
    method: deso.user.getSingleProfile,
    params: {
      PublicKeyBase58Check: DEZO_DOG,
    } as GetSingleProfileRequest,
    documentation: [
      'https://docs.deso.org/backend/blockchain-data/api/user-endpoints#get-single-profile',
    ],
    githubSource: [],
    component: function () {
      return (
        <Route
          key={this.title}
          path={this.route}
          element={
            <Page
              tabs={[]}
              method={{
                methodName: `deso.user.getSingleProfile(request)`,
                params: this.params,
                method: this.method,
              }}
              pretext={PageSection(
                this.title,
                <div>
                  As it sounds get-single-profile, fetches various data around a
                  single profile. This call is useful if you want common display
                  data for a user.{' '}
                </div>
              )}
              chapters={CHAPTERS}
              selectedChapter={this}
            />
          }
        ></Route>
      );
    },
  },
  GET_PROFILES: {
    parentRoute: ParentRoutes.user,
    title: 'Get Profiles',
    route: '/user/get-profiles',
    params: { PublicKeyBase58Check: DEZO_DOG } as GetProfilesRequest,
    method: deso.user.getProfiles,
    githubSource: [],
    documentation: [
      'https://docs.deso.org/for-developers/backend/blockchain-data/api/user-endpoints#get-profiles',
    ],
    component: function () {
      return (
        <Route
          key={this.title}
          path={this.route}
          element={
            <Page
              tabs={[]}
              method={{
                methodName: `deso.user.getProfiles(request)`,
                params: this.params,
                method: this.method,
              }}
              pretext={PageSection(
                this.title,
                <div>
                  As it sounds get-single-profile, fetches various data around a
                  single profile. This call is useful if you want common display
                  data for a user.{' '}
                </div>
              )}
              chapters={CHAPTERS}
              selectedChapter={this}
            />
          }
        ></Route>
      );
    },
  },

  GET_SINGLE_PROFILE_PICTURE: {
    parentRoute: ParentRoutes.user,
    title: 'Get Single Profile Picture',
    route: '/user/get-single-profile-picture',
    params: DEZO_DOG,
    method: deso.user.getSingleProfilePicture,
    githubSource: [],
    documentation: [
      'https://docs.deso.org/for-developers/backend/blockchain-data/api/user-endpoints#get-single-profile-picture',
    ],
    component: function () {
      return (
        <Route
          key={this.title}
          path={this.route}
          element={
            <Page
              tabs={[]}
              method={{
                methodName: `deso.user.getSingleProfilePicture(request)`,
                params: this.params,
                method: this.method,
                customResponse: () => (
                  <img
                    src={deso.user.getSingleProfilePicture(DEZO_DOG)}
                    alt="sample"
                  />
                ),
              }}
              pretext={PageSection(
                this.title,
                <div>
                  As it sounds get-single-profile, fetches various data around a
                  single profile. This call is useful if you want common display
                  data for a user.{' '}
                </div>
              )}
              chapters={CHAPTERS}
              selectedChapter={this}
            />
          }
        ></Route>
      );
    },
  },

  GET_USER_METADATA: {
    parentRoute: ParentRoutes.user,
    title: 'Get User Metadata',
    route: '/user/get-user-metadata',
    params: { PublicKeyBase58Check: DEZO_DOG } as GetUserMetadataRequest,
    method: deso.user.getUserMetadata,
    githubSource: [],
    documentation: [
      'https://docs.deso.org/for-developers/backend/blockchain-data/api/user-endpoints#get-user-metadata',
    ],
    component: function () {
      return (
        <Route
          key={this.title}
          path={this.route}
          element={
            <Page
              tabs={[]}
              method={{
                methodName: `deso.user.getUserMetadata(request)`,
                params: this.params,
                method: this.method,
              }}
              pretext={PageSection(
                this.title,
                <div>
                  As it sounds get-single-profile, fetches various data around a
                  single profile. This call is useful if you want common display
                  data for a user.{' '}
                </div>
              )}
              chapters={CHAPTERS}
              selectedChapter={this}
            />
          }
        ></Route>
      );
    },
  },
  DELETE_PII: {
    parentRoute: ParentRoutes.user,
    title: 'Delete Pii',
    route: '/user/delete_pii',
    githubSource: [],
    documentation: [
      'https://docs.deso.org/for-developers/backend/blockchain-data/api/user-endpoints#delete-pii-personal-identifiable-information',
    ],
    component: function () {
      return (
        <Route
          key={this.title}
          path={this.route}
          element={<TODOTemplate selectedChapter={this} chapters={CHAPTERS} />}
        ></Route>
      );
    },
  },

  BLOCK_PUBLIC_KEY: {
    parentRoute: ParentRoutes.user,
    title: 'Block Public Key',
    route: '/user/block-public-key',
    githubSource: [],
    documentation: [
      'https://docs.deso.org/for-developers/backend/blockchain-data/api/user-endpoints#block-public-key',
    ],
    component: function () {
      return (
        <Route
          key={this.title}
          path={this.route}
          element={<TODOTemplate selectedChapter={this} chapters={CHAPTERS} />}
        ></Route>
      );
    },
  },
  GET_USER_DERIVED_KEYS: {
    parentRoute: ParentRoutes.user,
    title: 'Get User Derived Keys',
    route: '/user/get_user_derived_keys',
    githubSource: [],
    documentation: [
      'https://docs.deso.org/for-developers/backend/blockchain-data/api/user-endpoints#get-user-derived-keys',
    ],
    component: function () {
      return (
        <Route
          key={this.title}
          path={this.route}
          element={<TODOTemplate selectedChapter={this} chapters={CHAPTERS} />}
        ></Route>
      );
    },
  },
  DELETE_IDENTITIES: {
    parentRoute: ParentRoutes.user,
    title: 'Delete Identities',
    route: '/user/delete_identities',
    githubSource: [],
    documentation: [
      'https://docs.deso.org/for-developers/backend/blockchain-data/api/user-endpoints#delete-identities',
    ],
    component: function () {
      return (
        <Route
          key={this.title}
          path={this.route}
          element={<TODOTemplate selectedChapter={this} chapters={CHAPTERS} />}
        ></Route>
      );
    },
  },
};