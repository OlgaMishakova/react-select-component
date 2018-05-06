import React, { Fragment } from 'react';
import { SelectContainer } from "../../containers/SelectContainer";
import { HEROES } from '../../consts/consts';

export const App = () => (
    <Fragment>
        <SelectContainer values={HEROES}/>
    </Fragment>
);
