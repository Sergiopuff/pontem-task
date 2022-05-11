import { useDispatch } from "react-redux";
import { renderData } from "../../redux/slices/blocks";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Filters from "./filters";
import SearchInput from "./input";

function Search() {
  const dispatch = useDispatch();
  const { query } = useParams();

  useEffect(() => {
    dispatch(renderData({ search: query || "" }));
  }, [dispatch, query]);

  return (
    <>
      <SearchInput />
      <Filters />
    </>
  );
}

export default Search;
