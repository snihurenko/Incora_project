import React, { useState } from 'react';
import { WeatherPerDay } from './WeatherPerDay/WeatherPerDay';

export const PaginatedData = ({ data }: any) => {
  const [page, setPage] = useState(0);
  const maxPage = Math.ceil(data.length / 8);
  const onNextPage = () => setPage((page + 1) % maxPage);
  const onPrevPage = () => setPage((page + 8 - 1) % maxPage);

  return data.length ? (
    <div>
      <div>
        <button onClick={onPrevPage} disabled={!page}>
          Prev
        </button>
        <button onClick={onNextPage} disabled={page === Math.ceil(data.length / 8) - 1}>
          Next
        </button>
      </div>
      <div>
        {data.slice(page * 8, (page + 1) * 8).map((data: any) => {
          const date = new Date(data.dt * 1000);
          const day = date.toLocaleDateString('en-GB');
          const time = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
          return <WeatherPerDay data={data} key={data.dt} time={time} day={day} />;
        })}
      </div>
    </div>
  ) : null;
};
