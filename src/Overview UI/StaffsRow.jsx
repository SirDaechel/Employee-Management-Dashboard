import StaffsByNoRow from "./StaffsByNoRow"

const StaffsRow = ({ slicedRoleCount, roleCounts }) => {

  return (

    <>
      
      {slicedRoleCount.map(role => (

        <StaffsByNoRow
          key={role}
          title={role}
          length={roleCounts[role]}
        />

      ))}

    </>

  )
}

export default StaffsRow