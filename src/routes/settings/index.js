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
import Settings from './Settings';

const title = 'Settings';

function action() {
  return {
    chunks: ['settings'],
    title,
    component: (
      <Layout>
        <Settings title={title} />
      </Layout>
    ),
  };
}

export default action;
