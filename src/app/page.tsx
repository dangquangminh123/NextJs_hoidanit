import * as React from 'react';
import MainSlider from '@/components/main/main.slider';
import { Container } from '@mui/material';
import { sendRequest } from '@/utils/api';

export default async function HomePage() {

  const chils = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: {category: "CHILL", limit: 10}
  })

  const workouts = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: {category: "WORKOUT", limit: 10}
  })

  const party = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: {category: "PARTY", limit: 10}
  })

  return (
    <Container>
      <MainSlider
        title={"Top Chill"}
       data={chils?.data ? chils.data : []}/>
      <MainSlider 
       title={"Top Workout"}
       data={workouts?.data ? workouts.data : []}/>
      <MainSlider 
       title={"Top Party"}
        data={party?.data ? party.data : []}/>
    </Container>
  );
}
