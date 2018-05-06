import React, { Fragment } from 'react';
import { Select } from '../Select/';
import { HEROES } from '../../consts/consts';

export const App = () => (
    <Fragment>
        <Select values={HEROES}/>
    </Fragment>
);
