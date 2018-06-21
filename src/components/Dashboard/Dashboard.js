import React, {Component} from 'react'
import Header from './Header/Header'
import Jumbotron from './Jumbotron/Jumbotron';
import Footer from './Footer/Footer'
import TableSection from './TableSection/TableSection'

class Dashboard extends Component {
  render() {
    return (
      <section className="wrapper">
        <Header />
        <Jumbotron />
        <TableSection />
        <Footer />
      </section>
    )

  }
}

export default Dashboard