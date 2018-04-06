/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Contacts from './Contacts';

const title = 'Contacts';

function action() {
  return {
    chunks: ['contacts'],
    title,
    component: (
      <Layout>
        <Contacts title={title} />
      </Layout>
    ),
  };
}

export default action;
