import { DepartmentConstant, DepartmentType } from '@deardigital/shared/constants';
import { TechRadarInterface } from '@deardigital/shared/interfaces';
import { fetchTechRadar } from '@deardigital/shared/services';
import { radar_visualization } from '@deardigital/shared/utilities';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface TechRadarProps { }

export function TechRadar(props: TechRadarProps) {
  const { locale } = useRouter();
  const [activeFilter, setActiveFilter] = useState<DepartmentType>();
  const { data } = useQuery(['tech-radar', locale], () => fetchTechRadar(undefined), {
    select: (data: TechRadarInterface) => {
      if (activeFilter) {
        data.items = data.items.filter(item => item.department.includes(activeFilter));
      }

      return data;
    }
  });

  useEffect(() => {
    if (data) {
      radar_visualization({
        svg_id: 'radar',
        width: 1450,
        height: 1000,
        colors: {
          background: '#fff',
          grid: '#dddde0',
          inactive: '#ddd',
        },
        title: data.title,
        date: data.version,
        quadrants: [
          { name: 'Languages' },
          { name: 'Platforms' },
          { name: 'Tools' },
          { name: 'Frameworks' },
        ],
        rings: [
          { name: 'ADOPT', color: '#34A853' },
          { name: 'TRIAL', color: '#4285F4' },
          { name: 'ASSESS', color: '#fbbc05' },
          { name: 'HOLD', color: '#EA4335' },
        ],
        print_layout: true,
        links_in_new_tabs: true,
        // zoomed_quadrant: 0,
        entries: data.items,
      });
    }
  }, [data]);

  function onChange(value: DepartmentType | undefined) {
    if (value === activeFilter) {
      // reset filters
      setActiveFilter(undefined);
    }

    setActiveFilter(value);
  };

  if (!data) {
    return null;
  }

  return (
    <div>
      <div className="container py-3">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
          <button className='btn btn-primary btn-small' onClick={() => onChange(undefined)}>All</button>

            <div className="btn-group" role="group" aria-label="Basic example">
              {DepartmentConstant.map((department, key) =>
                <button key={key} className='btn btn-primary btn-small' onClick={() => onChange(department)}>{department}</button>
              )}
            </div>
          </div>
        </div>
      </div>

      <svg id="radar"></svg>
    </div>
  );
}

export default TechRadar;
