import { DepartmentType } from '@deardigital/shared/constants';
import { techRadarMapper } from '@deardigital/shared/mapper';
import { Client } from '@notionhq/client';

export const fetchTechRadar = async (department: DepartmentType | undefined) => {
  const techRadarDBId = "5343a61a717c45109f41fcad47c8ffa1";
  const databases = [techRadarDBId];
  const notion = new Client({ auth: process.env['NEXT_PUBLIC_NOTION_API_TOKEN'] });

  const requests = databases.map((db) =>
    notion.databases.query({
      database_id: db,
    })
  );

  const [techRadar] = await Promise.all(requests);

  if (!techRadar) {
    throw new Error(`Tech radar could not be fetched from Notion`)
  }

  return techRadarMapper(techRadar, department)
}
