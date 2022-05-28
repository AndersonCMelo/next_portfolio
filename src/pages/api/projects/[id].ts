import { query as q } from 'faunadb';
import { NextApiRequest, NextApiResponse } from 'next';

import { fauna } from '../../../services/fauna';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const { id } = request.query;

  const project = await fauna.query(
    q.Get(q.Ref(q.Collection('projects'), id))
  ).then(response => {
    // console.log(response);
    return response;
  }).catch(err => {
    // console.log('err', err);
    return err;
  })

  return response.status(200).json(project);
}