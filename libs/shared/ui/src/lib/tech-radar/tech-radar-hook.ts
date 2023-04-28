import { DepartmentType } from '@deardigital/shared/constants';
import { TechRadarInterface } from '@deardigital/shared/interfaces';
import { fetchTechRadar } from '@deardigital/shared/services';
import { useQuery } from '@tanstack/react-query';

export const useGetEmployees = (activeFilter: DepartmentType | undefined) => {
  return useQuery(['tech-radar'], () => fetchTechRadar(undefined), {
    select: (data: TechRadarInterface) => {
      if (activeFilter) {
        data.items = data.items.filter(item => item.department.includes(activeFilter));
      }

      return data;
    }
  });
};
