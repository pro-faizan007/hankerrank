import React from 'react';

function Error({ studentName }) {
    return (
        <div data-testid="errorMsg" className="alert error mt-20 slide-up-fade-in">
            Sorry, {studentName} is not a verified student.
        </div>
    );
}

export default Error;
