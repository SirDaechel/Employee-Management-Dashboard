import searchIcon from '../public/images/searchIcon'
import thecloseicon from '../public/images/thecloseicon'

const SearchBarGlobal = ({ searchBar, setSearchBar }) => {

  const handleOnSubmit = (e) => e.preventDefault();

  const clearSearch = () => setSearchBar("");
  
  return (

    <section className="users_search">

      <div className="searchbarcont">

        <div className="search_search">{searchIcon}</div>

        <form onSubmit={handleOnSubmit}>
          <input type="text" className="searchbar" value={searchBar} placeholder="Search" onChange={(e) => setSearchBar(e.target.value)} />
        </form>

        <div className="search_close" style={{display: searchBar ? "block" : "none"}}>{thecloseicon}</div>

        <div className="search_close" style={{display: searchBar ? "block" : "none"}} onClick={clearSearch}>{thecloseicon}</div>

      </div>

      {/* {setSearchBar && 
      
        <div className="search_result">
          <div className="search_result_cont">
            {filteredSearch.length === 0 ? (<p>No results found</p>) :
            (
              <ul>
                {filteredSearch.map((user) => (
                    <li key={user.id} className="search_list">{user.name}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

      } */}

    </section>
    
  )
}

export default SearchBarGlobal