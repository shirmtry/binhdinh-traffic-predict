import { getTrafficData } from '../../../lib/mockData';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const scenario = searchParams.get('scenario') || 'weekday';
  return Response.json(getTrafficData(scenario));
}