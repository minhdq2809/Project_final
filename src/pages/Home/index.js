import React from "react";
import Home from "./Home";
import { getProducts } from './../../Services/Server';
class HomeContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      newProducts: [],
      newfeatureProducts: []
    }
  }

  async componentDidMount() {
    const newProducts = await getProducts({ params: { limit: 6 } }).then(({ data }) => { return data.data })
    const newfeatureProducts = await getProducts({ params: { limit: 6 } }).then(({ data }) => { return data.data })

    console.log(newProducts);
    this.setState({
      newProducts,
      newfeatureProducts
    })

  }

  _extract = () => ({
    ...this.state
  })
  render() {
    return <Home {...this._extract()} />;
  }
}

export default HomeContainer;
