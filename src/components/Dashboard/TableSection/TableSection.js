import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import jsPDF from 'jspdf'
import {toggleDashboard} from '../../../actions'
import Table from '../../Table/Table'
import {loadImage} from "../../../utils/toBase64/toBase64"

const TableSection = ({toggle, toggleFunc}) => (
  <section className="table-section">
    <section className="table-section__inner">
      <h2 className="table-section__inner__title">Poketable</h2>
      <button className="table-section__inner__button " onClick={toggleFunc}>Switch
        to {toggle ? 'Table' : 'Statistics'}</button>
      <button onClick={async () => {
        const doc = new jsPDF();
        const urlImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/18.png';
        const data = await loadImage(urlImg)
        doc.setFontSize(40)
        doc.addImage(data, "JPEG", 15, 40, 180, 180);
        doc.text(35, 25, "Pokemon")
        doc.save('a4.pdf')
      }}>PDF
      </button>
      <Table toggle={toggle}/>
    </section>
  </section>
);

TableSection.propTypes = {
  toggle: PropTypes.bool.isRequired,
  toggleFunc: PropTypes.func.isRequired
};

export default connect(({toggle}) => ({toggle}), {toggleFunc: toggleDashboard})(TableSection)

