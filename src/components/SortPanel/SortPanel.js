import React from 'react';

import { availableSortOrder } from '../../utils/constants';

import './SortPanel.css';

function SortPanel({ name, onSort }) {

    return (
        <select className="sort-panel" defaultValue={availableSortOrder.asc} name={`${name}-sort`} onChange={onSort} >
            <option value={availableSortOrder.asc}>От старого к новому</option>
            <option value={availableSortOrder.desc}>От нового к старому</option>
        </select>
    );
};

export default SortPanel;