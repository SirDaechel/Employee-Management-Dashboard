import SearchBarGlobal from '../SearchBarGlobal';
import plusIcon from '../../public/images/plusIcon';
import Button from './Button';

const ProjectUtility = ({ projects, searchBar, setSearchBar }) => {

  return (

    <section className='project_utility_cont'>

      <SearchBarGlobal 
        projects={projects}
        searchBar={searchBar}
        setSearchBar={setSearchBar}
      />
  
      <Button 
          label={"Add project"}
          icon={<span className='plus_icon'>{plusIcon}</span>}
          backgroundColour={{backgroundColor: "#6C63FF", color: "#FFFFFF"}}
          linkto={"addproject"}
      />
        
    </section>

  )

}

export default ProjectUtility