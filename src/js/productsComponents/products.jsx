import React, { Component } from "react";
import MenuCategories from "./MenuCategories.jsx";
import ItemCategories from "./ItemCategories.jsx";

class Products extends Component {
  state = {
    search: "",
    category: "All",
    brand: "All",
    sort: "new"
  };
  onKeyPress = e => {
    //console.log(e.key);
    if (e.key == "Enter")
      this.setState({
        search: e.target.value
      });
  };
  handleClickCategories = e => {
    //console.log(e.target.innerText)
    this.setState({
      category: e.target.innerText,
      search: ""
    });
  };
  handleClickBrands = e => {
    //console.log(e.target.innerText)
    this.setState({
      brand: e.target.innerText,
      search: ""
    });
  };
  handleSort = e => {
    //console.log(e.target.value);
    this.setState({
      sort: e.target.value
    });
  };
  render() {
    return (
      <div>
        <MenuCategories
          categories={this.props.data.categories}
          brands={this.props.data.brands}
          onClick={this.handleClickCategories}
          onClickB={this.handleClickBrands}
          category={this.state.category}
          brand={this.state.brand}
        />
        <ItemCategories
          data={this.props.data}
          onKeyPress={this.onKeyPress}
          brand={this.state.brand}
          category={this.state.category}
          search={this.state.search}
          sort={this.state.sort}
          handleSort={this.handleSort}
        />
      </div>
    );
  }
}

export default Products;
