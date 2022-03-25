import React, { useState } from "react";
import './modal.css';

/* 
  Composition? Make all the buttons render from here?
  Import all the button components? 
  Where to create the array and store the values? 
  Can't use localStorage long term. 
*/

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  // this sequence converts the localStorage items into something displayable
  // if localStorage is empty, fatal Error
  let servingArray = JSON.parse(localStorage.getItem('servingArray'));
  let servingArrayValues = Object.values(servingArray);
  let hittingArray = JSON.parse(localStorage['hittingArray']);
  let hittingArrayValues = Object.values(hittingArray);
  let passingArray = JSON.parse(localStorage['passingArray']);
  let passingArrayValues = Object.values(passingArray);
  let blockingArray = JSON.parse(localStorage['blockingArray']);
  let blockingArrayValues = Object.values(blockingArray);
  let settingArray = JSON.parse(localStorage['settingArray']);
  let settingArrayValues = Object.values(settingArray);
  let defenseArray = JSON.parse(localStorage['defenseArray']);
  let defenseArrayValues = Object.values(defenseArray);

  /*   parsedStats[0] = JSON.parse(localStorage['servingArray']);
    parsedStats[1] = JSON.parse(localStorage['hittingArray']);
    parsedStats[2] = JSON.parse(localStorage['passingArray']);
    parsedStats[3] = JSON.parse(localStorage['blockingArray']);
    parsedStats[4] = JSON.parse(localStorage['settingArray']);
    parsedStats[5] = JSON.parse(localStorage['defenseArray']); */

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {/* 
        Next Step is finish creation of the table then input data from each storage Array
         */}

        <br></br>
        <table>
         <col />
         <col /> 
          <colgroup span="3" />
          <colgroup span="4" />
          <colgroup span={1} />
          <colgroup span={2} />
          <colgroup span={2} />
          <colgroup span={1} />
          <thead>
            <tr>
              <th colSpan="3" scope="colgroup">Serving</th>
              <th>Hitting</th>
              <th>Passing</th>
              <th>Blocking</th>
              <th>Setting</th>
              <th>Defense</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <th scope="col">SA</th>
              <th scope="col">SE</th>
              <th scope="col">IN %</th>
              <td>Atk</td>
              <td>Kill</td>
              <td>Err</td>
              <td>K %</td>
              <td>Pass AVG</td>
              <td>BLK</td>
              <td>B AST</td>
              <td>Set AST</td>
              <td>Set %</td>
              <td>Digs</td>
            </tr>
            <tr className="table-tr">
              <td>{servingArrayValues[1]}</td>
              <td>{servingArrayValues[2]}</td>
              <td>{servingArrayValues[3]}</td>
              <td>{hittingArrayValues[0]}</td>
              <td>{hittingArrayValues[1]}</td>
              <td>{hittingArrayValues[2]}</td>
              <td>{hittingArrayValues[3]}</td>
              <td>{passingArrayValues[6]}</td>
              <td>{blockingArrayValues[1]}</td>
              <td>{blockingArrayValues[2]}</td>
              <td>{blockingArrayValues[4]}</td>
              <td>{settingArrayValues[1]}</td>
              <td>{settingArrayValues[2]}</td>
              <td>{settingArrayValues[3]}</td>
              <td>{defenseArrayValues[1]}</td>
            </tr>

          </tbody>
        </table>
        {children}
        <button type="button" onClick={handleClose}>Close</button>
      </section>
    </div>
  )
}
export default Modal;