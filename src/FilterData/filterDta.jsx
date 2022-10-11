import React from "react";

function Filter() {


    

    return (
        <>
            <h1>Select country and State</h1>
        <div className="row">
            <select class="form-select w-25 mx-5" aria-label="Default select example">
                <option selected>Open this select country</option>
                <option value="1" >One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <select class="form-select w-25 mx-5" aria-label="Default select example">
                <option selected>Open this select State</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            </div>
        </>
    );
}

export default Filter
