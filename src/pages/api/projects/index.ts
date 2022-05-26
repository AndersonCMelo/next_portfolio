import { NextApiRequest, NextApiResponse } from 'next';

import projects from '../../../../public/json/projects.json';

export default function handler(request: NextApiRequest, response: NextApiResponse) {
  return response.status(200).json(projects);
}
 