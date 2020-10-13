import React from 'react';

function Crud() {
    return (
        <div id="crud-area">
            <div id="display-area">
                <div className="details-header">
                    <div className="details-title">Details</div>
                </div>
                <form>
                    <label>Name:
                        <input type='text' />
                    </label>
                    <label>Start Time:
                        <input type='text' />
                    </label>
                    <label>End Time:
                        <input type='text' />
                    </label>
                    <label>Task Type:
                        <select>
                            <option>hoge</option>
                            <option>hoge</option>
                            <option>hoge</option>
                            <option>hoge</option>
                        </select>
                    </label>
                </form>
            </div>
        </div>
    );
}

export default Crud;

/*
<div className="details-body">
                    <ul>
                        <li className="dspName"></li>
                        <li className="dspStartTime"></li>
                        <li className="dspEndTime"></li>
                        <li className="dspAlias"></li>
                    </ul>
                </div>
*/