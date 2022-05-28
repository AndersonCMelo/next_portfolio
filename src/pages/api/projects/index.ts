import { query as q } from 'faunadb';
import { useState } from 'react';

import { NextApiRequest, NextApiResponse } from 'next';

import { fauna } from '../../../services/fauna';

// import projects from '../../../../public/json/projects.json';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const projects = await fauna.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('projects'))),
      q.Lambda(x => q.Get(x))
    )
  ).then(response => {
    // console.log('response', response);
    return response;
  }).catch(err => {
    // console.log('err', err);
    return err;
  })

  /* .catch((err) => console.error(
    'Error: [%s] %s: %s',
    err.name,
    err.message,
    err.errors()[0].description,
  )) */

  return response.status(200).json(projects);
}
 