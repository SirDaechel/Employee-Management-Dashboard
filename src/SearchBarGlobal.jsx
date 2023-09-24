import searchIcon from '../public/images/searchIcon'
import thecloseicon from '../public/images/thecloseicon'

const SearchBarGlobal = ({ searchBar, setSearchBar, placeholder }) => {

  const handleOnSubmit = (e) => e.preventDefault();

  const clearSearch = () => setSearchBar("");
  
  return (

    <section className="users_search">

      <div className="searchbarcont">


        <form className='search_form' onSubmit={handleOnSubmit}>

          <div className="search_search project_search">{searchIcon}</div>

          <input type="text" className="searchbar projects_Searchbar" value={searchBar} placeholder={placeholder} onChange={(e) => setSearchBar(e.target.value)} />
          
          <div className="search_close" style={{display: searchBar ? "block" : "none"}} onClick={clearSearch}>{thecloseicon}</div>

        </form>


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