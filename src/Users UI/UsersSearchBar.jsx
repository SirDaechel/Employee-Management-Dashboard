import searchIcon from "../../public/images/searchIcon"
import thecloseicon from "../../public/images/thecloseicon"

const UsersSearchBar = ({ users, search, setSearch }) => {

  const handleOnSubmit = (e) => e.preventDefault();

  const filteredSearch = users.filter((user) => (user.name.toLowerCase()).includes(search.toLowerCase()));

  const clearSearch = () => setSearch("");
  
  return (

    <section className="users_search">

      <div className="searchbarcont">

        <div className="search_search">{searchIcon}</div>

        <form onSubmit={handleOnSubmit}>
          <input type="text" className="searchbar" value={search} placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
        </form>

        <div className="search_close" style={{display: search ? "block" : "none"}} onClick={clearSearch}>{thecloseicon}</div>

      </div>

      {search && 
      
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

      }

    </section>
    
  )
}

export default UsersSearchBar