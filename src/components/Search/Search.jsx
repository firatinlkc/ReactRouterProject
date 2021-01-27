import React, { useRef, useState, useEffect } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import datas from "../../data/datas.json";
import { Container } from 'react-bootstrap'


function Search(props) {
  const location = useLocation();
  const history = useHistory();
  const params = new URLSearchParams(location.search);
  const q = params.get("q");
  const inputValue = useRef();
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (q) {
      inputValue.current.value = q;

      const toolsResults = datas.results
        .filter((item) => item.title.toLowerCase().includes(q.toLowerCase()))
        .map((item) => (
          <div id="tekrar">
            <br />

            <li id="searchlist" key={item.id} className="list-group-item">
              <Link to={`/tools/${item.id}`}> {item.title} </Link>{" "}
            </li>
          </div>
        ));
      setSearchResult(toolsResults);
    }
  }, [q]);

  function handleForm(event) {
    event.preventDefault();
    history.push(`/search?q=${inputValue.current.value}`);
  }
  return (
    <Container>
   
      <form onSubmit={handleForm}>
        <div id="aftersearchtop" className="from-group pb-5">
          <input
            name="q"
            className="form-control"
            id="search"
            placeholder="Search for which movie you want to"
            ref={inputValue}
            type="text"
          />
        </div>{" "}
        <div id="aftersearchbutton">
          <button
            id="searchbtn"
            type="submit"
            className="btn btn-success fs-5"
            onClick={handleForm}
          >
            Search{" "}
          </button>{" "}
        </div>{" "}
      </form>{" "}
      <ul id="aftersearchb" className="list-group text-center pt-5">
        {" "}
        {searchResult}{" "}
      </ul>{" "}
    </Container>
  );
}

export default Search;
