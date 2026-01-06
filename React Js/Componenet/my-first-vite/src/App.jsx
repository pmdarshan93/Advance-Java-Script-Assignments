import {StudentCard} from StudentCard.jsx;

function App(){
    const StudentData=[
        {name:"Dhiya san",course:"React js"},
        {name:"Vasanth san",course:"Node js"}
    ]

    return(
        
            StudentData.map((student,index)=>{
                return <StudentCard name={student.name} course={student.clurse}></StudentCard>
            })
        
    )
}