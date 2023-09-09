import SearchBarGlobal from '../SearchBarGlobal';
import UsersUtililyBtn from '../Users UI/UsersUtilityBtn';
import plusIcon from '../../public/images/plusIcon';

const ProjectUtility = ({ projects, searchBar, setSearchBar }) => {

  return (

    <section className='project_utility_cont'>

        <SearchBarGlobal 
          projects={projects}
          searchBar={searchBar}
          setSearchBar={setSearchBar}
        />

        <UsersUtililyBtn 
            label={"Add project"}
            icon={<span className='plus_icon'>{plusIcon}</span>}
            backgroundColour={{backgroundColor: "#6C63FF", color: "#FFFFFF"}}
        />
        
    </section>

  )

}

export default ProjectUtility