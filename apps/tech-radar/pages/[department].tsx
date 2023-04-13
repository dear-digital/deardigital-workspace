import { TechRadarInterface, TechRadarItemInterface } from '@deardigital/shared/interfaces';
import { fetchTechRadar } from '@deardigital/shared/services';
import { radar_visualization } from '@deardigital/shared/utilities';
import { useStoryblokState } from '@storyblok/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import { i18n } from '../next-i18next.config';
import { Button, ButtonGroup } from 'react-bootstrap';
import { DepartmentConstant, DepartmentType } from '@deardigital/shared/constants';
import { filter } from 'd3';
import { useRouter } from 'next/router';

export interface HomeProps {
  data: TechRadarInterface;
}

type FilterValue = DepartmentType | null;

export function Index({ data }: HomeProps) {
  const router = useRouter()
  useStoryblokState(data as any);

  function filterItemsByDepartment(filterValue: FilterValue) {
    if (filterValue === null) {
      return router.push('/',)
    }

    return router.push(`/${filterValue}`)
  }

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
      entries: data.items.filter(item => item.department.includes(router.query.department as DepartmentType)),
    });
  }, []);

  return (
    <div>
      <div className="container py-3">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <Button variant="secondary" onClick={() => filterItemsByDepartment(null)}>All</Button>
            <ButtonGroup aria-label="Basic example">
              {Object.keys(DepartmentConstant).map((department: DepartmentType, key) =>
                <Button key={key} variant="secondary" onClick={() => filterItemsByDepartment(department)}>{department}</Button>
              )}
            </ButtonGroup>
          </div>
        </div>
      </div>

      <svg id="radar"></svg>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  return {
    fallback: 'blocking',
    paths: Object.keys(DepartmentConstant).map(department => ({
      locale: locales[0],
      params: { department },
    })),
  };
};

export const getStaticProps: GetStaticProps = async ({ locale, params, preview }) => {
  const department = params.department as DepartmentType;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], { i18n })),
      data: await fetchTechRadar(department, true),
    },
    revalidate: 3600,
  };
};

export default Index;
