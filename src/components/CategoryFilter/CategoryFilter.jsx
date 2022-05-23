import "./category-filter.styles.scss";
import { BiCategory, BiChevronDown, BiChevronUp } from "react-icons/bi";
import React, { useState } from "react";
import { setCategoryFilter } from "../../redux/filter/filter.actions";
import { connect } from "react-redux";

const initialCategories = {
  any: "any",
  waste: "waste",
  flora: "flora",
  land: "land",
  sorting: "sorting",
  tech: "tech",
};

const CategoryFilter = ({ setCategoryFilter, categorySelectedOption }) => {
  const [categoryList, setCategoryList] = useState(true);

  return (
    <li className="category-section">
      <div
        className="category-title"
        onClick={() => setCategoryList(!categoryList)}
      >
        <div>
          <BiCategory size={30} />
          <h4>Category</h4>
        </div>

        {categoryList && <BiChevronUp size={30} />}
        {!categoryList && <BiChevronDown size={30} />}
      </div>
      {!categoryList && (
        <ul className="category-list">
          <li
            id="category-any"
            className={
              categorySelectedOption === initialCategories.any
                ? "active-category"
                : ""
            }
            onClick={() => {
              setCategoryFilter(initialCategories.any);
            }}
          >
            <div />
            <p>Any</p>
          </li>
          <li
            id="category-waste"
            className={
              categorySelectedOption === initialCategories.waste
                ? "active-category"
                : ""
            }
            onClick={() => {
              setCategoryFilter(initialCategories.waste);
            }}
          >
            <div />
            <p>Paper waste</p>
          </li>
          <li
            id="category-sorting"
            className={
              categorySelectedOption === initialCategories.sorting
                ? "active-category"
                : ""
            }
            onClick={() => {
              setCategoryFilter(initialCategories.sorting);
            }}
          >
            <div />
            <p>Sorting</p>
          </li>
          <li
            id="category-tech"
            className={
              categorySelectedOption === initialCategories.tech
                ? "active-category"
                : ""
            }
            onClick={() => {
              setCategoryFilter(initialCategories.tech);
            }}
          >
            <div />
            <p>Tech</p>
          </li>
          <li
            id="category-flora"
            className={
              categorySelectedOption === initialCategories.flora
                ? "active-category"
                : ""
            }
            onClick={() => {
              setCategoryFilter(initialCategories.flora);
            }}
          >
            <div />
            <p>Flora</p>
          </li>
          <li
            id="category-land"
            className={
              categorySelectedOption === initialCategories.land
                ? "active-category"
                : ""
            }
            onClick={() => {
              setCategoryFilter(initialCategories.land);
            }}
          >
            <div />
            <p>Land</p>
          </li>
        </ul>
      )}
    </li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCategoryFilter: (option) => dispatch(setCategoryFilter(option)),
});
const mapStateToProps = (state) => ({
  categorySelectedOption: state.filter.category,
});
export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
