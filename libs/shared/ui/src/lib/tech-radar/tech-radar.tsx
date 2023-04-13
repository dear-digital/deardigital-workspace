import { DepartmentConstant } from '@deardigital/shared/constants';
import { TechRadarInterface } from '@deardigital/shared/interfaces';
import { radar_visualization } from '@deardigital/shared/utilities';
import { renderRichText } from '@storyblok/react';
import Link from 'next/link';
import { useEffect } from 'react';

/* eslint-disable-next-line */
export interface TechRadarProps extends TechRadarInterface { }

export function TechRadar(props: TechRadarProps) {
  useEffect(() => {
    radar_visualization({
      svg_id: 'radar',
      width: 1450,
      height: 1000,
      colors: {
        background: '#fff',
        grid: '#dddde0',
        inactive: '#ddd',
      },
      title: props.title,
      date: props.version,
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
      entries: props.items,
    });
  }, [props.items]);

  return (
    <div>
      <div className="container py-3">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <Link href="/" className="btn btn-primary">ALL</Link>

            <div className="btn-group" role="group" aria-label="Basic example">
              {Object.keys(DepartmentConstant).map((department: string, key) =>
                <Link href={department} className="btn btn-primary">{department}</Link>
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
