import { NextApiRequest, NextApiResponse } from 'next';

import projects from '../../../../public/json/projects.json';

export default function handler(request: NextApiRequest, response: NextApiResponse) {
  const { id } = request.query;

  const project = projects.filter(item => item.id === id);

  return response.status(200).json(project[0]);
}