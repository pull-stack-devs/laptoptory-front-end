import React from 'react';
import TeamHeader from './TeamHeader';
import Copyrights from './Copyrights';
import Team from './Team';
export default function AboutUs() {
  return (
    <>
    <div id="team">
      <TeamHeader />
      <Team />
      <Copyrights />
      </div>
    </>
  );
}
