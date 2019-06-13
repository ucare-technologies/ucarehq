import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Management = () => (
  <section className="container management justify-content-center">
    <h1 className="text-center title ">
      Easy to use church management software isn’t optional, it’s essential.
    </h1>
      <h2 className="text-center try-ucare">
        Try UCare FREE for 30 days.&nbsp;
          <a href="/sign-up">
          <button className="try-today">
            try today&nbsp;
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          </a>
      </h2>
  </section>
);

export default Management;